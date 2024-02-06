// Login Form
const loginFormHandler = async (event) => {
    event.preventDefault();
  

    const email = document.querySelector('#emaillogin').value.trim();
    const password = document.querySelector('#passwordlogin').value.trim();
  
    if (email && password) {
      const response = await fetch('.api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {document.location.replace('/');
      } 
      else {alert('something is wrong');}}};

  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

  
//sign in form
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const firstname = document.querySelector('#firstnamesignup').value.trim();
    const lastname = document.querySelector('#lastnamesignup').value.trim();  
    const email = document.querySelector('#emailsignup').value.trim();
    const password = document.querySelector('#passwordsignup').value.trim();
  
    if (firstname && lastname && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ firstname, lastname, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {document.location.replace('/');} 
      else {alert(response.statusText);}
    }
  };
  

  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
  