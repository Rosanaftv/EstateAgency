const api = axios.create({
  baseURL: "https://face2facehomes.herokuapp.com/api",
  timeout: 2000
  })
  
  api.get('/properties',
    { headers: { token: localStorage.getItem('token') } })
  .then(response => {
    const allProp = response.data
    allProp.forEach(prop => {
      const grid = document.getElementById("prop-grid")
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
                  <a href="property-single.html?property_id=${prop._id}" class="link-a">Click here to view
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