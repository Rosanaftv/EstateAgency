const api = axios.create({
  baseURL: "https://face2facehomes.herokuapp.com/api",
  timeout: 2000
  })
window.onload = function () {
const params = new URLSearchParams(window.location.search)
const property_id = params.get('property_id')
api
.get(`/properties/${property_id}`,
{ headers: { token: localStorage.getItem('token') } })
.then(response => {
  console.log(response.data)
  document.getElementById('type').innerText = response.data.type
  document.getElementById("location").innerText = response.data.location
  document.getElementById('m2').innerText = response.data.m2
  document.getElementById('bathrooms').innerText = response.data.bathrooms
  document.getElementById('bedrooms').innerText = response.data.bedrooms
  document.getElementById('price').innerText = response.data.price
  document.getElementById('description').innerText = response.data.description
  document.getElementById('image').src = `img/${response.data.image}`
  document.getElementById('property_id').innerText = response.data.property_id
})

    
api
.get('/agents/me',
{ headers: { token: localStorage.getItem('token') } })
.then(response => {
  const agent = response.data
  const agentHTML = 
  ` <div class="row">
  <div class="col-md-6 col-lg-4">
    <img src="img/${agent.image}" alt="img/agent-4.jpg" class="img-fluid">
  </div>
  <div class="col-md-6 col-lg-4">
    <div class="property-agent">
      <h4 class="title-agent">${agent.name}</h4>
      <p class="color-text-a">
        Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
        dui. Quisque velit nisi,
        pretium ut lacinia in, elementum id enim.
      </p>
      <ul class="list-unstyled">
        <li class="d-flex justify-content-between">
          <strong>Phone:</strong>
          <span class="color-text-a">${agent.telephone}</span>
        </li>
        <li class="d-flex justify-content-between">
          <strong>Email:</strong>
          <span class="color-text-a">${agent.email}</span>
        </li>
      </ul>
      </div>
    </div>
  </div>`
  const grid = document.getElementById("agentSingle-grid")
  grid.innerHTML = agentHTML
})
}