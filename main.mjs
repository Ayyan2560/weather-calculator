// < 10 ==> too cold you may ill
// < 20 ==> too cold dont go outside
// < 30 ==> cold take a jacket
// < 35 ==> normal temperature
// < 40 ==> too much heat take a water bottle
// >50 ==> too much heat, you may have a heat stroke



function Calculate_weather(){

   let calculate = document.getElementById("weather").value
   let result = ""

   if(calculate === "" || calculate < 0){
      result = "❌ Enter valid temperature"
   }
   else if(calculate >= 50){
      result = "🔥 Too much heat, you may have a heat stroke"
   }
   else if(calculate >= 40){
      result = "🥵 Too much heat, take a water bottle"
   }
   else if(calculate >= 35){
      result = "🙂 Normal temperature"
   }
   else if(calculate >= 30){
      result = "🧥 Cold, take a jacket"
   }
   else if(calculate >= 20){
      result = "❄ Too cold, don’t go outside"
   }
   else if(calculate >= 10){
      result = "🥶 Too cold, you may fall ill"
   }
   else{
      result = "🧊 Extreme cold"
   }

   document.getElementById("Check").innerText = result
}
