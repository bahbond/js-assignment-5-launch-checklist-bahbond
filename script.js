// Write your JavaScript code here!





//const { formSubmission } = require("./scriptHelper");
window.addEventListener("load", function() {
    

    

   let listedPlanets;
   //Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let displayPlanet = pickPlanet(listedPlanets);
       console.log(displayPlanet);
       addDestinationInfo(document, displayPlanet.name, displayPlanet.diameter, displayPlanet.star, displayPlanet.distance, displayPlanet.moons, displayPlanet.image);
   })
   
   let list =document.getElementById("faultyItems");
   let form = document.querySelector("form");
    form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let pilotName = document.getElementById("pilotName");
    let coPilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    formSubmission(document, list, pilotName, coPilotName, fuelLevel, cargoMass);
    });
});