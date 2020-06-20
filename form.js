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

function show_form() {
document.getElementById('form_div').style.display = "block";
}

function hide_form(){
document.getElementById('form_div').style.display = "none";
}
