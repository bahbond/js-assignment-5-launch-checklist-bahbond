// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    let missionTarget = document.getElementById("missionTarget");
 //  Here is the HTML formatting for our mission target div.
   missionTarget.innerHTML =`

   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">
                `
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
     else return "Not a number";
     
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
//Launch Checklist ready to go
        list.style.visibility = "visible";
        launchStatus.style.color = "rgb(65, 159, 106)";
        launchStatus.innerHTML = "Shuttle is Ready for Launch"
        pilotStatus.innerHTML =`Pilot ${pilotName.value} is ready for launch`;
        copilotStatus.innerHTML = `CoPilot ${coPilotName.value} is ready for launch`;
        fuelStatus.innerHTML = 'Fuel level high enough for launch';
        cargoStatus.innerHTML = 'Cargo mass low enough for launch';

        if(fuelLevel.value <10000) {
            list.style.visibility ="visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
            fuelStatus.innerHTML = "Fuel level too low for launch";
        }
        //output for cargo mass above 10000
        if(cargoMass.value >= 10000) {
            list.style.visibility ="visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "#C7254E";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        }
        //output for fuel level below 10000 and cargo above 10000
        //output for READY FOR LAUNCH
        if (cargoMass.value <= 10000 && fuelLevel.value >= 10000){
            list.style.visibility ="visible";
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "#419F6A";
            cargoStatus.innerHTML = 'Cargo mass low enough for launch';
            fuelStatus.innerHTML = 'Fuel level high enough for launch';
         }
        //  Output for Cargo high fuel too low
        if (cargoMass.value >=10000 && fuelLevel <= 10000){
            list.style.visibility ="visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = 'rgb(199, 37, 78)';
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo Mass too heavy for launch";
             }
       
    }
}           


   
   
 


async function myFetch() {
    
let response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
let planetsReturned = await response.json();

//  let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
//      response.json() .then(function(json){
//         console.log(json);
//      })
// });

    return planetsReturned;
}

function pickPlanet(planets) {
    let planet = planets[Math.floor(Math.random() * planets.length)];
    console.log(planets);
return planet;
}
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
