
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

   let  missionTarget = document.getElementById("missionTarget");
   
  
   missionTarget.innerHTML=
   `         
   <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
              </div>`; 

    missionTarget.style.visibility ='visible'; 
                
   
}

function validateInput(testInput) {

 if (testInput === "")
  {
      return `Empty`; 
  }
  else if (isNaN(testInput))
  {
      return `Is not a number.`; 
  }
  else if (testInput === typeof Num)
  {
      return `Is a number`; 
  }
  
   
}



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

   
   
    launchStatus = document.querySelector('[data-testid="launchStatus"]');
    

    

 if (validateInput(pilot) === 'Empty' || 
  validateInput (copilot) === 'Empty'|| 
  validateInput (fuelLevel) === 'Empty' || 
  validateInput(cargoLevel) === 'Empty')
  {
   
    window.alert("All fields must be filled out!"); 
    preventDefault(); 
      
  }
  else if (isNaN(fuelLevel) || isNaN(cargoLevel))
  {
    window.alert("You must enter a number!"); 
    preventDefault();
  }

 if  (fuelLevel <10000 || cargoLevel >10000)
    {
        let listinProgress =""; 
        launchStatus.innerHTML = 
       `<div id="launchStatusCheck">
        <h2 id="launchStatus" data-testid="launchStatus" style="color:red">Shuttle not ready for launch</h2>`;
        listinProgress=
        `
            <ol>
                <li id="pilotStatus" data-testid="pilotStatus">Pilot ${pilot} is ready for launch.</li>
                <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} is ready for launch.</li>`;
        if (fuelLevel<10000){
            listinProgress+=`<li id="fuelStatus" data-testid="fuelStatus">There is not enough fuel for the journey.</li>`;}
        else {
            listinProgress+=`<li id="fuelStatus" data-testid="fuelStatus">Fuel level is good enough for launch.</li>`;
        }
        if(cargoLevel >10000){
           listinProgress+=` <li id="cargoStatus" data-testid="cargoStatus">Cargo mass is too high for launch.</li>`;}
        
        else{
            listinProgress+=`<li id="cargoStatus" data-testid="cargoStatus">Cargo mass is too low enough for launch.</li>`;
        }
        listinProgress+=`</ol>
        </div>`;
        list.innerHTML=listinProgress;
        list.style.visibility ='visible'; 
        
        //not ready for launch 

    }
    
    

    
    else if (fuelLevel >= 10000 && cargoLevel <=10000)
    {
        launchStatus.innerHTML = 
         `<h2 id="launchStatus" data-testid="launchStatus" style="color:green">Shuttle is ready for launch.</h2>`;
        //ready to launch 
    }
    else 
    {


        launchStatus.innerHTML = 
        `<h2 id="launchStatus" data-testid="launchStatus">Awaiting Information Before Launch</h2>`;
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
 
   
       for (i=0; i<planets.length; i++)
       {
        let randomPlanet = planets[Math.floor(Math.random() *planets.length)];
    
       return randomPlanet; 
       }
        
     

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
