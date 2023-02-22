/* ---------------------------------------------------
    Sidebar js
----------------------------------------------------- */
import {
  sidebarCollapse1,
  HomeSidebarComponents,
} from "../JS/HomeSidebarComponents.js";

console.log(HomeSidebarComponents, sidebarCollapse1);

let conts = document.getElementById("sidebar");

conts.innerHTML = HomeSidebarComponents();
var x = sidebarCollapse1();


/* ---------------------------------------------------
     addcompany js
  ----------------------------------------------------- */

import { addcompany } from "../JS/addCompany.js";
console.log(addcompany, "check");

let addnewcompany = document.getElementById("addcompany1");
addnewcompany.addEventListener("click", addcompanyFunction);

function addcompanyFunction() {
  displaycomponents.innerHTML = addcompany();
}
                                            
/* ---------------------------------------------------
    add employee js
----------------------------------------------------- */

// let displaycomponents = document.getElementById("displaycomponents");

// import { addemployeett } from "../JS/addemployee.js";

// console.log(addemployeett, "check");

// let addemp = document.getElementById("addnewemployee1");
// addemp.addEventListener("click", myFunction);
// function myFunction() {
//   displaycomponents.innerHTML = addemployeett();
// }

/* ---------------------------------------------------
    update employee js
----------------------------------------------------- */
// import { updateemployee } from "../JS/updateemployee.js";
// console.log(updateemployee, "check");

// let updateemp = document.getElementById("updateemployee1");

// updateemp.addEventListener("click", updateFunction);

// function updateFunction() {
//   displaycomponents.innerHTML = updateemployee()
// }

/* ---------------------------------------------------
     employeelist js
  ----------------------------------------------------- */

// import { employeelist } from "../JS/employeelist.js";
// console.log(updateemployee, "check");

// let emplist = document.getElementById("employeelist1");
// emplist.addEventListener("click", listFunction);

// function listFunction() {
//   displaycomponents.innerHTML = employeelist();
// }

/* ---------------------------------------------------
     viewemployee js    
  ----------------------------------------------------- */

// import { viewemployee } from "../JS/viewemployee.js";
// console.log(viewemployee, "check");

// let viewemp = document.getElementById("viewemployee1");
// viewemp.addEventListener("click", viewFunction);

// function viewFunction() {
//   displaycomponents.innerHTML = viewemployee();
// }

/* ---------------------------------------------------
     addcompany js
  ----------------------------------------------------- */

// import { addcompany } from "../JS/addCompany.js";
// console.log(addcompany, "check");

// let addnewcompany = document.getElementById("addcompany1");
// addnewcompany.addEventListener("click", addcompanyFunction);

// function addcompanyFunction() {
// displaycomponents.innerHTML = addcompany();
// }

/* ---------------------------------------------------
     Leave js
  ----------------------------------------------------- */

// import { LeaveReq } from "../JS/Leave.js";
// console.log(LeaveReq, "check");

// let Leavex = document.getElementById("Leave");
// Leavex.addEventListener("click", LeaveFunction);

// function LeaveFunction() {
// displaycomponents.innerHTML = LeaveReq();
// }

             // graph

  /* ---------------------------------------------------
    employee graph start 
  ----------------------------------------------------- */
  
  const ctx1 = document.getElementById("bar-chart-grouped");

  new Chart(ctx1 , {
    type: "bar",
    data: {
      labels: ["Total Employees", "Total Projects"],
      datasets: [
        {
          label: "Total",
          backgroundColor: "#3e95cd",
          data: [40, 22],
        },
        {
          label: "BIM",
          backgroundColor: " #16243d",
          data: [25, 14],
        },
        {
          label: "Tech",
          backgroundColor: "#F15C44",
          data: [15, 8],
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Tathastu growth",
      },
    },
  });
  /* ---------------------------------------------------
     Employee graph end
  ----------------------------------------------------- */

 /* ---------------------------------------------------
     Project graph start
  ----------------------------------------------------- */
    
  new Chart(document.getElementById("line-chart"), {
    type: "line",
    data: {
      labels: [
        "z",
        "jan",
        "Feb",
        "Mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec",
      ],
      datasets: [
        {
          data: [0, 7, 5, 11.13, 9],
          label: "Total",
          backgroundColor: "#3e95cd",
          fill: false,
        },
        {
          data: [0, 4, 3, 7, 8, 5],
          label: "BIM",
          backgroundColor: " #16243d",
          fill: false,
        },
        {
          data: [0, 3, 2, 4, 5, 4],
          label: "Tech",
          backgroundColor: "#F15C44",
          fill: false,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "World population per region (in millions)",
      },
    },
  });
   /* ---------------------------------------------------
     Project graph end
  ----------------------------------------------------- */

  /* ---------------------------------------------------
     Circular graph start 
  ----------------------------------------------------- */

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Mangesh", "Niraj", "Vibhuti", "Yashvi"],
    datasets: [
      {
        label: "Work Update hr",
        data: [12, 10, 6, 9],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

/* ---------------------------------------------------
     Circular graph end 
  ----------------------------------------------------- */