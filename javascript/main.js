import Droid from "/TST_002/data/plyr.js";
import HTML_GNRTR from "/TST_002/javascript/helper/htmlGnrtr.js"
class mainApp{
    constructor(){
        console.log('MainApp contructed');
        this.plyr = new Droid();
    }

    tstFunc = ()=>{
        console.log("Test OK, function van be used from console.");
        const div = document.createElement('div');
        div.classList.add('tstClass');
        div.textContent='TESZT DIV 111';
        document.querySelector('body main').append(div);
    }



}

window.onload = (()=>{
    const mnApp = new mainApp();
    window.app = mnApp;
});
