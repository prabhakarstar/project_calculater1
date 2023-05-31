

var result1 = document.getElementById("result");


function display(num){
    result1.value+=num;
}

function calculate(){
    var final_result = result1.value;
    var final = eval(final_result);
    result1.value = final;
}

function allclear(){
    result1.value = "";
}
function deletee(){
     result1.value = result1.value.slice(0,-1);
}


