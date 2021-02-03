//get all agents
axios
.get('http://localhost:3000/api/agents')
//{ headers: { token: localStorage.getItem('token') } })
.then(response => {
const agents = document.getElementById('agents')
agents.innerHTML = ""
response.data.forEach(agent => {
  const newAgent = document.createElement('li')
  newAgent.innerHTML = `Name: ${agent.name},  Email: ${agent.email}, telephone: ${agent.telephone}`
  agents.appendChild(newAgent)
})
})