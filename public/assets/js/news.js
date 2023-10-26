function sendMail(params)
{
    var tempParas={
        email: document.getElementById('newsletter-submit').value
    };
    emailjs.send('service_0d64c9j','template_zlg3lhl',tempParas)
}