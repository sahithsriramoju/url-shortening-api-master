//var shorturl = require('node-url-shortener');
var DOMStrings ={
    inputValue:'.shorten-link',
    headerBtn: '.header__menu-button',
    menuVisible: '.menu-visible',
    shortenBtn: '.shorten-btn',
    form: '#shorten-link-form',
    shortenError: '.shorten-link-error',
    container: '.container'
};
//console.log(DOMStrings['inputValue'])
function emptyFieldCheck(){
    let shortenLinkValue = document.querySelector(DOMStrings['inputValue']);
    let shortenLinkError = document.querySelector(DOMStrings['shortenError'])
    if(shortenLinkValue.value === ""){
        shortenLinkValue.classList.add('border-red');
        shortenLinkError.classList.add('shorten-link-error-visible')
    }
}
let headerbutton = document.getElementById("header__menu-button");
let body = document.querySelector("body");
headerbutton.addEventListener('click',function(){
    body.classList.toggle('menu-visible');
});


/*document.querySelector(DOMStrings.form).addEventListener('submit',function(e){
    e.preventDefault();
    console.log("script.js submit button hit")
    emptyFieldCheck();
});*/
