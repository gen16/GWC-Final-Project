var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("days");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

$('intro').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) { $(this).remove(); });

function popupS6() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Sunday6").innerHTML = event;
}
function popupM6() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Monday6").innerHTML = event;
}
function popupT6() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Tuesday6").innerHTML = event;
}
function popupW6() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Wednesday6").innerHTML = event;
}
function popupTH6() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Thursday6").innerHTML = event;
}
function popupF6() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Friday6").innerHTML = event;
}
function popupSA6() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Saturday6").innerHTML = event;
}
function popupS7() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Sunday7").innerHTML = event;
}
function popupM7() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Monday7").innerHTML = event;
}
function popupT7() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Tuesday7").innerHTML = event;
}
function popupW7() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Wednesday7").innerHTML = event;
}
function popupTH7() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Thursday7").innerHTML = event;
}
function popupF7() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Friday7").innerHTML = event;
}
function popupSA7() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Saturday7").innerHTML = event;
}
function popupS8() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Sunday8").innerHTML = event;
}
function popupM8() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Monday8").innerHTML = event;
}
function popupT8() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Tuesday8").innerHTML = event;
}
function popupW8() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Wednesday8").innerHTML = event;
}
function popupTH8() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Thursday8").innerHTML = event;
}
function popupF8() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Friday8").innerHTML = event;
}
function popupSA8() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Saturday8").innerHTML = event;
}
function popupS9() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Sunday9").innerHTML = event;
}
function popupM9() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Monday9").innerHTML = event;
}
function popupT9() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Tuesday9").innerHTML = event;
}
function popupW9() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Wednesday9").innerHTML = event;
}
function popupTH9() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Thursday9").innerHTML = event;
}
function popupF9() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Friday9").innerHTML = event;
}
function popupSA9() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Saturday9").innerHTML = event;
}
function popupS10() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Sunday10").innerHTML = event;
}
function popupM10() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Monday10").innerHTML = event;
}
function popupT10() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Tuesday10").innerHTML = event;
}
function popupW10() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Wednesday10").innerHTML = event;
}
function popupTH10() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Thursday10").innerHTML = event;
}
function popupF10() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Friday10").innerHTML = event;
}
function popupSA10() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Saturday10").innerHTML = event;
}
function popupS11() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Sunday11").innerHTML = event;
}
function popupM11() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Monday11").innerHTML = event;
}
function popupT11() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Tuesday11").innerHTML = event;
}
function popupW11() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Wednesday11").innerHTML = event;
}
function popupTH11() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Thursday11").innerHTML = event;
}
function popupF11() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Friday11").innerHTML = event;
}
function popupSA11() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Saturday11").innerHTML = event;
}
function popupS12() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Sunday12").innerHTML = event;
}
function popupM12() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Monday12").innerHTML = event;
}
function popupT12() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Tuesday12").innerHTML = event;
}
function popupW12() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Wednesday12").innerHTML = event;
}
function popupTH12() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Thursday12").innerHTML = event;
}
function popupF12() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Friday12").innerHTML = event;
}
function popupSA12() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Saturday12").innerHTML = event;
}
function popupS13() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Sunday13").innerHTML = event;
}
function popupM13() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Monday13").innerHTML = event;
}
function popupT13() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Tuesday13").innerHTML = event;
}
function popupW13() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Wednesday13").innerHTML = event;
}
function popupTH13() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Thursday13").innerHTML = event;
}
function popupF13() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Friday13").innerHTML = event;
}
function popupSA13() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Saturday13").innerHTML = event;
}
function popupS14() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Sunday14").innerHTML = event;
}
function popupM14() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Monday14").innerHTML = event;
}
function popupT14() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Tuesday14").innerHTML = event;
}
function popupW14() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Wednesday14").innerHTML = event;
}
function popupTH14() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Thursday14").innerHTML = event;
}
function popupF14() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Friday14").innerHTML = event;
}
function popupSA14() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Saturday14").innerHTML = event;
}
function popupS15() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Sunday15").innerHTML = event;
}
function popupM15() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Monday15").innerHTML = event;
}
function popupT15() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Tuesday15").innerHTML = event;
}
function popupW15() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Wednesday15").innerHTML = event;
}
function popupTH15() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Thursday15").innerHTML = event;
}
function popupF15() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Friday15").innerHTML = event;
}
function popupSA15() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Saturday15").innerHTML = event;
}
function popupS16() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Sunday16").innerHTML = event;
}
function popupM16() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Monday16").innerHTML = event;
}
function popupT16() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Tuesday16").innerHTML = event;
}
function popupW16() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Wednesday16").innerHTML = event;
}
function popupTH16() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Thursday16").innerHTML = event;
}
function popupF16() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Friday16").innerHTML = event;
}
function popupSA16() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Saturday16").innerHTML = event;
}
function popupS17() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Sunday17").innerHTML = event;
}
function popupM17() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Monday17").innerHTML = event;
}
function popupT17() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Tuesday17").innerHTML = event;
}
function popupW17() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Wednesday17").innerHTML = event;
}
function popupTH17() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Thursday17").innerHTML = event;
}
function popupF17() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Friday17").innerHTML = event;
}
function popupSA17() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Saturday17").innerHTML = event;
}
function popupS18() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Sunday18").innerHTML = event;
}
function popupM18() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Monday18").innerHTML = event;
}
function popupT18() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Tuesday18").innerHTML = event;
}
function popupW18() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Wednesday18").innerHTML = event;
}
function popupTH18() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Thursday18").innerHTML = event;
}
function popupF18() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Friday18").innerHTML = event;
}
function popupSA18() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Saturday18").innerHTML = event;
}
function popupS19() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Sunday19").innerHTML = event;
}
function popupM19() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Monday19").innerHTML = event;
}
function popupT19() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Tuesday19").innerHTML = event;
}
function popupW19() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Wednesday19").innerHTML = event;
}
function popupTH19() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Thursday19").innerHTML = event;
}
function popupF19() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Friday19").innerHTML = event;
}
function popupSA19() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Saturday19").innerHTML = event;
}
function popupS20() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Sunday20").innerHTML = event;
}
function popupM20() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Monday20").innerHTML = event;
}
function popupT20() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Tuesday20").innerHTML = event;
}
function popupW20() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Wednesday20").innerHTML = event;
}
function popupTH20() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Thursday20").innerHTML = event;
}
function popupF20() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Friday20").innerHTML = event;
}
function popupSA20() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Saturday20").innerHTML = event;
}
function popupS21() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Sunday21").innerHTML = event;
}
function popupM21() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Monday21").innerHTML = event;
}
function popupT21() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Tuesday21").innerHTML = event;
}
function popupW21() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Wednesday21").innerHTML = event;
}
function popupTH21() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Thursday21").innerHTML = event;
}
function popupF21() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Friday21").innerHTML = event;
}
function popupSA21() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Saturday21").innerHTML = event;
}
function popupS22() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Sunday22").innerHTML = event;
}
function popupM22() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Monday22").innerHTML = event;
}
function popupT22() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Tuesday22").innerHTML = event;
}
function popupW22() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Wednesday22").innerHTML = event;
}
function popupTH22() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Thursday22").innerHTML = event;
}
function popupF22() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Friday22").innerHTML = event;
}
function popupSA22() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Saturday22").innerHTML = event;
}
function popupS23() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Sunday23").innerHTML = event;
}
function popupM23() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Monday23").innerHTML = event;
}
function popupT23() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Tuesday23").innerHTML = event;
}
function popupW23() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Wednesday23").innerHTML = event;
}
function popupTH23() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Thursday23").innerHTML = event;
}
function popupF23() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Friday23").innerHTML = event;
}
function popupSA23() {
  var event;
  var addingevent = prompt("Please enter the event you would like to add: ");
  if (addingevent == null || addingevent == ""){
    event = "There is no event scheduled here."
  }
  else {
    event = addingevent;
  }
  document.getElementById("Saturday23").innerHTML = event;
}
