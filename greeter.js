var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + '' + middleInitial + '' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello' + person.firstName + '' + person.lastName;
}
// let user = 'Dong Wang';
// let user = {
// 	firstName: 'Dong',
// 	lastName: 'Wang',
// };
var user = new Student('Dong', 'T.', 'Wang');
document.body.innerHTML = greeter(user);
