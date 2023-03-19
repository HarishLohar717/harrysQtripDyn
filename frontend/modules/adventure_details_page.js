import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  const advId = new URLSearchParams(search);
  // Place holder for functionality to work in the Stubs
  // console.log(advId.get("adventure"));
  return advId.get("adventure");
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  try{
    const responseP = await fetch(config.backendEndpoint+`/adventures/detail/?adventure=${adventureId}`);
    const responseD = await responseP.json();
    // console.log(responseD);
    return responseD;
  }
 catch(e){
  return null;
 }
  // Place holder for functionality to work in the Stubs
  
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
  document.getElementById("adventure-name").innerHTML = adventure.name;
  document.getElementById("adventure-subtitle").innerHTML = adventure.subtitle; 
  // const phgalElem = document.getElementById("photo-gallery");
  // adventure["images"].forEach(element => {
  //   const div = document.createElement("div");
  //   div.innerHTML =`
  //   <img class="activity-card-image" src=${element}>
  // `
  //   phgalElem.appendChild(div);
  // });
  document.getElementById("adventure-content").innerHTML= adventure.content;
}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // console.log(images);
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images
  // global div ===>
  const carouselGlobalDiv = document.createElement("div");
  carouselGlobalDiv.setAttribute("id","carouselExampleControls");
  carouselGlobalDiv.className="carousel slide";
  carouselGlobalDiv.setAttribute("data-bs-ride","carousel");
  // console.log(carouselGlobalDiv);
 // carousel indicators ===>
  const carouselIndDiv = document.createElement("div");
  carouselIndDiv.className = "carousel-indicators";
  // console.log(carouselIndDiv);
  let btn="";
  for (let i=0;i<images.length;i++){
        if(i!=0){   
          btn+=`<button type="button" 
          data-bs-target="#carouselExampleControls" 
          data-bs-slide-to=${i}>
          </button>
          `   
        }
        else {
          btn+=`<button type="button" 
          data-bs-target="#carouselExampleControls" 
          data-bs-slide-to=${i}
          class="active" 
          aria-current="true">
          </button>
          `  
        }
      }
      carouselIndDiv.innerHTML=btn;
      // console.log(carouselIndDiv);
    // carousel Inner ===>
    const carInn = document.createElement("div");
    carInn.className = "carousel-inner";
    let carItem='';
    for (let i=0;i<images.length;i++){
      if(i!=0){   
        carItem+=`<div class="carousel-item">
        <img
          src=${images[i]}
          class="d-block w-100"
          alt=${i}
        />
      </div>`
      }
      else {
        carItem+=`<div class="carousel-item active">
        <img
          src=${images[i]}
          class="d-block w-100"
          alt=${i}
        />
      </div>`
      }
    }
    carInn.innerHTML=carItem;
    // console.log(carInn);
    // carousel Icons ==>
    const carIconDiv = document.createElement("div");
    carIconDiv.innerHTML=`
    <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    `
    carouselGlobalDiv.append(carouselIndDiv);
    carouselGlobalDiv.append(carInn);
    carouselGlobalDiv.append(carIconDiv);
    // console.log(typeof(carouselGlobalDiv));
    const phgry = document.getElementById("photo-gallery"); 
    phgry.appendChild(carouselGlobalDiv);
  }




//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field

}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
