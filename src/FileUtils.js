const wowKeqing = require("./resources/wowkeqing.png");
const elysium = require("./resources/elysium.wav");

function getImage(imgId, lang){
    if(typeof lang === 'undefined'){
        return wowKeqing;
    }
    try{
        return require("./resources/images/" + lang.toUpperCase() + "/" + imgId + "_" + lang + ".png");
    } catch(err){
        try{
            return require("./resources/images/" + lang.toUpperCase() + "/" + imgId + ".png");
        } catch(err){
            console.log("Image " + imgId + " of lang " + lang + " could not be loaded");
            return wowKeqing;
        }
        return wowKeqing;
    }
    return wowKeqing;
}

function getAudio(audioId, lang){
    if(typeof lang === 'undefined'){
            return elysium;
        }
    const audio = require("./resources/audio/" + lang.toUpperCase() + "/vo_chr_stamp [" + audioId + "].wav");
    if(typeof audio === 'undefined'){
        return elysium;
    }
    return audio;
}

function getStickers(){
    const stickers = [];
    for(var i=1; i<40; i++){
        stickers.push({audioId: i, imgId: 10000+i});
    }
    return stickers;
}

export {getImage, getAudio, getStickers};