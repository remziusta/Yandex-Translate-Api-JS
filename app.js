//Prototype,Ajax,Callback

const selectList = document.getElementById("language");
const translateForm = document.getElementById("translate-form");
const textWord = document.getElementById("word");
eventListeners();


function eventListeners() {
    translateForm.addEventListener("submit", translateWord);
    //Change
    selectList.onchange = function () {
        // Arayüz İşlemleri

        ui.changeUI();
    }
}

const  ui = new UI();
const translate = new Translate(textWord.value,selectList.value);

function translateWord(e) {


    translate.changeParameters(textWord.value,selectList.value);
    translate.translateWord(function (err,response){
        if (err){
            //Response
            console.log(err);
        }else{
            ui.displayTranslate(response);
        }
    })
    e.preventDefault();

}