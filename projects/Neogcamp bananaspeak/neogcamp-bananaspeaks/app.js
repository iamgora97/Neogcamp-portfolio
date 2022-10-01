// To use : https://api.funtranslations.com/translate/minion.json
// To use : https://api.funtranslations.com/translate/groot.json

//Mock server : https://repl.it/@tanaypratap/lessonfourapi

var translateButton = document.querySelector("#banana-button");

translateButton.addEventListener("click", buttonClickHandler)

//input
var translateInput = document.querySelector("#banana-input");

//output
var translateOutput = document.querySelector("#banana-output");

var url = "https://api.funtranslations.com/translate/minion.json"


function buttonClickHandler(event) {
    console.log("Button clicked");
    var input = translateInput.value;
    var finalURL = url + "?text=" + input;
    console.log(finalURL);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            translateOutput.innerText = json.contents.translated;
        })
    //error handling
        .catch(() => alert("some error occured"))
}
