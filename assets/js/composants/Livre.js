// Sert de template pour représenter une tuile
// Une tuile = un livre

// Devis : Chaque tuile d’un livre doit afficher son image, son titre, son prix et un bouton pour l’ajouter au panier

class Livre {
    constructor (conteneurHTML, image, titre, prix) {
        this._conteneurHTML = conteneurHTML;
        this._image = image;
        this._titre = titre;
        this._prix = prix;
    }

    creerTuile() {
        // À faire plus tard
    }

    // Permet d'injecter le gabarit de la tuile 

    #injecterHTML() {
        const gabarit = `
        
        ` // À faire plus tard
    }
    
}

export default Livre;
