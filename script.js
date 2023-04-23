function fahreneit(){
var dc=prompt('Enter temp in degree celsius?');
dc1=parseFloat(dc);
var f= (dc1+32)*9/5;
var h1=document.createElement('h1');
var temp=document.createTextNode(f + ' f');
h1.setAttribute('id','tempor');
h1.appendChild(temp);
document.getElementById('tempo').appendChild(h1);
}

function reset(){
 document.getElementById('tempor').remove();
}