function selezioneMultipla(){

    //If nelle situazioni vero falso 

     var valorerecuperato = document.getElementById("possibilicasi").value;

    //Switch-Case

    switch (valorerecuperato){
        case 'christian':
            document.getElementById("servizio").innerText = "il valore inserito è Christian";
            break;

        case 'test':
            document.getElementById("servizio").innerText = "il valore inserito è test";
            break;


        case '3':
            document.getElementById("servizio").innerText = "il valore inserito è il numero 3";
            break;

        default:
            document.getElementById("servizio").innerText = "nessun elemento fra quelli gestiti";
    }


}