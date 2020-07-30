function insertNavbar() {
    document.querySelector("header").innerHTML = navbar;
}

var navbar = '\
  <div class="header-inner" style="z-index: 1000;">\
    <div class="container">\
      <div id="logo">\
        <a href="index.html">\
          <span class="logo-default"><img id="logo1" src="FARC.png" style="height:50px;"></img>&nbsp;&nbsp;&nbsp;FARC&nbsp;&nbsp;&nbsp;</span>\
          <span class="logo-dark"><img id="logo2" src="FARC.png" style="height:50px;"></img>&nbsp;&nbsp;&nbsp;FARC&nbsp;&nbsp;&nbsp;</span>\
        </a>\
      </div>\
      <div id="mainMenu-trigger">\
        <a class="lines-button x"><span class="lines"></span></a>\
      </div>\
      <div id="mainMenu">\
        <div class="container">\
          <nav>\
            <ul>\
              <li><a href="index.html">Home</a></li>\
              <li class="dropdown">\
                <a>Special Interest Groups</a>\
                <ul class="dropdown-menu">\
                  <li><a href="robocode.html">Robocode</a></li>\
                  <li><a href="robotorque.html">Robotorque</a></li>\
                  <li><a href="robotronix.html">Robotronix</a></li>\
                  <li><a href="aerowing.html">Aerowing</a></li>\
                  <li><a href="digimedia.html">Digimedia</a></li>\
                </ul>\
              </li>\
              <li class="dropdown">\
                <a href="#">Projects</a>\
                <ul class="dropdown-menu">\
                  <li><a href="major_project.html">Major Project</a>\
                  </li>\
                  <li>  <a href="minor_projects.html">Minor Projects</a>\
                  </li>\
                </ul>\
              </li>\
              <li class="dropdown">\
                <a href="#">Events</a>\
                <ul class="dropdown-menu">\
                  <li class="dropdown-submenu">\
                    <a href="#">Active Events</a>\
                    <ul class="dropdown-menu">\
                      <li><a href="visionnaire.html">Visionnaire</a></li>\
                    </ul>\
                  </li>\
                  <li class="dropdown-submenu">\
                    <a href="#">Past Events</a>\
                    <ul class="dropdown-menu">\
                      <li><a href="wright_flight.html">Wright Flight</a></li>\
                      <li><a href="devsummer.html">DevSummer</a><li>\
                    </ul>\
                  </li>\
                </ul>\
              </li>\
              <li><a href="achievements.html">Achievements</a></li>\
              <li><a href="gallery.html">Gallery</a></li>\
              <li><a href="alumni.html">Our Alumni</a></li>\
              <li><a href="about_us.html">About Us</a></li>\
          </nav>\
        </div>\
      </div>\
    </div>\
  </div>';
