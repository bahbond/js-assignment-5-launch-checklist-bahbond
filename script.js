// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper");
window.addEventListener("load", function() {
    let form = document.querySelector("form");

    form.addEventListener("submit", function(event){
        let pilotName = document.getElementById("pilotName");
        let coPilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
            if (pilotName.value === ""){
            alert("All Fields Required");
            //event.preventDefault();
            };
    });


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
   
});