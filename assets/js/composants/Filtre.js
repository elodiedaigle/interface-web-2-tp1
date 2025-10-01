// Oups, je viens de rererelire le devis et je suis passée tout droit l'ordre, désolée, j'ai gardé les filtres pour la fin, je voulais commencer plus soft

// Sert de template pour un filtre
class Filtre {
    #conteneurHTML;
    #elementHTML;
    #application;

    constructor(conteneurHTML, application) {
        this.#conteneurHTML = conteneurHTML;
        this.#application = application;
        this.injecterHTML();
    }

    injecterHTML() {
        const gabarit = `
            <div class="filtres">
                <div class="filtre" data-categorie="tous">Tous</div>
                <div class="filtre" data-categorie="nouveautes">Nouveautés</div>
                <div class="filtre" data-categorie="litterature">Littérature</div>
                <div class="filtre" data-categorie="art">Art de vivre</div>
                <div class="filtre" data-categorie="bd">BD, Jeunesse, Humour</div>
                <div class="filtre" data-categorie="culture">Culture et société</div>
                <div class="filtre" data-categorie="loisirs">Loisirs, Tourisme, Nature</div>
                <div class="filtre" data-categorie="savoir">Savoir et science</div>
            </div>
        `;
        this.#conteneurHTML.insertAdjacentHTML("beforeend", gabarit);

        this.#elementHTML = this.#conteneurHTML.lastElementChild;
        this.#elementHTML.addEventListener("click", this.clickFiltre.bind(this));
    }

    clickFiltre(evenement) {
        const declencheur = evenement.target.closest("[data-categorie]");

        if (declencheur != null) {
            this.mettreActif(declencheur);
            const categorie = declencheur.dataset.categorie;
            this.#application.appliquerFiltre(categorie);
        }
    }
        
    selectionner(categorie) {
        const bouton = this.#elementHTML.querySelector(`[data-categorie="${categorie}"]`);

        if (bouton != null) {
            this.mettreActif(bouton);
            this.#application.appliquerFiltre(categorie);
        }
    }

    mettreActif(element) {
        this.#elementHTML.querySelectorAll(".filtre").forEach(element => element.classList.remove("actif"));
        element.classList.add("actif");
    }
}

export default Filtre;