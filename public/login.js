const api = axios.create({
baseURL: "https://face2facehomes.herokuapp.com/api",
timeout: 2000
})


document.getElementById('login').addEventListener('click', function(){
  api.post('/auth/agentLogin', {
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
 window.location.href = 'agentprofile.html'
}