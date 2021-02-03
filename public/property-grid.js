axios
  .get('http://localhost:3000/api/properties',
    { headers: { token: localStorage.getItem('token') } })
  .then(response => {
    const properties = document.getElementById('properties')
    response.data.forEach(property => {
      const newProperty = document.createElement('li')
      newProperty.innerHTML = `type: ${property.type}, price: ${property.price} bedrooms: ${property.bedrooms}, bathrooms: ${property.bathrooms}`
      properties.appendChild(newProperty)
    })
  })

  /*axios
  .get('http://localhost:3000/api/properties',
    { headers: { token: localStorage.getItem('token') } })
  .then(response => {
    const properties = document.getElementById('properties')
    properties.innerHTML = ""
    properties.innerHTML += ""
    
  })*/