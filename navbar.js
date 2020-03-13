document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#header').innerHTML = navbar;
});

var navbar = '\
<div class="header-inner">\
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
                <li><a href="RoboTorque.html">Robotorque</a></li>\
                <li><a href="RoboTronix.html">Robotronix</a></li>\
                <li><a href="Aerowing.html">Aerowing</a></li>\
                <li><a href="Digimedia.html">Digimedia</a></li>\
              </ul>\
            </li>\
            <li class="dropdown">\
              <a href="#">Projects</a>\
              <ul class="dropdown-menu">\
                <li><a href="major-project.html">Major Project</a>\
                </li>\
                <li class="dropdown-submenu">\
                  <a href="#">Minor Projects</a>\
                  <ul class="dropdown-menu">\
                    <li><a href="MinorProjects.html">Ongoing</a></li>\
                    <li><a href="Past-MinorProjects.html">Past</a></li>\
                  </ul>\
                </li>\
              </ul>\
            </li>\
            <li class="dropdown">\
              <a href="#">Events</a>\
              <ul class="dropdown-menu">\
                <li class="dropdown-submenu">\
                  <a href="#">Active Events</a>\
                  <ul class="dropdown-menu">\
                    <li><a href="Visionnaire.html">Vissionaire</a></li>\
                  </ul>\
                </li>\
                <li class="dropdown-submenu">\
                  <a href="#">Past Events</a>\
                  <ul class="dropdown-menu">\
                    <li><a href="Wright-flight.html">Wright Flight</a></li>\
                  </ul>\
                </li>\
              </ul>\
            </li>\
            <li><a href="Achievements.html">Achievements</a></li>\
            <li><a href="gallery.html">Gallery</a></li>\
            <li><a href="alumni.html">Our Alumni</a></li>\
            <li><a href="about-us.html">About Us</a></li>\
        </nav>\
      </div>\
    </div>\
  </div>\
</div>';
