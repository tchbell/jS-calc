const view = {
  //Updates view when buttons are clicked
  updateView: function(){
    let viewScreen = document.getElementsByClassName('js-view')[0];
    let miniView = document.getElementsByClassName('mini-view')[0];
    viewScreen.innerHTML = '';
    miniView.innerHTML = '';
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
    let mathHoldTwo = {"num": 0, "set": false};
    let btnHandler = document.querySelector('.js-container');

    btnHandler.addEventListener('click', function(event){
      let btn = event.target;
      let screenValue = document.querySelector('.js-view');
      let miniView = document.querySelector('.mini-view');
      switch(btn.className){
        //clears whats in the view window
        case('cell clear'):
          screenValue.innerHTML = '';
          miniView.innerHTML = '';
          mathHoldOne.num = 0;
          mathHoldOne.set = false;
          mathHoldTwo.num  = 0;
          mathHoldTwo.set = false;
          mathType.type = undefined;
          break;
        case('cell math multiply'):
        //assigns mathHoldTwo.num if mathHoldOne.set is true and blanks the screenValue
          if(mathHoldOne.set){
            mathHoldTwo.num = parseInt(screenValue.innerHTML);
            mathHoldTwo.set = true;
            screenValue.innerHTML = '';
            //if mathHoldOne.set is false it assigns mathHoldOne.num and sets the set property to true
            //also sets mathType.type to multiply
          }else{
            mathHoldOne.num = parseInt(screenValue.innerHTML);
            mathHoldOne.set = true;
            screenValue.innerHTML = '';
            mathType.type = "multiply";
          }
          if(mathHoldOne.set && mathHoldTwo.set){
            //if both numbers are set cycle through calcFunc to find which mathType.type matches
            //and execute that function with the two values
            for(let name in calcFunc){
              if(mathType.type === name){
                miniView.innerHTML = calcFunc[name](mathHoldOne.num, mathHoldTwo.num);
                mathHoldOne.num = calcFunc[name](mathHoldOne.num, mathHoldTwo.num);
              }
            }
            mathHoldTwo.num = 0;
            mathHoldTwo.set = false;
            mathType.type = 'multiply';
          }
          break;
        case('cell math divide'):
          if(mathHoldOne.set){
            mathHoldTwo.num = parseInt(screenValue.innerHTML);
            mathHoldTwo.set = true;
            screenValue.innerHTML = '';
          }else{
            mathHoldOne.num = parseInt(screenValue.innerHTML);
            mathHoldOne.set = true;
            screenValue.innerHTML = '';
            mathType.type = "divide";
          }
          if(mathHoldOne.set && mathHoldTwo.set){
            for(let name in calcFunc){
              if(mathType.type === name){
                miniView.innerHTML = calcFunc[name](mathHoldOne.num, mathHoldTwo.num);
                mathHoldOne.num = calcFunc[name](mathHoldOne.num, mathHoldTwo.num);
              }
            }
            mathHoldTwo.num = 0;
            mathHoldTwo.set = false;
            mathType.type = 'divide';
          }
          break;
        case('cell math add'):
          if(mathHoldOne.set){
            mathHoldTwo.num = parseInt(screenValue.innerHTML);
            mathHoldTwo.set = true;
            screenValue.innerHTML = '';
          }else{
            mathHoldOne.num = parseInt(screenValue.innerHTML);
            mathHoldOne.set = true;
            screenValue.innerHTML = '';
            mathType.type = "add";
          }
          if(mathHoldOne.set && mathHoldTwo.set){
            for(let name in calcFunc){
              if(mathType.type === name){
                miniView.innerHTML = calcFunc[name](mathHoldOne.num, mathHoldTwo.num);
                mathHoldOne.num = calcFunc[name](mathHoldOne.num, mathHoldTwo.num);
              }
            };
            mathHoldTwo.num = 0;
            mathHoldTwo.set = false;
            mathType.type = 'add';
          }
          break;
        case('cell math subtract'):
          if(mathHoldOne.set){
            mathHoldTwo.num = parseInt(screenValue.innerHTML);
            mathHoldTwo.set = true;
            screenValue.innerHTML = '';
          }else{
            mathHoldOne.num = parseInt(screenValue.innerHTML);
            mathHoldOne.set = true;
            screenValue.innerHTML = '';
            mathType.type = "subtract";
          }
          if(mathHoldOne.set && mathHoldTwo.set){
            for(let name in calcFunc){
              if(mathType.type === name){
                miniView.innerHTML = calcFunc[name](mathHoldOne.num, mathHoldTwo.num);
                mathHoldOne.num = calcFunc[name](mathHoldOne.num, mathHoldTwo.num);
              }
            };
            mathHoldTwo.num = 0;
            mathHoldTwo.set = false;
            mathType.type = 'subtract';
          }
          break;
        case('cell equal'):
        mathHoldTwo.num = parseInt(screenValue.innerHTML);
          if(mathType.type === "add"){
            screenValue.innerHTML = calcFunc.add(mathHoldOne.num, mathHoldTwo.num);
            miniView.innerHTML = calcFunc.add(mathHoldOne.num, mathHoldTwo.num);
            mathHoldTwo.num = 0;
            mathHoldOne.num = 0;
            mathHoldOne.set = false;
          }else if(mathType.type === "subtract"){
            // screenValue.innerHTML = calcFunc.subtract(mathHoldOne.num, mathHoldTwo.num);
            // miniView.innerHTML = calcFunc.subtract(mathHoldOne.num, mathHoldTwo.num);
            // mathHoldOne.num = (mathHoldOne.num - mathHoldTwo.num);
            // mathHoldTwo.num = 0;
            // mathHoldOne.num = 0;
            // mathHoldOne.set = false;
            screenValue.innerHTML = calcFunc.subtract(mathHoldOne.num, mathHoldTwo.num);
            miniView.innerHTML = calcFunc.subtract(mathHoldOne.num, mathHoldTwo.num);
            mathHoldTwo.num = 0;
            mathHoldOne.num = 0;
            mathHoldOne.set = false;
          }
          else if(mathType.type === "multiply"){
            screenValue.innerHTML = calcFunc.multiply(mathHoldOne.num, mathHoldTwo.num);
            miniView.innerHTML = calcFunc.multiply(mathHoldOne.num, mathHoldTwo.num);
            mathHoldOne.num = (mathHoldOne.num * mathHoldTwo.num);
            mathHoldTwo.num = 0;
            mathHoldOne.num = 0;
            mathHoldOne.set = false;
          }else if(mathType.type === "divide"){
            screenValue.innerHTML = calcFunc.divide(mathHoldOne.num, mathHoldTwo.num);
            miniView.innerHTML = calcFunc.divide(mathHoldOne.num, mathHoldTwo.num);
            mathHoldOne.num = (mathHoldOne.num / mathHoldTwo.num);
            mathHoldTwo.num = 0;
            mathHoldOne.num = 0;
            mathHoldOne.set = false;
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
  add: function(x, y){
    return x + y;
  },
  subtract: function(x,y){
    return x-y;
  },
  multiply: function(x, y){
    return x * y;
  },
  divide: function(x,y){
    return x/y;
  },
  clear: function(){
    let view = document.querySelector('js-view');
    view.innerHTML = '';
  }
}
