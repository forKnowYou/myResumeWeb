import React from 'react'
import '../myGlobalCss.css'

import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'

import {
  Button
} from 'antd'
import 'antd/dist/antd.css'

import appText from '../appText/appText'
import MyResumeWebCanvas from './myResumeWebCanvas'

import './myResumeWeb.css'

let getText = appText.getText.bind(appText)

// first login ?
let storageItems = {
  login: "login",
  language: "language"
}

let firstLogin = JSON.parse(localStorage.getItem(storageItems.login))
let setLanguage = localStorage.getItem(storageItems.language)

let userLanguage = navigator.language
console.log("user language", userLanguage)

function setStorage() {
  localStorage.setItem(storageItems.language, setLanguage)
  localStorage.setItem(storageItems.login, firstLogin)
}

if(! firstLogin) {
  if(userLanguage !== "zh-CN") {
    setLanguage = "en-US"
  } else {
    setLanguage = "zh-CN"
  }
}

// for test config
// firstLogin = false
// setLanguage = "en-US"
// for test end

setStorage()
appText.setText(setLanguage)
document.title = getText("my resume web")

class MyResumeWeb extends React.Component {

  constructor() {
    super()
    this.firstMyResumeCanvas = false
    this.state = {

    }
  }

  onClickReset() {
    this.myCanvas.changeDataZoom(this.myCanvas.itemsArea.main)
  }

  onClickDocument() {
    window.open("/findJob.doc")
  }

  resizeResumeCanvas() {
    let divResumeCanvas = document.getElementById("div_resumeCanvas")
    let canvasResume = document.getElementById("canvas_resume")
    canvasResume.width = String(divResumeCanvas.offsetWidth)
    canvasResume.height = String(divResumeCanvas.offsetHeight)

    if(! this.firstMyResumeCanvas) {
      this.myCanvas = new MyResumeWebCanvas(document.getElementById("canvas_resume"), appText.getText.bind(appText))
      this.myCanvas.init()
      this.firstMyResumeCanvas = true
    } else {
      this.myCanvas.resize(divResumeCanvas.offsetWidth, divResumeCanvas.offsetHeight)
    }
  }

  render() {
    return (
      <div className="container" style={{background: "LightSteelBlue"}}>
        {/* title */}
        <div className="w100h10 comCen title">
          {getText("welcome to my resume web")}
        </div>

        {/* person info */}
        <div className="w100h5 contact comRow">
          <div className="w5h100" />
          <div className="w45h100 comRow">
            {getText("name")}:&nbsp;{getText("jiehan.guo")}
          </div>
          <div className="w45h100 comRow">
            {getText("phone")}:&nbsp;{getText("15775959550")}
          </div>
        </div>

        {/* buttons */}
        <div className="w100h5 comRow">
          <div className="w70h100" />
          <div className="w10h100 comCen">
            <Button id="button_reset" type="primary" onClick={this.onClickReset.bind(this)}>{getText("reset")}</Button>
          </div>
          <div className="w10h100 comCen">
            <Button id="button_document" type="primary" onClick={this.onClickDocument.bind(this)}>{getText("document")}</Button>
          </div>
        </div>

        {/* resume show */}
        <div id="div_resumeCanvas" className="w100h75 comCen" style={{borderWidth: "1px", borderStyle: "solid"}}>
          <canvas id="canvas_resume" width="0" height="0" />
        </div>

        {/* sources link */}
        <div className="w100h5 comCen">
          <div style={{fontSize: "16px"}}>
            {getText("this app sources url")}:&nbsp;<a href="https://github.com/forKnowYou/myResumeWeb" target="_blank">https://github.com/forKnowYou/myResumeWeb</a>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.resizeResumeCanvas()
    // eslint-disable-next-line no-restricted-globals
    addEventListener("resize", this.resizeResumeCanvas.bind(this))

    // driver
    console.log("check driver")
    if(! firstLogin) {
      console.log("start driver")
      let driver = new Driver({
        closeBtnText: getText("close"),
        doneBtnText: getText("done"),
        prevBtnText: getText("previous"),
        nextBtnText: getText("next")
      })
      driver.defineSteps([{
        element: "#button_reset",
        popover: {
          title: getText("reset"),
          description: getText("button reset description"),
          position: "left"
        }
      }, {
        element: "#button_document",
        popover: {
          title: getText("document"),
          description: getText("button document description"),
          position: "left"
        }
      }])
      driver.start()
      localStorage.setItem(storageItems.login, true)
    }
  }

}

export default MyResumeWeb
