describe('AlarmClock', () => {
  let clock;

  beforeEach(() => {
    clock = new AlarmClock();
  });

  describe('constructor', () => {
    it('создаёт пустой alarmCollection', () => {
      expect(clock.alarmCollection).toEqual([]);
    });

    it('создаёт intervalId со значением null', () => {
      expect(clock.intervalId).toBeNull();
    });
  });

  describe('addClock', () => {
    it('бросает ошибку, если time не передан (обе переменные отсутствуют)', () => {
      expect(() => clock.addClock()).toThrowError(
        'Отсутствуют обязательные аргументы'
      );
    });

    it('бросает ошибку, если time не передан, а callback есть', () => {
      expect(() => clock.addClock(undefined, () => {})).toThrowError(
        'Отсутствуют обязательные аргументы'
      );
    });

    it('бросает ошибку, если callback не передан', () => {
      expect(() => clock.addClock('10:00')).toThrowError(
        'Отсутствуют обязательные аргументы'
      );
    });

    it('бросает ошибку при дублировании времени', () => {
      clock.addClock('10:00', () => {});
      expect(() => clock.addClock('10:00', () => {})).toThrowError(
        'Уже присутствует звонок на это же время'
      );
    });

    it('добавляет звонок со всеми полями и возвращает settled', () => {
      const cb = () => {};
      const promise = clock.addClock('10:00', cb);

      expect(clock.alarmCollection.length).toBe(1);
      const alarm = clock.alarmCollection[0];

      expect(alarm.callback).toBe(cb);
      expect(alarm.time).toBe('10:00');
      expect(alarm.status).toBe('pending');
      expect(alarm.settled).toBe(promise);
      expect(typeof alarm.resolve).toBe('function');
      expect(typeof alarm.reject).toBe('function');
    });

    it('возвращает именно Promise', () => {
      const promise = clock.addClock('10:00', () => {});
      expect(promise).toBeInstanceOf(Promise);
    });
  });

  describe('removeClock', () => {
    it('ничего не делает, если звонка с таким временем нет (index === -1)', () => {
      clock.addClock('10:00', () => {});
      clock.removeClock('11:00');
      expect(clock.alarmCollection.length).toBe(1);
    });

    it('не удаляет звонок со статусом не pending', () => {
      clock.addClock('10:00', () => {});
      clock.alarmCollection[0].status = 'fired';
      clock.removeClock('10:00');
      expect(clock.alarmCollection.length).toBe(1);
    });

    it('отменяет и удаляет pending-звонок, реджектит его промис', async () => {
      const p = clock.addClock('10:00', () => {});
      clock.removeClock('10:00');

      expect(clock.alarmCollection.length).toBe(0);
      await expectAsync(p).toBeRejectedWithError(
        'Звонок на 10:00 удалён до срабатывания'
      );
    });
  });

  describe('getCurrentFormattedTime', () => {
    beforeEach(() => jasmine.clock().install());
    afterEach(() => jasmine.clock().uninstall());

    it('возвращает HH:MM с ведущими нулями (однозначные часы/минуты)', () => {
      jasmine.clock().mockDate(new Date(2024, 0, 1, 5, 3, 0));
      expect(clock.getCurrentFormattedTime()).toBe('05:03');
    });

    it('возвращает HH:MM без лишних нулей (двузначные)', () => {
      jasmine.clock().mockDate(new Date(2024, 0, 1, 15, 45, 0));
      expect(clock.getCurrentFormattedTime()).toBe('15:45');
    });
  });

  describe('start', () => {
    beforeEach(() => jasmine.clock().install());
    afterEach(() => jasmine.clock().uninstall());

    it('устанавливает intervalId', () => {
      clock.start();
      expect(clock.intervalId).not.toBeNull();
    });

    it('не создаёт новый интервал, если уже запущен (intervalId truthy)', () => {
      clock.start();
      const firstId = clock.intervalId;
      clock.start();
      expect(clock.intervalId).toBe(firstId);
    });

    it('вызывает callback и ставит fired для pending-звонка с текущим временем', async () => {
      spyOn(clock, 'getCurrentFormattedTime').and.returnValue('10:00');
      const cb = jasmine.createSpy('cb');
      const p = clock.addClock('10:00', cb);

      clock.start();
      jasmine.clock().tick(1000);

      expect(cb).toHaveBeenCalledTimes(1);
      expect(clock.alarmCollection[0].status).toBe('fired');
      await expectAsync(p).toBeResolvedTo('10:00');
    });

    it('не вызывает callback при несовпадении времени', () => {
      spyOn(clock, 'getCurrentFormattedTime').and.returnValue('10:00');
      const cb = jasmine.createSpy('cb');
      clock.addClock('11:00', cb);

      clock.start();
      jasmine.clock().tick(1000);

      expect(cb).not.toHaveBeenCalled();
    });

    it('не вызывает callback, если статус не pending', () => {
      spyOn(clock, 'getCurrentFormattedTime').and.returnValue('10:00');
      const cb = jasmine.createSpy('cb');
      clock.addClock('10:00', cb);
      clock.alarmCollection[0].status = 'fired';

      clock.start();
      jasmine.clock().tick(1000);

      expect(cb).not.toHaveBeenCalled();
    });

    it('резолвит промис даже если callback бросает исключение', async () => {
      spyOn(clock, 'getCurrentFormattedTime').and.returnValue('10:00');
      const cb = jasmine.createSpy('cb').and.throwError('cb error');
      const p = clock.addClock('10:00', cb);

      clock.start();
      try {
        jasmine.clock().tick(1000);
      } catch (e) {
        /* исключение из callback пробрасывается наружу */
      }

      expect(clock.alarmCollection[0].status).toBe('fired');
      expect(cb).toHaveBeenCalled();
      await expectAsync(p).toBeResolvedTo('10:00');
    });
  });

  describe('stop', () => {
    beforeEach(() => jasmine.clock().install());
    afterEach(() => jasmine.clock().uninstall());

    it('очищает интервал и сбрасывает intervalId в null', () => {
      clock.start();
      expect(clock.intervalId).not.toBeNull();

      clock.stop();
      expect(clock.intervalId).toBeNull();
    });

    it('после stop callback не вызывается', () => {
      spyOn(clock, 'getCurrentFormattedTime').and.returnValue('10:00');
      const cb = jasmine.createSpy('cb');
      clock.addClock('10:00', cb);

      clock.start();
      clock.stop();
      jasmine.clock().tick(1000);

      expect(cb).not.toHaveBeenCalled();
    });
  });

  describe('resetAllCalls', () => {
    it('переводит fired → pending', () => {
      clock.addClock('10:00', () => {});
      clock.alarmCollection[0].status = 'fired';

      clock.resetAllCalls();
      expect(clock.alarmCollection[0].status).toBe('pending');
    });

    it('не трогает звонки с другим статусом', () => {
      clock.addClock('10:00', () => {});
      clock.addClock('11:00', () => {});
      clock.alarmCollection[0].status = 'cancelled';
      // alarmCollection[1].status === 'pending'

      clock.resetAllCalls();
      expect(clock.alarmCollection[0].status).toBe('cancelled');
      expect(clock.alarmCollection[1].status).toBe('pending');
    });
  });

  describe('clearAlarms', () => {
    beforeEach(() => jasmine.clock().install());
    afterEach(() => jasmine.clock().uninstall());

    it('останавливает интервал, реджектит pending, очищает коллекцию', async () => {
      const p1 = clock.addClock('10:00', () => {});
      clock.addClock('11:00', () => {});
      clock.alarmCollection[1].status = 'fired'; // не должен реджектиться

      clock.start();
      expect(clock.intervalId).not.toBeNull();

      clock.clearAlarms();

      expect(clock.intervalId).toBeNull();
      expect(clock.alarmCollection).toEqual([]);
      await expectAsync(p1).toBeRejectedWithError(
        'Звонок на 10:00 удалён до срабатывания'
      );
    });
  });

  describe('waitFor', () => {
    it('реджектит, если звонка на такое время нет', async () => {
      await expectAsync(clock.waitFor('10:00')).toBeRejectedWithError(
        'Нет звонка на 10:00'
      );
    });

    it('возвращает settled и резолвится при срабатывании', async () => {
      clock.addClock('10:00', () => {});
      const p = clock.waitFor('10:00');
      clock.alarmCollection[0].resolve('10:00');

      await expectAsync(p).toBeResolvedTo('10:00');
    });

    it('реджектит, если звонок удалили до срабатывания', async () => {
      clock.addClock('10:00', () => {});
      const p = clock.waitFor('10:00');
      clock.removeClock('10:00');

      await expectAsync(p).toBeRejectedWithError(
        'Звонок на 10:00 удалён до срабатывания'
      );
    });
  });

  describe('waitForNext', () => {
    it('реджектит, если нет ни одного pending-звонка (пустая коллекция)', async () => {
      await expectAsync(clock.waitForNext()).toBeRejectedWithError(
        'Нет активных звонков'
      );
    });

    it('резолвится временем сработавшего звонка', async () => {
      clock.addClock('10:00', () => {});
      const p = clock.waitForNext();
      clock.alarmCollection[0].resolve('10:00');

      await expectAsync(p).toBeResolvedTo('10:00');
    });

    it('после reject конкурента рекурсивно ждёт следующий pending', async () => {
      clock.addClock('10:00', () => {});
      clock.addClock('11:00', () => {});

      const p = clock.waitForNext();

      // удаляем первого конкурента → его settled реджектится,
      // race получает { fired: false } и уходит в рекурсию
      clock.removeClock('10:00');

      // теперь в коллекции остался только второй звонок — резолвим его
      clock.alarmCollection[0].resolve('11:00');

      await expectAsync(p).toBeResolvedTo('11:00');
    });

    it('реджектит, если в ходе ожидания удалили все pending-звонки (рекурсия → пусто)', async () => {
      clock.addClock('10:00', () => {});
      const p = clock.waitForNext();
      clock.removeClock('10:00');

      await expectAsync(p).toBeRejectedWithError('Нет активных звонков');
    });
  });
});