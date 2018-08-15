window.onscroll = function() {myFunction()};

function myFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  document.getElementById("myP").className = "test";
} else {
  document.getElementById("myP").className = "";
}
}


function go() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function closeWindow() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
