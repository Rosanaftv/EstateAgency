//get agent by Id
axios
.get('http://localhost:3000/api/agents/me',
{ headers: { token: localStorage.getItem('token') } })
.then(response => {
  const agents = document.getElementById('profile')
  agents.innerHTML = ""
  console.log(response.data)
  //response.data
    const agent = document.createElement('li')
    agent.innerHTML =  `Name: ${agent.name},  Email: ${agent.email}, telephone: ${agent.telephone}`
    agents.appendChild(agent)
  })
  


  
  axios
  .get('http://localhost:3000/api/agents/properties/me',
    { headers: { token: localStorage.getItem('token') } })
  .then(response => {
    const properties = document.getElementById('properties')
    properties.innerHTML = ""
    response.data.properties.forEach(property => {
      const newProperty = document.createElement('li')
      newProperty.innerHTML = `type: ${property.type} price: ${property.price} bedrooms: ${property.bedrooms} bathrooms: ${property.bathrooms}`
      properties.appendChild(newProperty)
    })
  })

