window.onload = function(){
  //  alert("Seja Bem-vindo!");

  var Minutos = document.getElementById("minutos");
  var Segundos = document.getElementById("segundos");
  var botao = document.getElementById("comecar");
  var display = document.getElementById("display");


  var cronometroSeg;
  var minutoAtual;
  var segundoAtual;

  var interval;


  for(var i = 0; i <= 60; i++){
    Minutos.innerHTML+='<option value="'+i+'">'+i+'</option>';
  }

  for(var i = 0; i <= 60; i++){
    Segundos.innerHTML+='<option value="'+i+'">'+i+'</option>';
  }


  botao.addEventListener('click',function(){
    minutoAtual = Minutos.value;
    segundoAtual = segundos.value;

    display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;
    
    
    interval = setInterval( function(){
        segundoAtual--;
        if(segundoAtual <= 0){
            if(minutoAtual > 0){
                minutoAtual--;
                segundoAtual = 59;
            }else{
                document.getElementById("sound").play();
                alert("Acabou!");
                clearInterval(interval);
            }
        }

        display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;
    }, 1000);

  });

}