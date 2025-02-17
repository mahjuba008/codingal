var choice = prompt('welcome to area calculator...what do you wanna calculate? \n1. rectangle\n2. circle\n3. triangle')
if (choice == '1') {
    var b = prompt('base?');
    var h = prompt('height?');
    var area = b * h;
    alert('area=' + area)
}
if (choice == '3') {
    var b = prompt('base');
    var h = prompt('height?');
    var area = b * h * 0.5;
    alert('area= ' + area)
}
if (choice == '2') {
    var r = prompt('radius?');
    var area = 3.1416 * r * r;
    alert('area= ' + area)

}