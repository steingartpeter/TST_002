export default class Droid {
  // Private fields to encapsulate the data.
  // They can only be accessed from within the class.
  #lvl;
  #xp;
  #name;

  constructor(prmObj = {}) {
    // Using the nullish coalescing operator (??) for cleaner defaults.
    // It falls back to the right-hand side only if the left is null or undefined.
    this.name = prmObj.name ?? this.#gnrtRndmName();
    this.inventory = prmObj.inventory ?? [];
    this.equipments = prmObj.equipments ?? [];
    this.currencies = prmObj.currencies ?? [];

    // Use the setters during construction to ensure validation logic is applied.
    this.lvl = prmObj.lvl ?? 0;
    this.xp = prmObj.xp ?? 0;
  }

  #gnrtRndmName(){
    // genrate a random name
    let rndmNm = '';
    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const numbers = ['0','1','2','3','4','5','6','7','8','9'];
    for (let ix1 = 0; ix1 < 3; ix1++) {
        for (let ix2 = 0; ix2 < 3; ix2++) {
            if(ix2 % 2 === 0){
                console.log()
                rndmNm += letters[Math.floor(Math.random*letters.length)];
            }else{
                rndmNm += numbers[Math.floor(Math.random*numbers.length)];
            }
            rndmNm += '-';
        }    
    }
    console.log('Generated name: '+ rndmNm);
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

  get name(){
    return this.#name;
  }

  set name(value){
    if(value === ''){
        console.log('The name can not be empty string!');
        return;
    }
    this.#name = value;
  }
}
