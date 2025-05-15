function calculate(){
    let height=parseInt(document.querySelector('#input1').value);
    let weight=parseInt(document.querySelector('#input2').value);
    let result=document.querySelector('.result');

    if(height==='' || height<=0 || isNaN(height)){
        alert('Invalid height!');
    }else if(weight==='' || weight<=0 || isNaN(weight)){
        alert('Invalid weight!');
    }else{
        let bmi=(weight / ((height*height)/10000)).toFixed(1);
        finalres=result.innerHTML=`${bmi}`
    }

    if(finalres<16.0){
        radio1.checked=true;
    }
    else if(finalres >= 16.0 && finalres <= 18.4){
        radio2.checked=true;
    }
    else if(finalres >= 18.5 && finalres <= 24.9){
        radio3.checked=true;
    }
    else if(finalres >= 25.0 && finalres <= 29.9){
        radio4.checked=true;
    }
    else {
        radio5.checked=true;
    }

}
function clearall(){
    username=document.getElementById("username");
    username.value="";
    height=document.getElementById('input1');
    height.value="";
    weight=document.getElementById('input2');
    weight.value="";
    res=document.querySelector("div.result");
    res.innerHTML="";
    radio1=document.getElementById('radio1');
    radio1.checked=false;
    radio2=document.getElementById('radio2');
    radio2.checked=false;
    radio3=document.getElementById('radio3');
    radio3.checked=false;
    radio4=document.getElementById('radio4');
    radio4.checked=false;
    radio5=document.getElementById('radio5');
    radio5.checked=false;
}
