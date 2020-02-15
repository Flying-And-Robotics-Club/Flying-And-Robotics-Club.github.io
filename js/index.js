var minorProjects = []

var caveExplorationBot = {
  title: "The Cave Exploration Bot",
  description: "Many caves have toxic gases, loose soil, rocky structure, and hidden groundwater reserves making then unsafe for human entry. This project aims to create a robot for reaching the inaccessible places in caves more efficently and deliver accurate and valuable information regarding the cave.",
  deadline: "Mar 21, 2020",
  teams_involved: "All SIGs",
  img_src: "images/blog/Cave.jpg"
}
minorProjects.push(caveExplorationBot);

var ornithopter = {
  title: "Ornithopter",
  description: "One of humankind’s dreams has always been to fly like a bird and this project just does so. In this project, we aim to built an 'Ornithopter', a machine which can fly by flapping its wings just like bird. By using latest technology and development in the autonomous field, we aim to keep the project as autonomous and efficent as possible.",
  deadline: "Jan 21, 2017",
  teams_involved: "Aerowing",
  img_src: "images/blog/Bird.jpg"
}
minorProjects.push(ornithopter);

var roboticArm = {
  title: "Robotic Arm",
  description: "Robotic Arms, a group of the most popular and in demand robots of this generation, are mechanical arms which perform the same function as a human arm. This project aims to create one of the same but with more depth, detail and efficency than a standard while applying autonomous, sensitive and accurate movement capabilities to it. ",
  deadline: "Jan 21, 2017",
  teams_involved: "Robotorque",
  img_src: "images/blog/Robot.png"
}
minorProjects.push(roboticArm);

function expand_minor_projects(index) {
  var project = minorProjects[index];
  document.querySelector('#content_title').innerText = project["title"];
  var cover = document.createElement("img");
  cover.src = project["img_src"];
  cover.style = "width: 100%";
  document.querySelector("#content_image").innerHTML = " ";
  document.querySelector('#content_image').appendChild(cover);
  document.querySelector('#content_description').innerText = project["description"];
  document.querySelector('#content_deadline').innerText = "Expected deadline: " + project["deadline"];
  document.querySelector('#content_teams_involved').innerText = "Teams involved: " + project["teams_involved"];
}
