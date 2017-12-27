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
  btnHandle: function(){
    let btnHandler = document.querySelector('.js-container');
    btnHandler.addEventListener('click', function(event){
      let btn = event.target;

      switch(btn.className){
        case('cell clear'):
        document.querySelector('.js-view').innerHTML = '';
        console.log("ok");
        break;
      }
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
