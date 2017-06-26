var a = Number(prompt('Введіть a'));
var b = Number(prompt('Введіть b'));
var c = Number(prompt('Введіть c'));

var result = quadraticEquation(a, b, c);
document.write(result);
function quadraticEquation(a, b, c) {
    var result;
    if (a === 0) {
        result = 'Рівняння не квадратне, будь ласка введіть a відмінне від 0!';
    if (d == 0) { 
        'Рівняння має один корінь'
   if (d > 0) {'Рівняння має два корені'}
     }
 }
    
    var d = calcD(a, b, c);
    var x1 = (-b - Math.sqrt(d))/(2*a);
    var x2 = (-b + Math.sqrt(d))/(2*a);
    
        return 'x1 = ' + x1 + ', x2 = ' + x2;
     
}

function calcD(a, b, c) {
    return b*b - 4*a*c;
}
 

 