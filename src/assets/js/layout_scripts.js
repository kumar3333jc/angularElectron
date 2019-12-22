
/***** script myid =  *****/
 try{var anchor = document.getElementsByTagName('a'); for(var ind =0; ind<anchor.length; ind++){ if(anchor[ind].getAttribute('href')==null || anchor[ind].getAttribute('href').indexOf('#')==-1){ var currhref = '#'+anchor[ind].getAttribute('href'); currhref = currhref.replace('null','').trim(); anchor[ind].removeAttribute('href'); anchor[ind].setAttribute('href',currhref); }}}catch(e){}

/***** script myid =  *****/
 try{function mask() { var currObj = document.getElementById('mask'); currObj.style.display='block'; currObj.style.zIndex = '11111111111111';}function unmask() { var currObj = document.getElementById('mask'); currObj.style.display='none'; currObj.style.zIndex = '50';}}catch(e){}

/***** script myid =  *****/
 try{if(true){gateWay('','','','parentArea',false,false,false,'page','DefaultPage')};}catch(e){}

/***** script myid =  *****/
 try{setTimeout(function(){ var ITD_Wizard_id_18_event_handler=function(e){executeEvent('language','change',document.querySelector('[myid=ITD_Wizard_id_18]'))}; document.querySelector('[myid=ITD_Wizard_id_18]').addEventListener('change', ITD_Wizard_id_18_event_handler)},300);}catch(e){}

/***** script myid =  *****/
 try{ setTimeout(function(){ executeEvent('language','load',document.querySelector('[myid=ITD_Wizard_id_18]')) },300);}catch(e){console.error('Error in language Event. Please check language event in event binding section.Error Name -- > ',e);}
