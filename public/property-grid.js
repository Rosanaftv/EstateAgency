/*axios
  .get('http://localhost:3000/api/properties',
    { headers: { token: localStorage.getItem('token') } })
  .then(response => {
    const properties = document.getElementById('properties')
    response.data.forEach(property => {
      const newProperty = document.createElement('li')
      newProperty.innerHTML = `type: ${property.type}, price: ${property.price} bedrooms: ${property.bedrooms}, bathrooms: ${property.bathrooms}`
      properties.appendChild(newProperty)
    })
  })*/

  axios
  .get('http://localhost:3000/api/properties',
    { headers: { token: localStorage.getItem('token') } })
  .then(response => {
    const allProp = response.data
    allProp.forEach(prop => {
      const grid = document.getElementById("prop-grid")
      const child = 
      `<div class="col-md-4">
          <div class="card-box-a card-shadow">
            <div class="img-box-a">
              <img src="img/property-1.jpg" alt="" class="img-a img-fluid">
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
                      <span>340m
                        <sup>2</sup>
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
                      <h4 class="card-info-title">Garages</h4>
                      <span>1</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>`
        grid.innerHTML += child
    })

    const properties = document.getElementById('properties')
    properties.innerHTML = ""
    properties.innerHTML += "html"
    
  })