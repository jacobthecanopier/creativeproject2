document
  .getElementById("random-fax-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("clicking button");
    const url = "https://uselessfacts.jsph.pl/random.json?language=en";
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);
        let results = "";
        results += json.text;
        console.log(results);
        document.getElementById("random-fax").innerHTML = results;
      });
  });

document
  .getElementById("advice-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("clicking button");
    const url = "https://api.adviceslip.com/advice";
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);
        let results = "";
        results += json.slip.advice;
        console.log(results);
        document.getElementById("free-advice").innerHTML = results;
      });
  });
