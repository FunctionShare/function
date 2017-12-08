/*
		获取链接参数 
		方法： var hide = GetString("hide");
	*/
	function GetString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) {
			return r[2];
		}
		return null;
	}
