import person from './parts/person';

const myArr = [1,2,3,4,5];

const myNewArr = myArr.map(item => item * 2);

const app = document.getElementById('app');
const ul = document.createElement('ul');
const userName = document.createElement('p');
const userRole = document.createElement('p');

let thisPerson = person();

userName.textContent = thisPerson.name;
userRole.textContent = thisPerson.role;

app.appendChild(ul);
app.appendChild(userName);
app.appendChild(userRole);

myNewArr.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item + '-tok';
    ul.appendChild(li);
});