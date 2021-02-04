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
      const agentProp = response.data.properties
      agentProp.forEach(prop => {
        const grid = document.getElementById("agentProp-grid")
        const child = 
        `<div class="col-md-4">
            <div class="card-box-a card-shadow">
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
          </div>`
          grid.innerHTML += child
      })
    })

