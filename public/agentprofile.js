document.getElementById('logout').addEventListener("click", function () {
  localStorage.clear()
  window.location.reload()
})

function fetchMyProperties(){
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
}
fetchMyProperties()

document.getElementById('addProperty').addEventListener('click', function () {
  const property = {
    property_id: document.getElementById('property_id').value,
    type: document.getElementById('type').value,
    location: document.getElementById('location').value,
    m2: document.getElementById('size').value,
    bathrooms: document.getElementById('bathrooms').value,
    bedrooms: document.getElementById('bedrooms').value,
    price: document.getElementById('price').value,
    description: document.getElementById('text').value
  }

   
  axios
    .post('http://localhost:3000/api/properties',
      property,
      { headers: { token: localStorage.getItem('token') } }
    )
    .then(response => {
      fetchMyProperties()
      alert("se ha creado una propiedad")
    })
    .catch(err => console.error(err))
})

