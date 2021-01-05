const fish = require('./jsons/fish.json');
const bugs = require('./jsons/bugs.json');
const sea = require('./jsons/sea.json');
const fs = require('fs');

const updatedFish = fish.map((data) => {
    data.icon_uri = `https://icebr.art/api/images/sea/${data['file-name']}.png`;
    return data;
});

let json = JSON.stringify(updatedFish);
fs.writeFileSync('./output/fish.json', json);
