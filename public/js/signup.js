
//sign in form
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const firstname = document.querySelector("#firstnamesignup").value.trim();
    const lastname = document.querySelector("#lastnamesignup").value.trim();
    const email = document.querySelector("#emailsignup").value.trim();
    const password = document.querySelector("#passwordsignup").value.trim();
  
    if (firstname && lastname && email && password) {
      const response = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({ firstname, lastname, email, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
        alert('Welcome To Gamersheim');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler);