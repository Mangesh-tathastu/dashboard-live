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

/* ---------------------------------------------------
     projectDetails js
  ----------------------------------------------------- */

import { projectDetails } from "./projectDetails.js";
console.log(projectDetails, "check");

let projectDetails1 = document.getElementById("projectDetails");
projectDetails1.addEventListener("click",ProjectDfunction);

function ProjectDfunction() {
  displaycomponents.innerHTML = projectDetails()
}

/* ---------------------------------------------------
    Assign Project js
  ----------------------------------------------------- */

  import { assignproject } from "./assignproject.js";
  console.log(assignproject,"check");

  let assignproject1 = document.getElementById("assignproject1");
  assignproject1.addEventListener("click",AssignProjectDfunction);

  function AssignProjectDfunction() {
    displaycomponents.innerHTML = assignproject()
  }

/* ---------------------------------------------------
    completed Project js
  ----------------------------------------------------- */

  import { completedProject } from "./completedProject.js";
  console.log(completedProject,"check");

  let completedProject1 = document.getElementById("completedProject1");
  completedProject1.addEventListener("click",completedProjectfunction);

  function completedProjectfunction() {
    displaycomponents.innerHTML = completedProject()
  }