if('alt' in window){

    var id = 1;
    var timeOfActivation = 6000;


    alt.on('notify:big:info', (notify) =>{

        var header = notify['heading'];
        var text = notify['text'];

        $('.notification-container').prepend('<div id="notify'+id+'" class="notification"><div class="notification-header notification-info"><p>'+header+'</p></div><div class="notification-body"><p>'+text+'</p></div></div>')
    
       
        setTimeout(() => {
            $('#notify'+id).remove();
            id++;
        }, timeOfActivation);


    })

    alt.on('notify:big:danger', (notify) =>{

        var header = notify['heading'];
        var text = notify['text'];

        $('.notification-container').prepend('<div id="notify'+id+'" class="notification"><div class="notification-header notification-danger"><p>'+header+'</p></div><div class="notification-body"><p>'+text+'</p></div></div>')
    
       
        setTimeout(() => {
            $('#notify'+id).remove();
            id++;
        }, timeOfActivation);


    })

    alt.on('notify:big:warning', (notify) =>{

        var header = notify['heading'];
        var text = notify['text'];

        $('.notification-container').prepend('<div id="notify'+id+'" class="notification"><div class="notification-header notification-warning"><p>'+header+'</p></div><div class="notification-body"><p>'+text+'</p></div></div>')
    
       
        setTimeout(() => {
            $('#notify'+id).remove();
            id++;
        }, timeOfActivation);


    })

    alt.on('notify:big:success', (notify) =>{

        var header = notify['heading'];
        var text = notify['text'];

        $('.notification-container').prepend('<div id="notify'+id+'" class="notification"><div class="notification-header notification-success"><p>'+header+'</p></div><div class="notification-body"><p>'+text+'</p></div></div>')
    
        setTimeout(() => {
            $('#notify'+id).remove();
            id++;
        }, timeOfActivation);
    })

    alt.on('notify:little:info', (notify) =>{

        $('.notification-container').prepend('<div id="notify'+id+'"  class="notification"><div class="notification-stripe-info"><div class="notification-body"><p>'+notify+'</p></div></div></div>');

        setTimeout(() => {
            $('#notify'+id).remove();
            id++;
        }, timeOfActivation);

    })

    alt.on('notify:little:danger', (notify) =>{

        $('.notification-container').prepend('<div id="notify'+id+'"  class="notification"><div class="notification-stripe-danger"><div class="notification-body"><p>'+notify+'</p></div></div></div>');

        setTimeout(() => {
            $('#notify'+id).remove();
            id++;
        }, timeOfActivation);

    })

    alt.on('notify:little:warning', (notify) =>{

        $('.notification-container').prepend('<div id="notify'+id+'"  class="notification"><div class="notification-stripe-warning"><div class="notification-body"><p>'+notify+'</p></div></div></div>');

        setTimeout(() => {
            $('#notify'+id).remove();
            id++;
        }, timeOfActivation);

    })

    alt.on('notify:little:success', (notify) =>{

        $('.notification-container').prepend('<div id="notify'+id+'"  class="notification"><div class="notification-stripe-success"><div class="notification-body"><p>'+notify+'</p></div></div></div>');

        setTimeout(() => {
            $('#notify'+id).remove();
            id++;
        }, timeOfActivation);

    })


    alt.on('notify:picture', (notify) =>{

        var text = notify['text'];
        var picture = notify['picture'];

        $('.notification-container').prepend('<div id="notify'+id+'"  class="notification"><div class="notification-picture"><img src="'+picture+'"></div><div class="notification-body"><p>'+text+'</p></div></div>');

        setTimeout(() => {
            $('#notify'+id).remove();
            id++;
        }, timeOfActivation);

    })

}