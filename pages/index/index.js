//index.js
//获取应用实例
const app = getApp()
const postData = require('../../data/posts-data.js');
Page({
  data: {
    currentTemplate: 0
  },

  //事件处理函数
  selectColor: function(event) {
    const that = this;
    that.setData({
      template: postData.templateArr[event.currentTarget.dataset.index],
      colorList: postData.templateArr,
      currentTemplate: event.currentTarget.dataset.index
    })
  },

  onLoad: function () {
    const that = this;
    that.setData({
      template: postData.templateArr[0],
      colorList: postData.templateArr
    })
  }
})
