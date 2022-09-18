// Класс оружия
class Weapon {
	constructor(name = 'weapon', attack = 3, durability = 3, range = 1) {
		this.name = name;
		this.attack = attack;
		this.durability = durability;
		this.initDurability = durability;
		this.range = range;
	};

	takeDamage(damage) {
		this.durability-=damage;

		if(this.durability <= 0){
			this.durability = 0;
		}
	};

	getDamage() {
		if(this.durability <= (this.initDurability/this.durability) * 30) {
			return this.attack / 2;
		} else if(this.durability <= 0) {
			return 0;
		} else {
			return this.attack;
		}
	};

	isBroken() {
		return !(this.durability > 0);
	};
}


// Классы основных оружий
class Arm extends Weapon {
	constructor() {
		super('Рука', 1, Infinity, 1);
	}
}

class Bow extends Weapon {
	constructor() {
		super('Лук', 10, 200, 3);
	}
}

class Sword extends Weapon {
	constructor() {
		super('Меч', 25, 500, 1);
	}
}

class Knife extends Weapon {
	constructor() {
		super('Нож', 5, 300, 1);
	}
}

class Staff extends Weapon {
	constructor() {
		super('Посох', 8, 300, 2);
	}
}

// Классы улучшенных оружий

class LongBow extends Bow {
	constructor() {
		super();

		this.name = 'Длинный лук';
		this.attack = 15;
		this.range = 4;
	}
}

class Axe extends Sword {
	constructor() {
		super();

		this.name = 'Секира';
		this.attack = 27;
		this.durability = 800
		this.initDurability = 800
	}
}

class StormStaff extends Staff {
	constructor() {
		super();

		this.name = 'Посох Бури';
		this.attack = 10;
		this.range = 3;
	}
}


// Класс игрока

class Player {
	constructor(position, name) {
		this.life = 100;
		this.magic = 20;
		this.speed = 1;
		this.attack = 10;
		this.agility = 5;
		this.luck = 10;
		this.name = name;
		this.description = 'Игрок'
		this.weapon = new Arm();
		this.position = position;
	};

	getLuck() {
		return Math.random();
	};

	dodged() {
		return (this.getLuck() > (100 - this.agility - this.speed * 3) / 100);
	};

	isAttackBlocked() {
		return (this.getLuck() > (100 - this.luck)/100);
	};

	getDamage(distance) {
		if(distance > this.weapon.range){
			return 0;
		}

		const dist = distance === 0 ? 1 : distance;

		return (this.attack + this.weapon.getDamage()) * this.getLuck() / dist;
	};

	takeDamage(damage) {
		if(this.life - damage <= 0){
			console.log(`${this.name} получает смертельный урон урон.`);
			this.life = 0;
		}else{
			this.life -= damage;
		} 
	};

	takeAttack( damage ) {
		if(this.isAttackBlocked()) {
			console.log(`'${this.name}' заблокировал удар`);
			this.weapon.takeDamage(damage);
		} else if(this.dodged()) {
			console.log(`'${this.name}' улонился от удара`);
		} else {
			console.log(`${this.name} получает урон ${damage}.`);
			this.takeDamage(damage);
		}
	};

	tryAttack( enemy ) {
		let distanceEnemy = enemy.position;

		let distance = Math.abs(distanceEnemy - this.position);

		let damage = Number(this.getDamage(distance).toFixed(2));

		if(this.position === distanceEnemy) {
			enemy.position += 1;
			console.log(`'${this.name}' бьёт '${enemy.name}' с двойным уроном`);
			enemy.takeAttack(damage * 2);
		} else if(this.weapon.range >= distance) {
			this.weapon.takeDamage(Number(10*this.getLuck().toFixed(2)));
			console.log(`'${this.name}' бьёт '${enemy.name}'`);
			enemy.takeAttack(damage);
		}
	};

	checkWeapon() {
		if(this.weapon.isBroken()) {
			console.log(`У персонажа '${this.name}' сломалось оружие: `, this.weapon);
			if(this.weapon.name === 'Нож') {
				this.weapon = new Arm();
			}
			else {
				this.weapon = new Knife();
			}
		} 
	};

	moveLeft( distance ) {
		if(distance <= this.speed){
			this.position -= distance;
		}else if(distance > this.speed){
			this.position -= this.speed; 
		}
	};

	moveRight( distance ) {
		if(distance <= this.speed){
			this.position += distance; 
		}else if(distance > this.speed){
			this.position += this.speed;
		}
	};

	move( distance ) {
		if(distance < 0) {
			this.moveLeft(-distance);
		} else {
			this.moveRight(distance);
		}
	};

	moveToEnemy( enemy ) {
		this.move(enemy.position - this.position);
	};

	chooseEnemy( players ) {
		const minHealth = Math.min(...players.map(p => p.life));
		let minHealthPlayers = players.filter(p => p.life === minHealth);

		if(this.life === minHealth && minHealthPlayers.length === 1){
			return players[Math.floor(Math.random()*players.length)];
		}

		const distanсes = minHealthPlayers.map(p => Math.abs(p.position - this.position));
		const minDistance = Math.min(...distanсes);
		const enemy = players.find(p => Math.abs(p.position - this.position) === minDistance);
		return enemy;
	};

	turn( players ) {
		if(this.isDead()){
			return;
		}

		if(!this.playerEnemy || this.playerEnemy.isDead()){
			this.playerEnemy = this.chooseEnemy(players);
		}
		this.checkWeapon();
		this.moveToEnemy(this.playerEnemy);
		this.tryAttack(this.playerEnemy);
	};

	isDead() {
		return this.life == 0;
	};
}

// Классы персонажей
class Archer extends Player {
	constructor(position, name) {
		super(position, name);

		this.life = 80;
		this.magic = 35;
		this.attack = 5;
		this.agility = 10;
		this.description = 'Лучник';
		this.weapon = new Bow();
	}

	getDamage(distance) {
		return ( this.attack + this.weapon.attack ) * this.getLuck() * distance / this.weapon.range;
	}
}

class Warrior extends Player {
	constructor(position, name) {
		super(position, name);

		this.life = 120;
		this.speed = 2;
		this.attack = 10;
		this.description = 'Воин';
		this.weapon = new Sword();
	}

	takeDamage( damage ) {
		if(this.life <= 60 && this.getLuck() > 0.8 && this.magic > damage) {
			console.log(`${this.name} получает урон ${damage} из магии.`);
			this.magic -= damage;
		} else{
			console.log(`${this.name} получает урон ${damage}.`);
			super.takeDamage(damage);
		}
	}
}

class Mage extends Player {
	constructor(position, name) {
		super(position, name);
		this.life = 70;
		this.magic = 100;
		this.initMagic = this.magic;
		this.attack = 5;
		this.agility = 8;
		this.description = 'Маг';
		this.weapon = new Staff();
	}

	takeDamage( damage ) {
		if(this.magic > this.initMagic / 2) {
			console.log(`${this.name} наносит дополнительный урон.`);
			super.takeDamage(Number((damage/1.5).toFixed(2)));
			this.magic -= 12;
		} else if(this.life > 0) {
			super.takeDamage(damage);
		}
	}
}

// Классы улучшенных персонажей

class Dwart extends Warrior {
	constructor(position, name) {
		super(position, name);

		this.life = 130;
		this.description = 'Гном';
		this.attack = 15;
		this.luck = 20;
		this.weapon = new Axe();

		this.timer = 0;
	}

	takeDamage(damage) {
		this.timer++;

		if(this.timer === 6){
			console.log(`Шестую атаку получает ${this.name}. Урон уменьшается`);
			super.takeDamage(Number((damage/1.5).toFixed(2)));
			this.timer = 0;
		}else{
			super.takeDamage(damage);
		}
	}
}

class Crossbowman extends Archer {
	constructor(position, name) {
		super(position, name);

		this.description = 'Арболетчик';

		this.life = 85;
		this.luck = 15;
		this.agility = 20;
		this.attack = 8;
		this.weapon = new Axe();
	}
}

class Demourge extends Mage {
	constructor(position, name) {
		super(position, name);

		this.description = 'Демиург';

		this.life = 80;
		this.magic = 120;
		this.attack = 6;
		this.luck = 12;
		this.weapon = new StormStaff();
	}

	getDamage(distance) {
		let damage = 0;
		if(this.magic > 0 && this.getLuck() > 0.6) {
			console.log(`Удачная атака у ${this.name}. Урон увеличивается`);
			const oldAttack = this.attack;
			this.attack *= 1.5;
			damage = super.getDamage(distance);
			this.attack = oldAttack;
		}else{
			damage = super.getDamage(distance);
		}
		return damage;
	}
}

// Процесс игры

function play(takenPlayers) {
	const players = [...takenPlayers];
	do {
		for(let i = 0; i < players.length; i++){
			if(players[i].isDead()) {
				console.log(`Игрок ${players[i].name} проиграл.`);
				players.splice(i, 1);
				continue;
			}

			players[i].turn(players);
		}

	} while(players.length > 1);
	console.log(`Победитель поединка: ${players[0].name}.`);
}

getPosition = () => Math.round(Math.random()*10);

play([
	new Warrior(getPosition(), 'Рыцарь Олег'),
	new Warrior(getPosition(), 'Рыцарь Егор'),
	new Warrior(getPosition(), 'Рыцарь Денис'),
	new Mage(getPosition(), 'Маг Екатерина'),
	new Mage(getPosition(), 'Маг Даша'),
	new Mage(getPosition(), 'Маг Марина'),
	new Archer(getPosition(), 'Лучник Иван'),
	new Archer(getPosition(), 'Лучник Максим'),
	new Archer(getPosition(), 'Лучница Анна'),
	new Dwart(getPosition(), 'Гном Александр'),
	new Dwart(getPosition(), 'Гном Кристина'),
	new Dwart(getPosition(), 'Гном Артём'),
	new Crossbowman(getPosition(), 'Арболетчик Костя'),
	new Crossbowman(getPosition(), 'Арболетчик Михаил'),
	new Crossbowman(getPosition(), 'Арболетчик Руслан'),
	new Demourge(getPosition(), 'Демиург Алексей'),
	new Demourge(getPosition(), 'Демиург Татьяна'),
	new Demourge(getPosition(), 'Демиург Маргарита'),
]);

/*play([
	new Warrior(getPosition(), 'Рыцарь Олег'),
	new Warrior(getPosition(), 'Рыцарь Егор'),
	new Warrior(getPosition(), 'Рыцарь Денис'),
	new Warrior(getPosition(), 'Рыцарь Артём'),
	new Warrior(getPosition(), 'Рыцарь Руслан'),
	new Warrior(getPosition(), 'Рыцарь Александр'),
	new Warrior(getPosition(), 'Рыцарь Максим'),
	new Warrior(getPosition(), 'Рыцарь Алексей')	
])*/

/*play([
	new Warrior(getPosition(), 'Рыцарь Денис'),
	new Mage(getPosition(), 'Маг Екатерина'),
]);*/