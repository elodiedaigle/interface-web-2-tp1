import livres from "../data/livres.js";
import Livre from "../composants/Livre.js";
import LivreModale from "../composants/LivreModale.js";
import Filtre from "../composants/Filtre.js";

// Sert à sélectionner le conteneur

const conteneur = document.querySelector("[data-boite-livre]");

// Fonction pour la création de toutes les tuiles
function initialiser() {
    livres.forEach((livreInfo) => {
        const item = new Livre(
        conteneur,
        livreInfo.image,
        livreInfo.titre,
        livreInfo.prix,
    );
    item.creerTuile();
    });
}

// Exécution
initialiser();