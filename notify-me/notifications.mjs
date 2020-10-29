/*

Author: ROD // Stalk.

Description: 
Handles notifications from server to user. 
SERVERSIDE

How to use:


*/


import alt from 'alt';

export function bigNotification(player,heading,text,type){

    var notify= {
        player:player,
        heading:heading,
        text:text
    };


    if(type == undefined || type == "info"){
        alt.emitClient(player,"notify:big:info",notify);
    } else if(type == "danger"){
        alt.emitClient(player,"notify:big:danger",notify);
    } else if(type == "warning"){
        alt.emitClient(player,"notify:big:warning",notify);
    } else if(type == "success"){
        alt.emitClient(player,"notify:big:success",notify);
    } else {
        alt.emitClient(player,"notify:big:info",notify);
    }

}

export function littleNotification(player,text,type){

    if(type == undefined || type == "info"){
        alt.emitClient(player,"notify:little:info",text);
    } else if(type == "danger"){
        alt.emitClient(player,"notify:little:danger",text);
    } else if(type == "warning"){
        alt.emitClient(player,"notify:little:warning",text);
    } else if(type == "success"){
        alt.emitClient(player,"notify:little:success",text);
    } else {
        alt.emitClient(player,"notify:little:info",text);
    }

};

export function bannerNotification(player,text,picture){
    
    var notify = {
        text:text,
        picture:picture
    };

    alt.emitClient(player,"notify:picture",notify);

};