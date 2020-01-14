const router = require('koa-router')();
const superagent = require("superagent")
const FormData = require('form-data');
const cheerio = require('cheerio');
const request     = require('request')  
const fs = require('fs');

router.get('/test',async (ctx, next) => {
    await request({
        method: 'get',
        uri: 'http://localhost:3300/search?key=%E8%B0%AD%E5%92%8F%E9%BA%9F&pageSize=99',
        json: true//设置返回的数据为json
    },function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const list = body.data.list
            list.forEach(i => {
                console.log(i.songmid)
            })
        }
    })
})



router.get('/setQCookie',async (ctx, next) => {
    request({
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        uri: 'http://localhost:3300/user/setQCookie',
        data:{data:"pgv_pvi=7076698112; pgv_pvid=3094098736; RK=QBB08vtJH6; ptcz=86220fb03890fb9116c97096171a48b18057958d76f022c62c35831bf1451783; pgg_uid=392250951; pgg_appid=101503919; pgg_openid=6C230D8521F12E1640DDA91F011A3DD1; pgg_access_token=E682B39D99A3A01484B0B6D285112525; pgg_type=1; pgg_user_type=5; tvfe_boss_uuid=45f4e3e054256ce5; pac_uid=0_5deb8f56ea8d7; eas_sid=h1O567x6Y715g914Y8v6y5X7U7; LW_uid=s1a5f7o8P5c8D338g6V6x4l0i8; ptui_loginuin=793658414; LW_sid=E1z5Z7T8w6O506k1t5k7u9U840; pgv_si=s6829996032; pgv_info=ssid=s5480846005; ts_uid=1073747730; userAction=1; player_exist=1; _qpsvr_localtk=0.23104616891176288; qqmusic_fromtag=66; psrf_qqrefresh_token=17F38DE113D1D5897994B232374E52F7; psrf_access_token_expiresAt=1586789603; uin=793658414; psrf_qqunionid=469D6B74C453180698B1629BC18B04AE; psrf_qqopenid=E1B3D4BD2D941B92054F89886FC0B73B; qm_keyst=Q_H_L_2CUrTu50eG6kObcOvYh5Nw8cA7JaAFpH8gcrtK4cDqAjJ5cUaUMMY_W4pg0GxF4; psrf_qqaccess_token=3BC7E673E6C7B49C8A4A9048B2B42C63; psrf_musickey_createtime=1579013603; ts_refer=www.google.com/; yqq_stat=0; yq_playschange=0; yq_playdata=; ts_last=y.qq.com/portal/player.html; yq_index=0; yplayer_open=0"},
        json: true//设置返回的数据为json
    },function (error, response, body) {
        if (!error && response.statusCode == 200) {
            
        }
    })
    ctx = 'cookie'
})


router.get('/downLoadMusic',async (ctx, next) => {
    downLoadMusic()
    ctx = 200
})

function downLoadMusic(){
    request({
        method: 'get',
        uri: 'http://localhost:3300/song/url?id=0049FHAV06nSRN',
        data:{},
        json: true//设置返回的数据为json
    },function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body.data)
            downloadFile(body.data,'测试',function(){
                console.log('下载完毕');
            })
        }
    })
}


function downloadFile(uri,filename,callback){
    var stream = fs.createWriteStream(`E:/music/${filename}.mp3`);
    request(uri).pipe(stream).on('close', callback); 
}

module.exports = router;
