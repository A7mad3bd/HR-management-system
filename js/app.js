'use strict';
const tableCell = document.getElementById("tablecellid");
let employeeForm = document.getElementById('employeeForm');
let employeeSection = document.getElementById('employee');
let div = document.createElement('div');
employeeSection.appendChild(div);
let a;
let countsal=0;

let employeeSection1 = document.getElementById('employee1');
let div1 = document.createElement('div1');
employeeSection.appendChild(div1);

let Allemployees = [];
checkLocalAndPush();


function Person(Nameemp, Department, Level, image) {
    this.na = Nameemp;
    this.dep = Department;
    this.lv = Level;
    this.img = image;
    this.emp_id = 0;
    this.sal = 0;
}

function render(employeesFromLS) {
    employeeSection.innerHTML = '';
    for (let i = 0; i < employeesFromLS.length; i++) {

        let image = document.createElement('img');
        div.appendChild(image);
        image.setAttribute('src', employeesFromLS[i].img);
        
        let h4 = document.createElement('h4');
        div.appendChild(h4);
        h4.textContent = employeesFromLS[i].na;

        let h5 = document.createElement('h4');
        div.appendChild(h5);
        h5.textContent = employeesFromLS[i].dep;

        let lv = document.createElement('h4');
        div.appendChild(lv);
        lv.textContent = employeesFromLS[i].lv;

        let p2 = document.createElement('p');
        div.appendChild(p2);
        p2.textContent = `Employee id : ${employeesFromLS[i].emp_id}`;

        let p3 = document.createElement('p');
        div.appendChild(p3);
        p3.textContent = `Salary : ${employeesFromLS[i].sal}`;



///

// Render each department information in a table:
// Department Name
// Number of employees in each department.
// Average salary of the department

// Total salary Where average salary is the summation of salaries for all employees in each department divided by the number of the employees in that department and total salary is the summation of salaries for all employees in each department.
// Add a table footer which will have the total number of employees, the average salary for all departments and the total salary for all departments, as shown below.
     

        //  countsal+=employeesFromLS[i].sal;
        //   let avg1=countsal/employeesFromLS.length;


        // let totsal =tableCell.textContent = `${countsal}`;
        // tableCell.innerHtml=totsal ;


        // let avgsal =tableCell.textContent = `${avg1}`;
        // tableCell.innerHtml=avgsal ;


       




        
        

    }

   
    


}



document.write("<br>");




function handelSubmit(event) {
    event.preventDefault();


    let z = event.target.Nameemp.value;

    let z1 = event.target.Department.value;

    let z2 = event.target.Level.value;

    let z3 = event.target.image.value;


    let newemployee = new Person(z, z1, z2, z3);

    newemployee.addemp_id();

    newemployee.calculatesalary();

    



    Allemployees.push(newemployee);

    let jsonArr = toJSON();

    saveToLocalS(jsonArr);

    render(readFromLocalS());
}



document.write("<br>");

function checkLocalAndPush() {
    if (Allemployees.length == 0) {
        let arr = readFromLocalS();
        if (arr.length != 0) {
            Allemployees = arr;
        }
    }
}




function readFromLocalS() {
    let jsonArr = localStorage.getItem('employees');
    let arr = JSON.parse(jsonArr);
    if (arr !== null) {
        return arr;
    } else {
        return [];
    }
}


function toJSON() {
    let jsonArray = JSON.stringify(Allemployees);
    return jsonArray;
}


function saveToLocalS(jsonArray) {
    localStorage.setItem('employees', jsonArray)
}



document.write("<br>");

Person.prototype.calculatesalary = function () {
    if (this.dep == "Senior") {
        this.sal = getRandomNumber1(1000, 2000);
    } else if (this.lv == "Mid-Senior") {
        this.sal = getRandomNumber1(1000, 2000);
    } else if (this.lv == "Junior") {
        this.sal = getRandomNumber1(1000, 2000);
    }


}


Person.prototype.addemp_id = function () {
    this.emp_id = getRandomNumber(1000, 9999);
}

function getRandomNumber1(min, max) {
    return (Math.floor(Math.random() * (max - min) + min)) * .925;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

render(readFromLocalS());


employeeForm.addEventListener('submit', handelSubmit);
employeeForm.addEventListener('submit1', handelSubmit);




