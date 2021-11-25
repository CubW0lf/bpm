const csv = [
    "Auteur,Titre,Personne,Mood,BPM,url",
    "Slipknot,Snuff,Giovanni,Chill,86,https://wdii.infraroth.com/bpm/",
    "London Grammar,Rooting For You,Giovanni,Chill,112,https://wdii.infraroth.com/bpm/london-grammar-rooting-for-you.mp3",
    "Orelsan,L'Odeur de l'Essence,Giovanni,Casual,117,https://wdii.infraroth.com/bpm/orelsan-lodeur-de-lessence-clip-officiel.mp3",
    "HAIM,Want You Back,Giovanni,Casual,112,https://wdii.infraroth.com/bpm/haim-want-you-back-official-video.mp3",
    "Slipknot,People Egal shit,Giovanni,Energy,123,https://wdii.infraroth.com/bpm/",
    "Sepultura,Refuse/Resist,Giovanni,Energy,117,https://wdii.infraroth.com/bpm/sepultura-refuseresist-official-video.mp3",
    "Mariana Froes,Girassóis de Van Gogh,Kévin,mood,136,https://wdii.infraroth.com/bpm/girassois-de-van-gogh-baco-exu-do-blues-cover.mp3",
    "Silent Poets,Asylum For The Feeling,Kévin,mood,161,https://wdii.infraroth.com/bpm/silent-poets-asylum-for-the-feeling.mp3",
    "Nujabes,Lady Brown,Kévin,mood,99,https://wdii.infraroth.com/bpm/lady-brown.mp3",
    "Larkin Poe,Back Down South,Kévin,mood,103,https://wdii.infraroth.com/bpm/larkin-poe-back-down-south-official-video-feat-tyler-bryant.mp3",
    "The Neighbourhood,Yellow Box,Kévin,mood,108,https://wdii.infraroth.com/bpm/the-neighbourhood-yellow-box-official-audio.mp3",
    "Billie Eilish,Xanny,Julien,meditation,50,https://wdii.infraroth.com/bpm/the-neighbourhood-yellow-box-official-audio.mp3",
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
