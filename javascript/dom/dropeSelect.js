let nosel = document.querySelector("#no"); /* left side select option*/
let yessel = document.querySelector("#yes");
let addbtn = document.querySelector("#add");
let removebtn = document.querySelector("#remove ");

addbtn.addEventListener("click", function (e) {
  e.preventDefault();

  //alert("add btn click");
  let selopt = document.querySelectorAll("#no option:checked");
  let exstop = document.querySelectorAll("#yes option");
  yessel.replaceChildren(...selopt, ...exstop); /* array -> parameter*/
});
removebtn.addEventListener("click", function (e) {
  e.preventDefault();
  // alert("remove btn click");
  let exstop = document.querySelectorAll("#yes option:checked");
  let selopt = document.querySelectorAll("#no option");
  nosel.replaceChildren(...exstop, ...selopt);
});