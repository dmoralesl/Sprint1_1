# TASCA 5

No hi ha gaire coses a tenir en compte per llançar aquest script.

Sembla que cal crear un fitxer de com llançar aquests pasos perquè en algun moment algun dels requeriments de la tasca faria necessària la instal·lació de llibreries de tercers. En aquest cas, s'ha pogut complir amb els requsits amb llibreries de sistema de node, que no cal instal·lar adicionalment.

Per poder seguir una mica amb la dinàmica de la tasca he creat un projecte de node i he instal·lat via NPM la llibreria "crypto" (tot i que ja ve per defecte amb node).

Així que tenim dos pasos a realitzar: 

## Instal·lació

Per instal·lar les dependències d'aquest project, s'haurà d'executar:

```bash
npm install
```

## Execució

Hi ha un únic fil d'execució que és el llançament de l'script. S'ha preparat un llançament via els comandaments configurats del package.json que ens permeten executar el codi per dues vies:

```bash
npm start
```

O bé:

```bash
node task5.js
```

Aquest llançament farà pas per pas cadascuna de les activitats de la tasca. Crearà i modificarà fitxers. Per tant, si es llança un segon cop, sobreescriurà els fitxers que hagin quedat del llançament anterior.

A tenir en compte que la funció de la primera tasca s'executa **indefinidament**. Però no bloquejarà l'execució de les següents funcions. Simplement anirà embrutant l'eixida de la terminal amb el mateix missatge cada segon. Per aturar l'script s'haura de forçar amb un CTRL + C o mai acabarà.
