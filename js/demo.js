;(function(){

	var demoID = location.search.replace(/\?(.+)/, '$1');
	$('.demoID').text(demoID);
	$('.demo a').each(function(){
		if(this.textContent == demoID) $(this).addClass('is-active');
	})

	var headingArray = TOC.createHeadingArray(
		document.querySelector('.main > h2'), 2, 4
	)
	if(demoID == '01'){
		var ul = $('<ul class="toc"/>').appendTo('.sidebar');
		headingArray.forEach(function(data, i){
		    $('<li/>').
		    addClass('level-' + data.level).
		    html(
		        $('<a href="javascript:void(0)"/>').
		        on('click', function(){
		            $('html,body').animate({scrollTop: $(data.el).offset().top})
		        }).
		        text(data.el.textContent)
		    ).
		    appendTo(ul);
		});
	}
	else
	if(demoID == '02'){
		// 親子情報の紐付け
		TOC.addRelationShip(headingArray);

		// UI 生成
		var ul = $('<ul/>').appendTo('.sidebar');
		headingArray.forEach(function(data, i){
		    var container = ul;
		    if(data.parentNode){
		        container = data.parentNode.childrenContainer =
		            data.parentNode.childrenContainer ||
		            $('<ul/>').appendTo(data.parentNode.item)
		    }
		    data.item = 
		        $('<li/>').html(
		            $('<a href="javascript:void(0)"/>').
		            on('click', function(){
		                $('html,body').animate({scrollTop: $(data.el).offset().top})
		            }).
		            text(data.el.textContent)
		        ).
		        appendTo(container);
	    });
	}
	else
	if(demoID == '03'){
		// 親子情報の紐付け
		TOC.addRelationShip(headingArray);

		// 目次 UI の挿入
		var toc = TOC.toTocUi(headingArray);
		document.querySelector('.sidebar').appendChild(toc);

	}
	
})();

