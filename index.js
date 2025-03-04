const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El=document.getElementById("pass-1");
let pass2El=document.getElementById("pass-2");
let btnEl=document.querySelector(".btn")
let isAlive=true;

function generatePassword(){
  isAlive=true;
  let pass1="";
  let pass2="";
  pass1El.textContent="";
  pass2El.textContent="";
  if(isAlive){
  for(let i=0;i<15;i++){
    let rand1=Math.floor(Math.random()*characters.length);
    let rand2=Math.floor(Math.random()*characters.length);
    // pass1El.textContent+=characters[rand1];
    pass1+=characters[rand1];
    pass2+=characters[rand2];
  }
  pass1El.value=pass1;
  pass2El.value=pass2;
  isAlive=false;
  btnEl.innerHTML="Regenerate Password"
}
}

// function RegeneratePassword(){
//   isAlive=true;
//   pass1El.textContent=""
//   pass2El.textContent=""
//   if(isAlive){
//     for(let i=0;i<15;i++){
//       let rand1=Math.floor(Math.random()*characters.length);
//       let rand2=Math.floor(Math.random()*characters.length);
//       pass1El.textContent+=characters[rand1];
//       pass2El.textContent+=characters[rand2];
//     }
//     isAlive=false;
//   }
// }

function copyPassword1(){
  if(pass1El.value){
    navigator.clipboard.writeText(pass1El.value).then(()=>{
      alert("Password copied!")
    });
  }
}
function copyPassword2(){
  if(pass2El.value){
    navigator.clipboard.writeText(pass2El.value).then(()=>{
      alert("Password copied!")
    });
  }
}