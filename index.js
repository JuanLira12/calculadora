  var nome = window.prompt('Qual é seu nome?')
       window.alert('É um grande prazer em te conhecer, ' + nome + "!")

       var n1 = document.querySelector('#numero1')
       var n2 = document.querySelector('#numero2')
       var resultado = document.querySelector('span')

       function somar () {
           resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
       }

       function subtrair () {
          resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value)
       }

       function dividir () {
        resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value)
       }

       function multiplicar () {
        resultado.innerHTML = parseInt(n1.value) *  parseInt(n2.value)
       }



       
