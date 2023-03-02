const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');
let choixUtilisteur
// Evènement 'Click sur les buttons'
choixPossibles.forEach(choixPossibles => choixPossibles.addEventListener('click',(e)=>{
    //récupération de l'ID du bouton cliqué
    alert(e.target.id)
    choixUtilisteur = e.target.id;
    //On ajoute l'image qui correspond au choix
    contenantChoixUtilisateur.innerHTML = `<img src="${choixUtilisteur}.png">`
}))
