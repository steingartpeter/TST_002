import Droid from "/TST_002/data/plyr.js";
import HTML_GNRTR from "/TST_002/javascript/helper/htmlGnrtr.js";
import GNRL_HLPR from "/TST_002/javascript/helper/genHelper.js";
import { CONSTS } from "./helper/consts.js";
class mainApp {
  constructor() {
    console.log("MainApp contructed");
    this.htmlGnrtr = new HTML_GNRTR();
    this.plyr = new Droid();
    this.helper = new GNRL_HLPR();
    this.helper.introduce_me();
    this.htmlGnrtr.introduce_me();

    this.levelUpSound = new Audio(
      "/TST_002/assets/sounds/effects/level_up.mp3"
    );
    this.levelUpSound.volume = 0.5; // Set volume to 50%
  }

  appInit() {
    console.log(`seconds-to-timeSt:${this.helper.secToTimeString(100)}`);

    // document.querySelector("#plyr-portrait").src = this.plyr.plyFaceImg;
    // document.querySelector("#plyr-nm").textContent = this.plyr.name;
    // document.querySelector(".close-btn").addEventListener("click", (evt) => {
    //   evt.target.parentNode.parentNode.remove();
    // });
    // document.querySelector("#plyr-lvl").textContent = this.plyr.lvl;
    // document.querySelector("#plyr-xp").textContent = this.plyr.xp;

    let wdth = 0;
    const dur_in_sec = 35;
    let elaps = 0;
    const interv0 = setInterval(() => {
      const pb = document.querySelector(".prgrbar-intern");
      wdth += 100 / dur_in_sec;
      pb.style.width = wdth + "%";
      elaps++;
      let txt = this.helper.secToTimeString(elaps);
      document.querySelector(".prgrbar-text").textContent = txt;
      if (wdth >= 100) {
        pb.style.width = "100%";
        clearInterval(interv0);
        console.log("INTERVAL FINISHED! Value of WDTH: " + wdth);
      }
    }, 100);
  }

  tstFunc = () => {
    const oldCards = document.querySelectorAll(".usr-card");
    if (oldCards) {
      oldCards.forEach((c) => {
        c.remove();
      });
    }
    const plyrWndw = this.htmlGnrtr.gnrtPlyrWndw0({ plyr: this.plyr });
    plyrWndw.querySelector('#plyr-portrait').src = this.plyr.plyFaceImg;
    plyrWndw.querySelector("#plyr-nm").textContent = this.plyr.name;
    plyrWndw.querySelector("#plyr-lvl").textContent = this.plyr.lvl;
    document.querySelector("#main-screen").appendChild(plyrWndw);
    
    const XPamount = Math.floor(10 + Math.random() * 100);
    const lvlUp = this.plyr.gainXP(XPamount);
    document.querySelector("#plyr-xp").textContent =
      this.plyr.xp + "/ " + CONSTS.lvl_list[this.plyr.lvl + 1];
    if (lvlUp) {
      document.querySelector("#plyr-lvl").textContent = this.plyr.lvl;
      //document.querySelector('p#plyr-xp').textContent = this.plyr.xp;
      this.levelUpSound.play();
      const lvlUpWndw = this.htmlGnrtr.addLvlUpWndw(this.plyr);
      document.querySelector('body').appendChild(lvlUpWndw);
    }
  };
}

window.onload = () => {
  const mnApp = new mainApp();
  window.app = mnApp;
  mnApp.appInit();
};
