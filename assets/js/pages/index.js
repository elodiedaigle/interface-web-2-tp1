import livres from "../data/livres.js";
import Livre from "../composants/Livre.js";
import LivreModale from "../composants/LivreModale.js";
import Filtre from "../composants/Filtre.js";

// Sert à sélectionner les conteneurs

const conteneurLivre = document.querySelector("[data-boite-livre]");
const conteneurModale = document.querySelector("[data-modale]");

// Fonction pour la création de toutes les tuiles
function initialiser() {
    livres.forEach((livreInfo) => {
        const item = new Livre(
        conteneurLivre,
        livreInfo.image,
        livreInfo.titre,
        livreInfo.prix,
    );
    item.creerTuile();

    console.log("init…");
    item.elementHTML.addEventListener("click", () => {
        console.log("tuile cliquée:", livreInfo.titre);
        const modale = new LivreModale(
            conteneurModale,
            livreInfo.image,
            livreInfo.titre,
            livreInfo.prix,
            livreInfo.auteur,
            livreInfo.editeur,
            livreInfo.pages,
            livreInfo.description,
        );
        modale.ouvrir();
        });
    });
}

// Exécution
initialiser();