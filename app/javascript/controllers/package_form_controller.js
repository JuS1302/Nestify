import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="package-form"
export default class extends Controller {
  static targets = ["firstQuestion", "secondQuestion", "thirdQuestion", "sliderSalon", "sliderChambre", "sliderSdb", "sliderCuisine"]

  // Function to show the second question
  displaySecondQuestion() {
    this.firstQuestionTarget.classList.add("d-none");
    this.secondQuestionTarget.classList.remove("d-none");
  }

  // Function to show the third question
  displayThirdQuestion() {
    this.secondQuestionTarget.classList.add("d-none");
    this.thirdQuestionTarget.classList.remove("d-none");
  }

  // Function to display the slider when Salon checkbox is checked
  displaySliderSalon(event) {
    const isChecked = event.target.checked;
    const room = "salon"
    if (isChecked) {
      this.sliderSalonTarget.classList.remove("d-none");
      this.initializeSliders(room); // Initialize sliders when they become visible
    } else {
      this.sliderSalonTarget.classList.add("d-none");
    }
  }

  // Function to display the slider when Chambre checkbox is checked
  displaySliderChambre(event) {
    const isChecked = event.target.checked;
    const room = "chambre"
    if (isChecked) {
      this.sliderChambreTarget.classList.remove("d-none");
      this.initializeSliders(room); // Initialize sliders when they become visible
    } else {
      this.sliderChambreTarget.classList.add("d-none");
    }
  }

 // Function to display the slider when Salle de bain checkbox is checked
 displaySliderSdb(event) {
  const isChecked = event.target.checked;
  const room = "sdb"
  if (isChecked) {
    this.sliderSdbTarget.classList.remove("d-none");
    this.initializeSliders(room); // Initialize sliders when they become visible
  } else {
    this.sliderSdbTarget.classList.add("d-none");
  }
}

 // Function to display the slider when Cuisine checkbox is checked
 displaySliderCuisine(event) {
  const isChecked = event.target.checked;
  const room = "cuisine"
  if (isChecked) {
    this.sliderCuisineTarget.classList.remove("d-none");
    this.initializeSliders(room); // Initialize sliders when they become visible
  } else {
    this.sliderSdbCuisine.classList.add("d-none");
  }
}

  // Initialize sliders
  initializeSliders(room) {
    // Reassign slider elements dynamically
    const sliderOne = document.getElementById(`slider-${room}-1`);
    const sliderTwo = document.getElementById(`slider-${room}-2`);
    const displayValOne = document.getElementById(`range-${room}-1`);
    const displayValTwo = document.getElementById(`range-${room}-2`);
    const sliderTrack = document.querySelector(`.slider-${room}-track`);
    const sliderMaxValue = sliderOne.max;
    const minGap = 300;

    function slideOne() {
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
      }
      displayValOne.textContent = sliderOne.value;
      fillColor();
    }

    function slideTwo() {
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
      }
      displayValTwo.textContent = sliderTwo.value;
      fillColor();
    }

    function fillColor() {
      const percent1 = (sliderOne.value / sliderMaxValue) * 100;
      const percent2 = (sliderTwo.value / sliderMaxValue) * 100;
      sliderTrack.style.background = `linear-gradient(to right, #D9D9D9 ${percent1}%, #92CAD7 ${percent1}%, #92CAD7 ${percent2}%, #D9D9D9 ${percent2}%)`;
    }

    // Attach event listeners to the sliders
    sliderOne.addEventListener("input", slideOne);
    sliderTwo.addEventListener("input", slideTwo);

    // Initialize slider values and colors
    slideOne();
    slideTwo();
  }
}

// Remove window.onload as Stimulus takes care of initializing behaviors

