// 1. Progress circles

$('#circlecss').circleProgress({
    value: 0.75,
    size: 80,
    startAngle: 0,
    fill: {
        color: "#073d6e"
    }
});

$('#circlehtml').circleProgress({
    value: 0.85,
    size: 80,
    startAngle: 0,
    fill: {
        color: "#073d6e"
    }
});

$('#circlejs').circleProgress({
    value: 0.50,
    size: 80,
    startAngle: 0,
    fill: {
        color: "#073d6e"
    }
});

$('#circleps').circleProgress({
    value: 0.75,
    size: 80,
    startAngle: 0,
    fill: {
        color: "#073d6e"
    }
});

$('#circlein').circleProgress({
    value: 0.5,
    size: 80,
    startAngle: 0,
    fill: {
        color: "#073d6e"
    }
});

$('#circleil').circleProgress({
    value: 0.5,
    size: 80,
    startAngle: 0,
    fill: {
        color: "#073d6e"
    }
});

$('#circleph').circleProgress({
    value: 0.85,
    size: 80,
    startAngle: 0,
    fill: {
        color: "#073d6e"
    }
});

$('#circlevi').circleProgress({
    value: 0.95,
    size: 80,
    startAngle: 0,
    fill: {
        color: "#073d6e"
    }
});

// var el = $('.circle'),
//     inited = false;

// el.appear({
//     force_process: true
// });

// el.on('appear', function () {
//     if (!inited) {
//         el.circleProgress({
//             value: 0.7
//         });
//         inited = true;
//     }
// });

// 2. Filtres skills

let languagebtn = document.querySelector('.language');
let designbtn = document.querySelector('.design');
let otherbtn = document.querySelector('.others');
let allbtn = document.querySelector('.all');

let lang = document.querySelector('.lang');

let desi = document.querySelector('.desi');

let other = document.querySelector('.other');


languagebtn.addEventListener('click', () => {
    filterLan();
});
designbtn.addEventListener('click', () => {
    filterDes();
});
otherbtn.addEventListener('click', () => {
    filterOth();
});
allbtn.addEventListener('click', () => {
    filterAll();
});


function filterLan() {
    desi.classList.add('d-none');
    other.classList.add('d-none');
    lang.classList.remove('d-none');
}

function filterDes() {
    lang.classList.add('d-none');
    other.classList.add('d-none');
    desi.classList.remove('d-none');
}

function filterOth() {
    lang.classList.add('d-none');
    desi.classList.add('d-none');
    other.classList.remove('d-none');
}

function filterAll() {
    other.classList.remove('d-none');
    lang.classList.remove('d-none');
    desi.classList.remove('d-none');
}

// 3. Filtres portfolio

let butweb = document.querySelector('.butweb');
let butdesign = document.querySelector('.butdesign');
let butother = document.querySelector('.butother');
let butall = document.querySelector('.butall');

butdesign.addEventListener("click", function () {

    let port = document.querySelectorAll(".foli");

    for (var i = 0; i < port.length; i++) {

        if (port[i].classList.contains("portdesign")) {
            document.querySelectorAll(".foli")[i].style.display = "initial";

        } else {
            document.querySelectorAll(".foli")[i].style.display = "none";
        }
    }
})

butweb.addEventListener("click", function () {

    let port = document.querySelectorAll(".foli");

    for (var i = 0; i < port.length; i++) {

        if (port[i].classList.contains("portweb")) {
            document.querySelectorAll(".foli")[i].style.display = "initial";

        } else {
            document.querySelectorAll(".foli")[i].style.display = "none";
        }
    }
})

butall.addEventListener("click", function () {

    let port = document.querySelectorAll(".foli");

    for (var i = 0; i < port.length; i++) {

        if (port[i].classList.contains("foli")) {
            document.querySelectorAll(".foli")[i].style.display = "initial";

        }
    }
})
butother.addEventListener("click", function () {

    let port = document.querySelectorAll(".foli");

    for (var i = 0; i < port.length; i++) {

        if (port[i].classList.contains("other")) {
            document.querySelectorAll(".foli")[i].style.display = "initial";

        } else {
            document.querySelectorAll(".foli")[i].style.display = "none";
        }
    }
})

// 4. Submit button


$(function () {
    $("#button").click(function () {
        $("#button").addClass("onclic", 250);
        validate();
    });

    function validate() {
        setTimeout(function () {
            $("#button").removeClass("onclic");
            $("#button").addClass("validate", 450);
            callback();
        }, 2200);
    }

    function callback() {
        setTimeout(function () {
            $("#button").removeClass("validate");
        }, 2250);
    }
});