function sendMail (contactForm) {
    emailjs.send("service_yj6juoi","template_8g453qp" , {
        from_name: contactForm.name.value,
        message: contactForm.projectsummary.value,
        to_name: 'Rhoshan',
        reply_to: contactForm.emailaddress.value,
    }).then(function(response) {
        console.log('Success ' , response)
    },function (error) {
        console.log("FAILED:  " , error)
    });
    return false
}