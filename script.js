document.querySelector('.form').addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.getElementById('name').value
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const linkedin = document.getElementById("linkedin").value;
    const github = document.getElementById("github").value;
    const experience = document.getElementById("exp").value;
    const education = document.getElementById("education").value;
    const photo = document.getElementById('photo').value
    /*
     we have to diaplay the data which is filled in form so
     we have to create the extra div element to diaplay the form data 
     which is entered by the user.
    */

    // const Display = document.createElement("div");
    const Display = document.getElementById("DisplayResumeData")
    Display.className = "resume-display";
    Display.innerHTML = `
        <h1>Resume</h1>
        <img src={photo}></img>
        <p>Name:</strong> ${name}</p>
        <p>Email:</strong> ${email}</p>
        <p>Phone:</strong> ${phone}</p>
        <p>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
        <p>Github:</strong> <a href="${github}" target="_blank">${github}</a></p>
        <p>Experience:</strong> ${experience}</p>
        <p>Education:</strong> ${education}</p>
    `;

    const formData = document.getElementsByClassName('form')

    const button = document.getElementsByClassName("btn")
    button.addEventListener('click',() => {
        formData.style.display = "none"
        Display.style.display="block"
    })
    

})