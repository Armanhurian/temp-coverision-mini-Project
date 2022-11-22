let $ = document

let myContainer = $.querySelector('.container')
let myInput = $.querySelector('.myInput')
let myTitle = $.querySelector('.myTitle')
let convertClick = $.querySelector('.convertClick')
let resetClick = $.querySelector('.resetClick')
let changeClick = $.querySelector('.changeClick')
let myConvertText = $.querySelector('.myConvertText')



changeClick.addEventListener('click',function(){

    if(myInput.getAttribute('placeholder')==='°C'){
      myInput.setAttribute('placeholder','°F')
      myTitle.innerHTML='Converter °F to °C'
      document.title = 'temp conversion °F to °C' 
    }else if(myInput.getAttribute('placeholder')==='°F'){
      myInput.setAttribute('placeholder','°C')
      myTitle.innerHTML='Converter °C to °F'
      document.title = 'temp conversion °C to °F' 
      
    }
  })
  
  resetClick.addEventListener('click',function(){
    myConvertText.style.display = 'none'
    myInput.value = ''

  })

  
  convertClick.addEventListener('click',function(){

      if(myInput.value === ''){
        myConvertText.innerHTML= 'Number is undefind'
        myConvertText.style.display = 'block'
        myConvertText.style.color ='red'

      }else if(isNaN(myInput.value) === true){
        myConvertText.innerHTML= 'Wrong Number'
        myConvertText.style.display = 'block'
        myConvertText.style.color ='red'
      }else{
      
      if(myInput.getAttribute('placeholder') === '°C'){
        let fahrenheit = ( myInput.value * 9/5 ) + 32 
        myConvertText.innerHTML= myInput.value + ' °C ' + 'to ' + fahrenheit + ' °F'
        myConvertText.style.fontSize = '17px'
        myConvertText.style.display = 'block'
        myConvertText.style.color ='white'
        
      }else{
        let celsius = (5/9 * myInput.value) - 160/9
        myConvertText.innerHTML= myInput.value + ' °F ' + 'to ' + celsius + ' °C'
        myConvertText.style.fontSize = '17px'
        myConvertText.style.display = 'block'
        myConvertText.style.color ='white'

    } 
    
    
      
    
    
  }
    
})
   





