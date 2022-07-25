function submitAlert() {
    alert("Thank you for submiting");
}

function changeTitle(elementH3) {
    console.log(elementH3);
    elementH3.innerText = "Different Text";
}

function changeImg(imageTag) {
    imageTag.src = "images/icon2.png";
}

function returnImg(imageTag) {
    imageTag.src = "images/icon.png";
}

function changeColor(aTag) {
    aTag.style.color = "red";
}

function originalColor(aTag){
    aTag.style.color = "#4C5FD5";
}

function returnTitle(element) {
    element.innerText = "Using Abstract";
}

function changeH2() {
    var elementH2 = document.querySelector("h2"); 
    elementH2.innerText = "How can we help you, Elena?";

    var submitButton = document.querySelector("#submit");
    submitButton.style.background = "blue";
}

function switchClasses() {
    var helpSpan = document.querySelector("#help-text");

    if(helpSpan.classList.contains('italic')) { /*I'm asking if the helpSpan has italic class */
        helpSpan.classList.remove('italic');
    } else {
        helpSpan.classList.add('italic');
    }

    //helpSpan.classList.add('italic');
}

function searching(inputSearch) {
    /* inputSearch = '<input id="search" type="text" placeholder="Search" onchange="searching(this)">' */
    var valueInput = inputSearch.value; /* valueInput = "buttons" */
    var spanLookingFor = document.querySelector('#looking-for'); 
    /* spanLookingFor = '<span id="looking-for"></span>' */
    spanLookingFor.innerText = valueInput;

    /*
    var idElement = document.querySelector('#id');
    var classElement = document.querySelector('.class');
    var element = document.querySelector('element');
    */

}