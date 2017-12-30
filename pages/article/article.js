// pages/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '我是标题',
    content: '我是内容',
    btnLeft: '向左',
    btnRight: '向右'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  rightClick:function(e) {
    console.log('test');
    this.setData({ title: '向右', content:'向右的内容'})
  },
  leftClick:function(e) {
    console.log('test');
    this.setData({title: '向左', content: '向左的内容' })
  },
  indexClick:function(e) {
    wx.navigateTo({
      url: '../index/index',
    })
  }
})