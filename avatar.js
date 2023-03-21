const aventuriersLocal = [
    {
        "id": "1",
        "nom": "Oral Schmeler IV",
        "couleur": "#6c6b67",
        "avatar" : "http://placeimg.com/640/480/fashion"
    },
    {
        "id": "2",
        "nom": "Tad McLaughlin",
        "couleur": "#5d5c62",
        "avatar" : "http://placeimg.com/640/480/animals"
    },
    {
        "id": "3",
        "nom": "Matteo Wunsch",
        "couleur": "#454f41",
        "avatar" : "http://placeimg.com/640/480/technics"
    },
    {
        "id": "4",
        "nom": "Jack Beahan MD",
        "couleur": "#386b1f",
        "avatar" : "http://placeimg.com/640/480/abstract"
    }
];

function AfficherAventurier(id, nom, couleur, avatar){
    $('#aventuriers').append(
        `<div class="aventurier" style="background-color: ${couleur}">
            <img src="${avatar}" alt="avatar">
            <p>${id}</p>
            <p>${nom}</p>
            <p>${couleur}</p>
            <p>${avatar}</p>
        </div>`
    );
}
const aventuriers = JSON.parse(localStorage.getItem('aventuriers')) || aventuriersLocal;
const ListeAventuriers = JSON.parse(localStorage.getItem('ListeAventuriers')) || [];
localStorage.setItem('aventuriers', JSON.stringify(aventuriers));
for(aventurier of aventuriers){
    AfficherAventurier(aventurier.id, aventurier.nom, aventurier.couleur, aventurier.avatar);
}