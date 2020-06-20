function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" 
|| document.getElementById('msg').value == "") {
alert("Fill All Fields !");
}
else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}

//show popup
function div_show() {
document.getElementById('abc').style.display = "block";
}

//hide popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}
