const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');
let choixUtilisteur
// Evènement 'Click sur les buttons'
choixPossibles.forEach(choixPossibles => choixPossibles.addEventListener('click',(e)=>{
    //récupération de l'ID du bouton cliqué
            // alert(e.target.id)
    choixUtilisteur = e.target.id;
    //On ajoute l'image qui correspond au choix
    contenantChoixUtilisateur.innerHTML = `<img src="${choixUtilisteur}.png">`
    generer_choix_ordinateur()
}))



//Fonction pour générer le choix de l'ordinateur
function generer_choix_ordinateur(){
    random = Math.floor(Math.random() * 3) +1 //Générer des nombres compris entre 1 et 3
    if(random === 1){ //si random = à 1
        choixOrdinateur = "pierre"
    }
    if(random === 2){ //si random = à 1
        choixOrdinateur = "feuille"
    }
    if(random === 3){ //si random = à 1
        choixOrdinateur = "ciseaux"
    }
    // on ajoute l'image qui correspind au choix
    contenantChoixOrdinateur.innerHTML = `<img src="${choixOrdinateur}.png">`
    // generer_choix_ordinateur()
}
