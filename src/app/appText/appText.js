
class AppText {

  constructor() {
    this.text = {}
    this.dataBase = {
      "zh-CN": {
        "my resume web": "我的个人简介网站",
        "welcome to my resume web": "欢迎来到我的个人简历网站",
        "name": "名字",
        "jiehan.guo": "呙杰瀚",
        "phone": "电话",
        "this app sources url": "本网页源码地址",
        "reset": "复位",
        "document": "下载文档",
        "languageX": "english",
        "close": "关闭",
        "done": "完成",
        "next": "下一步",
        "previous": "上一步",
        "to python": "转到python",
        "to embedded": "转到嵌入式",
        "to web": "转到web",
        "to main": "转到主界面",
        "button reset description": "单击此处重置介绍过程，tips：本网页是可缩放的哦",
        "button document description": "单击此处下载个人简介文档",
        "button language description": "单击此处切换语言",
        "my resume main description": "一个拥有两年\n工作经验的程序员",
        "my main embedded experience": "我的嵌入式（MCU）\n（C/C++）经验优秀，\n上一份工作是\n嵌入式软件工程师，\n且本人计算机和\nMCU基础知识牢固，\n曾在大学时获得\n四川机器人大赛一等奖",
        "i want to know more about your embedded skills": "\"我想要了解更多你\n嵌入式方面的技能\"",
        "my main python experience": "我的python\n基础扎实，\n曾在前公司做过\n一个python\n桌面应用",
        "i want to know more about your python skills": "\"我想要了解更多你\npython方面的技能\"",
        "my main web experience": "不错的前端\n项目经验，\n熟悉JS、TS、\nHTML、CSS、NODE，\n微信小程序、\n单网页应用",
        "i want to know more about your web skills": "\"我想要了解更多你\nweb方面的技能\"",
        "about last company": "\"关于上家公司\"",
        "last company description": "前公司是成都极趣科技有限责任公司\n（DFRobot：http://mc.dfrobot.com.cn/）（双击打开），\n是一家为青少年和创客爱好者提供开源硬件产品、\n机器人及零配件产品的平台。\n我曾在其中任职嵌入式软件工程师，\n主要负责各类模块驱动的开发，\n也负责过一些python和前端项目。",
        "my embedded skills part 1": "曾在公司中负责嵌入式代码规范的制定，嵌入式相关模块驱动代码验收负责人。\n有扎实的C/C++基础，代码整洁规范，高扩展性高稳定性。熟悉各类MCU的应用，\n熟悉Arduino平台，熟悉RTOS。代码规范参考链接（双击打开）：\nhttps://github.com/forKnowYou/program-standard-cpp，\n部分参考代码链接（以下库都基于Arduino嵌入式平台）\n（以及一些非Arduino平台的C项目代码属于前公司未开源项目，无法展示）",
        "my embedded skills part 2": "一个手势传感器的简单库（双击打开）：\nhttps://github.com/DFRobot/DFRobot_Gesture_Touch/tree/9600d683d355a6e5f3522a548131b0fecbad46d8",
        "my embedded skills part 3": "一个环境传感器的结合官方代码的库（双击打开）：\nhttps://github.com/DFRobot/DFRobot_BME680/tree/dabe899eeaee30a3103cd23ba1574d9eef979b81",
        "my embedded skills part 4": "一个十轴姿态传感器的库（双击打开）：\nhttps://github.com/DFRobot/DFRobot_BNO055/tree/bd3ef9ea1fdeb5d08e175af4dd5ef210dfc88e5c",
        "my embedded skills part 5": "一个图形驱动库（双击打开）：\nhttps://github.com/DFRobot/DFRobot_ILI9488/tree/170bb7506a7db80cfb1c59514a3ed510cbd5b415",
        "my embedded skills part 6": "如果贵公司在找一个嵌入式方向的人才，有我的帮忙，\n贵公司的业务发展必将突飞猛进。",
        "my python skills": "熟悉python的使用，曾使用python完成过一个桌面应用，\n是一个姿态传感器的3D图形展示软件。在嵌入式硬件连接电脑后，\n由串口向电脑发送数据，软件接收到数据后进行3D图形展示：（双击打开）\nhttps://github.com/DFRobot/DFRobot_IMU_Show/tree/6c87ce471cee154d21378a9749b94aa8aecd9ec8",
        "my web skills part 1": "曾在前公司参与过两个微信小程序项目",
        "my web skills part 2": "物联网设备管理项目，可以实现用户绑定、用户传感器事件添加与提醒、传感器管理",
        "my web skills part 3": "手机蓝牙控制器，该应用可允许手机通过蓝牙连接并控制嵌入式设备",
        "my web skills part 4": "关于前端网页的项目，可以参考本网页"
      },
      "en-US": {
        "languageX": "中文",
        "button reset description": "click to reset description steps, tips: This page is scalable",
        "button document description": "click to check resume document",
        "button language description": "click to change language"
      }
    }
  }

  /**
   * @param {string} type
   */
  setText(type) {
    this.text = this.dataBase[type] || {}
  }

  /**
   * @param {string} name 
   */
  getText(name) {
    return this.text[name] || name
  }

}

let appText = new AppText()

export default appText
