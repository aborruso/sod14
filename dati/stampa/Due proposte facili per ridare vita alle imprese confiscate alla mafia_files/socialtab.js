
	function clearActive(){
		$(".socialbar .tab").each(function(){
			$(this).removeClass("active");
		});
		
		$(".socialcontainer .content").addClass("hide");
	}
	
	/******************************** READY ***************************************************/
	
	$(document).ready(function() {
	   
		/*
		 *  Binding click per i tab
		 */
		
		$('.socialbar .tab').click(function(){
			clearActive();
			$(this).addClass("active");
			
			var elemento = ".socialcontainer ."+$(this).data("key");
			
			$(elemento).removeClass("hide");
		});
		
		$('#socialtab-wrapper aside h3.widget-title').each(function(){
			$(this).remove();
		})
		
		
		$('aside.widget.widget_ns_mailchimp').appendTo($('.socialshare .socialcontainer .mail'));
		
		//$('aside#text-7').appendTo($('.socialshare .socialcontainer .fb'));
		$('.facebookOuter').appendTo($('.socialshare .socialcontainer .fb'));
		
		$('aside#latest_twitter_widget-3').appendTo($('.socialshare .socialcontainer .twitter'));
		
		$('aside#text-9').appendTo($('.socialshare .socialcontainer .gplus'));
		$('aside#text-16').appendTo($('.socialshare .socialcontainer .gplus'));
		
		
		
	});
	
	/***************************** END READY **************************************************/
	
