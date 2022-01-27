'use strict';



let employeeForm = document.getElementById('employeeForm');
let employeeSection = document.getElementById('employee');
let div = document.createElement('div');
employeeSection.appendChild(div);



//var s = document.getElementById("Department");
//var dep = s.value;

//var s1 = document.getElementById("Level");
//var lvl = s1.value;






function Person(Nameemp,Department, Level, image) {
    this.na=Nameemp;
    this.dep = Department;
    this.lv = Level;
    this.img = image;
    this.emp_id = 0;
    this.sal = 0;
}

Person.prototype.addemp_id = function () {
    this.emp_id = getRandomNumber(1000, 9999);
}

Person.prototype.calculatesalary = function () {
    if (this.dep == "Senior") {
        this.sal = getRandomNumber1(1000, 2000);
    } else if (this.lv == "Mid-Senior") {
        this.sal = getRandomNumber1(1000, 2000);
    } else if (this.lv == "Junior") {
        this.sal = getRandomNumber1(1000, 2000);
    }


}





Person.prototype.render = function () {
   

    // let nm = document.createElement('h4');
    // div.appendChild(nm);
    // nm.textContent = `Employee_Name : ${this.na}`;


   

    // let h4 = document.createElement('h4');
    // div.appendChild(h4);
    // h4.textContent = `Employee_Department : ${this.dep}`;


    // let lv = document.createElement('h4');
    // div.appendChild(lv);
    // lv.textContent = `Employee_Level : ${this.lv}`;



    // let p = document.createElement('p');
    // div.appendChild(p);
    // if (this.dep == "Administration") {
    //     p.textContent = `1 `
    // } else if (this.dep == "Marketing") {
    //     p.textContent = `1 `
    // } else if (this.dep == "Development") {
    //     p.textContent = `1 `
    // } else if (this.dep == "Finance") {
    //     p.textContent = `1 `
    // }


    // let h22 = document.createElement('h4');
    // div.appendChild(h22);
    // h22.textContent = this.lv;



    // if (this.lv == "Senior") {
    //     h22 .textContent = `1 `
    // } else if (this.lv == "Mid-Senior") {
    //     h22.textContent = `1 `
    // } else if (this.lv == "Junior") {
    //     h22.textContent = `1 `
    // }

    

   
    let image = document.createElement('img');
    div.appendChild(image);
    
    image.setAttribute('src', this.img);
    image.setAttribute('alt', this.dept);
    


    let final = document.createElement('h4');
    div.appendChild(final);
    final.textContent = `Employee: ${this.na} -ID :${this.emp_id}   Deperatment : ${this.dep} - Level : ${this.lv}    ${this.sal} `;


    // let p2 = document.createElement('p');
    // div.appendChild(p2);
    // p2.textContent = `Employee_id : ${this.emp_id}`;

  
    // let p3 = document.createElement('p');
    // div.appendChild(p3);
    // p3.textContent = `Salary : ${this.sal}`;




    
}









document.write("<br>");

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

    newemployee.render();
}



document.write("<br>");
document.write("<br>");


function getRandomNumber1(min, max) {
    return (Math.floor(Math.random() * (max - min) + min)) * .925;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


employeeForm.addEventListener('submit', handelSubmit);



