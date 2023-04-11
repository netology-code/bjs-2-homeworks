function compareArrays(arr1, arr2) {
	return arr1.length === arr2.length && arr1.every((el, i) => el === arr2[i]);
}

function getUsersNamesInAgeRange(users, gender) {
	if (
		!Array.isArray(users) ||
		users.length === 0 ||
		typeof gender !== 'string'
	) {
		return 0;
	}

	const filteredUsers = users.filter(user => user.gender === gender);
	if (filteredUsers.length === 0) {
		return 0;
	}

	const totalAge = filteredUsers.reduce((acc, user) => acc + user.age, 0);
	const averageAge = totalAge / filteredUsers.length;

	return averageAge;
}
