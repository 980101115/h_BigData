//先找到一级导航栏的容器
var nav1 = document.getElementsByClassName('c-side-nav')[0];
//然后去容器里找导航的超链接


//然后去容器里找导航的超链接
var b_arr= nav1.getElementsByTagName('a');
for(var i=0;i<b_arr.length;i++)
{
	//this指当前事件源
	b_arr[i].onclick = function() {
		for(var j=0;j<b_arr.length;j++)
		      b_arr[j].className='';//取消掉所有导航项的lightclass
		this.className='active';
	}
}
var now = new Date(); 
//格式化日，如果小于9，前面补0 
var day = ("0" + now.getDate()).slice(-2); 
//格式化月，如果小于9，前面补0 
var month = ("0" + (now.getMonth() + 1)).slice(-2); 
//拼装完整日期格式 
var today = now.getFullYear()+"-"+(month)+"-"+(day) ; 
document.getElementsByClassName("from-control-end")[0].value=(today);