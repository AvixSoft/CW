const ageUpSound = new Audio ("../sound/ageUp.mp3")
const shipSelectSound = new Audio ("../sound/frigateSelect.mp3")
const townSelectSound = new Audio ("../sound/townSelect.mp3")
const buttonClickAudio2 = new Audio ( "https://raw.githubusercontent.com/AvixSoft/CW/master/sound/buttonClick2.mp3?raw=true");
const ageOfExplorationMusic = new Audio ("http://23.237.126.42/ost/europa-universalis-iv/rfeawvge/nighttime.mp3")
const ageOfReasonMusic = new Audio ("http://23.237.126.42/ost/europa-universalis-iv/egieqxai/openseas.mp3")
const industrialRevolutionMusic = new Audio ("../sound/music/industrialAgeMusic.mp3")
const ageOfReformMusic = new Audio ("../sound/music/ageOfReformMusic.mp3")
const prog = document;
const RULERNAME = "rulerName";
const CURRENTWEALTH = "currentWealth";
const ARMYPOP = "armyPop";
const CURRENTINCOME = "currentIncome";
const TURNCOUNT = "turnCount";
const CURRENTYEAR = "currentYear"
const CURRENTAGE = "currentAge"
const AGETAB = "ageTab"
const AGENAME = "ageName"
const AGEYEARS = "ageYears"
const AGEINFO = "ageInfo"
const AGEICON = "ageIcon"
const VIS = "visibility";
const visTrue = "visible";
const visFalse = "hidden";
const visNone = "none";
const rulerNameJS = prog.getElementById(RULERNAME);
const currentWealthJS = prog.getElementById(CURRENTWEALTH);
const armyPopJS = prog.getElementById(ARMYPOP);
const currentIncomeJS = prog.getElementById(CURRENTINCOME);
const turnCountJS = prog.getElementById(TURNCOUNT);
const currentYearJS = prog.getElementById(CURRENTYEAR);
const currentAgeJS = prog.getElementById(CURRENTAGE);
const ageTabJS = prog.getElementById(AGETAB);
const ageNameJS = prog.getElementById(AGENAME);
const ageYearJS = prog.getElementById(AGEYEARS);
const ageInfoJS = prog.getElementById(AGEINFO);
const mapJS = prog.getElementById('module');
const ageIconJS = prog.getElementById(AGEICON);
let turnClock = 0;
let armyTurnCount = 0;
let year = 1600
let yearTurnCount = 0;
let age = "Age of Exploration"
//main variables for menu

function removeElementMainMenu(mainX) {
  // Removes an element from the document
  let element = prog.getElementById("mainX");
  element.parentNode.removeChild(element);
};

function showGame() {
  prog.getElementById('module').style.backgroundImage = "url(../img/europa.jpg)"
  prog.getElementById('module').style.visibility = "visible"
  prog.getElementById('mainSelectionTabs').style.visibility = "visible"
  prog.getElementById('nationMenuInfo').style.visibility = "visible"
  prog.getElementById('rulerTab').style.visibility = "visible"
  // prog.getElementById('tabs').style.visibility = "visible"
  // prog.getElementById('locationsForEverything').style.visibility = "visible"
}
function removeMainX() {
  removeElementMainMenu(mainX)
}
//musicFunctions
function enterGame() {
  setTimeout(showGame, 3000)
  prog.getElementById('topWoodLoad').style.animation = "topLoadComeDown 4s forwards"
  prog.getElementById('bottomWoodLoad').style.animation = "bottomLoadComeUp 4s forwards"
  prog.getElementById('mainTitle').style.setProperty("animation", "fadeX 1s");
  prog.getElementById('mainSubTitle').style.setProperty("animation", "fadeX 1s");
  setTimeout(removeMainX, 1500)
};

const frenchColonies = ["Le Souixseau", "Oiile Memeleaux"];
let nationInfo = {
  initValues: {
    armySize: 150,
    wealth: 5000,
    settlers: 1,
    explorers: 2,
    fleetShips: 5,
    income: 50
  },
  ruler: "Henry IV",
  nationality: "French",
  capitalOrigin: "53.9% 51.5%",
  capitalPop: 230,
  flagIcon: "url(../img/flagFranceIcon.png)",
  rulerIcon: "url(../img/rulerFranceIcon.png)",
  nationColor: "",
};
let deltaX = 0;
  let deltaY = 0;
  let scale = 100;
  
  let drag = {
      elem: null,
      x: 0,
      y: 0,
      state: false
  };
  let delta = {
      x: 0,
      y: 0
  };

function checkFrance() {
  currentAgeJS.innerHTML = age;
  rulerNameJS.innerHTML = nationInfo.ruler;
  currentWealthJS.innerHTML = nationInfo.initValues.wealth + " Gold";
  armyPopJS.innerHTML = "Garrison: " + nationInfo.initValues.armySize;
  currentIncomeJS.innerHTML = nationInfo.initValues.income + "+ GPT";
  turnCountJS.innerHTML = "Turn: " + turnClock;
  currentYearJS.innerHTML = year + " A.D.";
}
checkFrance();

function gameStart() {
  if(year == 1600 && turnClock == 0){
  ageOfExplorationMusic.play()
  ageOfExplorationMusic.loop = true
  }
  let isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
}


function deployTroopsBasic() {
  buttonClickAudio2.play()
  nationInfo.initValues.armySize +=25;
  nationInfo.initValues.wealth -= 500;
  armyPopJS.innerHTML = "Garrison: " + nationInfo.initValues.armySize;
  currentWealthJS.innerHTML = nationInfo.initValues.wealth + " Gold";
  nationInfo.initValues.income -=3;
  currentIncomeJS.innerHTML = nationInfo.initValues.income + "+ GPT";
}

function endTurn() {
  buttonClickAudio2.play()
  armyPopJS.innerHTML = "Garrison: " + nationInfo.initValues.armySize;
  nationInfo.initValues.wealth += nationInfo.initValues.income;
  currentWealthJS.innerHTML = nationInfo.initValues.wealth + " Gold";
  turnClock++;
  turnCountJS.innerHTML = "Turn: " + turnClock;
  nationInfo.initValues.income +=1;
  currentIncomeJS.innerHTML = nationInfo.initValues.income + "+ GPT";
  currentYearJS.innerHTML = year + " A.D.";
  armyTurnCount++;
  yearTurnCount++
  armyCheck()
  yearCheck()
  ageCheck()
}
function noVis() {
  ageTabJS.style.setProperty(VIS, visFalse)
}
function armyCheck() {
  if (armyTurnCount == 2) {
    nationInfo.initValues.armySize +=50;
    armyPopJS.innerHTML = "Garrison: " + nationInfo.initValues.armySize;
    armyTurnCount-=4
  }
}
function yearCheck() {
  if (yearTurnCount == 1) {
    year+=1
    currentYearJS.innerHTML = year + " A.D.";
    yearTurnCount-=1
  }
}
function closeAgeTab() {
  ageTabJS.style.animation = "fadeOut 0.5s forwards"
  setTimeout(noVis, 300)
  gameStart()
}

function shipSelect() {
  shipSelectSound.play()
}
function townSelect() {
  townSelectSound.play()
  townSelectSound.volume = 5;
}
function changeMusic1() {
  ageOfReasonMusic.play()
  ageOfReasonMusic.loop = true
}
function changeMusic2() {
  ageOfReasonMusic.pause()
  industrialRevolutionMusic.play()
  industrialRevolutionMusic.loop = true
}
function changeMusic3() {
  industrialRevolutionMusic.pause()
  ageOfReformMusic.play()
  ageOfReformMusic.loop = true
}

function ageCheck() {
  if(year == 1624 && turnClock == 24) {
    ageUpSound.play()
    ageIconJS.style.backgroundImage = "url(../img/ageOfReason.jpg)"
    prog.getElementById('iconTab').style.background = "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(22,186,36,1) 100%)"
    ageTabJS.style.setProperty(VIS, visTrue)
    age = "Age of Reason"
    ageTabJS.style.animation = "fadeIn 0.5s forwards"
    currentAgeJS.innerHTML = age;
    ageNameJS.innerHTML = age
    ageYearJS.innerHTML = "(1624 - 1697)"
    ageInfoJS.innerHTML = "The period when philosophy, science, and social thought were associated with the principles of rationalism and the celebration of the achievements of human reason."
    ageOfExplorationMusic.pause()
    setTimeout(changeMusic1, 2000)
    prog.getElementById('quebecLocation').style.backgroundImage = "url(../img/commonAnimSheet/flags/french/frenchColony2.gif)"
    prog.getElementById('jamestownLocation').style.backgroundImage = "url(../img/commonAnimSheet/flags/england/englishColony2.gif)"
    prog.getElementById('santoDomingoLocation').style.backgroundImage = "url(../img/commonAnimSheet/flags/spain/spanishColony2.gif)"
    prog.getElementById('newAmsterdamLocation').style.backgroundImage = "url(../img/commonAnimSheet/flags/dutch/dutchColony2.gif)"
  } 
  if (year == 1625 && turnClock == 25){
    prog.getElementById('iconTab').style.background = nationInfo.nationColor
  
  }
  if(year == 1698 && turnClock == 98) {
    ageUpSound.play()
    ageIconJS.style.backgroundImage = "url(../img/industrialRevolution.png)"
    prog.getElementById('iconTab').style.background = "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(22,186,36,1) 100%)"
    ageTabJS.style.setProperty(VIS, visTrue)
    age = "Industrial Revolution"
    ageTabJS.style.animation = "fadeIn 0.5s forwards"
    currentAgeJS.innerHTML = age;
    ageNameJS.innerHTML = age
    ageYearJS.innerHTML = "(1698 - 1775)"
    ageInfoJS.innerHTML = "The Industrial Revolution was a time when the manufacturing of goods moved from small shops and homes to large factories. This shift brought about changes in culture as people moved from rural areas to big cities in order to work."
    ageOfReasonMusic.pause()
    setTimeout(changeMusic2, 2500)
    prog.getElementById('quebecLocation').style.backgroundImage = "url(../img/commonAnimSheet/flags/french/frenchColony3.gif)"
    prog.getElementById('jamestownLocation').style.backgroundImage = "url(../img/commonAnimSheet/flags/england/englishColony3.gif)"
    prog.getElementById('santoDomingoLocation').style.backgroundImage = "url(../img/commonAnimSheet/flags/spain/spanishColony3.gif)"
    prog.getElementById('newAmsterdamLocation').style.backgroundImage = "url(../img/commonAnimSheet/flags/dutch/dutchColony3.gif)"
  }
  if (year == 1699 && turnClock == 99){
    prog.getElementById('iconTab').style.background = nationInfo.nationColor
  }
  if(year == 1776 && turnClock == 176) {
    ageUpSound.play()
    ageIconJS.style.backgroundImage = "url(../img/ageOfReform.png)"
    prog.getElementById('iconTab').style.background = "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(22,186,36,1) 100%)"
    ageTabJS.style.setProperty(VIS, visTrue)
    age = "Age of Reform"
    ageTabJS.style.animation = "fadeIn 0.5s forwards"
    currentAgeJS.innerHTML = age;
    ageNameJS.innerHTML = age
    ageYearJS.innerHTML = "(1776 - 1815)"
    ageInfoJS.innerHTML = "The Age of Revolution is the period in which a number of significant revolutionary movements occurred in most of Europe and the Americas."
    industrialRevolutionMusic.pause()
    setTimeout(changeMusic3, 2500)
    prog.getElementById('quebecLocation').style.backgroundImage = "url(../img/commonAnimSheet/flags/french/frenchColony4.gif)"
    prog.getElementById('jamestownLocation').style.backgroundImage = "url(../img/commonAnimSheet/flags/england/englishColony4.gif)"
    prog.getElementById('santoDomingoLocation').style.backgroundImage = "url(../img/commonAnimSheet/flags/spain/spanishColony4.gif)"
    prog.getElementById('newAmsterdamLocation').style.backgroundImage = "url(../img/commonAnimSheet/flags/dutch/dutchColony4.gif)"
  }
  if (year == 1777 && turnClock == 177){
    prog.getElementById('iconTab').style.background = nationInfo.nationColor
  }
  if(year == 1816) {
    age = "Age of Modernization"
    currentAgeJS.innerHTML = age;
  }
  if(year == 1865) {
    age = "Progressive Era"
    currentAgeJS.innerHTML = age;
  }
  if(year == 1896) {
    age = "Guilded Age"
    currentAgeJS.innerHTML = age;
  }
  if(year == 1919 && turnClock == 319) {
    year = "Anno Infinitum"
    currentYearJS.innerHTML = year;
    age = "The Neverending Age"
    currentAgeJS.innerHTML = age;
  }
}
// const el = document.querySelector("#module");

// el.addEventListener("mousemove", (e) => {
//   el.style.backgroundPositionX = -e.offsetX + "px";
//   el.style.backgroundPositionY = -e.offsetY + "px";
// });
//___________________get keyboard input___________________
// ⇦73   ⇨39   ⇧38   ⇩40    W87   A65   S83   D68    spacebar 32
const keys = [];
document.onkeydown = function(e){
  keys[e.keyCode] = true;
  console.log(e.keyCode);
}
document.onkeyup = function(e){
  keys[e.keyCode] = false;
}
let mapScale = 0.25
// if(keys[88]){
//   prog.getElementById('module').style.transform = "scale(" + (mapScale+1) + ")";
// }
// if(keys[90]){
//   prog.getElementById('module').style.transform = "scale(" + (mapScale-1) + ")";
// }
function zoomIn() {
    prog.getElementById('module').style.transform = "scale(" + (mapScale+=0.1) + ")";
    if(mapScale < 0.25){
      mapScale+=0.1
    }
    if(mapScale > 1){
      mapScale-=0.1
    }
    console.log(mapScale)
}
function zoomOut() {
  prog.getElementById('module').style.transform = "scale(" + (mapScale-=0.1) + ")";
  if(mapScale < 0.25){
    mapScale+=0.1
  }
  if(mapScale > 1){
    mapScale-=0.1
  }
  console.log(mapScale)
}
function fullscreen() {
  launchFullScreen(document.documentElement)
}
function mouseOverIcon() {
  prog.getElementById('rulerIconForTab').style.backgroundImage = nationInfo.rulerIcon
}
function mouseOutIcon() {
  prog.getElementById('rulerIconForTab').style.backgroundImage = nationInfo.flagIcon
}
//move map for mobile
let mapTopPos = -500;
let mapLeftPos = -500;

function moveMapUp() {
  if(mapScale >= 0.45) {
    prog.getElementById('module').style.top = (mapTopPos-=60) + "px"
  } else if(mapScale >= 0.75) {
    prog.getElementById('module').style.top = (mapTopPos-=75) + "px"
  } else {
    prog.getElementById('module').style.top = (mapTopPos-=30) + "px"
  }
}
function moveMapDown() {
  if(mapScale >= 0.45) {
    prog.getElementById('module').style.top = (mapTopPos+=60) + "px"
  } else if(mapScale >= 0.75) {
    prog.getElementById('module').style.top = (mapTopPos+=75) + "px"
  } else {
    prog.getElementById('module').style.top = (mapTopPos+=30) + "px"
  }
}
function moveMapLeft() {
  if(mapScale >= 0.45) {
    prog.getElementById('module').style.left = (mapLeftPos-=60) + "px"
  } else if(mapScale >= 0.75) {
    prog.getElementById('module').style.left = (mapLeftPos-=75) + "px"
  } else {
    prog.getElementById('module').style.left = (mapLeftPos-=30) + "px"
  }
}
function moveMapRight() {
  if(mapScale >= 0.45) {
    prog.getElementById('module').style.left = (mapLeftPos+=60) + "px"
  } else if(mapScale >= 0.75) {
    prog.getElementById('module').style.left = (mapLeftPos+=75) + "px"
  } else {
    prog.getElementById('module').style.left = (mapLeftPos+=30) + "px"
  }
}

//change civ for test
function ENGtest() {
  nationInfo.ruler = "James I"
  nationInfo.nationColor = "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(83,10,30,1) 0%, rgba(186,22,22,1) 100%)"
  nationInfo.flagIcon = "url(../img/flagEnglandIcon.png"
  nationInfo.rulerIcon = "url(../img/rulerEnglandIcon.png)"
  prog.getElementById('rulerIconForTab').style.backgroundImage = nationInfo.flagIcon
  prog.getElementById('rulerIconForTab').style.backgroundImage = nationInfo.rulerIcon
  prog.getElementById('mapToolsTab').style.background = nationInfo.nationColor
  prog.getElementById('iconTab').style.background = nationInfo.nationColor
  prog.getElementById('objectives').style.background = nationInfo.nationColor
  prog.getElementById('statsTab').style.background = nationInfo.nationColor
  prog.getElementById('historyTab').style.background = nationInfo.nationColor
  prog.getElementById('mapMoveTab').style.background = nationInfo.nationColor
  rulerNameJS.innerHTML = nationInfo.ruler;
}
function SPNtest() {
  nationInfo.ruler = "Phillip III"
  nationInfo.nationColor = "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(186,113,22,1) 0%, rgba(215,255,0,1) 100%)"
  nationInfo.flagIcon = "url(../img/flagSpainIcon.png"
  nationInfo.rulerIcon = "url(../img/rulerSpainIcon.png)"
  prog.getElementById('rulerIconForTab').style.backgroundImage = nationInfo.flagIcon
  prog.getElementById('rulerIconForTab').style.backgroundImage = nationInfo.rulerIcon
  prog.getElementById('mapToolsTab').style.background = nationInfo.nationColor
  prog.getElementById('iconTab').style.background = nationInfo.nationColor
  prog.getElementById('objectives').style.background = nationInfo.nationColor
  prog.getElementById('statsTab').style.background = nationInfo.nationColor
  prog.getElementById('historyTab').style.background = nationInfo.nationColor
  prog.getElementById('mapMoveTab').style.background = nationInfo.nationColor
  rulerNameJS.innerHTML = nationInfo.ruler;
}
function FRNtest() {
  nationInfo.ruler = "Henry IV"
  nationInfo.nationColor = "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%)"
  nationInfo.flagIcon = "url(../img/flagFranceIcon.png"
  nationInfo.rulerIcon = "url(../img/rulerFranceIcon.png)"
  prog.getElementById('rulerIconForTab').style.backgroundImage = nationInfo.flagIcon
  prog.getElementById('rulerIconForTab').style.backgroundImage = nationInfo.rulerIcon
  prog.getElementById('mapToolsTab').style.background = nationInfo.nationColor
  prog.getElementById('iconTab').style.background = nationInfo.nationColor
  prog.getElementById('objectives').style.background = nationInfo.nationColor
  prog.getElementById('statsTab').style.background = nationInfo.nationColor
  prog.getElementById('historyTab').style.background = nationInfo.nationColor
  prog.getElementById('mapMoveTab').style.background = nationInfo.nationColor
  rulerNameJS.innerHTML = nationInfo.ruler;
}
function DUTtest() {
  nationInfo.ruler = "Maurice of Nassau"
  nationInfo.nationColor = "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(22,186,36,1) 100%)"
  nationInfo.flagIcon = "url(../img/flagDutchIcon.png"
  nationInfo.rulerIcon = "url(../img/rulerDutchIcon.png)"
  prog.getElementById('rulerIconForTab').style.backgroundImage = nationInfo.flagIcon
  prog.getElementById('rulerIconForTab').style.backgroundImage = nationInfo.rulerIcon
  prog.getElementById('mapToolsTab').style.background = nationInfo.nationColor
  prog.getElementById('iconTab').style.background = nationInfo.nationColor
  prog.getElementById('objectives').style.background = nationInfo.nationColor
  prog.getElementById('statsTab').style.background = nationInfo.nationColor
  prog.getElementById('historyTab').style.background = nationInfo.nationColor
  prog.getElementById('mapMoveTab').style.background = nationInfo.nationColor
  rulerNameJS.innerHTML = nationInfo.ruler;
}
function bindingsLoop() {
  if(keys[88]) {
    zoomIn()
  }
  if(keys[90]) {
    zoomOut()
  }
  if(keys[32]) {
    endTurn()
  } 
  if(keys[69]) {
    ENGtest()
  } 
  if(keys[83]) {
    SPNtest()
  } 
  if(keys[70]) {
    FRNtest()
  } 
  if(keys[68]) {
    DUTtest()
  } 
  // if(keys[X]) {
  //   endTurn()
  // }



  
  requestAnimationFrame(bindingsLoop)
}
requestAnimationFrame(bindingsLoop)

function hideMapToolsTab() {
  buttonClickAudio2.play()
  if (document.getElementById("mapToolsTab").style.display === "none") {
    document.getElementById("mapToolsTab").style.display = "inline-block";
  } else {
    document.getElementById("mapToolsTab").style.display = "none";
  }
}
function hideMovesButtonTab() {
  buttonClickAudio2.play()
  if (document.getElementById("mapMoveTab").style.display === "none") {
    document.getElementById("mapMoveTab").style.display = "inline-block";
  } else {
    document.getElementById("mapMoveTab").style.display = "none";
  }
}

//buttons for EvErYtHiNg
prog.getElementById('closeButtonJS').addEventListener("click", closeAgeTab)
prog.getElementById('endTurnButton').addEventListener("click", endTurn)
// prog.getElementById('deployTroopsButton').addEventListener("click", deployTroopsBasic)
prog.getElementById('zoomInMapButton').addEventListener("click", zoomIn)
prog.getElementById('zoomOutMapButton').addEventListener("click", zoomOut)
prog.getElementById('fullscreenMapButton').addEventListener("click", fullscreen)
prog.getElementById('rulerIconForTab').addEventListener("click", hideMapToolsTab)
prog.getElementById('rulerIconForTab').addEventListener("mouseover", mouseOverIcon)
prog.getElementById('rulerIconForTab').addEventListener("mouseout", mouseOutIcon)
prog.getElementById('frenchNavy').addEventListener("click", shipSelect)
prog.getElementById('englishNavy').addEventListener("click", shipSelect)
prog.getElementById('spanishNavy').addEventListener("click", shipSelect)
prog.getElementById('dutchNavy').addEventListener("click", shipSelect)
prog.getElementById('quebecLocation').addEventListener("click", townSelect)
prog.getElementById('jamestownLocation').addEventListener("click", townSelect)
prog.getElementById('santoDomingoLocation').addEventListener("click", townSelect)
prog.getElementById('newAmsterdamLocation').addEventListener("click", townSelect)
prog.getElementById('moveUpButton').addEventListener("click", moveMapDown)
prog.getElementById('moveDownButton').addEventListener("click", moveMapUp)
prog.getElementById('moveLeftButton').addEventListener("click", moveMapRight)
prog.getElementById('moveRightButton').addEventListener("click", moveMapLeft)
prog.getElementById('hideMovesButton').addEventListener("click", hideMovesButtonTab)
prog.getElementById('playGameButton').addEventListener("click", enterGame)
prog.getElementById('fullscreenButton').addEventListener("click", fullscreen)
  
 document.onmousedown = function(e) {
      if (!drag.state && e.which == 1) {
          drag.elem = document.getElementById('module')
          drag.x = e.pageX;
          drag.y = e.pageY;
          drag.state = true;
      }
      return false;
  };
  
  
  document.onmousemove = function(e) {
      
      if (drag.state) {
          delta.x = e.pageX - drag.x ;
          delta.y = e.pageY - drag.y ;
       
          let cur_offset = $(drag.elem).offset();
  
          $(drag.elem).offset({
              left: (cur_offset.left + delta.x * 10),
              top: (cur_offset.top + delta.y * 10)
          });

          
  
          drag.x = e.pageX;
          drag.y = e.pageY;
      }
  };
  
  document.onmouseup = function() {
      if (drag.state) {
          drag.state = false;
      }
  };
  