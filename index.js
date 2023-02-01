function calcular(){
   var entrada = document.getElementById('entrada')
   var res = document.getElementById('res')
   res.innerHTML = '<p>Tabuada de:<p/>'
   if (entrada.value.length == 0 || Number(entrada.value) < 1){
    window.alert('[ERROR]- por favor digite uma tabuada valida')
   }
   else{
    var t = Number(entrada.value)
    var i = 0
    let r = 0
    res.innerText += `${t}`
    do{
       
        r = t * i
        res.innerHTML += `<br>${t} * ${i} = ${r} `
        i++
        
    }while(i <= 10)
   }
}