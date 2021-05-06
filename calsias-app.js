// alert('hello')
var btn = document.getElementById('btn').addEventListener('click', (event) => {
    event.preventDefault();
    var farn = document.getElementById('farn').value;
    var calcias = (farn - 32) * (5 / 9);
    calcias = parseInt(calcias)

    // alert("Calcias is : " + calcias + " Deg");
    var cals = document.getElementById("pid");
    cals.innerHTML = "Calcius Is : " + calcias + " deg";

})
var btn = document.getElementById('btn1').addEventListener('click', (event) => {
    event.preventDefault();
    var calsy = document.getElementById('cals').value;
    var farenHeight = (calsy * 9 / 5) + 32;
    farenHeight = parseInt(farenHeight)

    // alert("Calcias is : " + calcias + " Deg");
    var farns = document.getElementById("pid");
    farns.innerHTML = "faren-Height Is : " + farenHeight + " deg";

})