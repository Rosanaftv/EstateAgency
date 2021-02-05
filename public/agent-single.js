axios
.get('http://localhost:3000/api/agents/me',
{ headers: { token: localStorage.getItem('token') } })
.then(response => {
  const agent = response.data
  const agentHTML = `
  <div class="col-md-12 col-lg-8">
    <div class="title-single-box">
      <h1 class="title-single">${agent.name}</h1>
      <span class="color-text-a">Estate Agent</span>
    </div>
    </div>
    <div class="col-md-12 col-lg-4">
    <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#">Agents</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
        ${agent.name}
        </li>
      </ol>
    </nav>
    </div>
    </div>
    </div>
    </section>
  
    <section class="agent-single">
    <div class="container">
    <div class="row">
    <div class="col-sm-12">
    <div class="row">
      <div class="col-md-6">
        <div class="agent-avatar-box">
          <img src="img/${agent.image}" alt="img/agent-3.jpg" class="agent-avatar img-fluid">
        </div>
      </div>
      
      <div class="col-md-5 section-md-t3">
        <div class="agent-info-box">
          <div class="agent-title">
            <div class="title-box-d">
              <h3 class="title-d">${agent.name}
                <br></h3>
            </div>
          </div>
          <div class="agent-content mb-3">
            <p class="content-d color-text-a">
              Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
              Vivamus suscipit tortor
              eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat.
            </p>
            <div class="info-agents color-a">
              <p>
                <strong>Phone: </strong>
                <span class="color-text-a">${agent.telephone}</span>
              </p>
              <p>
                <strong>Email: </strong>
                <span class="color-text-a">${agent.email}</span>
              </p>
              </div>
             </div>
           </div>
         </div>
       </div>
     </div>
    </div>
  `
  const grid = document.getElementById("agentSingle-grid")
  grid.innerHTML = agentHTML

  
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

