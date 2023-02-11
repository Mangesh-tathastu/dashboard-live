function HomeSidebarComponents(){
  return `
  <div class="sidebar-header">
  <!-- <h3>Tathastu Group</h3> -->
  <img class="nav_logo" src="../Assets/logo-tt 1.png" alt="" />
</div>

<ul class="list-unstyled components">
  <!-- <p>Admin Panel</p> -->
<!--  -->
    <li class="active">
      <a href=""
        ><div>
          <img class="sidebar_option" src="../Assets/demo12.png" alt="" />

          <!--  -->

          <span class="sidebar_option_span">Dashboard</span>
        </div></a
      >
    </li>
  <!--start  -->

  <!--end  -->
  <!-- start -->
  <li class="active">
    <a
      href="#homeSubmenu2"
      data-toggle="collapse"
      aria-expanded="false"
      class="dropdown-toggle"
      ><div>
        <img
          class="sidebar_option"
          src="../Assets/company1.png"
          alt=""
        />
        <span class="sidebar_option_span">Company</span>
      </div></a
    >
    <ul class="collapse list-unstyled dropdown_inner" id="homeSubmenu2">
    
      <li>
        <a href="../HTML/TTCompanyDashboard.html"
          >Tathastu Technologies</a
        >
      </li>
      <li>
        <a href="../HTML/TBCompanyDashboard.html">Tathastu BIM</a>
      </li>
      <li>
        <a href="#" id = "addcompany1">Add New Company</a>
      </li>
    </ul>
  </li>
  <li class="active">
      <a
        href="#homeSubmenu1"
        data-toggle="collapse"
        aria-expanded="false"
        class="dropdown-toggle"
        ><div>
          <img class="sidebar_option" src="../Assets/admin1.png" alt="" />
          <span class="sidebar_option_span">Admin</span>
        </div></a
      >
      <ul class="collapse list-unstyled dropdown_inner" id="homeSubmenu1">
        <li class="employeelist">
          <a href="#">Assign project</a>
        </li>
        <li>
          <a href="#">Permisssion</a>
        </li>
       
      </ul>
    </li>
  `
 
  

}

function sidebarCollapse1(){
  $(document).ready(function () {
      $("#sidebarCollapse").on("click", function () {
        $("#sidebar").toggleClass("active");
      });
    });
}

export { sidebarCollapse1 , HomeSidebarComponents }

// export default sidebarComponents


