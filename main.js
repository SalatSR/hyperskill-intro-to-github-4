let user = {
    pass: "TrustNo1",
};
let pass = document.getElementById('password');
let btnOk = document.getElementById('okBtn');
let inptForCheck = document.getElementsByClassName('lock');
let systemCheck = document.getElementsByClassName('inptChBx');
let rangeCheck = document.getElementsByClassName('inptRng');
let lnchBtn = document.getElementById('launchBtn');
let rocketJet = document.getElementById('rocketid');
let test1 = 0;
let test2 = 0;

//  Check pass to able checkboxes and ranges
btnOk.onclick = function checkPass() {
    if (pass.value === user.pass) {
        for (let i = 0; i < inptForCheck.length; i++) {
            let inpt = inptForCheck[i];
            if (inpt.getAttribute('disabled') == false) {
                inpt.removeAttribute('disabled');
            }
        }
    } else {
        alert("Wrong pass!");
    }
};
//    Сondition to check checkboxes
for (i = 0; i < systemCheck.length; i++) {
    let a = systemCheck[i];
    a.addEventListener('change', function() {
        let b;
        if (a.checked) {
            b = true;
        } else {
            b = false;
        }
        if (b == true) {
            test1 = test1 + 1;
        } else {
            test1 = test1 - 1;
        }
        unlockLounchBtn();
    });
}
//    Сondition to check range
for (i = 0; i < rangeCheck.length; i++) {
    let a = rangeCheck[i];
    a.addEventListener('change', function(){
        let b;
        if (a.hasAttribute('max').value = "100") {
            b = true;
        } else {
            b = false;
        }
        if (b == true) {
            test2 = test2 + 1;
        } else {
            test2 = test2 - 1;
        }
        unlockLounchBtn();
    });
}
/*
//  Сondition to able a launch botton
console.log('test1 = ' + test1);
console.log('test2 = ' + test2);
*/
function unlockLounchBtn() {
    if (test1 == 6 && test2 == 5) {
        lnchBtn = lnchBtn.removeAttribute('disabled');
        console.log('good job');
    }
}

lnchBtn.onclick = function start() {
    rocketJet.style.transform = 'translate(300px, -800px)';
}
