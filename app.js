const https = require('https');
const cheerio = require('cheerio');

let url = 'https://www.educity.cn/rk/zhenti/net/';

https.get(url, function (res) {
    let chunks = [],
        size = 0;
    res.on('data', function (chunk) {
        chunks.push(chunk);
        size += chunk.length;
    });

    res.on('end', function () {
        console.log('数据包传输完毕');
        let data = Buffer.concat(chunks, size);
        console.log(data);
        let html = data.toString();
        let $ = cheerio.load(html);
        var exams = $('.table_box>div');
        var info = [];
        for (var i = 0; i < exams.length; i++) {
            var infoItem = {}
            infoItem.text = $(exams[i]).find('.content_left').html();
            infoItem.jichu = $(exams[i]).find('.float-left ul').eq(0).find('li').eq(2).find('.info a').attr('href');
            infoItem.yingyong = $(exams[i]).find('.float-left ul').eq(0).find('li').eq(2).find('.info a').attr('href');
            info.push(infoItem);
        }
        console.log(info);
    });
})