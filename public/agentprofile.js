document.getElementById('logout').addEventListener("click", function () {
  localStorage.clear()
  window.location.reload()
})


document.getElementById('addProperty').addEventListener('click', function () {
  const property = {
    property_id: document.getElementById('property_id').value,
    type: document.getElementById('type').value,
    location: document.getElementById('location').value,
    m2: document.getElementById('size').value,
    bathrooms: document.getElementById('bathrooms').value,
    bedrooms: document.getElementById('bedrooms').value,
    price: document.getElementById('price').value,
    description: document.getElementById('text').value,
    image: document.getElementById('image').value
  }
  window.location.reload()
   
  axios
    .post('http://localhost:3000/api/properties',
      property,
      { headers: { token: localStorage.getItem('token') } }
    )
    .then(response => {
      alert("You have added a property")
    })
    .catch(err => console.error(err))
})

document.getElementById("button-edit").addEventListener("click", function () {
  const body = {
    property_id: document.getElementById('property_id').value,
    type: document.getElementById('type').value,
    location: document.getElementById('location').value,
    m2: document.getElementById('size').value,
    bathrooms: document.getElementById('bathrooms').value,
    bedrooms: document.getElementById('bedrooms').value,
    price: document.getElementById('price').value,
    description: document.getElementById('text').value,
    image: document.getElementById('image').value
  }
  // const property_id = document.getElementById("property_id").dataset
  
  axios.put(`http://localhost:3000/api/properties/${localStorage.getItem("property_id")}`,
  body,
  { headers: { token: localStorage.getItem('token') } })
  .then(response => {
    alert("Property modified")
    fetchProperties()
    //window.location.reload()
  })
  .catch(err => console.error(err))
})

function fetchProperties () {
  axios
  .get('http://localhost:3000/api/agents/properties/me',
    { headers: { token: localStorage.getItem('token') } })
    .then(response => {
      const agentProp = response.data.properties
      const grid = document.getElementById("agentProp-grid")
      grid.innerHTML = ""
      agentProp.forEach(prop => {
        const child = document.createElement('div')
        child.classList.add('col-md-4')
        
        child.innerHTML = 
        `<div class="card-box-a card-shadow">
              <div class="img-box-a">
              <img src="img/${prop.image}" alt="" class="img-a img-fluid">
              </div>
              <div class="card-overlay">
                <div class="card-overlay-a-content">
                  <div class="card-header-a">
                    <h2 class="card-title-a">
                      <a href="#">${prop.type}
                        <br /> ${prop.location}</a>
                    </h2>
                  </div>
                  <div class="card-body-a">
                    <div class="price-box d-flex">
                      <span class="price-a">price | ${prop.price}</span>
                    </div>
                    <a href="property-single.html" class="link-a">Click here to view
                      <span>></span>
                    </a>
                  </div>
                  <div class="card-footer-a">
                    <ul class="card-info d-flex justify-content-around">
                      <li>
                        <h4 class="card-info-title">Area</h4>
                        <span>${prop.m2}
                          <sup>m2</sup>
                        </span>
                      </li>
                      <li>
                        <h4 class="card-info-title">Beds</h4>
                        <span>${prop.bedrooms}</span>
                      </li>
                      <li>
                        <h4 class="card-info-title">Baths</h4>
                        <span>${prop.bathrooms}</span>
                      </li>
                      <li>
                        <h4 class="card-info-title">Property id</h4>
                        <span>${prop.property_id}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              </div>
              <button type="button" id="btn-delete-${prop._id}">Delete</button>
              <button type="button" id="btn-edit-${prop._id}">Edit</button>`
            
          grid.appendChild(child)
          document.getElementById(`btn-delete-${prop._id}`).addEventListener("click", function() {
            axios.delete(`http://localhost:3000/api/properties/${prop._id}`, 
            { headers: { token: localStorage.getItem('token') } })
            .then(response => {
              alert("Property deleted")
              window.location.reload()
            })
            .catch(err => console.error(err))
          })
    
          document.getElementById(`btn-edit-${prop._id}`).addEventListener("click", function() {
            localStorage.setItem("property_id", prop._id)
            document.getElementById('property_id').value = prop.property_id
            document.getElementById('type').value = prop.type
            document.getElementById("location").value = prop.location
            document.getElementById('size').value = prop.m2
            document.getElementById('bathrooms').value = prop.bathrooms
            document.getElementById('bedrooms').value = prop.bedrooms
            document.getElementById('price').value = prop.price
            document.getElementById('text').value = prop.text
            document.getElementById('image').value = prop.image
          })
        })
      })
}

fetchProperties();
            