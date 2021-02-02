axios
  .get('http://localhost:3000/api/properties/me',
    { headers: { token: localStorage.getItem('token') } })
  .then(response => {
    const properties = document.getElementById('properties')
    response.data.forEach(property => {
      const newProperty = document.createElement('li')
      newProperty.innerHTML = `${property.type} ${property.price} ${property.bedrooms}`
      properties.appendChild(newProperty)
    })
  })

document.getElementById('logout').addEventListener("click", function () {
  localStorage.clear()
  window.location.reload()
})


document.getElementById('addProperty').addEventListener('click', function () {
  const property = {
    type: document.getElementById('Type').value,
    city: document.getElementById('city').value,
    m2: document.getElementById('M2').value,
    bathrooms: document.getElementById('bathrooms').value,
    bedrooms: document.getElementById('bedrooms').value,
    price: document.getElementById('price').value
  }

   console.log(property)
  axios
    .post('http://localhost:3000/api/properties/',
      property,
      { headers: { token: localStorage.getItem('token') } }
    )
    .then(response => {
      res.status(200).json(response)
        console.log(`${property.type} ${property.city} ${property.price} ${property.bedrooms}`)
    })
    .catch(err => console.error(err))
})