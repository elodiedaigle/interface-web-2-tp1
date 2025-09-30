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

    // Évenements

    creerTuile() {
        this._injecterHTML();
    }

    _clickTuile(evenement) {
        if (evenement.target.closest("button")) return;
    } // Si l'élément sélectioner est un bouton (ou a un parent bouton), on arrête, si non, c'est clicable
    // J'ai cherché pas à peu près comment arriver à ça haha
    // Source : https://developer.mozilla.org/fr/docs/Web/API/Element/closest

    // Sert à ajouter une tuile

    _injecterHTML() {
        const gabarit = 
        `
        <div class="tuile">
            <img src="${this._image}">
            <h3>${this._titre}</h3>
            <p>${this._prix}$</p>
            <button>Ajouter</button>
        </div>
        `;

        this._conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
        this._elementHTML = this._conteneurHTML.lastElementChild;

        // Écouteurs d'événement pour que la tuile soit clicable pour ouvrir la modale
        
        this._elementHTML.addEventListener("click", this._clickTuile.bind(this));
        }
}

export default Livre;
