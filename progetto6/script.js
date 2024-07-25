
function Invia(){

    var array = new Array();
    array.push(document.getElementById("nome").value); 
    array.push(document.getElementById("cognome").value); 



    //PUSH inserisce nella prima posizione disponibile il valore



    for(var i = 0; i<array.length;i++){  //array.lenght = ci ritorna il valore massimo dell array 
        
        console.log(array[i]);

    }
    

    

  


}