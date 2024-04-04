# MediaCollege Viborg


## Kom igang

### 1. Hvis du ikke har installeret ``node_modules`` så kør kommandoen

```bash
npm install
```

### 2. Dernæst skal vi tilføje data til databasen.

Opret en `.env` fil i roden af projektet.

Indsæt følgende i filen.

```bash
MONGODB_URI=mongodb://127.0.0.1:27017/sem-galleries
```
*(note: Selve mongo URI´en skulle gerne pege på din local MONGODB installation. Se eventuelt Mongo Compass)*

Herefter kan du køre kommandoen:

```bash
npm run seed
```

Når denne kommando er kørt skal den **IKKE** køres igen - med mindre du sletter (dropper) databasen helt - så kan du køre seed igen.        
*(note: Det må du gerne forsøge hvis du har lyst til at teste det.)*


### 3. Start udvikling serveren.

```bash
npm run dev
```

### 4. Åbn siden

Åbn siden på ``http:localhost:3000`` - Eller læs i terminalen hvis det skulle være en anden port end `3000`