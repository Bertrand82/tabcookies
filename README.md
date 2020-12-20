# tabcookies

Une  extension Chrome qui intercepte les cookies.

Le but est de pouvoir gérer "manuellement" les cookies de 2 "tab" sur la même url (étanchéité des sesssions).

Les cookies sont utilisé de 2 façons: 
	Lors de l'envoie d'une requete vers le serveur: Ils sont traités alors dans background.js par du code s'executant dans l'extansion. 
	A l'interieur de la page: IL sont traités par un script de surcharge dans la page.

A terme , certains cookies (les cookies liés à l'identification) devront  être partagés et d'autres (jsessionid) ne devront pas être partagés.

Une option sur la page devrait être "injecté" pour pouvoir activer ou deactiver pour un tab ce comportement
En attendant, une liste des tabs pourraient être affiché avec un bouton on/off

Pour tester l'extension, une application spring boot avec les sécurités "normales" a été developpée (Basic authentification et csrf).
L'extension marche bien sur les pages de test mais pas sur les sites https de google, facebook etc...




#Liens utiles :

Interception et modification de cookies
http://blob.tomerweller.com/cookie-interception-chrome-extension

Cycle de vie d'une requête
https://developer.chrome.com/docs/extensions/reference/webRequest/#life_cycle_footnote

Sending messages from web page to extension
https://developer.chrome.com/docs/extensions/mv2/messaging/#external-webpage

Liste d'exemples 
https://developers.chrome.com/extensions/samples

Voir ausi pour firefox : cookieStoreId
 Le magasin de cookies de l'onglet. Si différents onglets peuvent avoir différents magasins de cookies (par exemple, pour prendre en charge l'identitié contextuelle), vous pouvez passer cette option storeId dans différentes méthodes de l'API cookies, pour définir et obtenir des cookies associés à Le magasin de cookies de cet onglet. Seulement présent si l'extension a la permission "cookies".