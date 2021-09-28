function mudarCor() {
    var cor_aleatoria = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('cor').style.backgroundColor = '#' + cor_aleatoria;
    document.querySelector('.hex').innerHTML = '#' + cor_aleatoria;
}