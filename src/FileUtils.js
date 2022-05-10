const wowKeqing = require("./resources/wowkeqing.png");
const elysium = require("./resources/elysium.wav");

function getImage(imgId, lang){
    if(typeof lang === 'undefined'){
        return wowKeqing;
    }
    try{
        return require("./resources/images/" + lang.toUpperCase() + "/" + imgId + ".png");
    } catch(err){
        return wowKeqing;
    }
    return wowKeqing;
}

function getAudio(audioId, lang){
    if(audioId > 116 && lang === 'en'){
        return undefined;
    }
    if(typeof lang === 'undefined'){
        return elysium;
    }
    try{
        return require("./resources/audio/" + lang.toUpperCase() + "/vo_chr_stamp [" + audioId + "].wav");
    } catch(err){
        return elysium;
    }
        return elysium;
}

function getStickers(){
    const stickers = [];
    for(var i=1; i<=119; i++){
        stickers.push({audioId: i, imgId: i});
    }
    return stickers;
}

export {getImage, getAudio, getStickers};