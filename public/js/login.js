const loginHandler = async (e) => {
    e.preventDefault();
    const email = $('#emaillogin').val().trim();
    const password = $('#passwordlogin').val().trim(); 

        if (email == "") {
       $('#emaillogin').attr( )
       $('#emaillogin').attr("placeholder", "Please enter your username")
      
    }

    if (password == "") {
        $('#password').attr()
        $('#password').attr("placeholder", "Please enter your password")
    }


    if (email && password) {
        const response = await fetch('/api/login', {
            method: 'POST', 
            body: JSON.stringify({ email, password }), 
            headers: { 'Content-Type' : 'application/json'}
        });
        const data = await response.json(); 
        if(response.status === 400 || response.status === 401) {
           return alert(data.message);
        } 
        document.location.replace('/comments');
    }
}

$('#submitlogin').click(loginHandler);

