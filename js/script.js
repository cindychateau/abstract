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