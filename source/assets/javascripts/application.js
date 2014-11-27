// *************************************
//
//   Application
//   -> JS-based behavior
//
// *************************************

// -------------------------------------
//   Tabs
// -------------------------------------

// ----- Variables ----- //

var state = {
  active: 'is-viewing',
  hide: 'is-hiding',
  show: 'is-showing'
};

// ----- Main Logic ----- //

// 01: override fallbacks with JS

var tabLabel = document.querySelectorAll('.tab-label');
[].forEach.call(tabLabel, function(el) {
  el.classList.add(state.hide);
});

var tabNav = document.querySelectorAll('.tab-nav');
[].forEach.call(tabNav, function(el) {
  el.classList.add(state.show);
  el.querySelector('a').classList.add(state.active);
});

var tabContainers = document.querySelectorAll('.has-tab');
[].forEach.call(tabContainers, function(el) {
  tabs = el.querySelectorAll('.tab');
  console.log(tabs.length);
  var i = 0;
  for(i; i < tabs.length; i++) {
    if(i !== 0)
      tabs[i].classList.add(state.hide);
  }
});

// 02: add event listeners

var tabLinks = document.querySelectorAll('.tab-nav a');
[].forEach.call(tabLinks, function(el) {
  el.addEventListener('click', function(e) {
    target = e.target.dataset.target;
    container = e.target.parentNode.parentNode.parentNode;
    showTab(target, container);
  });
});

// ----- Helpers ----- //

function showTab(selector, collection) {
  tabs = collection.querySelectorAll('.tab');
  tabNav = collection.querySelectorAll('.tab-nav a');
  var i = 0;
  [].forEach.call(tabNav, function(el) {
    if(el.dataset.target === selector)
      el.classList.add(state.active);
    else
      el.classList.remove(state.active);
  });
  [].forEach.call(tabs, function(el) {
    el.classList.add(state.hide);
  });
  document.querySelector(selector).classList.remove(state.hide);
}
