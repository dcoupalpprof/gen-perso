

$(function()
{

	//1.ATTRIBUTS- Bouton PLUS
	//Le bouton + ajoute un point à l'attribut et diminue le nombre de points restants. La CLASSE "disabled" doit être donnée aux boutons
	// + s'il ne reste plus de points restants.
	//La CLASSE disabled du bouton - de cet attribut doit être enlevée si les points de cet attribut = 1.



	//2.ATTRIBUTS- Bouton PLUS
	//Le bouton - soustrait un point à l'attribut et augmente le nombre de points restants. La CLASSE "disabled" doit être donnée à ce bouton
	// si le nombre de point atteint le 0.
	//La CLASSE disabled des boutons + doit être enlevée si les points restants = 1.



	//3.INSCRIPTION
	//Validation que les champs pseudonyme et description ne sont pas vides et qu'il ne reste plus de points d'attribut.
	//Une fois le tout valide, ajout d'un nouveau personnage tel qu'indiqué en commentaires dans la section PERSOS.
	//Réinitialisation du formulaire

	//désactive l'envoi du formulaire au serveur lorsque l'on clic sur un bouton
	$('form').submit(function(e)
	{
		e.preventDefault();

	});


	//4.SUPPRESSION
	//Un clic sur supprimer devrait supprimer le perso du html

});
