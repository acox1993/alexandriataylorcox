$(document).ready(function() {
$("#submit").click(function() {
var Fname = $("#Fname").val();
var Lname = $("#Lname").val();
var Cname = $("#Cname").val();
var email = $("#email").val();
var message = $("#message").val();
$("#returnmessage").empty(); // To empty previous error/success message.
// Checking for blank fields.
if (Lname == '' || email == '' || message == '') {
alert("Please Fill Required Fields");
} else {
// Returns successful data submission message when the entered information is stored in database.
$.post("contact_form.php", {
name1: Fname, Lname, Cname,
email1: email,
message1: message,
}, function(data) {
$("#returnmessage").append(data); // Append returned message to message paragraph.
if (data == "Your Message has been received, I will contact you soon.") {
$("#form")[0].reset(); // To reset form fields on success.
}
});
}
});
});