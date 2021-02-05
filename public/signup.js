const api = axios.create({
  baseURL: "https://face2facehomes.herokuapp.com/api",
  timeout: 2000
  })
document.getElementById('signup').addEventListener('click', function(){
  api.post('/auth/agentSignup', {
    name: document.getElementById('signup_name').value ,
    telephone: document.getElementById('signup_telephone').value,
    email: document.getElementById('signup_email').value ,
    password: document.getElementById('signup_password').value,
    image: document.getElementById('signup_image').value
    
    
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
  window.location.href = 'agentprofile.html'
 }