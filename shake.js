function shake(element, attr, range, step) {
			//	元素，属性，范围，步长
    var originValue = getCss(element, attr);
    var flag = true;
    var timer = setInterval(function () {
        if (flag) {
            element.style[attr] = originValue - range + 'px';
        } else {
            element.style[attr] = originValue + range + 'px';
            range -= step;	//	步长自减，这样抖动幅度才会越来越小
			// 当步长到0时，回到元素原来的位置，关闭定时器
            if (range <= 0) {
                element.style[attr] = originValue + 'px';
                clearInterval(timer);
            }
        }
        flag = !flag;
    }, 16);
}
//	获取元素当前的位置
function getCss(element, attr) {
    return parseFloat(element.currentStyle ? element.currentStyle[attr] : getComputedStyle(element)[attr]);
}
