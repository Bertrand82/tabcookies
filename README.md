# tabcookies

Une  extension Chrome qui intercepte les cookies.

Le but est de pouvoir gérer "manuellement" les cookies de 2 "tab" sur la même url (étanchéité des sesssions).

TODO: 

A terme , certains cookies (les cookies liés à l'identification) devront  être partagés et d'autres (jsessionid) ne devront pas être partagés.

Une option sur la page devrait être "injecté" pour pouvoir activer ou deactiver pour un tab ce comportement
En attendant, une liste des tabs pourraient être affiché avec un bouton on/off






#Liens utiles :

Interception et modification de cookies
http://blob.tomerweller.com/cookie-interception-chrome-extension

Cycle de vie d'une requête
https://developer.chrome.com/docs/extensions/reference/webRequest/#life_cycle_footnote

Liste d'exemples 
https://developers.chrome.com/extensions/samples