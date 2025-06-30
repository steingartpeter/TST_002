import Droid from "/TST_002/data/plyr.js";
import HTML_GNRTR from "/TST_002/javascript/helper/htmlGnrtr.js"
import GNRL_HLPR from "/TST_002/javascript/helper/genHelper.js";
class mainApp{
    constructor(){
        console.log('MainApp contructed');
        this.plyr = new Droid();
        this.helper = new GNRL_HLPR();
        this.htmlGnrtr = new HTML_GNRTR();
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
