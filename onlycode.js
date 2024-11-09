const form=document.querySelector('form')


form.addEventListener('submit',function(e){
  e.preventDefault()

  const height=parseInt(document.querySelector('#height').value)

  const weight=parseInt(document.querySelector('#weight').value)

  const result=document.querySelector('#results')


  if(height==='' || height<0 || isNaN(height)){
    result.innerHTML=`please give the Valid height ${height}`
  }
  
  else if(weight==='' || weight<0 || isNaN(height)){
    result.innerHTML=`please give the Valid weight ${height}`
  }

  else{
   const bmi= (weight / ((height*height)/10000)).toFixed(2)
// show the result
// result.innerHTML=`your BMI is : ${bmi}`
// result.innerHTML=`<span> YOUR BMI IS:${bmi}</span>`

 if(bmi<=18.6){
  result.innerHTML=`<span> Your BMI is:${bmi},its is underweigt</span>`

}


 else if(bmi>=18.6 || bmi<=24.9){
  result.innerHTML=`<span> Your BMI is:${bmi},its is Normal</span>`

}


 if(bmi>24.9){
  result.innerHTML=`<span> Your BMI is:${bmi},its is overweightweigt</span>`

}


  }




})