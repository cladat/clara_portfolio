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

// 2. Filtres

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