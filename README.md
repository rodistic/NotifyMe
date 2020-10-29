#NotifyMe

<br />
<p align="center">

  <h3 align="center">NotifyMe!</h3>

  <p align="center">
    NotifyMe is an resource for AltV. You can send Big/Little/Banner Notifications to your Users with it!
    <br />
  
  </p>
</p>

### Usage

1. Import NotifyMe
```
import * as notify from 'notify-me'
```
2. Create your Notifications!
```
//Serverside

notify.bigNotification(player,'your header','your second text','type or blank');

notify.littleNotification(player,'your text', 'type or blank');

notify.bannerNotification(player,'your text', 'URL to Picture');

//Clientside

notify.bigNotification('your header','your second text','type or blank');

notify.littleNotification('your text', 'type or blank');

notify.bannerNotification('your text', 'URL to Picture');

//Types

info == Blue
danger == Red
success == Green
warning == Yellow

```



<!-- USAGE EXAMPLES -->
## Example
```
import * as notify from 'notify-me';


alt.on('playerDeath', function(victim,killer){

	notify.bigNotification(victim,'Bruh you just died','I guess thats sucks tho','danger');

	notify.littleNotification(killer,'Now you have blood on your hands!','success');

})

```


