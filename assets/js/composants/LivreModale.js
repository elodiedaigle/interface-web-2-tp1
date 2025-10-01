// J'ai complètement buguée rendue à Filtre et Application, c'est peut-être pas la solution optimale de ne pas lier Livre et LivreModale, mais je manque de temps et je dois trouver une solution qui fonctionne

// Sert de template pour la boite modale d'un livre
class LivreModale {
    #conteneurHTML;
    #image;
    #titre;
    #auteur;
    #editeur;
    #pages;
    #description;
    #elementHTML;

    constructor(conteneurHTML, image, titre, auteur, editeur, pages, description) {
        this.#conteneurHTML = conteneurHTML;
        this.#image = image;
        this.#titre = titre;
        this.#auteur = auteur;
        this.#editeur = editeur;
        this.#pages = pages;
        this.#description = description;

        this._clickModale = this._clickModale.bind(this);
        this.fermer = this.fermer.bind(this);
    }

    // Getters et Setters

    get image() {
        return this.#image;
    }

    set image(nouvelleImage) {
        this.#image = nouvelleImage;
        this.#image.querySelector(".modale_image").src = this.#image;
    }

    get titre() {
        return this.#titre;
    }

    set titre(nouveauTitre) {
        this.#titre = nouveauTitre;
        this.#elementHTML.querySelector(".modale_titre").textContent = this.#titre;
    }

    get auteur() {
        return this.#auteur;
    }

    set auteur(nouvelAuteur) {
        this.#auteur = nouvelAuteur;
        this.#elementHTML.querySelector(".modale_auteur").textContent = this.#auteur;
    }

    get editeur() {
        return this.#editeur;
    }

    set editeur(nouvelEditeur) {
        this.#editeur = nouvelEditeur;
        this.#elementHTML.querySelector(".modale_editeur").textContent = this.#editeur;
    }

    get pages() {
        return this.#pages;
    }

    set pages(nouvellePages) {
        this.#pages = nouvellePages;
        this.#elementHTML.querySelector(".modale_pages").textContent = this.#pages;
    }

    get description() {
        return this.#description;
    }

    set description(nouvelleDescription) {
        this.#description = nouvelleDescription;
        this.#elementHTML.querySelector(".modale_description").textContent = this.#description;
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

    // Sert à ouvrir la boite modale et injecter son contenu
    ouvrir() {
        const gabarit = `
            <div class="modale">
                <header>
                    <h2 class="modale_titre">${this.titre}</h2>
                    <button class="fermer">X</button>
                </header>

                <div class="information">
                    <img class="modale_image" src="${this.image}">
                    <div class="info">
                        <p class="modale_auteur">Auteur : ${this.#auteur}</p>
                        <p class="modale_editeur">Éditeur : ${this.#editeur}</p>
                        <p class="modale_pages">Pages : ${this.#pages}</p>
                        <p class="modale_description">${this.#description}</p>
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