

  // 封装wx.request请求
let myRequest = function(
  args = {
    url:'',

    methods:'GET', 
    data:{}, 
    success:function(){},
    fail:function(){}
  }){
  wx.request({
      url: args.url,
      data: args.data,
      header: {'content-type':'application/json'},
      method: args.methods,
      dataType: 'json',
      responseType: 'text',
      success: (res)=>{
        // console.log(res.data)  
        if(res.statusCode == 200){
          // 请求成功执行回调函数
          args.success(res)
        }
        else{
          // 请求失败执行回调函数
          args.fail()
        }
      },
  })
}

// 向外暴露接口
module.exports = {
  myRequest : myRequest
}