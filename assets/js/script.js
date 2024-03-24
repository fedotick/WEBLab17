// 1
const task1 = {
    js:'test', 
    jq: 'hello', 
    css: 'world'
};

document.getElementById('inputTask1').value = Object.keys(task1);

// 2
const employees = [
    {
        id: 1,
        fullName: 'John Smith',
        salary: 50000
    },
    {
        id: 2,
        fullName: 'Alice Johnson',
        salary: 60000
    },
    {
        id: 3,
        fullName: 'Michael Brown',
        salary: 55000
    },
    {
        id: 4,
        fullName: 'Emily Davis',
        salary: 52000
    },
    {
        id: 5,
        fullName: 'William Wilson',
        salary: 58000
    }
]

const arrByKey = (arr, key) => arr.map(x => x[key]); 
const sumArr = (arr) => arr.reduce((a, b) => a + b);
const avgArr = (arr) => sumArr(arr) / arr.length;
const sortByKey = (arr, key) => arr.sort((arr1, arr2) => arr1[key] > arr2[key] ? -1 : 1);

const key = 'salary';
sortByKey(employees, key);
    
const salaries = arrByKey(employees, key);
const averageSalary = avgArr(salaries);

const deviations = employees.map(employee => Math.abs(employee[key] - averageSalary));
const indexOfMinDeviation = deviations.indexOf(Math.min(...deviations));

const employeeWithMinDeviation = employees[indexOfMinDeviation].id;
const highestPaidEmployees = [employees[0].fullName, employees[1].fullName];

document.getElementById('employeeWithMinDeviation').value = employeeWithMinDeviation;
document.getElementById('highestPaidEmployees').value = highestPaidEmployees;

// 3
function rearrangeArray(A) {
    const negatives = A.filter(num => num < 0).sort((a, b) => b - a);
    const positives = A.filter(num => num >= 0).sort((a, b) => a - b);
    return [...negatives, ...positives];
}

const A = [4, -8, 7, -6, 0, -7, 5];
const B = rearrangeArray(A);

console.log(B); 

// 4
function showDateTime(type) {
    let dateTime;

    switch (type) {
        case 'now':
            dateTime = new Date();
            break;
        case 'yesterday':
            dateTime = new Date(Date.now() - 24 * 60 * 60 * 1000);
            break;
        case 'tenYearsAgo':
            dateTime = new Date();
            dateTime.setFullYear(dateTime.getFullYear() - 10);
            break;
        case 'nextWeek':
            dateTime = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
            break;
        default:
            dateTime = new Date();
    }

    alert(dateTime.toLocaleString());
}

// 5
function secondsUntilEndOfDay() {
    const now = new Date;
    const endOfDay = new Date;
    endOfDay.setHours(23, 59, 59, 999);

    const difference = endOfDay.getTime() - now.getTime();
    return Math.ceil(difference / 1000);
}

function updateCountdown() {
    const seconds = secondsUntilEndOfDay();
    document.getElementById('countdown').textContent = seconds;
}

updateCountdown;
setInterval(updateCountdown);

// 6
document.getElementById('inputDate').addEventListener('input', getMonthName);

function getMonthName() {
    const inputDate = document.getElementById('inputDate').value;
    const date = new Date(inputDate);

    const monthNumber = date.getMonth();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    document.getElementById('monthName').value = months[monthNumber];
}

// 7
document.getElementById('inputString').addEventListener('input', reverseWords);

function reverseWords() {
    const str = document.getElementById('inputString').value;
    const words = str.split(" ");
    const reversedWords = words.map(word => word.split("").reverse().join(""));

    document.getElementById('outputString').value = reversedWords.join(" ");
}

// 8
document.getElementById('phoneNumber').addEventListener('input', function() {
    const phoneNumber = this.value.trim();
    
    if (/^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber)) {
        const [countryCode, phone] = phoneNumber.split(' ');

        document.getElementById('countryCode').value = countryCode.slice(1, -1);
        document.getElementById('number').value = phone;
    } else {
        document.getElementById('countryCode').value = '';
        document.getElementById('number').value = '';
    }
});

const numberOfButtons = 8;

for (let i = 1; i <= numberOfButtons; i++) {
    document.getElementById('btnTask' + i).onclick = function() {
        deactivateButtons();
        hideTasks();
        this.className = 'button-1 active';
        document.getElementById('task' + i).style.display = 'flex';
    }
}

function deactivateButtons() {
    for (let i = 1; i <= numberOfButtons; i++) {
        document.getElementById('btnTask' + i).className = 'button-1';
    }
}

function hideTasks() {
    for (let i = 1; i <= numberOfButtons; i++) {
        document.getElementById('task' + i).style.display = 'none';
    }
}
