function sidebarComponents(){
    return `
    <div class="sidebar-header">
    <!-- <h3>Tathastu Group</h3> -->
    <img class="nav_logo" src="../Assets/logo-tt 1.png" alt="" />
  </div>

  <ul class="list-unstyled components">
    <!-- <p>Admin Panel</p> -->
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
          <a href="#">View All Project</a>
        </li>
        <li>
          <a href="#">View Perticular Project</a>
        </li>
        <li>
          <a href="#">Employee</a>
        </li>
        <li>
          <a href="#">Extra function</a>
        </li>
      </ul>
    </li>
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
        <!-- <li class="employeelist">
          <a href="#">View All Company</a>
        </li>
        <li>
          <a href="#">View Perticular Company</a>
        </li> -->
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
    <!-- end -->
    <li class="select-box active">
      <a
        href="#homeSubmenu"
        data-toggle="collapse"
        aria-expanded="false"
        class="dropdown-toggle"
        ><div>
          <img
            class="sidebar_option"
            src="../Assets/employee1.png"
            alt=""
          />
          <span class="sidebar_option_span">Employee</span>
        </div></a
      >
      <ul class="collapse list-unstyled dropdown_inner" id="homeSubmenu">
        <li class="employeelist">
          <a href="#" id = "employeelist1">Employee List</a>
        </li>
        <li>
          <a href="#" id="viewemployee1" >view Employee</a>
        </li>
        <li>
          <a href="#" id = "addnewemployee1">add Employee</a>
        </li>
        <li>
          <a href="#" id = "updateemployee1">edit Employee</a>
        </li>
      </ul>
    </li>
    <li>
      <a
        href="#pageSubmenu"
        data-toggle="collapse"
        aria-expanded="false"
        class="dropdown-toggle"
        ><div>
          <img
            class="sidebar_option"
            src="../Assets/depertment1.png"
            alt=""
          />
          <span class="sidebar_option_span">Dept</span>
        </div></a
      >
      <ul class="collapse list-unstyled dropdown_inner" id="pageSubmenu">
        <li>
          <a href="#">FrontEnd</a>
        </li>
        <li>
          <a href="#">Backend</a>
        </li>
        <li>
          <a href="#">HR</a>
        </li>
      </ul>
    </li>
    <!--  -->
    <li>
      <a
        href="#project1"
        data-toggle="collapse"
        aria-expanded="false"
        class="dropdown-toggle"
        ><div>
          <img
            class="sidebar_option"
            src="../Assets/project1.png"
            alt=""
          />
          <span class="sidebar_option_span">Project</span>
        </div></a
      >
      <ul class="collapse list-unstyled dropdown_inner" id="project1">
        <li>
          <a href="#">View On Going Project</a>
        </li>
        <li>
          <a href="#">Assign Project</a>
        </li>
        <li>
          <a href="#">Completed Project</a>
        </li>
      </ul>
    </li>
    <!--  -->
    <li>
      <a href="#"
        ><div>
          <img
            class="sidebar_option"
            src="../Assets/portfolio1.png"
            alt=""
          />
          <span class="sidebar_option_span">Portfolio</span>
        </div></a
      >
    </li>
    <li>
      <a href="#" id = "Leave"
        ><div>
          <img class="sidebar_option" src="../Assets/leave1.png" alt="" />
          <span class="sidebar_option_span">Leave</span>
        
        </div></a
      >
    </li>
    <li>
      <a href="#"
        ><div>
          <img class="sidebar_option" src="../Assets/cheers.png" alt="" />
          <span class="sidebar_option_span">Features</span>
        </div></a
      >
    </li>
    <li>
      <a href="#"
        ><div>
          <img class="sidebar_option" src="../Assets/event1.png" alt="" />
          <span class="sidebar_option_span">Events</span>
        </div></a
      >
    </li>
  </ul>
  <!-- <ul class="list-unstyled CTAs">
    <li>
      <a href="#" class="down_btn">Employee Data </a>
    </li>
    <li>
      <a href="#" class="down_btn">Switch Button</a>
    </li>
  </ul> -->
    `
   
    

}

function sidebarCollapse1(){
    $(document).ready(function () {
        $("#sidebarCollapse").on("click", function () {
          $("#sidebar").toggleClass("active");
        });
      });
}

export { sidebarCollapse1 , sidebarComponents }

// export default sidebarComponents