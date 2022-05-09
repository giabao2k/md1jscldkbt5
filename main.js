let a = parseFloat(prompt("Nhap a:"));
let b = parseFloat(prompt("Nhap b:"));
let tong = (a + b <4) ? 'below' : 'over';
document.write(tong);

let login = prompt("Enter:");
let message = (login == 'Employee') ?
    'Hello' :
    (login == 'Director') ?
      'Greetings' :
      (login == '') ?
        'No login' :
        '';
alert(message);