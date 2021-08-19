// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});

window.addEventListener("load", function(){
    let form = document.querySelector('testForm');
    form.addEventListener("submit", function(event){
        let pilotName= document.querySelector('input [name=pilotName]');
        let coPilotname= document.querySelector('input [name=copilotName]');
        let fuelLevel = document.querySelector('input [name=fuelLevel]');
        let cargoMass= document.querySelector('input [name=cargoMass]');
        if(pilotName.value == "" || coPilotname.value == "" || fuelLevel.value == "" || cargoMass.value == ""){
            window.alert ("All fields are required!");
            event.preventDefault();
        }
    });
});


