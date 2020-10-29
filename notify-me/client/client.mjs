import alt from 'alt';

const notifyscreen = new alt.WebView('http://resource/client/html/index.html',1);

export function bigNotification(heading,text,type){

    var notify = {
        heading:heading,
        text:text
    }

    if(type == undefined || type == "info"){
        notifyscreen.emit("notify:big:info",notify);
    } else if(type == "danger"){
        notifyscreen.emit("notify:big:danger",notify);
    } else if(type == "warning"){
        notifyscreen.emit("notify:big:warning",notify);
    } else if(type == "success"){
        notifyscreen.emit("notify:big:success",notify);
    } else {
        notifyscreen.emit("notify:big:info",notify);
    }

}

export function littleNotification(text,type){

    if(type == undefined || type == "info"){
        notifyscreen.emit("notify:little:info",text);
    } else if(type == "danger"){
        notifyscreen.emit("notify:little:danger",text);
    } else if(type == "warning"){
        notifyscreen.emit("notify:little:warning",text);
    } else if(type == "success"){
        notifyscreen.emit("notify:little:success",text);
    } else {
        notifyscreen.emit("notify:little:info",text);
    }

}

export function bannerNotification(text,picture){

    var notify = {
        text:text,
        picture:picture
    };

    notifyscreen.emit('notify:picture',notify);

}

alt.onServer('notify:picture', (notify) => {

    notifyscreen.emit('notify:picture',notify);

});

alt.onServer('notify:big:info', (notify) => {

    notifyscreen.emit('notify:big:info',notify);

});

alt.onServer('notify:big:danger', (notify) => {

    notifyscreen.emit('notify:big:danger',notify);

});

alt.onServer('notify:big:warning', (notify) => {

    notifyscreen.emit('notify:big:warning',notify);

});

alt.onServer('notify:big:success', (notify) => {

    notifyscreen.emit('notify:big:success',notify);

});


alt.onServer('notify:little:info', (notify) => {

    notifyscreen.emit('notify:little:info',notify);

});

alt.onServer('notify:little:danger', (notify) => {

    notifyscreen.emit('notify:little:danger',notify);

});

alt.onServer('notify:little:warning', (notify) => {

    notifyscreen.emit('notify:little:warning',notify);

});

alt.onServer('notify:little:success', (notify) => {

    notifyscreen.emit('notify:little:success',notify);

});