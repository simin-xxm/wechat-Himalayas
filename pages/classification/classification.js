// pages/classification/classification.js
Page({

  data: {
    list:['最近浏览','有声书','畅销书','儿童','相声评书','情感生活','最近浏览','有声书','畅销书','儿童','相声评书','情感生活',
    '最近浏览','有声书','畅销书','儿童','相声评书','情感生活'],
    TabCur:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let list = [{}];
    // for (let i = 0; i < 26; i++) {
    //   list[i] = {};
    //   list[i].name = String.fromCharCode(65 + i);
    //   list[i].id = i;
    // }
    // this.setData({
    //   list: list,
    //   listCur: list[0]
    // })
  },
  tabSelect:function(e){
    console.log(e)
  }
})