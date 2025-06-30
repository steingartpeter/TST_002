export default class HTML_GNRTR {
  constructor() {
    this.name =
      "JS_HTML_GNRTR_" +
      new Date().toLocaleDateString().slice(0, 10) +
      Math.floor(Math.random() * 9999);
  }

  introduce_me(){
    console.log('')
  }

}
