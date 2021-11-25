const csv = [
    "Auteur,Titre,Personne,Mood,BPM",
    "Slipknot,Snuff,Giovanni,Chill,86",
    "London Grammar,Rooting For You,Giovanni,Chill,112",
    "Orelsan,L'Odeur de l'Essence,Giovanni,Casual,117",
    "HAIM,Want You Back,Giovanni,Casual,112",
    "Slipknot,People Egal shit,Giovanni,Energy,123",
    "Sepultura,Refuse/Resist,Giovanni,Energy,117",
    "Mariana Froes,Girassóis de Van Gogh,Kévin,mood,136",
    "Silent Poets,Asylum For The Feeling,Kévin,mood,161",
    "Nujabes,Lady Brown,Kévin,mood,99",
    "Larkin Poe,Back Down South,Kévin,mood,103",
    "The Neighbourhood,Yellow Box,Kévin,mood,108",
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
