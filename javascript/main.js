class mainApp{
    constructor(){
        console.log('MainApp contructed')
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
