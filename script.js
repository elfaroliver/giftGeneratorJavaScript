/***  
 * Script for random gift generator
 * I'm leaving the mistakes in for posterity(and my own shame)
 * As is, not possible to fetch the API from a Steam user's wishlist, so everything was input by hand
 * When all was said and done, that took the least amount of time in this project, as visible my amount of commented out code
 * Comments and documentation is in English, as Icelandic is not a widely spoken language
 * 
 */

const arrayOfCheapGames = ["Sir Whoopass", "Terraria", "Granny: Escape Together", "Twelve Minutes", "Backrooms: Escape Together", 
  "Vampires Dawn 3", "Fears to Fathom: Woodbury Getaway", "Undertale", "Fears to Fathom: Ironbark Lookout"]; // 9.99 or less
  
const arrayOfGifts = ["Grunn", "Death and Taxes", "Mouthwashing", "MiSide", "Chrono Trigger", "Wanted Raccoon", "Stray", "Cozy Caravan", 
  "Layers of Fear(2016)", "Inside", "Tactical Breach Wizards", "Dead by Daylight", "Superliminal", "Dragon Ball Z: Kakarot", "Dead Space 3", 
  "Kindergarten 3", "Resident Evil", "Darq: Complete Edition", "Into the Dead: Our Darkest Days", "Hades", "Layers of Fear", 
  "Date Everything", "Visage",];

const giftButton = document.getElementById("giftButton");

let totalGames = 0;
//let cheapGameCount = 0;
//let expGameCount = 0;

let cheapGameGiven = false;

giftButton.addEventListener("click", () => {
  //const randomIndex = Math.floor(Math.random() * arrayOfGifts.length && arrayOfCheapGames.length);
  //const selectedGift = arrayOfGifts[randomIndex] && arrayOfCheapGames[randomIndex];

  if (totalGames >= 2) {
    //alert(`Happy birthday! Have fun playing ${selectedGift}!`);
    giftButton.disabled = true; // lock the button
    return;
  } /*else if (arrayOfGifts.includes(selectedGift)) {
    alert(`Happy birthday! Have fun playing ${selectedGift}!`);
  }*/

  const allItems = [...arrayOfGifts, ...arrayOfCheapGames];
  const randomIndex = Math.floor(Math.random() * allItems.length);
  const selectedGift = allItems[randomIndex];

  totalGames++;

  if (arrayOfGifts.includes(selectedGift)) {
    alert(`You got a spicier and pricier game: ${selectedGift}! Lucky you — and that’s the end.`);
    giftButton.disabled = true;
    totalGames = 2; // Ensure no more games can be drawn
    return;
  } else if (arrayOfCheapGames.includes(selectedGift)) {
    if (cheapGameGiven) {
      alert(`You got another cheap game: ${selectedGift}. That’s all you get!`);
      giftButton.disabled = true;
    } else {
      cheapGameGiven = true;
      alert(`You got a cheap game: ${selectedGift}! You may try again for something better.`);
    }
  }
});

//alert(`You will receive: ${selectedGift}`);
  /*if (arrayOfCheapGames.includes(selectedGift)) {
    cheapGameCount++;
    if (cheapGameCount <= 2) {
      alert(`You will receive: ${selectedGift}! Rather cheap, have another!`);
      giftButton.disabled = true;
      return;
    }
  } else {
    expGameCount++;
    if (expGameCount === 1) {
      alert(`You will receive: ${selectedGift}! `);
      giftButton.disabled = true;
      return;
    }
    giftButton.disabled = true;
  }*/

 // Makes sure which array it pulls from
  /*if (arrayOfCheapGames.includes(selectedGift)) {
    alert(`You got a cheap game: ${selectedGift}! Have another go!`);
  } else if (arrayOfGifts.includes(selectedGift)) {
    alert(`You got a spicier and pricier game: ${selectedGift}! Lucky you!`);
  }

  if (arrayOfGifts.includes(selectedGift)) { 
    alert(`You got a spicier and pricier game: ${selectedGift}! Lucky you!`);
  } else if (arrayOfCheapGames.includes(selectedGift)) {
    alert(`You got a cheap game: ${selectedGift}! Have another go!`);
  }

  // Max of two games
  if (totalGames >= 2) {
    giftButton.disabled = true;
  }*/

  /*if (arrayOfCheapGames.includes(selectedGift)) {
    if (cheapGameGiven) {
      alert(`You got another cheap game: ${selectedGift}. That’s all you get!`);
      giftButton.disabled = true;
    } else {
      cheapGameGiven = true;
      alert(`You got a cheap game: ${selectedGift}! You may try again for something better.`);
      giftButton.disabled = true;
    }
  } else {
    alert(`You got a spicier and pricier game: ${selectedGift}! Lucky you — and that’s the end.`);
    giftButton.disabled = true;
    return;
  }*/
