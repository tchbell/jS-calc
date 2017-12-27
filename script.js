const view = {
  updateView: function(){
    let viewScreen = document.getElementsByClassName('js-view')[0];
    viewScreen.innerHTML = '';
    const jsContainer = document.getElementsByClassName('js-container')[0];
    jsContainer.addEventListener('click', function(e){
      let show = e.target.innerHTML;
      viewScreen.innerHTML += show;
    });
  },
  //have a handler that sets what each button does with event delegation
  btnHandle: function(){
    let mathType = {"type": undefined};
    let mathHoldOne = {"num": 0, "set": false};
    let mathHoldTwo = 0;
    let btnHandler = document.querySelector('.js-container');

    btnHandler.addEventListener('click', function(event){
      let btn = event.target;
      let screenValue = document.querySelector('.js-view');
      switch(btn.className){
        //clears whats in the view window
        case('cell clear'):
          screenValue.innerHTML = '';
          mathHoldOne.num = 0;
          mathHoldOne.set = false;
          mathHoldTwo = 0;
          mathType.type = undefined;
          break;
        case('cell math multiply'):
          if(mathHoldOne.set){
            mathHoldTwo = parseInt(screenValue.innerHTML);
            screenValue.innerHTML = '';
          }else{
            mathHoldOne.num = parseInt(screenValue.innerHTML);
            mathHoldOne.set = true;
            screenValue.innerHTML = '';
            mathType.type = "mulitply";
          }
          break;
        case('cell math divide'):
          mathHoldOne= parseInt(screenValue.innerHTML);
          screenValue.innerHTML = '';
          mathType.type = "divide";
          break;
        case('cell math add'):
          mathHoldOne = parseInt(screenValue.innerHTML);
          screenValue.innerHTML = '';
          mathType.type = "add";
          break;
        case('cell math subtract'):
          mathHoldOne = parseInt(screenValue.innerHTML);
          screenValue.innerHTML = '';
          mathType.type = "subract";
          break;
        case('cell equal'):
        mathHoldTwo = parseInt(screenValue.innerHTML);
          if(mathType.type === "add"){
            screenValue.innerHTML = (mathHoldOne.num + mathHoldTwo);
            mathHoldOne.num = (mathHoldOne.num + mathHoldTwo);
            mathHoldTwo = 0;
          }else if(mathType.type === "subract"){
            screenValue.innerHTML = (mathHoldOne.num - mathHoldTwo);
            mathHoldOne.num = (mathHoldOne.num - mathHoldTwo);
            mathHoldTwo = 0;
          }
          else if(mathType.type === "mulitply"){
            screenValue.innerHTML = (mathHoldOne.num * mathHoldTwo);
            mathHoldOne.num = (mathHoldOne.num * mathHoldTwo);
            mathHoldTwo = 0;
          }else if(mathType.type === "divide"){
            screenValue.innerHTML = (mathHoldOne.num / mathHoldTwo);
            mathHoldOne.num = (mathHoldOne.num / mathHoldTwo);
            mathHoldTwo = 0;
          }
          break;
      }

      console.log(mathHoldOne, mathHoldTwo, mathType.type);
    })
  }

}
view.updateView();
view.btnHandle();
const calcFunc = {
  add: function(){

  },
  subtract: function(){

  },
  multiply: function(){

  },

  clear: function(){
    let view = document.querySelector('js-view');
    view.innerHTML = '';
  }
}
