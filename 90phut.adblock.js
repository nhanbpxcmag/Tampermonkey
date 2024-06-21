let regex = /([a-z0-9-]*.*90phut*.*[a-z0-9-]*)/;
let domain = window.location.hostname;
let check = regex.test(domain)


let helper = {
  removeClass: function(classname){
    let x = document.getElementsByClassName(classname);
    if(x.length > 0) { x[0].classList.remove(classname); }
  },
  removeElementsByClass: function(className){
      const elements = document.getElementsByClassName(className);
      while(elements.length > 0){
          elements[0].parentNode.removeChild(elements[0]);
      }
  }
}
function adblock(){  
  if(!check) return;
  document.body.classList.remove('overflow-hide');
  helper.removeClass('bg-overlay');
  helper.removeElementsByClass('modal')
  helper.removeElementsByClass('g-imgtop')
  helper.removeElementsByClass('g-imgbot')
}
adblock();
