import Droid from "/TST_002/data/plyr.js";
import HTML_GNRTR from "/TST_002/javascript/helper/htmlGnrtr.js"
import GNRL_HLPR from "/TST_002/javascript/helper/genHelper.js";
class mainApp{
    constructor(){
        console.log('MainApp contructed');
        this.plyr = new Droid();
        this.helper = new GNRL_HLPR();
        this.helper.introduce_me();
        this.htmlGnrtr = new HTML_GNRTR();
        this.htmlGnrtr.introduce_me();
    }

    appInit(){

        console.log(`seconds-to-timeSt:${this.helper.secToTimeString(100)}`);

        document.querySelector("#plyr-portrait").src = this.plyr.plyFaceImg;
        document.querySelector("#plyr-nm").textContent = this.plyr.name;
        document.querySelector(".close-btn").addEventListener('click',(evt)=>{
            evt.target.parentNode.parentNode.remove();
        })  
        document.querySelector("#plyr-lvl").textContent = this.plyr.lvl;
        document.querySelector("#plyr-xp").textContent = this.plyr.xp;

        let wdth = 0;
        const dur_in_sec = 35;
        let elaps = 0;
        const interv0 = setInterval(()=>{
            const pb = document.querySelector('.prgrbar-intern');
            wdth += (100/dur_in_sec); 
            pb.style.width = wdth+'%';
            elaps++;
            let txt = this.helper.secToTimeString(elaps);
            document.querySelector('.prgrbar-text').textContent=txt;
            if(wdth>=100){
                pb.style.width = '100%';
                clearInterval(interv0);
                console.log('INTERVAL FINISHED! Value of WDTH: '+wdth)
            }
        },100);
    
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
    mnApp.appInit();
});
