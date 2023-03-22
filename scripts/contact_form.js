function send_email() {
    Email.send({
        SecureToken : "846303c5-e9f9-4670-ad88-556873b12df2",
        To : "ninad.deshpande46@gmail.com",
        From : "qrofeus@gmail.com",
        Subject : "New contact form enquiry",
        Body : "Name: " + document.getElementById("form_name").value
            +  "<br>Mail Id: " + document.getElementById("form_mail").value
            +  "<br>Phone No.: " + document.getElementById("form_phone").value
            +  "<br>Message: " + document.getElementById("form_message").value
    }).then(
      message => alert("Successfully sent contact enquiry.")
    );
}