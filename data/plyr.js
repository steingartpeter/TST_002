import GNRL_HLPR from "/TST_002/javascript/helper/genHelper.js";
import { CONSTS } from "/TST_002/javascript/helper/consts.js";
export default class Droid {
  // Private fields to encapsulate the data.
  // They can only be accessed from within the class.
  #lvl;
  #xp;
  #name;
  #bio;
  #plyFaceImg;
  #nrOfSkillPointsToUse;
  #nrOfStatPointsToUse;
  #cpu;
  #ram;
  #integrity;


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
    this.plyFaceImg = prmObj.plyFaceImg ?? "plyr_fc_001.jpg";
    this.cpu = prmObj.cpu ?? 100;
    this.ram = prmObj.ram ?? 100;
    this.integrity = prmObj.integrity ?? 100;
    this.nrOfSkillPointsToUse = 0;
    this.nrOfStatPointsToUse = 0;

    this.helper = new GNRL_HLPR();
    this.bio = "";
    console.log(this);
  }

  // getters / setters

  get lvl() {
    return this.#lvl;
  }

  set lvl(value) {
    if (typeof value !== "number" || value < 0) {
      console.error("Invalid level value. Level must be a non-negative number.");
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
    if (imgNm == undefined || imgNm == "") {
      console.log("plyr.js #106:  MISING player-portrait filename");
      return;
    }
    this.#plyFaceImg = CONSTS.img_paths.plyr_prtrts + imgNm;
  }

  get cpu() {
    return this.#cpu;
  }

  set cpu(value) {
    if (typeof value !== "number" || value < 0) {
      console.error("Invalid CPU value. CPU must be a non-negative number.");
      return;
    }
    this.#cpu = value;
  }

  get ram() {
    return this.#ram;
  }

  set ram(value) {
    if (typeof value !== "number" || value < 0) {
      console.error("Invalid RAM value. RAM must be a non-negative number.");
      return;
    }
    this.#ram = value;
  }

  get integrity() {
    return this.#integrity;
  }

  set integrity(value) {
    if (typeof value !== "number" || value < 0) {
      console.error("Invalid Integrity value. Integrity must be a non-negative number.");
      return;
    }
    this.#integrity = value;
  }

  get nrOfSkillPointsToUse() {
    return this.#nrOfSkillPointsToUse;
  }

  set nrOfSkillPointsToUse(value) {
    if (typeof value !== "number" || value < 0) {
      console.error(
        "Invalid Skill Points value. It must be a non-negative number."
      );
      return;
    }
    this.#nrOfSkillPointsToUse = value;
  }

  get nrOfStatPointsToUse() {
    return this.#nrOfStatPointsToUse;
  }

  set nrOfStatPointsToUse(value) {
    if (typeof value !== "number" || value < 0) {
      console.error(
        "Invalid Stat Points value. It must be a non-negative number."
      );
      return;
    }
    this.#nrOfStatPointsToUse = value;
  }

  // functional methods

  gainXP = (val) => {
    if (typeof val !== "number" || val < 0) {
      return;
    }
    this.#xp += val;
    const lvled = this.chckLvlUp();
    return lvled;
  };

  chckLvlUp = () => {
    let leveledUp = false;
    // Use a while loop to handle multiple level-ups from a single XP gain.
    // Keep leveling up as long as a next level exists and the player has enough XP for it.
    while (CONSTS.lvl_list[this.#lvl + 1] !== undefined && this.#xp >= CONSTS.lvl_list[this.#lvl + 1]) {
      this.#lvl += 1;
      leveledUp = true;
      this.#nrOfSkillPointsToUse ++;
    }
    return leveledUp;
  };

  // private methoods

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
}
