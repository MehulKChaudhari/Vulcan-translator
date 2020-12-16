var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('btn-input');
var OutputDiv = document.querySelector('#output');

var serverURL = "https://api.funtranslations.com/translate/vulcan.json";

function getTranslationURL(text){
    return serverURL + "?" +"text=" + txtInput;
}

function errorHandler(error){
    console.log("Hey there's error occured", error);
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText=  json.contents.translated;
        OutputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
}
btnTranslate.addEventListener("click", clickHandler)