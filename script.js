const view = {
  updateView: function(){
    let mathType = {type: undefined};
    let integerOne = 0;
    let integerTwo = 0;
    let viewScreen = document.getElementsByClassName('js-view')[0];
    viewScreen.innerHTML = '';
    const jsContainer = document.getElementsByClassName('js-container')[0];
    jsContainer.addEventListener('click', function(e){
      let show = e.target;
      viewScreen.innerHTML += show.innerHTML;


      switch(show.className){
        case 'cell addition':
        integerOne = parseInt(viewScreen.innerHTML);
        mathType.type = 'addition';
        break;
        case 'cell subtraction':
        integerOne = parseInt(viewScreen.innerHTML);
        mathType.type = 'subtraction';
        break;
        case 'cell multiply':
        integerOne = parseInt(viewScreen.innerHTML);
        mathType.type = 'multiplication';
        break;
        case 'cell division':
        integerOne = parseInt(viewScreen.innerHTML);
        mathType.type = 'division';
        break;
        case 'cell clear':
        viewScreen.innerHTML = '';
        break;
      }

      if(show.className === 'cell equal'){
        integerTwo = parseInt(viewScreen.innerHTML.slice(integerOne.toString().length + 1, viewScreen.innerHTML.length -1));
        switch(mathType.type){
          case 'addition':
          viewScreen.innerHTML = calcFunc.add(integerOne, integerTwo);
          break;
          case 'subtraction':
          viewScreen.innerHTML = calcFunc.subtract(integerOne, integerTwo);
          break;
          case 'multiplication':
          viewScreen.innerHTML = calcFunc.multiply(integerOne, integerTwo);
          break;
          case 'division':
          viewScreen.innerHTML = calcFunc.divide(integerOne, integerTwo);
          break;
          default:
          viewScreen.innerHTML = "Nothing Entered"
          break;
        }
        // if(mathType.type ==='addition'){
        // console.log(true);
        //   viewScreen.innerHTML = calcFunc.add(integerOne, integerTwo);
        // }
      }

    });
  }


}
view.updateView();

const calcFunc = {
  add: function(x, y){
    return x + y;
  },
  subtract: function(x, y){
    return x -y;
  },
  multiply: function(x,y){
    return x * y;
  },
  divide: function(x,y){
    return x / y;
  },
  clear: function(){
    document.getElementsByClassName('js-view')[0].innerHTML = '';
  }
}
