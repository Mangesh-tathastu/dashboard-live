
/* ---------------------------------------------------
    Sidebar js
----------------------------------------------------- */
// function Sidebar(){

  $(document).ready(function () {
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
    });
  });

  
// }

// export default Sidebar;
// $(document).ready(function () {
//   $("#sidebarCollapse").on("click", function () {
//     $("#sidebar").toggleClass("active");
//   });
// });


// let sidebarCollapse = document.getElementById("sidebarCollapse");
// let sidebar = document.getElementById("sidebar");
// sidebarCollapse.addEventListener("click", function () {
//   console.log("Toggle clicked");
//   sidebar.classList.toggle("active");
// });

/* ---------------------------------------------------
    enter file name
----------------------------------------------------- */