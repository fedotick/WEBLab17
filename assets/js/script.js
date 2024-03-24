// 1
const task1 = {
    js:'test', 
    jq: 'hello', 
    css: 'world'
};

console.log(Object.keys(task1));

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

console.log(employeeWithMinDeviation);
console.log(highestPaidEmployees);
