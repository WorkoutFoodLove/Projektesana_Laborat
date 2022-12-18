'use strict';

const switcher = document.querySelector('.btn');

var GodObj = {};
var GodObj1 = {};
var GodObj2 = {};
var GodObj3 = {};


function getInputValue(){
    // Выбор элемента input и получение его значения
    var sexVal = document.querySelector('input[name="sex"]:checked').value;
    var weightVal = document.getElementById("weight").value;
    var heightVal = document.getElementById("height").value;
    var ageVal = document.getElementById("age").value;
    // Отображение значения
    //alert(inputVal + 2);
    
    var weightnum = parseInt(weightVal);
    GodObj.lala = weightnum;
    var heightnum = parseInt(heightVal);
    GodObj1.lala = heightnum;
    var agenum = parseInt(ageVal);
    GodObj2.lala = agenum;
    GodObj3.lala = sexVal;


}

function calculateInputValue(){

    var weightnum = GodObj.lala
    var heightnum = GodObj1.lala
    var agenum = GodObj2.lala
    var sexVal = GodObj3.lala


    {
        if(sexVal === "Male"){
            iddiv.innerHTML = 655.1 + 9.563 * weightnum + 1.85 * heightnum - 4.676 * agenum;
        } else {
           iddiv.innerHTML = 66.47 + 13.75 * weightnum + 5.003 * heightnum - 6.755 * agenum;
        }

    }


}

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});