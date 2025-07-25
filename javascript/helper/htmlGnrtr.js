import GNRL_HLPR from "./genHelper.js";

export default class HTML_GNRTR {
  constructor() {
    this.name =
      "JS_HTML_GNRTR_" +
      new Date().toISOString().slice(0, 10).replace(". ", "-") +
      ("000" + Math.floor(Math.random() * 9999)).slice(-5);
    this.helper = new GNRL_HLPR();
  }

  introduce_me() {
    console.log(`Hi, I'm a HTML GENERATOR instance, my name is: ${this.name}`);
  }

  gnrtPlyrWndw0 = (prmObj = null) => {
    console.log();
    const plyrWnd = this.LMNTGenerator(
      "div",
      ["usr-card", "growAndFadeIn"],
      "plyr-portrait",
      "",
      ""
    );
    const wHdr = this.gnrtStdWndwTTLbar({ title: prmObj.plyr.name });
    plyrWnd.appendChild(wHdr);
    const plyrCrdHdr = this.LMNTGenerator("div", ["usr-crd-hdr"], "", "", "");
    const portrt = this.LMNTGenerator("div", ["portrait"], "", "", "");
    const prtrImg = this.LMNTGenerator("img", [], "plyr-portrait", "", "", "");
    portrt.appendChild(prtrImg);
    const descr = this.LMNTGenerator("div", ["descr"], "", "", "");
    for (let ix1 = 0; ix1 < 3; ix1++) {
      const dscrP = this.LMNTGenerator("p", ["descr-sctn"], "", "", "");
      if (ix1 == 0) {
        const p0 = this.LMNTGenerator("p", ["descr-label"], "", "NAME:", "");
        const p1 = this.LMNTGenerator("p", [], "plyr-nm", "", "");
        dscrP.appendChild(p0);
        dscrP.appendChild(p1);
      } else if (ix1 == 1) {
        const p0 = this.LMNTGenerator("p", ["descr-label"], "", "LEVEL:", "");
        const p1 = this.LMNTGenerator("p", [], "plyr-lvl", "", "");
        dscrP.appendChild(p0);
        dscrP.appendChild(p1);
      } else if (ix1 == 2) {
        const p0 = this.LMNTGenerator("p", ["descr-label"], "", "XP:", "");
        const p1 = this.LMNTGenerator("p", [], "plyr-xp", "", "");
        dscrP.appendChild(p0);
        dscrP.appendChild(p1);
      }
      descr.appendChild(dscrP);
    }
    plyrWnd.appendChild(plyrCrdHdr);
    plyrCrdHdr.appendChild(portrt);
    plyrCrdHdr.appendChild(descr);

    // body
    const plyrCrdBdy = this.LMNTGenerator("div", ["usr-crd-body"], "", "", "");
    plyrWnd.appendChild(plyrCrdBdy);

    // footer
    const plyrCrdFtr = this.LMNTGenerator("div", ["usr-crd-ftr"], "", "", "");
    plyrWnd.appendChild(plyrCrdFtr);

    return plyrWnd;
  };

  addLvlUpWndw = (p) => {
    const lvlUpWndw = this.LMNTGenerator("div", ["lvlup-wndw"], "", "", "");
    const msgDiv = this.LMNTGenerator("div", ["lvl-up-msg"], "", "", "");
    msgDiv.textContent = "Gratuláluk! Elérted a " + p.lvl + " szintet!";

    lvlUpWndw.appendChild(msgDiv);
    return lvlUpWndw;
  };

  //+---------------------------------------------------------------------------+
  //| #######     C O M M O N   E L E M E N T   G E N E R A T I O N S   ####### |
  //+---------------------------------------------------------------------------+
  gnrtPrgrbar = (prmObj = {}) => {
    const prgrBar = this.LMNTGenerator("div", ["prgrpbar-ext"], "", "", "");
    const prgIntern = this.LMNTGenerator("div", ["prgrbar-intern"], "", "", "");
    prgIntern.classList.add(prmObj.colorClass ?? "");
    prgIntern.style.width = prmObj.initWdth ?? "0%";
    const prgBrText = this.LMNTGenerator(
      "span",
      ["prgrbar-text"],
      "",
      prmObj.pbText ?? "",
      ""
    );
    prgrBar.appendChild(prgIntern);
    prgIntern.appendChild(prgBrText);
    if (prmObj.dynamic === true) {
      const dur_in_sec = prmObj.duration ?? 35;
      let elaps = 0;
      let wdth = Number(prmObj.initWdth.replace("%", "")) ?? 0;
      const interv0 = setInterval(() => {
        const pb = prgIntern;
        wdth += 100 / dur_in_sec;
        pb.style.width = wdth + "%";
        elaps++;
        let txt = this.helper.secToTimeString(elaps);
        prgBrText.textContent = txt;
        if (wdth >= 100) {
          pb.style.width = "100%";
          clearInterval(interv0);
        }
      }, 1000);
    } else {
      const max = prmObj.maxVal ?? 100;
      const curr = prmObj.curr ?? 0;
      const wdth = Math.floor((curr / max) * 100).toString() + "%";
      const pb = prgIntern;
      pb.style.width = wdth;
      prgBrText.textContent = max + "/" + curr;
    }

    return prgrBar;
  };

  LMNTGenerator = (
    tag = "-",
    clsNms = [],
    id = "-",
    txtCntnt = "-",
    val = "-"
  ) => {
    //<SF>
    // CREATED ON: 2024-04-29 <br>
    // CREATED BY: AX07057<br>
    // A HTML element generator, to have a lilltlebit less lines.<br>
    // PARAMETERS:
    //×-
    // @-- tag = the tagname itself -@
    // @-- id = id if neccessary -@
    // @-- clsNms = an array of strings, which can be added as class -@
    // @-- txtCntnt = just the text content -@
    // @-- val = the value if needed -@
    // @-- xPrms = any further parameters with name => value pairs -@
    //-×
    //CHANGES:
    //×-
    // @-- ... -@
    //-×
    //</SF>

    if (tag == "-") {
      tag = "div";
    }
    if (id == "-") {
      id = "lmntId-" + Math.floor(1 + Math.random() * 10000);
    }
    if (clsNms == []) {
      clsNms = ["bg-info"];
    }
    if (txtCntnt == "-") {
      txtCntnt = "Test text into a text element";
    }

    const LMNT = document.createElement(tag);
    if (id !== "") {
      LMNT.id = id;
    }
    if (clsNms.length > 0) {
      for (let ix1 = 0; ix1 < clsNms.length; ix1++) {
        if (clsNms[ix1] !== "") {
          LMNT.classList.add(clsNms[ix1]);
        }
      }
    }
    if (txtCntnt != "") {
      LMNT.textContent = txtCntnt;
    }
    if (val != "") {
      LMNT.value = val;
    }

    return LMNT;
  };

  addBackDrop = (trgt = "", sttc = true) => {
    if (trgt === "") {
      trgt = "body";
    }

    const bckDrp = this.LMNTGenerator(
      "div",
      ["loc-backdrop"],
      "bck-drop",
      "",
      ""
    );
    document.querySelector(trgt).appendChild(bckDrp);
    if (!sttc) {
      bckDrp.addEventListener("click", () => {
        document.querySelector("#bck-drop").remove();
      });
    }
    return bckDrp;
  };

  removeElementsByType = (typ = "class", lmntId = "elemnt-tag") => {
    let lmntNm = lmntId;
    if (typ.toUpperCase() == "CLASS") {
      lmntNm = "." + lmntNm;
    } else if (typ.toUpperCase() == "ID") {
      lmntNm = "#" + lmntNm;
    }
    const lmntLst = document.querySelectorAll(lmntNm);
    if (lmntLst.length > 0) {
      lmntLst.forEach((lm) => {
        lm.remove();
      });
    }
  };

  gnrtStdWndwTTLbar = (prmObj) => {
    const ttlBar = this.LMNTGenerator("div", ["wndw-hdr"], "", "", "");
    const smblCls = prmObj.wndwSymbol ?? "wndw-symbol-0";
    const wndwSymbol = this.LMNTGenerator("div", [smblCls], "", "", "");
    const ttl = prmObj.title ?? "New Window Title";
    const wndwTitle = this.LMNTGenerator("div", ["wndw-title"], "", ttl, "");
    const clsBtn = this.gnrtCloseBtn();

    ttlBar.appendChild(wndwSymbol);
    ttlBar.appendChild(wndwTitle);
    ttlBar.appendChild(clsBtn);

    return ttlBar;
  };

  gnrtCloseBtn = () => {
    const cls_btn = this.LMNTGenerator("div", ["close-btn"], "", "X", "");
    cls_btn.addEventListener("click", (evt) => {
      evt.target.parentNode.parentNode.remove();
    });
    return cls_btn;
  };
}
