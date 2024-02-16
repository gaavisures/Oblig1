let billetter = [];

function kjop() {
    let antallBilletter = document.getElementById("antallBilletter").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnummer = document.getElementById("telefonnummer").value;
    let epost = document.getElementById("epost").value;
    let erValid = true;

    document.getElementById("antallBilletterFeil").innerHTML = "";
    document.getElementById("fornavnFeil").innerHTML = "";
    document.getElementById("etternavnFeil").innerHTML = "";
    document.getElementById("telefonnummerFeil").innerHTML = "";
    document.getElementById("epostFeil").innerHTML = "";

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

    if (erValid) {
        const billett = {
            film: document.getElementById("film").value,
            antall: antallBilletter,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnummer: telefonnummer,
            epost: epost
        };

        billetter.push(billett);
        visBilletter();
        clearFields();
    }
}

function visBilletter() {
    let billettListeHTML = "<h3>Registrerte billetter:</h3>";
    billetter.forEach(billett => {
        billettListeHTML += `
            <p>
                Film: ${billett.film}, 
                Antall: ${billett.antall}, 
                Navn: ${billett.fornavn} ${billett.etternavn}, 
                Telefonnummer: ${billett.telefonnummer}, 
                Epost: ${billett.epost}
            </p>
        `;
    });
    document.getElementById("billettListe").innerHTML = billettListeHTML;
}

function slett() {
    billetter = [];
    document.getElementById("billettListe").innerHTML = "";
}

function clearFields() {
    document.getElementById("film").selectedIndex = 0;
    document.getElementById("antallBilletter").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnummer").value = "";
    document.getElementById("epost").value = "";
}

function velg() {
    var filmValg = document.getElementById("film").value;
    var rullebladDiv = document.getElementById("rulleblad");
    if (filmValg !== "") {
        rullebladDiv.style.display = "block";
    } else {
        rullebladDiv.style.display = "none";
    }
}

function validerVelgFilm() {
    let valgtFilm = document.getElementById("film").value;
    let rullebladFeil = document.getElementById("rullebladFeil");

    rullebladFeil.innerHTML = "";

    if (valgtFilm === "") {
        rullebladFeil.innerHTML = "Du må velge en film fra listen.";
        rullebladFeil.style.color = "red";
        return false;
    }

    return true;
}


function validerAntallBilletter() {
    let antallBilletter = document.getElementById("antallBilletter").value;
    let antallFeil = document.getElementById("antallBilletterFeil");
    antallFeil.innerHTML = "";
    if (antallBilletter === "") {
        antallFeil.innerHTML = "Antall billetter må fylles ut.";
        antallFeil.style.color = "red";
        return false;
    } else if (isNaN(antallBilletter) || antallBilletter <= 0) {
        antallFeil.innerHTML = "Antall billetter må være større enn null.";
        antallFeil.style.color = "red";
        return false;
    }
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
    // Tilpasset validering basert på dine krav
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
    // Tilpasset validering basert på vanlige epost-formater
    let epostRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!epostRegEx.test(epost)) {
        epostFeil.innerHTML = "Vennligst skriv inn en gyldig epostadresse.";
        epostFeil.style.color = "red";
        return false;
    }
    return true;
}

function velg() {
    let ut = "Valgt film: ";
    const filmer = document.getElementsByName("film");
    for (let film of filmer) {
        if (film.checked) {
            ut += film.value;
            break;
        }
    }
    ut += "Antall billetter: " + document.getElementById("antallBilletter").value;
    ut += "Navn: " + document.getElementById("fornavn").value + " " + document.getElementById("etternavn").value;
    ut += "Telefonnummer: " + document.getElementById("telefonnummer").value;
    ut += "Epost: " + document.getElementById("epost").value;
    document.getElementById("resultat").innerHTML = ut;

    billetter.splice(0, billetter.length);
}


