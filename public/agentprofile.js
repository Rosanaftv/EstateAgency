axios
  .get('http://localhost:3000/api/properties', {headers: { token: localStorage.getItem('token')}})
  .then (response => {
    const properties = document.getElementById('properties')
    response.data.forEach(property => {
    const newProperty = document.createElement('li')
    newProperty.innerHTML = `${property.property_id} ${property.type}`
    properties.appendChild(newProperty)
  })
  })

  document.getElementById('logout').addEventListener("click", function(){
    localStorage.clear()
    window.location.reload()
  })