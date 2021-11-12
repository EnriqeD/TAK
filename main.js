
var IsOn = false;
var body = document.getElementsByTagName("body");

function fontSize() {
    if (IsOn) {
        body[0].classList.remove("fontSize");
        IsOn = false;
    } else {
        body[0].classList.add("fontSize");
        IsOn = true;
    }
};

var IsOnn = false;
var elements = document.getElementsByClassName('contrast');

function contrast() {

    if (IsOnn) {
        elements[0].classList.remove("contr-bg")

        for (var i = 1; i < elements.length - 1; i++) {
            elements[i].classList.remove("contr-bg");
            elements[i].classList.remove("contr-text")
        }
        IsOnn = false;
    } else {
        elements[0].classList.add("contr-bg")

        for (var i = 1; i < elements.length - 1; i++) {
            elements[i].classList.add("contr-bg");
            elements[i].classList.add("contr-text")
        }
        IsOnn = true;
    }
};