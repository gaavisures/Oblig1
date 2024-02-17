//array for billetter
let billetter = [];
function kjop() {
    const antallBilletter = document.getElementById("antallBilletter").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnummer = document.getElementById("telefonnummer").value;
    const epost = document.getElementById("epost").value;
    // for å sjekke senere om variablene er true
    let erValid = true;

    //sjekker om informasjonen som er skrevet i hver input er riktig
    if (!validerAntallBilletter()) {
        erValid = false;
    }
    if (!validerFornavn()) {
        erValid = false;
    }
    if (!validerEtternavn()) {
        erValid = false;
    }
    if (!validerTelefonnummer()) {
        erValid = false;
    }
    if (!validerEpost()) {
        erValid = false;
    }

    //hvis alt er riktig, vil det bli skrevet ut informasjonen som er lagt inn
    if (erValid) {
        const billett = {
            film: document.getElementById("film").value,
            antall: antallBilletter,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnummer: telefonnummer,
            epost: epost
        };
        //oppretter nye billetter
        billetter.push(billett);
        //viser alle billettene som er lagt inn
        visBilletter();
        // tømmer feltene etter at informasjonen er kjøpt
        clearFields();
    }
}

function visBilletter() {
    let ut = "";
    for (let i = 0; i < billetter.length; i++) {
        let billett = billetter[i];
        //brukte taggen strong for å få fet skrift på kun elementene, slik at informasjonen er synligere
        //kilde: https://www.drschore.com/hvordan-lage-fet-tekst-med-html-kode/
        ut += "<strong>Film:</strong>" + billett.film + "<br>";
        ut += "<strong>Antall:</strong>" + billett.antall + "<br>";
        ut += "<strong>Navn:</strong>" + billett.fornavn + " " + billett.etternavn + "<br>";
        ut += "<strong>Telefonnummer:</strong>" + billett.telefonnummer + "<br>";
        // la til <br> for å få mellomrom mellom hver billett man kjøper
        ut += "<strong>Epost:</strong>" + billett.epost + "<br>"+ "<br>";
    }
    document.getElementById("resultat").innerHTML= ut;
    document.getElementById("Film"+ "Antall"+ "Navn"+ "Telefonnummer"+ "Epost").style.fontWeight= "bold";
}

//tømmer billettlisten
function slett() {
    billetter = [];
    document.getElementById("resultat").innerHTML = "";
}

//tømmer all informasjonen i inputfeltene etter at de har blitt kjøpt, for å kjøpe en ny billett
function clearFields() {
    document.getElementById("antallBilletter").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnummer").value = "";
    document.getElementById("epost").value = "";
}

    function validerAntallBilletter() {
        let antallBilletter = document.getElementById("antallBilletter").value;
        let antallFeil = document.getElementById("antallBilletterFeil");
        //tømmer innholdet dersom det har vaert tidligere feilmeldinger
        antallFeil.innerHTML = "";
        //sjekker om antallBilletter er lik en tom streng
        if (antallBilletter === "") {
            //dersom denne linjen er tom, kommer det opp "antall billetter..."
            antallFeil.innerHTML = "Antall billetter må fylles ut.";
            //styler fargen til rød dersom det viser en feilmelding
            antallFeil.style.color = "red";
            return false;
        //sjekker om antall billetter er et tall, dersom det ikke er det returneres
        } else if (isNaN(antallBilletter) || antallBilletter <= 0) {
            antallFeil.innerHTML = "Antall billetter må være et positivt tall.";
            antallFeil.style.color = "red";
            return false;
        }
        //hvis ingen av de nevnte over er false, vil det returnere true som gir et gyldig resultat
        return true;
    }

    function validerFornavn() {
        let fornavn = document.getElementById("fornavn").value;
        let fornavnFeil = document.getElementById("fornavnFeil");
        fornavnFeil.innerHTML = "";
        if (fornavn === "") {
            fornavnFeil.innerHTML = "Fornavn må fylles ut.";
            fornavnFeil.style.color = "red";
            return false;
        }
        return true;
    }

    function validerEtternavn() {
        let etternavn = document.getElementById("etternavn").value;
        let etternavnFeil = document.getElementById("etternavnFeil");
        etternavnFeil.innerHTML = "";
        if (etternavn === "") {
            etternavnFeil.innerHTML = "Etternavn må fylles ut.";
            etternavnFeil.style.color = "red";
            return false;
        }
        return true;
    }

    function validerTelefonnummer() {
        let telefonnummer = document.getElementById("telefonnummer").value;
        let telefonnummerFeil = document.getElementById("telefonnummerFeil");
        telefonnummerFeil.innerHTML = "";
        //tilpasset validering for telefonnummer
        let telefonRegEx = /^[0-9]{8}$/;
        if (!telefonRegEx.test(telefonnummer)) {
            telefonnummerFeil.innerHTML = "Telefonnummer må være 8 sifre.";
            telefonnummerFeil.style.color = "red";
            return false;
        }
        return true;
    }

    function validerEpost() {
        let epost = document.getElementById("epost").value;
        let epostFeil = document.getElementById("epostFeil");
        epostFeil.innerHTML = "";
        //tilpasset validering på epost
        //kilde: https://www.tempmail.us.com/no/jquery/validering-av-e-postadresser-med-jquery
        let epostRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!epostRegEx.test(epost)) {
            epostFeil.innerHTML = "Vennligst skriv inn en gyldig epostadresse.";
            epostFeil.style.color = "red";
            return false;
        }
        return true;
    }

//rullegardinmeny
function velgFilm() {
    const rulleGardin = document.getElementById("film");
    const valgtFilm = rulleGardin.options[rulleGardin.selectedIndex].value;
    //sjekker rullegardinmenyen er tom
    //kilde: https://www.drschore.com/tilordne-en-skjult-verdi-fra-en-nedtrekksmeny-i-javascript/
    if (valgtFilm === "") {
        const valgtFeil = document.getElementById("feilmelding");
        valgtFeil.innerHTML = "Vennligst velg en verdi fra rullegardinmenyen";
        valgtFeil.style.color = "red";
        return false; // gjør at man ikke kan gå videre
    } else {
        //skjuler feilmeldingen dersom en verdi er valgt
        const valgtFeil = document.getElementById("feilmelding");
        valgtFeil.innerHTML = "";
    }
}


//Kilder: https://simenskriver.no/Javascript