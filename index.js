// const generatePasswordBtn = document.querySelector('.generate-passwords-btn')
// const displayPasswords = document.querySelector('.display-passwords-container')
// const displayPassword =document.querySelectorAll('.pw-display')
// const changePasswordLength = document.querySelector('.change-password-length')

// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];

// function generatePassword (num=8) {
//     let generatePassword = []
//     for (let i = 0; i <=4; i++) {
//         let resultStr="" 
//         for(let i = 1; i <= num; i++){
//         let randomIndex = Math.floor(Math.random() * characters.length);
//         resultStr += characters[randomIndex];
//     }
//     generatePassword.push(resultStr)
// }
// return generatePassword
// } 

// let num = changePasswordLength.min 
// changePasswordLength.value = num
// changePasswordLength.addEventListener('input' , () =>  num = changePasswordLength.value)

// function renderPassword(){
//     let passwords =  generatePassword(num)
// //    confirm(passwords);
// //    confirm(displayPassword)
// for(let i=0; i < displayPassword.length; i++){
    
//    displayPassword[i].textContent = passwords[i]
   
// }
  
// }

// generatePasswordBtn.addEventListener('click' , renderPassword)

const generatePasswordBtn = document.querySelector('.generate-passwords-btn')
const displayPasswords = document.querySelector('.display-passwords-container')
const displayPassword =document.querySelectorAll('.pw-display')
const changePasswordLength = document.querySelector('.change-password-length')

 

const characters =[
    'A','B','C','D','E','F','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','n','o','p','q','r','s','t','u','v','w','x','y','z','*','&','$','#','!','?','<','>','+'
    ]
    
    
       function generatePassword(num=8){
        const pwArr =[]
      
      for(let j=1; j <=4; j++){
           let resultStr=""
     for(let i=1; i <= num; i++){
    let randomIndex = Math.floor(Math.random() * characters.length) 
    resultStr += characters[randomIndex]
   }
         pwArr.push(resultStr) 
      }
       return pwArr
     }
     
   let num = changePasswordLength.min 
   changePasswordLength.value = num
   changePasswordLength.addEventListener('input' , () =>  num = changePasswordLength.value)
   
      // Render Password For It To Display   
 function renderPassword(){
    let passwords =  generatePassword(num)
   //console.log(passwords)
   //console.log(displayPassword)
for(let i=0; i < displayPassword.length; i++){
    
   displayPassword[i].textContent = passwords[i]
   
}
  
}
// Send it into the button using addEventListener
generatePasswordBtn.addEventListener('click' , renderPassword)  