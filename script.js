const dob = document.querySelector('#dob');
const btn = document.querySelector('.btn');
let userAge = document.querySelector('.age');

const calculateAge = () => {

    let val = dob.value;
    let date = new Date(val);
    let curDate = new Date();

    const age = curDate - date;
    const ageInYears = Math.floor(age / (365.25 * 24 * 60 * 60 * 1000));

    if (val === '') {
        alert('Please enter your date of birth')
    }
    else if (curDate < date) {
        alert('Invalid date of birth')
        userAge.innerHTML = '';
    } else {
        userAge.innerHTML = `Your age is ${ageInYears} years`;
    }
}

btn.addEventListener('click', calculateAge);


// Dark mode functionality

const toggelLabel = document.querySelector('.toggle-label')
const toggleBtn = document.querySelector('.toggle-switch')
const body = document.body

let flag = 0;

const toggle = () => {

    if (flag == 0) {
        toggelLabel.innerHTML = 'Enable Light Mode'
        toggelLabel.style.color = 'white'
        body.style.backgroundColor = 'black'
        flag ++;
    }
    else if (flag == 1) {
        toggelLabel.innerHTML = 'Enable Dark Mode'
        toggelLabel.style.color = 'black'
        body.style.backgroundColor = 'white'
        flag --;
    }

}


