// pages/home/search_for/search_for.js
var lib = require('../../../lib/lib.js');
Page({

  data: {
    none:"", //搜索按钮 的消失和出现
    pastdb:[ ],//搜索历史内容
    value:'',  // 输入框内容
    hide:'none', //控制搜索历史的隐藏
    Leaderboard:[
      {no:'1',txt:'权力的游戏'},{no:'2',txt:'纸牌屋'},{no:'3',txt:'西部世界'},{no:'4',txt:'初来咋到'},
      {no:'5',txt:'老友记'},{no:'6',txt:'破产姐妹'},{no:'7',txt:'毒枭'},{no:'8',txt:'黑道家族'},
    ],
    str:'',  //随机数
    show:true, //控制搜索结果页的出现和消失  
    tit:['专辑','主播','声音'], //导航栏
    tab:0,  //tab代表当前选中的导航栏
  },

  // 页面载入
  onLoad: function (options) {
      let that = this;
      let url = 'http://mobile.ximalaya.com/mobile/discovery/v3/recommend/hotAndGuess?code=43_310000_3100&device=android&version=5.4.45';
      lib.myRequest({
        url:url,
        methods:'GET',
        success : result =>{
          console.log(result)
          that.setData({
            guess:result.data.guess.list,
            no: result.data.guess.list.length
          })
        }
      })
  },
  // 页面渲染
  onReady: function(e){
    let str = "";
    let range = 1;
    let arr = ['0','1'];
    if(true){
      range = Math.round(Math.random());
      str += arr[range]
      // console.log(Math.round(Math.random()))
    }
    this.setData({
      str:str
    })
    
  },
  //input 输入框事件
  look_for:function(e){
    var i = e.detail.cursor;  //监控input输入框是否存在内容
    var values = e.detail.value;  //获得input输入框内容
    let pastdb = this.data.pastdb.length;
    if(i > 0 ){
      this.setData({
        none:'flex',
        value:values,
        istrue: 1
      })
    }else if(i == 0){ //当input不存在内容时
      this.setData({
        none:'none',  //搜索按钮消失
        istrue: 2,  //控制搜索页内容的出现和消失
        show:true //控制搜索结果的出现和消失
      })
    }
    if(pastdb>0){
      this.setData({
        hide:'block'  //当搜索历史数组里为空搜索历史不显示
      })
    }
  },

  // 搜索历史删除按钮
  delete:function(e){
    this.setData({
      pastdb:[],
      hide:'none'
    })
  },

  // 点击搜索
  ss:function(e){ 
    let value = this.data.value
    let pastdb = this.data.pastdb;
    pastdb.push({con:value})
    this.setData({
      pastdb : pastdb,
      show:false
    })
  },

  // 点击了搜索历史
  label:function(e){
    let con = e.currentTarget.dataset.con
    this.setData({
      value:con,
    })
    var json={'detail':{
      "cursor":1,
      "value":con
     }    
    };
    this.look_for(json);
  },
  // tab页面
  navbarTap:function(e){
    this.setData({
      tab: e.currentTarget.dataset.index
    })
  }  
})