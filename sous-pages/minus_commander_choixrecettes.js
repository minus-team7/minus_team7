
  const boutonsPlus = document.querySelectorAll('.bouton-plus');
  const recapitulatifListe = document.querySelector('#recapitulatif ul');
  const recapitulatifMessage = document.createElement('p');
  const prix = document.createElement('h3');


  prix.innerText = "Prix total: 39.90€";
  recapitulatifMessage.innerText = "Vous avez atteint la limite de 5 articles !";
  const prixFixe = 39.90;
  let compteur = 0;

  boutonsPlus.forEach(bouton => {
    bouton.addEventListener('click', () => {
        event.preventDefault();
      if (compteur < 5) {
        const article = bouton.parentNode.parentNode;
        const titre = article.querySelector('h2').innerText;
        const li = document.createElement('li');
        li.innerText = `- ${titre}`;
        recapitulatifListe.appendChild(li);
        compteur++;
        
        if (compteur == 1){
            recapitulatifListe.parentNode.appendChild(prix);
        }
        if (compteur == 5) {
          recapitulatifListe.parentNode.appendChild(recapitulatifMessage);
        }
      }
      if (compteur > 0) {
        const prixTotal = document.querySelector('#prix-total');
        prixTotal.innerText = `Total : ${(prixFixe + parseFloat(prix.replace(',', '.')) * compteur).toFixed(2)} €`;
      }

    });
  });

