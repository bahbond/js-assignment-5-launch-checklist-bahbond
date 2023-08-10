// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
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
     else if (!isNaN(Number(input))){
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
    }
    //DOM elements for updating shuttle requirements
    else{
        let pilotStatus = document.getElementById("pilotStatus");
        pilotStatus.innerHTML =`Pilot ${pilotName} is ready for launch`;
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
