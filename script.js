// Задание - 3 persons

let a = {
    name: '',
    surname: ''
}
let b = { ...a };
let c = { ...a };

a.name = 'Iryna';
a.surname = 'Vereschuk';
b.name = 'Ivan';
b.surname = 'Kozhedub';
c.name = 'Igor';
c.surname = 'Kotygoroshko';

// задание - different fields
a.age = 25;
b.fathername = 'Filipovich';
c.sex = 'male';

// задание - fields check
function fieldsCheck(arr) {
    for (let n in arr) {
        if (n === 'age' || n === 'fathername' || n === 'sex') alert(arr.name + ' , ' + n + ' - ' + arr[n]);
    }
}
fieldsCheck(a);
fieldsCheck(b);
fieldsCheck(c);

// задание - array of persons
let persons = [a, b, c];

// задание - loop of persons
for (let pers in persons) {
    console.log(persons[pers]);
}

// задание - loop of name and surname
for (let pers in persons) {
    console.log('Name - ' + persons[pers].name + ' , surname - ' + persons[pers].surname);
}

// задание - loop of loop of values
for (let pers in persons) {
    for (let prop in persons[pers]) {
        console.log(persons[pers][prop]);
    }
}

// задание - fullName
for (let pers in persons) {
    if (persons[pers].fathername) persons[pers].fullName = (persons[pers].name + ' , ' + persons[pers].surname + ' , ' + persons[pers].fathername);
    else persons[pers].fullName = (persons[pers].name + ' , ' + persons[pers].surname);
    console.log(persons[pers].fullName);
}

// задание - serialize
let personsJSON = JSON.stringify(persons);
console.log(personsJSON);

// задание - deserialize
let d = { "name": "Misha", "surname": "Pupkin" }
persons.push(d);
console.log(persons[3]);

// задание - HTML
let str = "<table border='1'>"
for (let i = 0; i < persons.length; i++) {
    str += `<tr><td>${persons[i].name}</td><td>${persons[i].surname}</td></tr>`
}
str += "</table>";
document.write(str);

// задание - HTML optional fields - HTML tr color - HTML th optional
let tabHead = [];
str = "<table border='1'>"
str += '<tr bgcolor="#ccc" bordercolor="#888">';
for (let pers in persons) {
    for (let prop in persons[pers]) {
        if (!tabHead.includes(prop)) {
            tabHead.push(prop)
            str += `<td>${prop}</td>`
        }
    }
}
str += '</tr>';
for (let i = 0; i < persons.length; i++) {
    str += '<tr bordercolor="#888">';
    for (let prop in tabHead) {
        if (persons[i][tabHead[prop]]) {
            str += `<td>${persons[i][tabHead[prop]]}</td>`
        }
        else {
            str += `<td></td>`
        }
    }
    str += '</tr>';
}
str += "</table>";
document.write(str);