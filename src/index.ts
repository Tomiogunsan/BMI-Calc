function calculateBmi () : void {
  let weight = document.querySelector<HTMLInputElement>('#weight')?.valueAsNumber
  let height = document.querySelector<HTMLInputElement>('#height')?.valueAsNumber
  
   if (weight == undefined) return
   if(height == undefined)return

  let bmi =  weight / (height * height)
 console.log(bmi)

 const heading = document.getElementById('heading') as HTMLInputElement
 heading.innerHTML= "Your BMI is : " + String(bmi.toFixed(1))

  //  let bmiOutput = document.querySelector<HTMLInputElement>('#bmi-output')!
  //  console.log(bmiOutput)
  // bmiOutput.textContent = String(bmi.toFixed(1))
 
 
  if(bmi <= 18.49){
  const message = document.getElementById('message') as HTMLInputElement
  message.innerHTML = 'You are underweight'
 }else if (bmi >= 18.5 && bmi <= 24.9){
  const message = document.getElementById('message') as HTMLInputElement
  message.innerHTML = 'You have a healthy weight'
 } else {
  const message = document.getElementById('message') as HTMLInputElement
  message.innerHTML = 'You are overweight'
 }
 
 
}
const submitButton = document.querySelector('#submit')
submitButton?.addEventListener('click', calculateBmi)



function reload (){
  window.location.reload()
}

const clearButton = document.querySelector('#clear')
clearButton?.addEventListener('click', reload)