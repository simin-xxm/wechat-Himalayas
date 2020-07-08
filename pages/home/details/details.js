// pages/home/details/details.js
var lib = require('../../../lib/lib.js');
const app = getApp();
Page({
  data: {
    statusBar: app.globalData.statusBar,  
    customBar: app.globalData.customBar,
    custom: app.globalData.custom,
    guessc:'', 
    tit:['详情','节目'],
    tab:1,
    islist:''
  },
  onLoad: function (options) {
    let id = options.id;
    let homeid=options.homeid;
    let index = options.index;
    let that  = this;
    let url = 'http://mobile.ximalaya.com/mobile/discovery/v3/recommend/hotAndGuess?code=43_310000_3100&device=android&version=5.4.45';
    lib.myRequest({
      url:url,
      methods: 'GET',
      success : result =>{
        if(id== null){
          console.log(result)
          that.setData({
            showitem:true,
            homecoverMiddle : result.data.hotRecommends.list[index].list[homeid].coverMiddle,
            hometitle: result.data.hotRecommends.list[index].list[homeid].title,
            homenickname: result.data.hotRecommends.list[index].list[homeid].nickname,
            homealbumId: result.data.hotRecommends.list[index].list[homeid].albumId,
            hometracks: result.data.hotRecommends.list[index].list[homeid].tracks,
            islist:1
          })
        }else if(id !=null){
          that.setData({
            guess:result.data.paidArea.list,
            coverMiddle:result.data.paidArea.list[id].coverMiddle,
            title: result.data.paidArea.list[id].title,
            nickname:result.data.paidArea.list[id].nickname,
            albumId:result.data.paidArea.list[id].albumId,
            tracks:result.data.paidArea.list[id].tracks,
            islist: 2
          })
        }
      }
    })
  },
  // 返回上级
  jumpback:function(e){
    wx.navigateBack({
      delta: 1
    })
  },
  // tab页面
  navbarTap:function(e){
    this.setData({
      tab: e.currentTarget.dataset.index
    })
  }
})

