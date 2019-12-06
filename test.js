var exams = $('.table_box>div');
var info = [];
for (var i = 0; i < exams.length; i++) {
    var infoItem = {}
    infoItem.text = $(exams[i]).find('.content_left').html();
    infoItem.jichu = $(exams[i]).find('.float-left ul:eq(0) li:eq(2) .info a').attr('href');
    infoItem.yingyong = $(exams[i]).find('.float-left ul:eq(0) li:eq(2) .info a').attr('href');
    info.push(infoItem);
}
console.log(info);