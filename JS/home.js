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
