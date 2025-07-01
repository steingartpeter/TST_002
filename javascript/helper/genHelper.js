export default class GNRL_HLPR {
  constructor() {
    this.id =
      "GNRL_HLPR-" +
      new Date().toISOString().slice(0, 10) +
      "-" +
      ("0000" + Math.floor(Math.random() * 9999)).slice(-5);
  }
  
  introduce_me() {
    console.log(`Hi, I'm a GNRL_HLPR instance, my id is: ${this.id}`);
  }

  rndmInt(minNr = 0, maxNr = 100) {
    return Math.floor(minNr + Math.random * (maxNr - minNr));
  }

  secToTimeString(nrOfScs = 100){
    let rsltString = '';
    let hrs = Math.floor(nrOfScs/3600).toString().padStart(2,'0');
    let rem = nrOfScs - (hrs * 3600);
    let minutes = Math.floor(rem/60).toString().padStart(2,'0');
    let secs = (rem - (60 * minutes)).toString().padStart(2,'0');

    return hrs+':'+minutes+':'+secs;

  }
}
