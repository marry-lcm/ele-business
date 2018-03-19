$(function(){
//搜索切换
  (function(){
	 var aLi=$("#menu li");
	 var oText=$('.form').find('.text');
	 var arrText=[
		 '例如：荷棠鱼坊烧鱼 或 樱花日本料理',
		 '例如：昌平区域新站龙旗广场2号楼609室',
		 '例如：万达影院双人情侣券',
		 '例如：东湾出事了，打老虎是谁？',
		 '例如：北京初春降雪，天气变幻莫测'
	 ];
	 var iNow=0;
	 oText.val(arrText[iNow]);
	 
	 aLi.each(function(index){
		$(this).click(function(){
			aLi.attr("class","gradient");
			$(this).attr("class","active");
			iNow=index;
			oText.val(arrText[iNow]);
		});
     oText.focus(function(){
		if($(this).val()==arrText[iNow]){
			$(this).val('');
		}
	 });
	 oText.blur(function(){
		if($(this).val()==''){
			oText.val(arrText[iNow]);
		}
	 });
		
	 });
  })();		
//update文字滚动
  (function(){
	var oDiv=$('.update');
    var oUl=oDiv.find('ul');
	var iH=0;
	var iNow=0;
	var arrData=[
	        { 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' },
			{ 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' }
	];
    	
    var str='';
	var oBtnUp=$('#updataUpBtn');
	var oBtnDown=$('#updataDownBtn');
	var timer=null;
	
	for( var i=0;i<arrData.length;i++ ){
		str+='<li><a href="'+ arrData[i].url +'"><strong>'+ arrData[i].name +'</strong> <span>'+ arrData[i].time +'分钟前</span> 写了一篇新文章：'+ arrData[i].title +'…</a></li>';
	}
    oUl.html(str);
	iH=oUl.find('li').height();

	oBtnUp.click(function(){
		doMove(-1);	
	})
	oBtnDown.click(function(){
		doMove(1);	
	})
	
	oDiv.hover(function(){
		clearInterval(timer);
	},autoPlay);
	
	function autoPlay(){
		timer=setInterval(function(){
			doMove(-1);
		},2500);	
	}
	autoPlay();
	
	function doMove(num){
		iNow+=num;
		if(Math.abs(iNow)>arrData.length-1){
			iNow=0; 
		}
		if(iNow>0){
			iNow=-(arrData.length-1);
		}
        oUl.stop().animate({'top':iH*iNow},2000);
    }
	
  })(); 
//选项卡切换
  (function(){
	fnTab($('.tabNav1'),$('.tabCon1'));
	
	function fnTab(oNav,aCon){
	   var aElem=oNav.children();
	   aCon.hide().eq(0).show();
	   
	   aElem.each(function(index){
		   $(this).click(function(){
			  aElem.removeClass('active').addClass('gradient');
			  $(this).removeClass('gradient').addClass('active');
			  aElem.find('a').attr('class','gray_down');
              $(this).find('a').attr('class','red_down');			  
		      aCon.hide().eq(index).show();
		   });		   
	   });
	} 


	
	  
  })();
//自动播放的焦点图切换
  (function(){
	var oDiv=$('#fade');
	var aUlLi=oDiv.find('ul li');
	var aOlLi=oDiv.find('ol li');
	var oP=oDiv.find('p');
    var arr=[ '爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方' ];
    var iNow=0;
	
	fnFade();
	
	aOlLi.click(function(){
		iNow=$(this).index();
		fnFade();		
	});
	
	oDiv.hover(function(){
		 clearInterval(timer);
	},autoPlay)
	
	
	function autoPlay(){
		timer=setInterval(function(){
		   iNow++;
           iNow%=arr.length;		   
		   fnFade();
		},1000);	
	}
	autoPlay()
	
	function fnFade(){
	    aUlLi.each(function(i){
			if(i!=iNow){
				aUlLi.eq(i).fadeOut().css('zIndex',1);
				aOlLi.eq(i).removeClass('active');
			}else{
				aUlLi.eq(i).fadeIn().css('zIndex',2);
				aOlLi.eq(i).addClass('active');
			}
			
		});	
		
		oP.text(arr[iNow]);
	}
	
  })();
//Hot鼠标提示效果  
  (function(){
	  var arr = [
			'',
			'用户1<br />人气1',
			'用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
			'用户3<br />人气3',
			'用户4<br />人气4',
			'用户5<br />人气5',
			'用户6<br />人气6',
			'用户7<br />人气7',
			'用户8<br />人气8',
			'用户9<br />人气9',
			'用户10<br />人气10'
		];
		$('.hot_area li').mouseover(function (){
			
			if ( $(this).index() == 0 ) return;
			
			$('.hot_area li p').remove();
			
			$(this).append('<p style="width:'+ ($(this).width()-12) +'px; height:'+ ($(this).height()-12) +'px;">'+ arr[$(this).index()] +'</p>');
		});
  })();
  
  });