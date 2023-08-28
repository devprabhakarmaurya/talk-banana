const inputText = document.getElementById("inputText");
const translateButton = document.getElementById("translateButton");
const outputText = document.getElementById("outputText");

// const serverURL = 'https://api-testing.prabhakarmaury1.repl.co/translate/yoda.json';
 const serverURL= "https://api.funtranslations.com/translate/minion.json";
function getTranslatedURL(text){
  return serverURL +"?"+ "text="+ text
}

function errorHandler(error){
  console.log('Error occured:', error);
  alert('Something wrong with server. Try again later.');
}

function clickHandler(){

  let text = inputText.value;
  fetch(getTranslatedURL(text))
  .then(response => response.json())
  .then(data => {
    const translatedText = data.contents.translated;
    outputText.innerText = translatedText;
  })
  .catch(errorHandler);   

}

translateButton.addEventListener("click", clickHandler);