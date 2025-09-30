// Sert de template pour représenter une tuile
// Une tuile = un livre

// Devis : Chaque tuile d’un livre doit afficher son image, son titre, son prix et un bouton pour l’ajouter au panier

class Livre {
    #conteneurHTML;
    #image;
    #titre;
    #prix;
    #elementHTML;

    constructor (conteneurHTML, image, titre, prix) {
        this.#conteneurHTML = conteneurHTML;
        this.#image = image;
        this.#titre = titre;
        this.#prix = prix;
        this.#elementHTML = null;
    }

    // Getters et Setters

    get image() {
        return this.#image;
    }

    set image(nouvelleImage) {
        this.#image = nouvelleImage;
        this.#image.querySelector(".tuile_image").src = this.#image;
    }

    get titre() {
        return this.#titre;
    }

    set titre(nouveauTitre) {
        this.#titre = nouveauTitre;
        this.#elementHTML.querySelector(".tuile_titre").textContent = this.#titre;
    }

    get prix() {
        return this.#prix;
    }

    set prix(nouveauPrix) {
        this.#prix = nouveauPrix;
        this.#elementHTML.querySelector(".tuile_prix").textContent = `${this.#prix}$`;
    }

    get conteneurHTML() {
        return this.#conteneurHTML;
    }

    set conteneurHTML(nouveauConteneur) {
        this.#conteneurHTML = nouveauConteneur;
    }

    get elementHTML() {
        return this.#elementHTML;
    }

    set elementHTML(nouvelElement) {
        this.#elementHTML = nouvelElement;
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
            <img class="tuile_image" src="${this.#image}">
            <h3 class="tuile_titre">${this.#titre}</h3>
            <p class="tuile_prix">${this.#prix}$</p>
            <button class="tuile_bouton">Ajouter</button>
        </div>
        `;

        this.#conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
        this.#elementHTML = this.#conteneurHTML.lastElementChild;

        // Écouteurs d'événement pour que la tuile soit clicable pour ouvrir la modale
        
        this.#elementHTML.addEventListener("click", this._clickTuile.bind(this));
        }
}

export default Livre;
