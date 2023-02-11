import {
    sidebarCollapse1,
    TBsidebarComponents,
  } from "../JS/TBsidebarComponents.js";

  console.log(TBsidebarComponents, sidebarCollapse1);

  let conts = document.getElementById("sidebar");

  conts.innerHTML = TBsidebarComponents();
  var x = sidebarCollapse1();

   /* ---------------------------------------------------
    add employee js
----------------------------------------------------- */

let displaycomponents = document.getElementById("displaycomponents");

import { addemployeett } from "../JS/addemployee.js";

console.log(addemployeett, "check");

let addemp1 = document.getElementById("addnewemployee1");
addemp1.addEventListener("click", myFunction);

function myFunction() {
  displaycomponents.innerHTML = addemployeett();
}

/* ---------------------------------------------------
    update employee js
----------------------------------------------------- */
import { updateemployee } from "../JS/updateemployee.js";
console.log(updateemployee, "check");

let updateemp = document.getElementById("updateemployee1");

updateemp.addEventListener("click", updateFunction);

function updateFunction() {
  displaycomponents.innerHTML = updateemployee()
}

/* ---------------------------------------------------
     employeelist js
  ----------------------------------------------------- */

import { employeelist } from "../JS/employeelist.js";
console.log(updateemployee, "check");

let emplist = document.getElementById("employeelist1");
emplist.addEventListener("click", listFunction);

function listFunction() {
  displaycomponents.innerHTML = employeelist();
}

/* ---------------------------------------------------
     viewemployee js
  ----------------------------------------------------- */

import { viewemployee } from "../JS/viewemployee.js";
console.log(viewemployee, "check");

let viewemp = document.getElementById("viewemployee1");
viewemp.addEventListener("click", viewFunction);

function viewFunction() {
  displaycomponents.innerHTML = viewemployee();
}

/* ---------------------------------------------------
     Leave js
  ----------------------------------------------------- */

import { LeaveReq } from "../JS/Leave.js";
console.log(LeaveReq, "check");

let Leavex = document.getElementById("Leave");
Leavex.addEventListener("click", LeaveFunction);

function LeaveFunction() {
displaycomponents.innerHTML = LeaveReq();
}
