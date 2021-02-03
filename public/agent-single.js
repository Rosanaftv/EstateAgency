//get agent by Id
axios
.get('http://localhost:3000/api/agents/me',
{ headers: { token: localStorage.getItem('token') } })
.then(response => {
const agents = document.getElementById('profile')
agents.innerHTML = ""
console.log(response.data)
response.data.forEach(agent => {
  const newAgent = document.createElement('li')
  newAgent.innerHTML =  `Name: ${agent.name},  Email: ${agent.email}, telephone: ${agent.telephone}`
    agents.appendChild(newAgent)
  })
})
  


