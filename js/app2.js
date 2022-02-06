'use strict';



const tablecount = document.getElementById("tabledeparments");

function readFromLocalS() {
  let jsonArr = localStorage.getItem('employees');
  let arr = JSON.parse(jsonArr);
  if (arr !== null) {
      return arr;
  } else {
      return [];
  }
}



function rendertable() {
  let table = document.createElement('table');
  tablecount.appendChild(table);
  let loctab = readFromLocalS();

  let totaladm = 0;
let totalmark = 0;
let totaldev = 0;
let totalfin = 0;

  let trr = document.createElement('tr');
  table.appendChild(trr);
  let trr1 = document.createElement('th');
  trr.appendChild(trr1);
  let trr2 = document.createElement('th');
  trr.appendChild(trr2);
  let trr3 = document.createElement('th');
  trr.appendChild(trr3);
  let trr4 = document.createElement('th');
  trr.appendChild(trr4);

  trr1.innerHTML = 'Department';
  trr2.innerHTML = 'Num Of Employees';
  trr3.innerHTML = 'Total Salary';
  trr4.innerHTML = 'Avgerage';

  let admsum = 0;
  let marksum = 0;
  let devsum = 0;
  let finsum = 0; 

  for (let i = 0; i < loctab.length; i++) {
    if (loctab[i].dep == 'Administration') {
      admsum++;
      totaladm = totaladm + loctab[i].sal;
    } 
    else if (loctab[i].dep == 'Marketing') {
      marksum++;
      totalmark = totalmark + loctab[i].sal;
    } 
    else if (loctab[i].dep == 'Development') {
      devsum++;
      totaldev = totaldev + loctab[i].sal;
    } 
    else if (loctab[i].dep == 'Finance') {
      finsum++;
      totalfin = totalfin + loctab[i].sal;
    }
  }

  let  adm_avg = 0;
   adm_avg = Math.floor(totaladm / admsum) ;

  let avg_mar = 0;
  avg_mar = Math.floor(totalmark / marksum);

  let avg_dev = 0;
  avg_dev = Math.floor(totaldev / devsum);

  let avgfin = 0;
  avgfin = Math.floor(totalfin / finsum);

  let totalemp = admsum + devsum + finsum + marksum;
  let totalsal = totalfin + totaldev + totaladm + totalmark;
  let avgsal = Math.floor(totalsal / totalemp)||0;

  let tr1 = document.createElement('tr');
  table.appendChild(tr1);

  let ftd = document.createElement('td');
  tr1.appendChild(ftd);
  ftd.textContent = 'Adminstration';

  let std = document.createElement('td');
  tr1.appendChild(std);
  std.textContent = admsum;

  let ttd = document.createElement('td');
  tr1.appendChild(ttd);
  ttd.textContent = totaladm;

  let td4 = document.createElement('td');
  tr1.appendChild(td4);
  td4.textContent =  adm_avg;

  let tr2 = document.createElement('tr');
  table.appendChild(tr2);

  let f1td = document.createElement('td');
  tr2.appendChild(f1td);
  f1td.textContent = 'Marketing';

  let s1td = document.createElement('td');
  tr2.appendChild(s1td);
  s1td.textContent = marksum;

  let tttd = document.createElement('td');
  tr2.appendChild(tttd);
  tttd.textContent = totalmark;

  let td44 = document.createElement('td');
  tr2.appendChild(td44);
  td44.textContent = avg_mar;

  let tr3 = document.createElement('tr');
  table.appendChild(tr3);

  let ff1td = document.createElement('td');
  tr3.appendChild(ff1td);
  ff1td.textContent = 'Development';
  
  let ss1td = document.createElement('td');
  tr3.appendChild(ss1td);
  ss1td.textContent = devsum;

  let tottd = document.createElement('td');
  tr3.appendChild(tottd);
  tottd.textContent = totaldev;

  let td444 = document.createElement('td');
  tr3.appendChild(td444);
  td444.textContent = avg_dev;

  let tr4 = document.createElement('tr');
  table.appendChild(tr4);

  let fff1td = document.createElement('td');
  tr4.appendChild(fff1td);
  fff1td.textContent = 'Finance';

  let sss1td = document.createElement('td');
  tr4.appendChild(sss1td);
  sss1td.textContent = finsum;

  let ttottd = document.createElement('td');
  tr4.appendChild(ttottd);
  ttottd.textContent = totalfin;

  let td4f = document.createElement('td');
  tr4.appendChild(td4f);
  td4f.textContent = avgfin;

  let tr5 = document.createElement('tr');
  table.appendChild(tr5);

  let tdftot = document.createElement('td');
  tr5.appendChild(tdftot);
  tdftot.textContent = 'Total';

  let tdtemp = document.createElement('td');
  tr5.appendChild(tdtemp);
  tdtemp.textContent = totalemp;

  let td4sal = document.createElement('td');
  tr5.appendChild(td4sal);
  td4sal.textContent = totalsal;

  let tda4 = document.createElement('td');
  tr5.appendChild(tda4);
  tda4.textContent = avgsal;
}
rendertable();
