'use strict'
let btn = document.getElementById("btn")
function username() {
  let inpObj = document.getElementById("user").value;
  if (inpObj.length <3) {
    document.getElementById("user").innerHTML = "Username must be atleast 3 characters";
  } else {
    document.getElementById("user").innerHTML = "";
  } 

  let inpObj1 = document.getElementById("email").value;
  if (inpObj1 == "") {
    document.getElementById("email").innerHTML = "Email is valid";
  } else {
    document.getElementById("email").innerHTML = "";
  } 

  let inpObj2 = document.getElementById("Pass").value;
  if (inpObj2.length <6) {
    document.getElementById("Pass").innerHTML = "Password must be atleast 3 characters";
  } else {
    document.getElementById("Pass").innerHTML = "";
  } 

  let inpObj3 = document.getElementById("cpass").value;
  if (inpObj2 != inpObj3  ) {
    document.getElementById("cpass").innerHTML = "Password 2 is not same as password 1";
  } else {
    document.getElementById("cpass").innerHTML = "";
  } 

} 
btn.addEventListener('click',user)