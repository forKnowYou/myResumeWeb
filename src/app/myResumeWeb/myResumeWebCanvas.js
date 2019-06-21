
import * as Echarts from "echarts"

class MyResumeWebCanvas {

  constructor(dom, getText) {
    this.echarts = Echarts.init(dom)
    this.getText = getText
    this.lastClickItem = ""
    this.lastClickTime = 0

    this.itemsConfig = {
      // main start ----------------------------------------------------------------
      main: {
        x: 500,
        y: 575,
        width: 240,
        height: 100,
        symbol: "diamond",
        color: "red",
        text: this.getText("my resume main description"),
        links: ["mainEmbPart", "mainPythonPart", "mainWebPart"]
      }, 
      mainEmbPart: {
        x: 425,
        y: 500,
        symbolSize: 250,
        color: "green",
        text: this.getText("my main embedded experience")
      },
      toEmbDetail: {
        x: 425,
        y: 420,
        color: "green",
        symbol: "rect",
        width: 160,
        height: 80,
        text: this.getText("i want to know more about your embedded skills"),
        links: ["embeddedSkillsPart1Mask", "embeddedSkillsPart2Mask", "embeddedSkillsPart3Mask", "embeddedSkillsPart4Mask", "embeddedSkillsPart5Mask"]
      },
      mainPythonPart: {
        x: 500,
        y: 500,
        symbolSize: 170,
        color: "SkyBlue",
        text: this.getText("my main python experience")
      },
      toPythonDetail: {
        x: 500,
        y: 420,
        color: "SkyBlue",
        symbol: "rect",
        width: 160,
        height: 80,
        text: this.getText("i want to know more about your python skills"),
        links: ["pythonSkillsMask"]
      },
      mainWebPart: {
        x: 575,
        y: 500,
        symbolSize: 190,
        color: "orange",
        text: this.getText("my main web experience")
      },
      toWebDetail: {
        x: 575,
        y: 420,
        color: "orange",
        symbol: "rect",
        width: 160,
        height: 80,
        text: this.getText("i want to know more about your web skills"),
        links: ["webSkillsPart2Mask", "webSkillsPart3Mask"]
      },
      aboutLastCompany: {
        x: 425,
        y: 575,
        color: "SkyBlue",
        symbol: "diamond",
        width: 200,
        height: 100,
        text: this.getText("about last company"),
        links: ["lastCompanyMask"]
      },
      // main end ----------------------------------------------------------------

      // last company start ----------------------------------------------------------------
      lastCompany: {
        x: 200,
        y: 550,
        color: "SkyBlue",
        symbol: "rect",
        width: 480,
        height: 180,
        text: this.getText("last company description")
      },
      lastCompanyMask: {
        x: 200,
        y: 575,
        symbolSize: 16,
        color: "SkyBlue",
        text: ""
      },
      lastCompanyPrevious: {
        x: 280,
        y: 550,
        color: "SkyBlue",
        symbol: "rect",
        width: 80,
        height: 40,
        text: this.getText("previous")
      },
      // last company end ----------------------------------------------------------------

      // embedded start ---------------------------------------------------------------- 
      embeddedSkillsPart1: {
        x: 200,
        y: 250,
        color: "green",
        symbol: "rect",
        width: 640,
        height: 150,
        text: this.getText("my embedded skills part 1")
      },
      embeddedSkillsPart1Mask: {
        x: 200,
        y: 250,
        color: "green",
        symbolSize: 1,
        text: ""
      },
      embeddedSkillsPart2: {
        x: 200,
        y: 200,
        color: "green",
        symbol: "rect",
        width: 880,
        height: 48,
        text: this.getText("my embedded skills part 2")
      },
      embeddedSkillsPart2Mask: {
        x: 200,
        y: 200,
        color: "green",
        symbolSize: 1,
        text: ""
      },
      embeddedSkillsPart3: {
        x: 200,
        y: 175,
        color: "green",
        symbol: "rect",
        width: 880,
        height: 48,
        text: this.getText("my embedded skills part 3")
      },
      embeddedSkillsPart3Mask: {
        x: 200,
        y: 175,
        color: "green",
        symbolSize: 1,
        text: ""
      },
      embeddedSkillsPart4: {
        x: 200,
        y: 150,
        color: "green",
        symbol: "rect",
        width: 880,
        height: 48,
        text: this.getText("my embedded skills part 4")
      },
      embeddedSkillsPart4Mask: {
        x: 200,
        y: 150,
        color: "green",
        symbolSize: 1,
        text: ""
      },
      embeddedSkillsPart5: {
        x: 200,
        y: 125,
        color: "green",
        symbol: "rect",
        width: 880,
        height: 48,
        text: this.getText("my embedded skills part 5")
      },
      embeddedSkillsPart5Mask: {
        x: 200,
        y: 125,
        color: "green",
        symbolSize: 1,
        text: ""
      },
      embeddedSkillsPart6: {
        x: 200,
        y: 100,
        color: "green",
        symbol: "rect",
        width: 480,
        height: 48,
        text: this.getText("my embedded skills part 6")
      },
      embeddedSkillsPreious: {
        x: 200,
        y: 300,
        color: "green",
        symbol: "rect",
        width: 160,
        height: 40,
        text: this.getText("to main")
      },
      embeddedSkillsToPython: {
        x: 300,
        y: 300,
        color: "green",
        symbol: "rect",
        width: 160,
        height: 40,
        text: this.getText("to python")
      },
      // embedded end ----------------------------------------------------------------

      // python start ----------------------------------------------------------------
      pythonSkills: {
        x: 500,
        y: 200,
        color: "SkyBlue",
        symbol: "rect",
        width: 840,
        height: 120,
        text: this.getText("my python skills")
      },
      pythonSkillsMask: {
        x: 500,
        y: 200,
        color: "SkyBlue",
        symbolSize: 1,
        text: ""
      },
      pythonSkillsPreious: {
        x: 500,
        y: 300,
        color: "SkyBlue",
        symbol: "rect",
        width: 160,
        height: 40,
        text: this.getText("to main")
      },
      pythonSkillsToEmbedded: {
        x: 400,
        y: 300,
        color: "SkyBlue",
        symbol: "rect",
        width: 160,
        height: 40,
        text: this.getText("to embedded")
      },
      pythonSkillsToWeb: {
        x: 600,
        y: 300,
        color: "SkyBlue",
        symbol: "rect",
        width: 160,
        height: 40,
        text: this.getText("to web")
      },
      // python end ----------------------------------------------------------------

      // web start ----------------------------------------------------------------
      webSkillsPart1: {
        x: 800,
        y: 280,
        color: "orange",
        symbol: "rect",
        width: 320,
        height: 24,
        text: this.getText("my web skills part 1")
      },
      webSkillsPart2: {
        x: 800,
        y: 265,
        color: "orange",
        symbol: "rect",
        width: 640,
        height: 24,
        text: this.getText("my web skills part 2")
      },
      webSkillsPart2Mask: {
        x: 800,
        y: 265,
        symbolSize: 1,
        text: ""
      },
      webSkillsImage1: {
        x: 750,
        y: 220,
        symbol: "image://web1.jpg",
        symbolRotate: 90,
        width: 167,
        height: 294,
        text: ""
      },
      webSkillsImage2: {
        x: 840,
        y: 220,
        symbol: "image://web2.jpg",
        symbolRotate: 90,
        width: 167,
        height: 294,
        text: ""
      },
      webSkillsPart3: {
        x: 800,
        y: 175,
        color: "orange",
        symbol: "rect",
        width: 640,
        height: 24,
        text: this.getText("my web skills part 3")
      },
      webSkillsPart3Mask: {
        x: 800,
        y: 175,
        symbolSize: 1,
        text: ""
      },
      webSkillsImage3: {
        x: 750,
        y: 130,
        symbol: "image://web3.jpg",
        width: 294,
        height: 167,
        text: ""
      },
      webSkillsImage4: {
        x: 840,
        y: 130,
        symbol: "image://web4.jpg",
        width: 294,
        height: 167,
        text: ""
      },
      webSkillsPart4: {
        x: 800,
        y: 85,
        color: "orange",
        symbol: "rect",
        width: 480,
        height: 24,
        text: this.getText("my web skills part 4")
      },
      webSkillsPreious: {
        x: 800,
        y: 300,
        color: "orange",
        symbol: "rect",
        width: 160,
        height: 40,
        text: this.getText("to main")
      },
      webSkillsToPython: {
        x: 700,
        y: 300,
        color: "orange",
        symbol: "rect",
        width: 160,
        height: 40,
        text: this.getText("to python")
      },
      // web end ----------------------------------------------------------------
    }
    
    this.itemsArea = {
      main: {
        startX: 400,
        endX: 600,
        startY: 400,
        endY: 600
      },
      lastCompany: {
        startX: 100,
        endX: 300,
        startY: 400,
        endY: 600
      },
      embeddedSkills: {
        startX: 100,
        endX: 300,
        startY: 100,
        endY: 300
      },
      pythonSkills: {
        startX: 400,
        endX: 600,
        startY: 100,
        endY: 300
      },
      webSkills: {
        startX: 700,
        endX: 900,
        startY: 100,
        endY: 300
      },
    }
  }

  isDoubleClick(name) {
    let t = new Date().getTime()
    let rslt = false
    if((name === this.lastClickItem) && ((t - this.lastClickTime) < 500))
      rslt = true
    this.lastClickTime = t
    this.lastClickItem = name
    return rslt
  }

  onClickItem(param) {
    console.log(param)
    if(! this.isDoubleClick(param.name)) {
      // change data zoom
      switch(param.name) {
        // main area
        case "aboutLastCompany": this.changeDataZoom(this.itemsArea.lastCompany); break
        case "toEmbDetail": this.changeDataZoom(this.itemsArea.embeddedSkills); break
        case "toPythonDetail": this.changeDataZoom(this.itemsArea.pythonSkills); break
        case "toWebDetail": this.changeDataZoom(this.itemsArea.webSkills); break

        // previous buttons
        case "lastCompanyPrevious": this.changeDataZoom(this.itemsArea.main); break
        case "embeddedSkillsPreious": this.changeDataZoom(this.itemsArea.main); break
        case "pythonSkillsPreious": this.changeDataZoom(this.itemsArea.main); break
        case "webSkillsPreious": this.changeDataZoom(this.itemsArea.main); break

        // navigator buttons
        case "embeddedSkillsToPython": this.changeDataZoom(this.itemsArea.pythonSkills); break
        case "pythonSkillsToEmbedded": this.changeDataZoom(this.itemsArea.embeddedSkills); break
        case "pythonSkillsToWeb": this.changeDataZoom(this.itemsArea.webSkills); break
        case "webSkillsToPython": this.changeDataZoom(this.itemsArea.pythonSkills); break
        
        default: break
      }
    } else {
      // open url
      switch(param.name) {
        // main area
  
        // last company area
        case "lastCompany": window.open("http://mc.dfrobot.com.cn/", "_blank"); break
  
        // embedded skills area
        case "embeddedSkillsPart1": window.open("https://github.com/forKnowYou/program-standard-cpp", "_blank"); break
        case "embeddedSkillsPart2": window.open("https://github.com/DFRobot/DFRobot_Gesture_Touch/tree/9600d683d355a6e5f3522a548131b0fecbad46d8", "_blank"); break
        case "embeddedSkillsPart3": window.open("https://github.com/DFRobot/DFRobot_BME680/tree/dabe899eeaee30a3103cd23ba1574d9eef979b81", "_blank"); break
        case "embeddedSkillsPart4": window.open("https://github.com/DFRobot/DFRobot_BNO055/tree/bd3ef9ea1fdeb5d08e175af4dd5ef210dfc88e5c", "_blank"); break
        case "embeddedSkillsPart5": window.open("https://github.com/DFRobot/DFRobot_ILI9488/tree/170bb7506a7db80cfb1c59514a3ed510cbd5b415", "_blank"); break

        // python skills area
        case "pythonSkills": window.open("https://github.com/DFRobot/DFRobot_IMU_Show/tree/6c87ce471cee154d21378a9749b94aa8aecd9ec8", "_blank"); break
        default: break
      }
    }
  }

  changeDataZoom(area) {
    this.echarts.setOption({
      dataZoom: [{
        type: "slider",
        show: false,
        xAxisIndex: 0,
        startValue: area.startX,
        endValue: area.endX,
        filterMode: "none"
      }, {
        type: "slider",
        show: false,
        yAxisIndex: 0,
        startValue: area.startY,
        endValue: area.endY,
        filterMode: "none"
      }]
    })
  }

  init() {
    let itemsArea = this.itemsArea
    let itemsConfig = this.itemsConfig

    let optionData = []
    for(let i in this.itemsConfig) {
      optionData.push({
        name: i,
        value: [itemsConfig[i].x, itemsConfig[i].y],
        symbol: itemsConfig[i].symbol || "circle",
        symbolSize: itemsConfig[i].symbolSize || [itemsConfig[i].width, itemsConfig[i].height],
        symbolRotate: itemsConfig[i].symbolRotate || 0,
        itemStyle: {
          color: itemsConfig[i].color
        }
      })
    }

    let optionEdges = []
    for(let i in itemsConfig) {
      if(itemsConfig[i].links) {
        itemsConfig[i].links.forEach((j) => {
          optionEdges.push({
            source: i,
            target: j
          })
        })
      }
    }

    this.echarts.setOption({
      animation: true,
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      backgroundColor: "LemonChiffon",
      xAxis: {
        type: "value",
        min: 0,
        max: 1000,
        show: false
      },
      yAxis: {
        type: "value",
        min: 0,
        max: 1000,
        show: false
      },
      series: [{
        type: "graph",
        coordinateSystem: "cartesian2d",
        label: {
          show: true,
          fontSize: 16,
          lineHeight: 20,
          formatter: (param) => {
            return itemsConfig[param.name].text
          }
        },
        data: optionData,
        edges: optionEdges,
        edgeSymbol: ["circle", "arrow"],
        edgeSymbolSize: [4, 16],
        lineStyle: {
          width: 4
        }
      }]
    })
    
    this.changeDataZoom(itemsArea.main)
    this.echarts.on("click", this.onClickItem.bind(this))
  }

  resize(width, height) {
    this.echarts.resize({
      width: width,
      height: height
    })
  }

}

export default MyResumeWebCanvas
