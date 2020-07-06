class Student {
	fullName: string;
	constructor(
		public firstName: string,
		public middleInitial: string,
		public lastName: string
	) {
		this.fullName = firstName + '' + middleInitial + '' + lastName;
	}
}

interface Person {
	firstName: string;
	lastName: string;
}

function greeter(person: Person) {
	return 'Hello' + person.firstName + '' + person.lastName;
}

// let user = 'Dong Wang';
// let user = {
// 	firstName: 'Dong',
// 	lastName: 'Wang',
// };
let user = new Student('Dong', '', 'Wang');

document.body.innerHTML = greeter(user);
