// TODO: add code here
window.addEventListener("load", function () {

    const container = document.getElementById("container");
    let astronauts = '';

    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response) {

    response.json().then(function(json) {

    for(let i = 0; i < json.length; i++) {
        astronauts += `
        <div class="astronaut">
          <div class="bio">
            <h3> ${json[i].firstName} ${json[i].lastName} </h3>
            <ul>
                <li>Hours in space : ${json[i].hoursInSpace}</li>
                <li>Active: ${json[i].active}</li>
                <li>Skills: ${json[i].skills}</li>
            </ul>
            
            </div>
                <img class="avatar" src="${json[i].picture}"></img>
            </div>
         </div>
        </div>
        `;
    }
    container.innerHTML = astronauts; 
    });
  });
});