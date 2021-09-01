
let letra = prompt("Informe uma letra: ");
let vogal = letra.toLocaleLowerCase();

switch(vogal){
     case 'a': alert('Esta letra é uma vogal.')
     break;
     case 'e': alert('Esta letra é uma vogal.')
     break;
     case 'i': alert('Esta letra é uma vogal.')
     break
     case 'o': alert('Esta letra é uma vogal.')
     break;
     case 'u': alert('Esta letra é uma vogal.')
     break;
     default:
         if(vogal.length>=2){
         alert('Informe somente uma letra, por favor.')
         }else{
             alert('Esta letra é uma consoante.')
         };
        
        
};