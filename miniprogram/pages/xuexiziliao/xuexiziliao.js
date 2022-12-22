Page({

  /**
   * 页面的初始数据
   */
  data: {
      ziliao:[
          {id:1,title:'2021—2022学年马原参考资料',url:'../../zilao/2021—2022学年马原参考资料.doc'},
          {id:2,title:'复习例题',url:'../../zilao/复习例题.docx'}
      ]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 获取学习资料
   */
  openFile(e){
    var that = this;
    console.log(e.currentTarget.offsetTop)
    let url=that.data.ziliao[(e.currentTarget.offsetTop-71)/47].url
    console.log(url)
    wx.downloadFile({
        url: url,
        success: function (res) {
          const filePath = res.tempFilePath
          wx.openDocument({
            filePath: filePath,
            success: function (res) {
              console.log('打开文档成功')
            }
          })
        }
      })
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
    
  }
})