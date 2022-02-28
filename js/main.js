var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elMan = document.querySelector(".list__result--man");
var elBicycle = document.querySelector(".list__result--bicycle");
var elCar = document.querySelector(".list__result--car");
var elPlane = document.querySelector(".list__result--plane")


elForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  var elValue = elInput.value;
  var person = 3.6;
  var bike = 20.1;
  var transport = 70;
  var airplane = 800;
  var elReturn = document.querySelector(".return")


  if(elValue <= 0 || isNaN(elValue)){
    elReturn.textContent="0 dan katta son kiriting , va raqam kiriting!"
    elReturn.classList.add("return-error")
    return
  }else{
    elReturn.textContent=""
    elReturn.classList.remove('return-error')
  }


  function calculateTime_1(distance, speed) {
    var hour = Math.floor(elValue / person);
    var minute = Math.floor((elValue / person - hour) * 60);
    var second = Math.floor(((elValue / person - hour) * 60 - minute) * 60);
    return hour + ' soat ' + minute + ' minut ' + second + 'secund';
  }

  function calculateTime_2(distance, speed) {
    var hour = Math.floor(elValue / bike);
    var minute = Math.floor((elValue / bike - hour) * 60);
    var second = Math.floor(((elValue / bike - hour) * 60 - minute) * 60);
    return hour + ' soat ' + minute + ' minut ' + second + 'secund';
  }

  function calculateTime_3(distance, speed) {
    var hour = Math.floor(elValue / transport);
    var minute = Math.floor((elValue / transport - hour) * 60);
    var second = Math.floor(((elValue / transport - hour) * 60 - minute) * 60);
    return hour + ' soat ' + minute + ' minut ' + second + 'secund';
  }

  function calculateTime_4(distance, speed) {
    var hour = Math.floor(elValue / airplane);
    var minute = Math.floor((elValue / airplane - hour) * 60);
    var second = Math.floor(((elValue / airplane - hour) * 60 - minute) * 60);
    return hour + ' soat ' + minute + ' minut ' + second + 'secund';
  }

  elMan.textContent = calculateTime_1();
  elBicycle.textContent = calculateTime_2();
  elCar.textContent = calculateTime_3();
  elPlane.textContent = calculateTime_4();

})