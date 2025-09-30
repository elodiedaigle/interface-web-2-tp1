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
                    <img src="${this.image}>
                    <p>Auteur : ${this.#auteur}</p>
                    <p>Éditeur : ${this.#editeur}</p>
                    <p>Pages : ${this.#pages}</p>
                    <p>${this.#description}</p>
                </div>
            </div>
        `;

        this.conteneurHTML.innerHTML = gabarit;
        this.elementHTML = this.conteneurHTML.firstElementChild;

        this.bloquerDefilement();
    }

    // Sert à fermer la tuile
    fermer() {
        // À faire plus tard
    }

    bloquerDefilement() {
    
    }
}

export default LivreModale;