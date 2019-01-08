/**
 * 云通信基础能力业务短信发送、查询详情以及消费消息示例，供参考。
 * Created on 2017-07-31
 */

const SMSClient = require('./../index')
var express=require('express');
var app=express()
var mongodb=require('mongodb').MongoClient;
var db_str="mongodb://localhost:27017/zz1808"


// ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = ''
const secretAccessKey = ''

//在云通信页面开通相应业务消息后，就能在页面上获得对应的queueName,不用填最后面一段
const queueName = 'Alicom-Queue-1092397003988387-'

//初始化sms_client
let smsClient = new SMSClient({accessKeyId, secretAccessKey})

//短信回执报告
smsClient.receiveMsg(0, queueName).then(function (res) {
    //消息体需要base64解码
    let {code, body}=res
    if (code === 200) {
        //处理消息体,messagebody
//      console.log(body)
    }
}, function (err) {
//  console.log(err)
})

//短信上行报告
smsClient.receiveMsg(1, queueName).then(function (res) {
    //消息体需要base64解码
    let {code, body}=res
    if (code === 200) {
        //处理消息体,messagebody
//      console.log(body)
    }
}, function (err) {
//  console.log(err)
})


//查询短信发送详情
smsClient.queryDetail({
    PhoneNumber: '1500000000',
    SendDate: '20170731',
    PageSize: '10',
    CurrentPage: "1"
}).then(function (res) {
    let {Code, SmsSendDetailDTOs}=res
    if (Code === 'OK') {
        //处理发送详情内容
//      console.log(SmsSendDetailDTOs)
    }
}, function (err) {
    //处理错误
//  console.log(err)
})

var code=null;
function suiji(){
	code=Math.ceil(Math.random()*10000) 
	return code;
}


//发送短信
function send(phonenum,yzm){
	smsClient.sendSMS({
	    PhoneNumbers: phonenum,
	    SignName: '',
	    TemplateCode: '',
	    TemplateParam: `{"code":${yzm}}`
	}).then(function (res) {
	    let {Code}=res
	    if (Code === 'OK') {
	        //处理返回参数
	        console.log(res)
	    }
	}, function (err) {
	    console.log(err)
	})
}

app.post('/register',(req,res)=>{
	res.header('Access-Control-Allow-Origin',"*")
	var phonenum=req.query.phonenum;
	var id=req.query.id;
	if(id==1){
		suiji()
		send(phonenum,code)
		console.log(code)
	}else{
		let pass=req.query.pass;
		let yzm=req.query.yzm;
		if(yzm==code){
			//插入数据库
			mongodb.connect(db_str,(err,database)=>{
				database.collection('user',(err,coll)=>{
					coll.find({phonenum:phonenum}).toArray((err,data)=>{
						if(data.length>0){
							res.send('手机号已经注册')
						}else{
							coll.insert({phonenum:phonenum,pass:pass},()=>{
								res.send('注册成功')
							})
						}
						database.close()
					})
				})
			})
			
			
		}else{
			res.send('验证码不正确')
		}
		
		
	}
	
	
})
//注册结束

//登录开始
router.post("/login",(req,res)=>{
	mongodb.connect(db_str,(err,database)=>{
	  database.collection("user",(err,coll)=>{
		coll.find(req.query).toArray((err,data)=>{
  
		  if(data.length>0){
			res.send("1");
			database.close();
		  }else{
			res.send("2");
			database.close();
		  }
		})
	  })
	})
  })




app.listen(3000)
