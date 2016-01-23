
$saisie = document.getElementById("saisie");
$bouton = document.getElementById("bouton");
$resultat = document.getElementById("resultat");
reponse = Math.ceil(Math.random() * 100)


function verifier() {
    if ($saisie.value < reponse) {
        $resultat.innerHTML = "<p class='moin'> Ce n'es pas assez !</br><img src='images/plus.png'/> </p>";
    }
    if ($saisie.value == reponse) {
        $resultat.innerHTML = "<p id='oui'> Bravo!!! Trouvé!!!</br><img src='images/ok.png'/> </p>";
    }
    if ($saisie.value > reponse) {
        $resultat.innerHTML = "<p class='plus'> Vous devriez penser plus petit! </br><img src='images/moin.png'/></p>";
    }
}


function clignotement(){ 
if (document.getElementById("oui").style.display=="block") 
document.getElementById("oui").style.display="none"; 
else 
document.getElementById("oui").style.display="block"; 
} 
setInterval("clignotement()", 500);



$bouton.onclick = verifier;