
axios
.get('http://localhost:3000/api/agents')
//{ headers: { token: localStorage.getItem('token') } })
.then(response => {
  const allAgents = response.data
  allAgents.forEach(agt =>{
    const grid = document.getElementById('agt-grid')
    const child = 
    `<div class="col-md-4">
          <div class="card-box-d">
            <div class="card-img-d">
              <img src="img/agent-4.jpg" alt="" class="img-d img-fluid">
            </div>
            <div class="card-overlay card-overlay-hover">
              <div class="card-header-d">
                <div class="card-title-d align-self-center">
                  <h3 class="title-d">
                    <a href="agent-single.html" class="link-two">${agt.name}
                      <br></a>
                  </h3>
                </div>
              </div>
              <div class="card-body-d">
                <p class="content-d color-text-a">
                  Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                </p>
                <div class="info-agents color-a">
                  <p>
                    <strong>Phone: </strong> ${agt.telephone}</p>
                  <p>
                    <strong>Email: </strong> ${agt.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>`
        grid.innerHTML += child
  })
  

})
