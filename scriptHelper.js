// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    let missionTarget = document.getElementById("missionTarget");
//    Here is the HTML formatting for our mission target div.
   
//                 <h2>Mission Destination</h2>
//                 <ol>
//                     <li>Name: </li>
//                     <li>Diameter: </li>
//                     <li>Star: ${star}</li>
//                     <li>Distance from Earth: </li>
//                     <li>Number of Moons: </li>
//                 </ol>
//                 <img src="">
  
}


    
function validateInput(input) {
    //check is string is empty
    if ((input) === "") {
     return "Empty";
      }
      //check "not" is not a number
     else if (!isNaN(input)){
         return "Is a number";
     } 
     else return "Is not a number";
     
 };
function formSubmission(document, list, pilotName, coPilotName, fuelLevel, cargoMass) {
    

    if (validateInput(pilotName.value) === "Empty" || validateInput(coPilotName.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoMass.value) === "Empty")
        {
        alert("All fields are required!");
    }
    else if(
        validateInput(fuelLevel.value) ==="Is not a number" || validateInput(cargoMass.value) === "Is not a number"
    ) {
        alert("Cargo Mass and Fuel Level Inputs must be a number");
    } else{
    // DOM elements for updating shuttle requirements
    // pilotStatus, coPilotStatus, fuelStatus, cargoStatus
    // list/faulty items
    
        let launchStatus = document.getElementById("launchStatus");
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");

        pilotStatus.innerHTML =`Pilot ${pilotName.value} is ready for launch`;
        copilotStatus.innerHTML = `CoPilot ${coPilotName.value} is ready for launch`;
        fuelStatus.innerHTML = `Fuel Status passes checks.`;
        cargoStatus.innerHTML = `Cargo status passes checks`
//output for fuel level below 10000
        if(fuelLevel.value <10000) {
            list.style.visibility ="visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            fuelStatus.innerHTML = "Fuel level too low for launch";
        }
        //output for cargo mass above 10000
        if(cargoMass.value > 10000) {
            list.style.visibility ="visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "#C7254E";
            fuelStatus.innerHTML = "Cargo mass too heavy for launch";
        }
        if (cargoMass.value <= 10000 && fuelLevel.value >= 10000){
            list.style.visibility ="visible";
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "#419F6A";
           
        }

    }
}           


   
   
 


async function myFetch() {
    let planetsReturned;

   planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
    return response.json();   
});

    return planetsReturned;
}

function pickPlanet(planets) {
    let planet =planets[Math.floor(Math.random() * planets.length_)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
