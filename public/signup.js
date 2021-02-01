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
  goProfile()
})
.catch(function (error) {
  alert('Agent already registered');
});
})
function goProfile(){
  window.location = 'http://localhost:3000/agentprofile.html'
 }