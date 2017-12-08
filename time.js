//	封装的时间转换
function seconds2HMS(seconds) {
    var H = toDB(parseInt(seconds / 3600));
    var M = toDB(parseInt(seconds % 3600 / 60));
    var S = toDB(parseInt(seconds % 60));

    return H + M + S;
}
// 时间补零操作
function toDB(nub) {
	return nub<10?"0" + nub:""+nub;
}
