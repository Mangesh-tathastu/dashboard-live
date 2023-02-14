function TBsidebarComponents(){
    return`
    <div class="sidebar-header">
          <img class="nav_logo" src="../Assets/tathastu bim logo.png" alt="" />
        </div>

        <ul class="list-unstyled components">
          <li class="active">
            <a href=""
              ><div>
                <img class="sidebar_option" src="../Assets/demo12.png" alt="" />
                <span class="sidebar_option_span">TB Dashboard</span>
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
                <a href="#">Assign Project</a>
              </li>
              <li>
                <a href="#">Premission</a>
              </li>
             
            </ul>
          </li>
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
                <a href="#" id = "viewemployee1">view Employee</a>
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
                <a href="#" id = "projectDetails">View On Going Project</a>
              </li>
              <li>
                <a href="#" id = "assignproject1">Assign Project</a>
              </li>
              <li>
                <a href="#" id = "completedProject1">Completed Project</a>
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
    
    `
}


function sidebarCollapse1(){
    $(document).ready(function () {
        $("#sidebarCollapse").on("click", function () {
          $("#sidebar").toggleClass("active");
        });
      });
}

export { sidebarCollapse1 , TBsidebarComponents }

