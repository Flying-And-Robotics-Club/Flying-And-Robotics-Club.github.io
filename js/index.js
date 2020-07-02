var minorProjects = []

var caveExplorationBot = {
  title: "The Cave Exploration Bot",
  description: "Cave exploration is a very adventurous yet risky task. A lot of caves are discovered, almost on a daily basis. They give a lot of ecological information, house an amazing habitat and show how life interacts, grows and thrives in beautiful ways. But exploration of new caves adds a lot to the risk factor. A cave may have toxic gases, loose soil, rock structure, and hidden groundwater reserves.  A lot of old abandoned mines along with the newly dug mines are unsafe for human exposure. This is where automation comes into the picture. The idea is to create a robot for reaching the inaccessible places in caves and mines.",
  deadline: "Mar 21, 2020",
  teams_involved: "All SIGs",
  img_src: "images/MINOR PROJECTS/CAVE EXP/Cave.jpg"
}
minorProjects.push(caveExplorationBot);

var ornithopter = {
  title: "Ornithopter",
  description: "There has been an increasing interest in the development of MAV's (Micro-Air Vehicles). The term MAV refers to a new type of remotely controlled aircraft (UAV) that is significantly smaller than similar aircraft's, obtainable by using state of the art technology. Potential military use is one of the driving factors, although MAVs are also being used commercially and in scientific, police, and mapping applications. The ornithopter is an MAV. It is a machine designed to achieve flight by flapping wings like a real bird. The idea was to create an ornithopter from scratch, to control it remotely, and of course, to make it fly!",
  deadline: "Jan 21, 2017",
  teams_involved: "Aerowing",
  img_src: "images/MINOR PROJECTS/ornithopter/ornithopter.jpg"
}
minorProjects.push(ornithopter);

var roboticArm = {
  title: "Robotic Arm",
  description: "Robotic Arms, a group of the most popular and in demand robots of this generation, are mechanical arms which perform the same function as a human arm. This project aims to create one of the same but with more depth, detail and efficency than a standard while applying autonomous, sensitive and accurate movement capabilities to it. It is a five degrees of freedom manipulator. Designed using Fusion360, it has been manufactured using laser cutting technology from Acrylic sheet. The arm was simulated in VRep. The arm was designed to be controlled by the simulation over a wireless network using ROS.",
  deadline: "Jan 21, 2017",
  teams_involved: "Robotorque",
  img_src: "images/MINOR PROJECTS/robotic arm/robotic_arm.png"
}
minorProjects.push(roboticArm);

function expand_minor_projects(index) {
  if (window.screen.width * window.devicePixelRatio > 1200) {
  document.querySelector('#datadiv').style.display = "none";
  setTimeout(function(){
    $("#datadiv").slideToggle(200, "swing", function(){/*done*/});
  }, 700);
  //document.querySelector('#datadiv').style.display = "block";
  var project = minorProjects[index];
  document.querySelector('#content_title').innerText = project["title"];
  var cover = document.createElement("img");
  cover.src = project["img_src"];
  cover.style = "width: 100%";
  document.querySelector("#content_image").innerHTML = " ";
  document.querySelector('#content_image').appendChild(cover);
  document.querySelector('#content_description').innerText = "\n" + project["description"];
  document.querySelector('#content_deadline').innerText = "Expected deadline: " + project["deadline"];
  document.querySelector('#content_teams_involved').innerText = "Teams involved: " + project["teams_involved"];
  document.querySelector('#collapse').style.display = "block";
  setTimeout(function(){smoothScroll(document.querySelector("#content2"));},1000);
}
}

window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
