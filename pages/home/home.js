// pages/home/home.js

var lib = require('../../lib/lib.js')
Page({

  data: {
    CouImg:[
      '../../image/ad1.jpg',
      '../../image/ad2.jpg',
      '../../image/ad3.jpg',
      '../../image/ad4.jpg',
      '../../image/ad5.jpg',
      '../../image/ad6.jpg',
      '../../image/ad7.jpg'
    ],
    NavImg:[
      {icon:'/image/nav-icon/bangdan.png',text:'榜单'},
      {icon:'/image/nav-icon/diantai.png',text:'听小说'},
      {icon:'/image/nav-icon/gushi.png',text:'情感电台'},
      {icon:'/image/nav-icon/xiaoshuo.png',text:'听知识'},
    ]
  },

  onLoad:function (options) {
    let that  = this;
    let url = 'http://mobile.ximalaya.com/mobile/discovery/v3/recommend/hotAndGuess?code=43_310000_3100&device=android&version=5.4.45';
    console.log(options) 
    // 调用封装函数 lib
    lib.myRequest({
      url:url,
      methods: 'GET',
      success : result =>{
        that.setData({
          showitem:true,
          length:result.data.hotRecommends.list,
          tit:result.data.hotRecommends.list,
          guess:result.data.paidArea.list,
          quantity:result.data.paidArea.list, 
        })
      },
      // 断网，域名解析错误调用到fail
      fail: function(){
        that.setData({
          showitem:false
        })
      }
    })
  },
  //  搜索框跳转
  Go_search:function(e){
    // console.log(e);
    wx.navigateTo({
      url: '../home/search_for/search_for',
    })
  },
  // 猜你喜欢
  gotolike: function(e){
    // console.log(e.currentTarget.dataset.id);
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/home/details/details?id='+id
    })
  },
  gotodetails:function(e) {
    let homeid = e.currentTarget.dataset.id;
    let index = e.currentTarget.dataset.index;
    // console.log(e)
    wx.navigateTo({
      url: '../home/details/details?homeid='+homeid+"&index="+index
    })
  }
})
