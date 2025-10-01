import Filtre from "./Filtre.js";
import Livre from "./Livre.js";
import LivreModale from "./LivreModale.js";
import Livres from "../data/livres.js";

// Excuse la quantité de commentaires ici, la page m'a causé pas mal de trouble, je me suis laissée le plus de notes possible pour m'aider à me retrouver dans ce que je fais

class Application {
  #dataLivres; // Tous les livres
  #listeLivres; // Liste de livre une fois un des filtre appliqué
  #conteneurFiltres; // Ou mettre les filtres
  #conteneurListe; // Ou mettre les tuiles
  #conteneurModale; // Ou mettre la modale
  #filtre; // Instance barre de filtres

    constructor() {
        this.#conteneurFiltres = document.querySelector("[data-filtres]");
        this.#conteneurListe   = document.querySelector("[data-boite-livre]");
        this.#conteneurModale  = document.querySelector("[data-modale]");

        this.#listeLivres = [];

        this.#recupererDonnees();

        // Sert à instancier la barre de filtres
        this.#filtre = new Filtre(this.#conteneurFiltres, this);

        // Comme dans LivreModale, la tuile est clicable, mais pas le bouton
        this.#conteneurListe.addEventListener("click", (evenement) => {
            if (evenement.target.closest(".tuile_bouton")) return;

            const tuile = evenement.target.closest(".tuile");
        
            // Sert à lire l'index associé au livre
            const index = Number(tuile.dataset.index);
            // Et à récupérer le livre qui correspond
            const livre = this.#listeLivres[index];

            const modale = new LivreModale(
                this.#conteneurModale,
                livre.image,
                livre.titre,
                livre.auteur,
                livre.editeur,
                livre.pages,
                livre.description
            );

            modale.ouvrir();
        });

        // Sert à imposer Nouveautés comme filtre de départ comme demandé dans le devis
        this.#filtre.selectionner("nouveautes");
    }

    // Dès q'on change de filtre, on regénère la liste
    get listeLivres() { return this.#listeLivres; }
    set listeLivres(nouvelleListeLivre) {
        this.#listeLivres = nouvelleListeLivre;
        this.afficherLivres();
    }

    // Sert à gérer tous les filtres
    appliquerFiltre(categorie) {
        const nomsFiltres = {
        litterature: "Littérature",
        art: "Art de vivre",
        bd: "BD, Jeunesse, Humour",
        culture: "Culture et société",
        loisirs: "Loisirs, Tourisme, Nature",
        savoir: "Savoir et science",
        };

        // La variable est vide au départ et va contenir le résultat du filtre une fois appliqué
        let resultats;
        if (categorie === "tous") {
            resultats = this.#dataLivres;
        } else if (categorie === "nouveautes") {
            resultats = this.#dataLivres.filter(livre => livre.nouveaute);
        } else {
            const valeur = nomsFiltres[categorie];
            resultats = this.#dataLivres.filter(livre => livre.categorie === valeur);
        }

        // Donne le go à afficherLivres
        this.listeLivres = resultats;
    }

    afficherLivres() {
        this.#conteneurListe.innerHTML = "";

        this.#listeLivres.forEach((livre, index) => {
            const tuile = new Livre(this.#conteneurListe, livre.image, livre.titre, livre.prix);
            tuile.creerTuile();
            tuile.elementHTML.dataset.index = index;
        });
    }

    #recupererDonnees() {
        this.#dataLivres = Livres;
    }
}

export default Application;