function Translate(word, language) {

    this.apikey = "trnsl.1.1.20200519T193904Z.f0d5080ce0d87ad2.888b27480efbc8801788c330895dbc79c9fac1db";
    this.word = word;
    this.language = language;

    //XHR object

    this.xhr = new XMLHttpRequest();

}
Translate.prototype.translateWord = function (callback) {
    //Ajax İşlemleri
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET",endpoint);

    this.xhr.onload = () => {
        if (this.xhr.status === 200){
            // console.log(JSON.parse(this.xhr.responseText.text[0]);
            const json  = JSON.parse(this.xhr.responseText);

            const text = json.text[0];

            callback(null,text);

        }else{
            callback("Bir hata oluştu",null);
        }
    }

    this.xhr.send();

};

Translate.prototype.changeParameters = function (newWord,newLanguage) {
this.word = newWord;
this.language = newLanguage;
}