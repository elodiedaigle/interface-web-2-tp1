import Livre from "./Livre.js";

// Sert de template pour la boite modale d'un livre
class LivreModale extends Livre {
    constructor(conteneurHTML, image, titre, prix, auteur, editeur, pages, description) {
        super(conteneurHTML, image, titre, prix);
        // Ajoute les informations montrées dans la maquette
        this._auteur = auteur;
        this._editeur = editeur;
        this._pages = pages;
        this._description = description;
    }

    // Sert à ouvrir la boite modale
    ouvrir() {
        // À faire plus tard
    }

    // Sert à fermer la tuile
    fermer() {
        // À faire plus tard
    }

    bloquerDefilement() {
        // À faire plus tard
    }
}

export default LivreModale;