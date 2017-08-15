
const URL = "https://itunes.apple.com/search?term=";
var input = document.querySelector("#input");
var submit = document.querySelector("#submit");
var resultsDisplay = document.querySelector(".mainContent");
var audio = document.querySelector("audio");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let userInput = input.value;
  axios.get(URL + userInput)
    .then(function (response) {
      let results = response.data.results;
      populateHTML(results)
    });
});

resultsDisplay.addEventListener("click", function (e) {

  audio.setAttribute("src", e.target.value);
  // audio.src = e.target.value;
})


function populateHTML(res) {
  resultsDisplay.innerHTML = " ";

  for (var i = 0; i < res.length; i++) {
    let data = res[i];
    let artistName = res[i].artistName;
    let albumArtwork = res[i].artworkUrl100;
    let trackName = res[i].trackName;
    let preview = res[i].previewUrl;

    resultsDisplay.innerHTML += `

  <div class="container-results">
    <div class="image-parent">
      <img src="${albumArtwork}">
    </div>

    <div class="content-parent">
      <p>${artistName}</p>
      <p>${trackName}</p>
     
      <button class="fa fa-play-circle-o fa-lg" type="button" value=${preview}> </button>
    

    </div>
  </div>
  `
  }
}
