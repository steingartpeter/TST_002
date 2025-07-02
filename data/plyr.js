import GNRL_HLPR from "/TST_002/javascript/helper/genHelper.js";
import HTML_GNRTR from "/TST_002/javascript/helper/htmlGnrtr.js";
import { CONSTS } from "/TST_002/javascript/helper/consts.js";
export default class Droid {
  // Private fields to encapsulate the data.
  // They can only be accessed from within the class.
  #lvl;
  #xp;
  #name;
  #bio;
  #plyFaceImg;
  #nrOfSkillPintsToUse;

  constructor(prmObj = {}) {
    // Using the nullish coalescing operator (??) for cleaner defaults.
    // It falls back to the right-hand side only if the left is null or undefined.
    this.name = prmObj.name ?? this.#gnrtRndmName();
    this.inventory = prmObj.inventory ?? [];
    this.equipments = prmObj.equipments ?? [];
    this.currencies = prmObj.currencies ?? [];

    // Use the setters during construction to ensure validation logic is applied.
    this.lvl = prmObj.lvl ?? 1;
    this.xp = prmObj.xp ?? 0;
    this.plyFaceImg =
      prmObj.plyFaceImg ?? "plyr_fc_001.jpg";
    this.#nrOfSkillPintsToUse = 0;

    this.helper = new GNRL_HLPR();
    this.bio = "";
    console.log(this);
  }

  #gnrtRndmName() {
    // genrate a random name
    let rndmNm = "";
    const letters = CONSTS.letters;
    const numbers = CONSTS.numbers;

    for (let ix1 = 0; ix1 < 3; ix1++) {
      for (let ix2 = 0; ix2 < 3; ix2++) {
        if (ix1 % 2 === 0) {
          const idx = Math.floor(Math.random() * letters.length);
          rndmNm += letters[idx];
        } else {
          const idx = Math.floor(Math.random() * numbers.length);
          rndmNm += numbers[Math.floor(Math.random() * numbers.length)];
        }
      }
      rndmNm += "-";
    }
    rndmNm += ("00000" + new Date().getMilliseconds()).slice(-4);
    return rndmNm;
  }

  get lvl() {
    return this.#lvl;
  }

  set lvl(value) {
    if (typeof value !== "number" || value < 0) {
      console.error(
        "Invalid level value. Level must be a non-negative number."
      );
      return;
    }
    this.#lvl = value;
  }

  get xp() {
    return this.#xp;
  }

  set xp(value) {
    if (typeof value !== "number" || value < 0) {
      console.error("Invalid XP value. XP must be a non-negative number.");
      return;
    }
    this.#xp = value;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    if (value === "") {
      console.log("The name can not be empty string!");
      return;
    }
    this.#name = value;
  }

  get bio() {
    return this.#bio;
  }

  set bio(addendum = "") {
    this.#bio += addendum;
  }

  get plyFaceImg() {
    return this.#plyFaceImg;
  }

  set plyFaceImg(imgNm = "") {
    if(imgNm == undefined || imgNm == ""){
      console.log('plyr.js #106:  MISING player-portrait filename');
      return;
    }
    this.#plyFaceImg = CONSTS.img_paths.plyr_prtrts + imgNm;
  }

  gainXP=(val)=>{
    if(typeof(val) !== 'number' || val < 0){
      return;
    }
    this.#xp += val;
    const lvled = this.chckLvlUp();
    return lvled;
  }

  chckLvlUp = ()=>{
    const currLvl = this.#lvl+1;
    const currXP = this.#xp;
    const nxtXPLimit = CONSTS.lvl_list[currLvl];
    if(currXP >= nxtXPLimit){
      this.#lvl += 1;
      return true;
    } 
    return false;

  }

}
