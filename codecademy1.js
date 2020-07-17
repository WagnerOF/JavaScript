var filme = prompt("Escolha um filme:");

var getReview = function (movie) {
    if (movie === "Toy Story 2") {
        alert("Grande história. Mineiro ruim.");
    } else if (movie === "Procuraodo Nemo") {
        alert("Animação legal e tartarugas engracadas.");
    } else if (movie === "O Rei Leao") {
        alert("Grandes musicas.");
    } else {
        alert("Eu nao sei!");
    };
};

getReview(filme);