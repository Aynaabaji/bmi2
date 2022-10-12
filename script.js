 const fire = (weight)=>{
    var range = document.querySelector('.range_span');
    let range_value = document.querySelector('#range_slider').value;
    let result = document.querySelector('.presult');

    range.textContent = range_value;
    range.style.left = (range_value/5.3) + "%";
    let height = (range_value/100);
    let calculate = (weight/(height*height));


    result.textContent = calculate;


    




 }


var age = 1;
var weight = 1;

 const pilus = (sub,cont)=>{
    var aidsplay = document.querySelector('.age_display');
    var weidisplay = document.querySelector('.weight_display');

    if(cont == 'plus' && sub=="age"){
        age++;
        aidsplay.textContent = age;
    }

    else if(sub=="age" && cont=="minus"){
        age--;
        aidsplay.textContent = age;
    }

    else if(sub=="weight" && cont=="plus"){
        weight++;
        weidisplay.textContent = weight;
        fire(weight);
    }

    else if(sub=="weight" && cont == "minus"){
        weight--;
        weidisplay.textContent = weight;
        fire(weight);
    }
 }
