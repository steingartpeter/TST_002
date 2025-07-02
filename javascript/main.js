import Droid from "/TST_002/data/plyr.js";
import HTML_GNRTR from "/TST_002/javascript/helper/htmlGnrtr.js"
import GNRL_HLPR from "/TST_002/javascript/helper/genHelper.js";
class mainApp{
    constructor(){
        console.log('MainApp contructed');
        this.htmlGnrtr = new HTML_GNRTR();
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
        const prmObj = {
            colorClass:"prgrbar-intern-orange",
            pbText:'00:00:00',
            initWdth:'0',
            dynamic:false,
            duration:60,
            maxVal:100,
            curr:41,
        }
        const pb0 = this.htmlGnrtr.gnrtPrgrbar(prmObj);
        document.querySelector('body main').append(pb0);
    }



}

window.onload = (()=>{
    const mnApp = new mainApp();
    window.app = mnApp;
    mnApp.appInit();
});
