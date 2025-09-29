import Livre from "./Livre.js";

// Sert de template pour la boite modale d'un livre
class LivreModale extends Livre {
    constructor(conteneurHTML, image, titre, prix) {
        super(conteneurHTML, image, titre, prix);
        // Ajoute la description tel que montré dans la maquette
        this._description = description;
    }

    // Sert à ouvrir la tuile
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