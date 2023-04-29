
  function Bmi(){
const h=document.getElementById('height').value;
const w = document.getElementById('weight').value;
const Bmi= w/(h/100*h/100);
 const total=Bmi.toFixed(2);
  document.getElementById('result').innerHTML="your BMI is "+ total

}

  