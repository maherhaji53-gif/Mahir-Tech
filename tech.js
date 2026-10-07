const servicesBtn = document.getElementById("servicesBtn");
const contactBtn = document.getElementById("contactBtn");

// Services button
servicesBtn.addEventListener("click", function () {
    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
});

// Contact button
contactBtn.addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});


// Contact form
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();
    const agreement = document.getElementById("agreement").checked;


    // Full name
    const namePattern = /^[A-Za-z\s]+$/; 
    if (name === "") {
        alert("Please enter your full name.");
        return;
    }
    if (!namePattern.test(name)){
        alert("Please enter a valid name.");
        return;
    }


    // Email
    //if (email === "") {
       // alert("Please enter your email.");
        //return;
    //}
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (email === "") {
    alert("Please enter your email.");
    return;
}

if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
}

    // Phone
   // if (phone === "") {
        //alert("Please enter your phone number.");
        //return;
   // }
   const phonePattern = /^[0-9]{10}$/;
   if (phone === "") {
    alert("Please enter your phone number.");
    return;
}

if (!phonePattern.test(phone)) {
    alert("Please enter a valid phone number.");
    return;
}


    // Gender
    const gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (!gender) {
        alert("Please select your gender.");
        return;
    }


    // Service
    if (service === "") {
        alert("Please select a service.");
        return;
    }


    // Message
    if (message === "") {
        alert("Please enter your message.");
        return;
    }


    // Agreement
    if (!agreement) {
        alert("Please agree with the services.");
        return;
    }


    // Success
    alert("Form submitted successfully!");

    form.reset();
});