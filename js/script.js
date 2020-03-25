function Form() {
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var money = document.querySelector('input[name="money"]:checked').value;
  document.getElementById("infoform").submit();
  alert(fullname + email + address + money);
  //alert("testing");
  return true;
}