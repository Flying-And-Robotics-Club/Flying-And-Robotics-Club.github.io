document.addEventListener('DOMContentLoaded'() ={

  function expand_minor_projects(index) {
    var project = minorProjects[index];
    document.querySelector('#content_title').innerText = project["title"];
    document.querySelector('#content_image').innerHTMl = '<img src="' + project["img_src"] + '" style="width: 100%">';
    document.querySelector('#content_description').innerText = project["description"];
    document.querySelectory('#content_deadline').innerText = project["deadline"];
  }
});
