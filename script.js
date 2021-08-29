

window.addEventListener("load", function() {

   let listedPlanets 
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
  
   
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       const planet = pickPlanet(listedPlanets);
       let name= planet.name; 
       let diameter= planet.diameter; 
       let star= planet.star; 
       let distance=planet.distance; 
       let moons= planet.moons; 
       let imageUrl = planet.image; 

       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
       

       
   });
   
});



window.addEventListener("load", function(){
    let form = document.querySelector('[data-testid="testForm"]');
    let list = document.querySelector('[data-testid="faultyItems"]');
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot= document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel= document.querySelector("input[name=cargoMass]");
        
    form.addEventListener("submit",  function(event){
        event.preventDefault();
        formSubmission (document,list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
        
    });
});



