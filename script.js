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
  clearView: function(){
    caclFunc.clear();
  }


}
view.updateView();

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
