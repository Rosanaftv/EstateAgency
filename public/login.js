document.getElementById('signup').addEventListener('click', function(){
    axios.post('http://localhost:3000/api/auth/agentSignup', {
      name: document.getElementById('signup_name').value ,
      email: document.getElementById('signup_email').value ,
      password: document.getElementById('signup_password').value
  })
  .then(function (response) {
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('email', response.data.email)
    localStorage.setItem('name', response.data.name)
    goHome()
  })
  .catch(function (error) {
    alert('Agent already registered');
  });
})

document.getElementById('login').addEventListener('click', function(){
  axios.post('http://localhost:3000/api/auth/agentLogin', {
    email: document.getElementById('login_email').value ,
    password: document.getElementById('login_password').value
})
.then(function (response) {
  if (response.data && response.data.token){
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('email', response.data.email)
    localStorage.setItem('name', response.data.name)
    goProfile()
  }else{
    alert('Ups! you entered a wrong email or password')
  }

})
.catch(function (error) {
  alert('Ups! you entered a wrong email or password');
});
})

function goProfile(){
 window.location = 'http://localhost:3000/agentprofile.html'
}