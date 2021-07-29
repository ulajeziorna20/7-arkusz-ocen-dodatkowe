let btnOblicz = document.getElementById(`oblicz`);
// console.log(btnOblicz);


btnOblicz.addEventListener(`click`, (event) => {

    let uczniowie = document.querySelectorAll(`div[id^="uczen"]`);
    // console.log(uczniowie);


    for (const uczen of uczniowie) {

      

        // console.log(uczen);
        // console.log(uczen.querySelector(`input.polski`).value);

        let zajeciaDodatkowe = uczen.querySelector(`input.zajecia-dodatkowe`);
        // console.log(zajeciaDodatkowe);
        // console.log(zajeciaDodatkowe.value);


        let matematykaOcena = (+uczen.querySelector(`input.matematyka`).value);

        if ((matematykaOcena < 6) && (zajeciaDodatkowe.value.includes(`matematyka`))) {

            matematykaOcena = matematykaOcena + 0.5;

        }

        let polskiOcena = (+uczen.querySelector(`input.polski`).value);

        if ((polskiOcena < 6) && (zajeciaDodatkowe.value.includes(`polski`))) {

            polskiOcena = polskiOcena + 0.5;

        }

        let biologiaOcena = (+uczen.querySelector(`input.biologia`).value);

        if ((biologiaOcena < 6) && (zajeciaDodatkowe.value.includes(`biologia`))) {

            biologiaOcena = biologiaOcena + 0.5;

        }

        let geografiaOcena = (+uczen.querySelector(`input.geografia`).value);

        if ((geografiaOcena < 6) && (zajeciaDodatkowe.value.includes(`geografia`))) {

            geografiaOcena = geografiaOcena + 0.5;

        }

        let fizykaOcena = (+uczen.querySelector(`input.fizyka`).value);

        if ((fizykaOcena < 6) && (zajeciaDodatkowe.value.includes(`fizyka`))) {

            fizykaOcena = fizykaOcena + 0.5;

        }

        let chemiaOcena = (+uczen.querySelector(`input.chemia`).value);

        if ((chemiaOcena < 6) && (zajeciaDodatkowe.value.includes(`chemia`))) {

            chemiaOcena = chemiaOcena + 0.5;

        }

        let informatykaOcena = (+uczen.querySelector(`input.informatyka`).value);

        if ((informatykaOcena < 6) && (zajeciaDodatkowe.value.includes(`informatyka`))) {

            informatykaOcena = informatykaOcena + 0.5;

        }


        // let sredniaOcen = 0;
        // console.log(informatykaOcena);
        // console.log(sredniaOcen);

        
        sredniaOcen = (matematykaOcena + polskiOcena + biologiaOcena + geografiaOcena + fizykaOcena + chemiaOcena + informatykaOcena) / 7;
         

    //     let spnSrednia = document.querySelector(`span.srednia`);
    //     // console.log(spnSrednia);    
    //      spnSrednia.innerText = sredniaOcen;

    }

    // console.log(sredniaOcen);
    

 



})






















