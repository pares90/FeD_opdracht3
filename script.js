let counter = 0;

var requestURL = 'http://www.dennistel.nl/movies';





// ======================================================
//       XMLHttpRequest
// ======================================================

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var jsonObj = request.response;

  for (let i = 0; i < jsonObj.length; i++) { //for-loop die kijkt hoe veel elementen in het jsonObj zitten
    showMovie(jsonObj[i], i); //voer voor elke object de functie showMovie uit
  }
}




// ======================================================
//       PRINT THE DATA TO THE HTML
// ======================================================

function showMovie(item, index) { //functie showMovie die elke keer word aangeroepen, per film
  document.getElementById("header" + index).textContent = item.title;
  document.getElementById("genres" + index).textContent = item.genres;
  document.getElementById("releasedate" + index).textContent = item.release_date;
  document.getElementById("simpleplot" + index).textContent = item.simple_plot;
  document.getElementById("fullplot" + index).textContent = item.plot;
  document.getElementById("image" + index).src = item.cover;
}



// ======================================================
//       READ MORE FUCNTION
// ======================================================

function readMore(event) { // functie meer lezen
  let button = event.currentTarget; // kijk binnen de huidige target naar een event
  if (button.textContent === "Lees meer") { // als de button Lees meer bevat
    button.textContent = "Lees minder"; // maak er dan Lees minder van
  } else {
    button.textContent = "Lees meer";
  }
  let plot = event.currentTarget.parentElement.querySelector('.fullplot') // pak het element fullplot binnen de huidige target
  plot.classList.toggle('hideElement'); // toggle de class hideElement
}

let buttons = document.querySelectorAll('.readMore') //lees alle buttons met de class readMore
for (let i = 0; i < buttons.length; i++) { // for loop die alle buttons afloopt
  buttons[i].addEventListener('click', readMore) // klik-event listener op alle buttons
}


// ======================================================
//       LIKE FUNCTION
// ======================================================

let likebuttons = document.querySelectorAll('.like')
for (let i = 0; i < likebuttons.length; i++) {
  likebuttons[i].addEventListener('click', likeMovie)
}

function likeMovie(event) {
  let button = event.currentTarget;
  button.classList.toggle('clicked');
}

function showMovie(item, index) { //functie showMovie die elke keer word aangeroepen, per film
  document.getElementById("header" + index).textContent = item.title;
  document.getElementById("genres" + index).textContent = item.genres;
  document.getElementById("releasedate" + index).textContent = item.release_date;
  document.getElementById("simpleplot" + index).textContent = item.simple_plot;
  document.getElementById("fullplot" + index).textContent = item.plot;
  document.getElementById("image" + index).src = item.cover;
}



// ======================================================
//       ARROW UP/DOWN LISTENERS
// ======================================================

function checkKey(e) {
  if (e.keyCode == '37') { // left arrow
    goUp()
  } else if (e.keyCode == '39') { // right arrow
    goDown()
  }
}

function goUp() {
  if (counter > 0) {
    counter = counter - 1
    window.location.hash = '#' + counter;
  }
}

function goDown() {
  if (counter < 6) {
    counter = counter + 1
    window.location.hash = '#' + counter;
  }

}

document.onkeydown = checkKey;
