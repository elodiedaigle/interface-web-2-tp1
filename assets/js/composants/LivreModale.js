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

        this.elementHTML.querySelector(".fermer").addEventListener("click", this.fermer.bind(this));
    }

    // Sert à afficher la modale et bloquer le défilement

    afficher() {
        this.conteneurHTML.classList.remove("invisible");
        // Comme vu en classe au lieu de empecherDefilement comme je pensais avoir besoin au départ
        document.body.classList.add("modale-verrou");
    }

    // Sert à fermer la modale et réactiver le défilement

    fermer() {
      this.conteneurHTML.classList.add("invisible");
      document.body.classList.remove("modale-verrou");  
    }

}

export default LivreModale;