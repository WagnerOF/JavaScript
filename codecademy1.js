var filme = prompt("Escolha um filme:");

var getReview = function (movie) {
    if (movie === "Star Wars") {
        alert("May the force be with you");
    } else if (movie === "Mad Max") {
        alert("The road warrior");
    } else if (movie === "Aliens") {
        alert("I´m a passenger...");
    } else {
        alert("Em breve, mais opções...");
    };
};

getReview(filme);