

function passwordGenerator() {
    const charactersSet = "!$%&'(),./0123456789:;<=?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
    let myPassowrd = "";
    const passwordLength = 16;

     for (let i = 0; i < passwordLength; i++) {
        let randomNum = Math.ceil(Math.random() * passwordLength);
        myPassowrd += charactersSet.charAt(randomNum);
     }

    document.getElementById("password").value = myPassowrd;

}