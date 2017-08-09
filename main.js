var input = document.querySelector("#input");
var submit = document.querySelector("#submit");
var resultsDisplay = document.querySelector(".mainContent");

submit.addEventListener("click", function (e) {

  let url = "https://itunes.apple.com/search?term=";
  url += input.value;

  e.preventDefault();

  axios.get(url)
    .then(function (response) {
      let results = response.data.results;
      resultsDisplay.innerHTML = " ";

      for (var i = 0; i < results.length; i++) {
        let data = results[i];
        let artistName = results[i].artistName;
        let albumArtwork = results[i].artworkUrl100;
        let trackName = results[i].trackName;


        resultsDisplay.innerHTML += `

          <div class="container-results">
            <div class="image-parent">
              <img src="${albumArtwork}">
            </div>

            <div class="content-parent">
              <p>${artistName}</p>
              <p>${trackName}</p>
            </div>
          </div>
          `
      }

    });
});


