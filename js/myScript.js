// this is the script for my webpage might create more later on though
let openMenuBar = () => {
    document.getElementById("menu").style.width = '35%';
    document.getElementById("menu").style.transition = '1s'
}
let closeMenuBar = () => {
    document.getElementById("menu").style.width = '0';
    document.getElementById("menu").style.transition = '1s';
}
let activationCodes = ['AE35TRM2', 'FR38YER3', 'HG22ISD2', 'KJ87PER4', 'HE65DAS2'];
let validateForm = () => {
    if (document.forms[0]['sname'].value["length"] < 3 || document.forms[0]['sname'].value["length"]>12) {
        document.getElementById('snameFeedBack').innerHTML = 'Surname must be between 3 to 12 characters long!!'
        console.log('wrong')
    }
    if (document.forms[0]['lname'].value["length"] < 3 || document.forms[0]['lname'].value["length"]>12) {
        document.getElementById('lnameFeedBack').innerHTML = 'Last Name must be between 3 to 12 characters long!!'
        console.log('wrong')
    }
    if (document.forms[0]['email'].value["length"] < 3 && !(document.forms[0]['email'].value.includes('@gmail.com'))) {
        document.getElementById('emailFeedBack').innerHTML = 'Email must contain "@gmail.com"'
        console.log('wrong')
    }
    if (document.forms[0]['pwd'].value["length"] < 6 || document.forms[0]['sname'].value["length"]>12) {
        document.getElementById('pwdFeedBack').innerHTML = 'Password must be between 6 to 12 characters long!!'
        console.log('wrong')
    }
    if (!(activationCodes.includes(document.forms[0]['actcode'].value))) {
        document.forms[0].noValidate = 'noValidate';
        document.getElementById('actCodeFeedBack').innerHTML = 'Invalid Activation Code!!';
        return false;
    } 
    if (!(document.forms[0]['email'].value == document.forms[0]['conemail'].value)) {
        document.forms[0].noValidate = 'noValidate';
        document.getElementById('email2FeedBack').innerHTML = 'Emails do not match!!';
        return false;
    }
    if (!(document.forms[0]['pwd'].value == document.forms[0]['conpwd'].value)) {
        document.forms[0].noValidate = 'noValidate';
        document.getElementById('pwd2FeedBack').innerHTML = 'Passwords do not match!!';
        return false;
    }
    if (!(document.forms[0]['email'].value == document.forms[0]['conemail'].value) == false && !(document.forms[0]['pwd'].value == document.forms[0]['conpwd'].value) == false && !(activationCodes.includes(document.forms[0]['actcode'].value)) == false) {
        console.log('successful login');
        document.getElementById("submit").style.width = "25vw";
        document.getElementById("submit").style.height = '7vw';
        document.getElementById("submit").style.background = "green";
        document.getElementById("submit").style.border = 'none';
        document.getElementById("submit").style.transition = '2s';
        document.getElementById("submit").style.transitionDelay = '2s';

    } else {
        console.log('bad');
    }
}
