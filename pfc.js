const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');
let choixUtilisteur
let resultat
let choixOrdinateur

// Evènement 'Click sur les buttons'
choixPossibles.forEach(choixPossibles => choixPossibles.addEventListener('click',(e)=>{
    //récupération de l'ID du bouton cliqué
            // alert(e.target.id)
    choixUtilisteur = e.target.id;
    //On ajoute l'image qui correspond au choix
    contenantChoixUtilisateur.innerHTML = `<img src="${choixUtilisteur}.png">`
    generer_choix_ordinateur()
    verification()
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
    // on ajoute l'image qui correspond au choix
    contenantChoixOrdinateur.innerHTML = `<img src="${choixOrdinateur}.png">`
}


//Fonction pour verifier si le joueur a gagné ou pas

function verification(){
    if(choixUtilisteur == choixOrdinateur){
        resultat = "Egalité!";
    }
    //Les cas où le joueur perd
    if(choixUtilisteur == "pierre" && choixOrdinateur =="feuille"){
        resultat = "Perdu!";
    }
    if(choixUtilisteur == "feuille" && choixOrdinateur =="ciseaux"){
        resultat = "Perdu!";
    }
    if(choixUtilisteur == "ciseaux" && choixOrdinateur =="pierr"){
        resultat = "Perdu!";
    }
    //Les cas où le joueur gagne
    if(choixUtilisteur == "pierre" && choixOrdinateur =="ciseaux"){
        resultat = "Gagné!";
    }
    if(choixUtilisteur == "ciseaux" && choixOrdinateur =="feuille"){
        resultat = "Gagné!";
    }
    if(choixUtilisteur == "feuille" && choixOrdinateur =="pierre"){
        resultat = "Gagné!";
    }
    contenantResultat.innerHTML = resultat;
}