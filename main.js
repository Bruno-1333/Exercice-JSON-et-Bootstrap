function Avatar(id = 0, nom = "", couleur = "", avatar = "") {
    this.id = id;
    this.nom = nom;
    this.couleur = couleur;
    this.avatar = avatar;
}

function stockage(){
    //Aller chercher les données
    const id = $('#id').val();
    const nom = $('#nom').val();
    const couleur = $('#couleur').val();
    const avatar = $('#avatar').val();
    //Créer un objet
    const aventurier = new Avatar(id, nom, couleur, avatar);
    //Stocker l'objet dans le stockage local
    localStorage.setItem('aventurier', JSON.stringify(aventurier));
    return true;
}
