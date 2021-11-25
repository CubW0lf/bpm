const csv = [
    "Auteur,Titre,Personne,Mood,BPM,URL",
    "Slipknot,Snuff,Giovanni,Chill",
    "London Grammar,Rooting For You,Giovanni,Chill,112,https://aws.getsongbpm.com/handler.php?file=london-grammar-rooting-for-you.mp3&download=13",
    "Orelsan,L'Odeur de l'Essence,Giovanni,Casual",
    "HAIM,Want You Back,Giovanni,Casual,112,https://aws.getsongbpm.com/handler.php?file=haim-want-you-back-official-video.mp3&download=13",
    "Slipknot,People Egal shit,Giovanni,Energy,123,https://aws.getsongbpm.com/handler.php?file=slipknot-people-shit-audio.mp3&download=1",
    "Sepultura,Refuse/Resist,Giovanni,Energy,117,https://aws.getsongbpm.com/handler.php?file=sepultura-refuseresist-official-video.mp3",
    "Mariana Froes,Girassóis de Van Gogh,Kévin,,136,https://aws.getsongbpm.com/handler.php?file=girassois-de-van-gogh-baco-exu-do-blues-cover.mp3",
    "Silent Poets,Asylum For The Feeling,Kévin,,161,https://aws.getsongbpm.com/handler.php?file=silent-poets-asylum-for-the-feeling.mp3&download=1",
    "Nujabes,Lady Brown,Kévin",
    "Larkin Poe,Back Down South,Kévin,,103,https://aws.getsongbpm.com/handler.php?file=larkin-poe-back-down-south-official-video-feat-tyler-bryant.mp3&download=1",
    "The Neighbourhood,Yellow Box,Kévin,,,",
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
