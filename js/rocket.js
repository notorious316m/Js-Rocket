
var timer = null;

var changeState = functon (state) {
  document.body.className = 'body-state'+ state;

  if (state == 2) {
  	document.getElementById('countdown').innerHTML = 9;
  };
  
}
