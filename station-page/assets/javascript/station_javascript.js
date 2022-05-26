var navStationBtn = document.querySelector('.navbar_station-button');
var labelStation = document.querySelector('.label_station');
var labelLibrary = document.querySelector('.label_Library');
var labelSpaMuseum = document.querySelector('.label_SpaMuseum');
var labelPlumBossom = document.querySelector('.label_PlumBossom');
var labelNationalPalaceMuseum = document.querySelector(
  '.label_NationalPalaceMuseum',
);
var labelKnowledgeGod = document.querySelector('.label_KnowledgeGod');
var labelPocketMuseum = document.querySelector('.label_PocketMuseum');
var labelConfucius = document.querySelector('.label_Confucius');
var labelChineseCupid = document.querySelector('.label_ChineseCupid');
var label207Museum = document.querySelector('.label_207Museum');
var labelMazu = document.querySelector('.label_Mazu');

navStationBtn.addEventListener('click', function () {
  navStationBtn.classList.toggle('active');
});

function mouseOverStation() {
  labelStation.style.display = 'block';
}

function mouseOutStation() {
  labelStation.style.display = 'none';
}

function mouseOverLibrary() {
  labelLibrary.style.display = 'block';
}

function mouseOutLibrary() {
  labelLibrary.style.display = 'none';
}

function mouseOverSpaMuseum() {
  labelSpaMuseum.style.display = 'block';
}

function mouseOutSpaMuseum() {
  labelSpaMuseum.style.display = 'none';
}

function mouseOverPlumBossom() {
  labelPlumBossom.style.display = 'block';
}

function mouseOutPlumBossom() {
  labelPlumBossom.style.display = 'none';
}

function mouseOverNationalPalaceMuseum() {
  labelNationalPalaceMuseum.style.display = 'block';
}

function mouseOutNationalPalaceMuseum() {
  labelNationalPalaceMuseum.style.display = 'none';
}

function mouseOverKnowledgeGod() {
  labelKnowledgeGod.style.display = 'block';
}

function mouseOutKnowledgeGod() {
  labelKnowledgeGod.style.display = 'none';
}

function mouseOverPocketMuseum() {
  labelPocketMuseum.style.display = 'block';
}

function mouseOutPocketMuseum() {
  labelPocketMuseum.style.display = 'none';
}

function mouseOverConfucius() {
  labelConfucius.style.display = 'block';
}

function mouseOutConfucius() {
  labelConfucius.style.display = 'none';
}

function mouseOverChineseCupid() {
  labelChineseCupid.style.display = 'block';
}

function mouseOutChineseCupid() {
  labelChineseCupid.style.display = 'none';
}

function mouseOver207Museum() {
  label207Museum.style.display = 'block';
}

function mouseOut207Museum() {
  label207Museum.style.display = 'none';
}

function mouseOverMazu() {
  labelMazu.style.display = 'block';
}

function mouseOutMazu() {
  labelMazu.style.display = 'none';
}
