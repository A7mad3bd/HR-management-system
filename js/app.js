'use strict';



let employeeForm = document.getElementById('employeeForm');
let employeeSection = document.getElementById('employee');

var s = document.getElementById("Department");
var dep = s.value;

var s1 = document.getElementById("Level");
var lvl = s1.value;






function Person(Employee_ID,Department, Level, Image_URL,Salary){
        this.emp_id = Employee_ID;
        this.dep = Department;
        this.lv = Level;
        this.img = Image_URL; 
        this.sal = Salary; 
    }
    

    Person.prototype.render = function (){


      let p3 = document.createElement('p1');
      div.appendChild(p3);
      p2.textContent = `Salary : ${this.emp_id}` ;


      let div = document.createElement('div');
      employeeSection.appendChild(div);
  
      let h4 = document.createElement('h4');
      div.appendChild(h4);
      h4.textContent = this.name;
  
      let p = document.createElement('p');
      div.appendChild(p);
      if(Department.select=="Administration"){
          p.textContent =`${this.name} is available Hot and Cold and it has the following ingredients : `
      }else if(Department.select=="Marketing"){
          p.textContent =`${this.name} is available Cold and it has the following ingredients : `
      }else if(Department.select=="Development"){
          p.textContent =`${this.name} is available Hot and it has the following ingredients : `
      }
   else if(Department.select=="Finance"){
      p.textContent =`${this.name} is available Hot and it has the following ingredients : `
  }
    

  let p1 = document.createElement('p1');
      div.appendChild(p1);
      if(dep=="Administration"){
          p.textContent =`${this.name} is available Hot and Cold and it has the following ingredients : `
      }else if(dep=="Marketing"){
          p.textContent =`${this.name} is available Cold and it has the following ingredients : `
      }else if(dep=="Development"){
          p.textContent =`${this.name} is available Hot and it has the following ingredients : `
      }
   else if(dep=="Finance"){
      p.textContent =`${this.name} is available Hot and it has the following ingredients : `
  }
      
  
      let img = document.createElement('img');
      div.appendChild(img);
      img.setAttribute('src',this.imagePath);
      img.setAttribute('alt',this.name);
  
      let p2 = document.createElement('p');
      div.appendChild(p2);
      p2.textContent = `Salary : ${this.Salary}` ;

     






       }

       document.write("<br>");

       document.write("<br>");




       function handelSubmit(event) {
         event.preventDefault();
         let newemployee = Person(Employee_ID,Department, Level, Image_URL,Salary);
         let name = event.target.name.value;
         let Department = event.target.Department.value;
         let Level = event.target.Level.value;

        
        
        
         employee.calculatePrice();
         employee.render();
     }





     document.write("<br>");
     document.write("<br>");

  




       Person.prototype.calculatePrice = function() {
         this.price = getRandomNumber(1000,9999);
      }
      
      function Senior(min, max) {
         return ((Math.random() * (max - min + 1)) + min)*.925;//100-7.5
      }
      
      function Mid_Senior(min, max) {
              return ((Math.random() * (max - min + 1)) + min)*.925;//100-7.5
        }
           function Junior(min, max) {
              return ((Math.random() * (max - min + 1)) + min)*.925;//100-7.5
           }

       employeeForm.addEventListener('submit', handelSubmit);

     

