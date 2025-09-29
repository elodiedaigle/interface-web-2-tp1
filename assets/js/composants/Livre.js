// Chaque tuile d’un livre doit afficher son image, son titre, son prix et un bouton pour l’ajouter au panier

class Livre {
    #conteneurHTML;
    #image;
    #titre;
    #prix;

    constructor (conteneurHTML, image, titre, prix) {
        this.#conteneurHTML = conteneurHTML;
        this.#image = image;
        this.#titre = titre;
        this.#prix = prix;
    }

    get image() {
        return this.#image;
    }

    get titre() {
        return this.#titre;
    }

    get prix() {
        return this.#prix;
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
