// Sert de template pour représenter une tuile
// Une tuile = un livre

// Devis : Chaque tuile d’un livre doit afficher son image, son titre, son prix et un bouton pour l’ajouter au panier

class Livre {
    constructor (conteneurHTML, image, titre, prix) {
        this._conteneurHTML = conteneurHTML;
        this._image = image;
        this._titre = titre;
        this._prix = prix;
        this._elementHTML = null;
    }

    creerTuile() {
        this._injecterHTML();
    }

    _injecterHTML() {
        const gabarit = 
        `
        <div class="tuile">
            <img src="${this._image}">
            <h3>${this._titre}</h3>
            <p>${this._prix}</p>
            <bouton>Ajouter</bouton>
        </div>
        `;

        this._conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
        this._elementHTML = this._conteneurHTML.lastElementChild;
    }
    
}

export default Livre;
