// pages/parse/parse.js

var srcJson = {
  "content": [
    {
      "type": "scene",
      "id": "root",
      "content": [
        {
          "type": "p",
          "content": "小明进入了一个房间"
        },
        {
          "type": "p",
          "content": "他张望四周"
        },
        {
          "type": "p",
          "content": "发现两扇门"
        },
        {
          "type": "button",
          "content": "打开左边",
          "href": "leftdoor",
          "class":"leftbtn"
        },
        {
          "type": "button",
          "content": "打开右边",
          "href": "rightdoor",
          "class": "leftbtn"
        }
      ]
    },
    {
      "type": "scene",
      "id": "leftdoor",
      "content": [
        {
          "type": "p",
          "content": "小明死了"
        }
      ]
    },
    {
      "type": "scene",
      "id": "rightdoor",
      "content": [
        {
          "type": "p",
          "content": "你赢了"
        }
      ]
    }
  ]
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: [],
    button: []
  },

  getData: function(id) {
    // 获得指定ID的JSON
    var idJson = {};
    for (var c in srcJson.content) {
      if (srcJson.content[c].id == id) {
        idJson = srcJson.content[c];
      }
    }
    // 获得该ID对应JSON应该展示的内容
    var content = [];
    for (var p in idJson.content) {
      if (idJson.content[p].type == "p") {
        content.push(idJson.content[p].content);
      }
    }
    this.setData({ content: content });
    // 获得该ID对应JSON应该展示的按钮
    var button = [];
    for (var p in idJson.content) {
      if (idJson.content[p].type == "button") {
        button.push(idJson.content[p]);
      }
    }
    return {content:content, button:button}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData(this.getData("root"));
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onClick:function(e) {
    this.setData(this.getData(e.currentTarget.dataset.id));
  }
})