'use strict';






function Senior(min, max) {
   return (Math.random() * (max - min + 1)) + min;
}

function Mid_Senior(min, max) {
        return (Math.random() * (max - min + 1)) + min;
  }
     function Junior(min, max) {
        return (Math.random() * (max - min + 1)) + min;
     }


function Person(Employee_ID,Department, Level, Image_URL,Salary){
        this.emp_id = Employee_ID;
        this.dep = Department;
        this.lv = Level;
        this.img = Image_URL; 
        this.sal = Salary; 
    }
    

    Person.prototype.render = function (){
        document.write(` id =<p>${this.emp_id}</p>`)
        document.write(`Name - > <p> ${this.dep}  </p>`)
        document.write(`Department - > <p> ${this.dep}  </p>`)
        document.write(` Level - ><p> ${this.lv}  </p>`)
        document.write(`Salary -> <p> ${this.sal}  </p>`)

       }

       document.write("<br>");
       document.write("<br>");
     let x1=new  Person("1000","Ghazi Samer","Administration","Senior",Senior(1500, 2000));
     x1.render();
     document.write("<br>");

     let x2=new  Person("1001","Lana Ali" ,"Finance","Senior",Senior(1500, 2000));
     x2.render();
     document.write("<br>");


     let x3=new  Person("1002","Tamara Ayoub","Marketing","Senior",Senior(1500, 2000));
     x3.render();
     document.write("<br>");


     let x4=new  Person("1003","Safi Walid","Administration","Mid-Senior",Mid_Senior(1000, 1500));
     x4.render();
     document.write("<br>");


     let x5=new  Person("1004","Omar Zaid","Development","Senior", Senior(1500, 2000));
     x5.render();
     document.write("<br>");


     let x6=new  Person("1005","Rana Saleh","Development","Junior",        Junior(500, 1000)     );
     x6.render();
     document.write("<br>");


     let x7=new  Person("1006","Hadi Ahmad","Finance","Mid-Senior",Mid_Senior(1000, 1500));
     x7.render();


     

