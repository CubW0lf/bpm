const csv = [
    "Auteur,Titre,Personne,Mood,BPM,url",
    "Slipknot,Snuff,Giovanni,Chill,86,https://wdii.infraroth.com/bpm/slipknot-snuff-official-video.mp3",
    "London Grammar,Rooting For You,Giovanni,Chill,109,https://wdii.infraroth.com/bpm/london-grammar-rooting-for-you.mp3",
    "Orelsan,L'Odeur de l'Essence,Giovanni,Casual,117,https://wdii.infraroth.com/bpm/orelsan-lodeur-de-lessence-clip-officiel.mp3",
    "HAIM,Want You Back,Giovanni,Casual,112,https://wdii.infraroth.com/bpm/haim-want-you-back-official-video.mp3",
    "Mariana Froes,Girassóis de Van Gogh,Kévin,mood,109,https://wdii.infraroth.com/bpm/girassois-de-van-gogh-baco-exu-do-blues-cover.mp3",
    "Silent Poets,Asylum For The Feeling,Kévin,mood,50,https://wdii.infraroth.com/bpm/silent-poets-asylum-for-the-feeling.mp3",
    "Nujabes,Lady Brown,Kévin,mood,111,https://wdii.infraroth.com/bpm/lady-brown.mp3",
    "Larkin Poe,Back Down South,Kévin,mood,111,https://wdii.infraroth.com/bpm/larkin-poe-back-down-south-official-video-feat-tyler-bryant.mp3",
    "The Neighbourhood,Yellow Box,Kévin,mood,108,https://wdii.infraroth.com/bpm/the-neighbourhood-yellow-box-official-audio.mp3",
    "Billie Eilish,Xanny,Julien,meditation,90,https://wdii.infraroth.com/bpm/billie-eilish-xanny.mp3",
    "Nuages,Dreams,Vincent,meditation,50,http://cubwolf.fr/musique/Dreams.mp3",
    "Inzo,Overthinker,Vincent,meditation,50,http://cubwolf.fr/musique/Overthinker.mp3",
    "Bob Sinclar,Zouk la sel Medikaman Nou Ni,Vincent,Energy,160,http://cubwolf.fr/musique/zouk.mp3",
    "Tony Quattro,Superbad,Vincent,Energy,160,http://cubwolf.fr/musique/superbad.mp3",
    "Firefox,Sex Shooter,Vincent,Energy,160,http://cubwolf.fr/musique/firefox.mp3",
];

const headers = csv[0].split(",");

let jsonObj = [];
for (let i = 1; i < csv.length; i++) {
    let data = csv[i].split(",");
    let obj = {};
    for (let j = 0; j < data.length; j++) {
        obj[headers[j].trim()] = data[j].trim();
    }
    jsonObj.push(obj);
}
JSON.stringify(jsonObj);

export default jsonObj;
