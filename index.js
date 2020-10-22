function validateLogin() {
  var u = document.getElementById("uname").value;
  var p = document.getElementById("pwd").value;
  var err = 0;
  document.getElementById("err1").innerHTML = "";
  document.getElementById("err2").innerHTML = "";
  document.getElementById("err3").innerHTML = "";

  if (u.trim() == '') {
    document.getElementById("err1").innerHTML = "Username required";
    err = 1;
  }

  if (p.trim() == '') {
    document.getElementById("err2").innerHTML = "Password requried";
    err = 2;
  }

  if (p.trim() == 'TEST' && u.trim() == 'TEST') {
  err = 3
  }

  if (err == 3) {
    return true;
  }

  else {
    document.getElementById("err3").innerHTML = "Invalid Username/Password";
    return false;
  }
}
// 
// function validateQuery() {
//   var n = document.getElementById("phoneNumber").value;
//   var err = 0;
//
//   if (n.trim() == '7*') {
//     err = 1;
//   }
//
//   if (p.trim() == '') {
//     document.getElementById("err2").innerHTML = "Password requried";
//     err = 2;
//   }
//
//   if (p.trim() == 'TEST' && u.trim() == 'TEST') {
//   err = 3
//   }
//
//   if (err == 3) {
//     return true;
//   }
//
//   else {
//     document.getElementById("err3").innerHTML = "Invalid Username/Password";
//     return false;
//   }
// }
