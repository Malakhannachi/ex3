
titre = document.querySelector(".titre")
let turn ='x';
let nbClics = 0;
function game(id) {
    nbClics++
    let element = document.getElementById(id)
   if (turn ==='x' && element.innerHTML == "") {
    element.innerHTML = 'x'
    turn = 'o';
    titre.innerHTML = 'o';
   } 
   else if (turn ==='o' && element.innerHTML == ""){ 
   element.innerHTML ='o';
    turn = 'x';
    titre.innerHTML = 'x';
 
}
if (nbClics = 9) {
    titre.textContent = "Partie terminée !"
}

}



    
    

