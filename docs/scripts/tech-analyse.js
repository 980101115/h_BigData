$(document).ready(function(){
$("ul.c-side-nav li").click(function(){
	$("ul.c-side-nav li").each(function(){
		$(this).find("ul").attr("class","c-sub-sidenav");
	});
$(this).find("ul").attr("class","tit-content");
});
});

$(document).ready(function(){
$("ul.tit-content li").click(function(){
	$("ul.tit-content li").each(function(){
		$(this).children("ul").attr("class","c-sub-sidenav1");
	});
$(this).children("ul").attr("class","tit-content1");
});
});

$("li").has("ul").mouseenter(function(){
            $(this).children("ul").css("display","block");
            $(this).css("backgroundColor","#0066FF");
        }).mouseleave(function () {
            $(this).children("ul").css("display","none");
            $(this).css("backgroundColor","#eee");
        });