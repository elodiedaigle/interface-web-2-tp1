import Livre from "./Livre.js";

// Sert de template pour la boite modale d'un livre
class LivreModale extends Livre {
    #auteur;
    #editeur;
    #pages;
    #description;

    constructor(conteneurHTML, image, titre, prix, auteur, editeur, pages, description) {
        super(conteneurHTML, image, titre, prix);
        // Ajoute les informations montrées dans la maquette
        this.#auteur = auteur;
        this.#editeur = editeur;
        this.#pages = pages;
        this.#description = description;

        this._clickModale = this._clickModale.bind(this);
        this.fermer = this.fermer.bind(this);
    }

    // Sert à ouvrir la boite modale et injecter son contenu
    ouvrir() {
        const gabarit = `
            <div class="modale">
                <header>
                    <h2>${this.titre}</h2>
                    <button class="fermer">X</button>
                </header>

                <div class="information">
                    <img src="${this.image}">
                    <div class="info">
                        <p>Auteur : ${this.#auteur}</p>
                        <p>Éditeur : ${this.#editeur}</p>
                        <p>Pages : ${this.#pages}</p>
                        <p>${this.#description}</p>
                    </div>
                </div>
            </div>
        `;

        this.conteneurHTML.innerHTML = gabarit;
        this.elementHTML = this.conteneurHTML.querySelector(".modale");

        this.afficher();

        // Modif pour que toute la boite soit clicable, bouton inclus, mais pas juste le bouton
        this.elementHTML.addEventListener("click", this._clickModale);
        this.elementHTML.querySelector(".fermer").addEventListener("click", this.fermer);
    }

    // Sert à afficher la modale et bloquer le défilement

    afficher() {
        this.conteneurHTML.classList.remove("invisible");
        // Comme vu en classe au lieu de empecherDefilement comme je pensais avoir besoin au départ
        document.body.classList.add("modale-verrou");
    }

    // Sert à fermer la modale, faire le ménage des clicks et réactiver le défilement

    fermer() {
        if (this.elementHTML) {
            this.elementHTML.removeEventListener("click", this._clickModale);
            this.elementHTML.querySelector(".fermer").removeEventListener("click", this.fermer);
        }

      this.conteneurHTML.classList.add("invisible");
      document.body.classList.remove("modale-verrou");  
    }

    _clickModale() {
        this.fermer();
    }

}

export default LivreModale;