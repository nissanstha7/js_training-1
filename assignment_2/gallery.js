var bodyTag = document.querySelector('body');
var bigpic = document.querySelector('#big');
var pictures = ["one.jpg","two.jpeg","three.jpg","four.jpg","five.jpg"];

var small=document.getElementById("smallpic");

for (var i=0; i<5; i++){
    var picture = document.createElement("IMG");
    picture.src = pictures[i];
    picture.className = "input";
    
    small.appendChild(picture);
    bodyTag.appendChild(small);
    picture.onclick = function(e){setPicture(e.target.src)};
}

function setPicture(imgSrc){
    bigpic.setAttribute('src',imgSrc);
}

