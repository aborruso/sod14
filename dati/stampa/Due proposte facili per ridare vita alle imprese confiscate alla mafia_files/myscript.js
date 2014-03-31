var $j = jQuery.noConflict();
$j(function(){

//------------

if($j("#ns_widget_mailchimp-4 form").length>0){ $j("#ns_widget_mailchimp-4 form").after("<span>"+ $j("#text-13 .textwidget").html() +"</span>"); console.log("aaa") }

//get images
var i;
img_array = new Array();
cap_array = new Array();
cap_text  = new Array();

if($j(".single-format-gallery").length){
//get captions
if($j(".single-format-gallery .entry-content .wp-caption").length > 0){ 
	$j(".single-post .entry-content .wp-caption").each(function(){
		cap_array.push($j(this)); 
			id     = $j(this).attr("id");
		    pieces = id.split("_");
		cap_text.push(pieces[1]);		
	});
}
//get imgs
if($j(".single-format-gallery .entry-content a img").length > 0){ 
$j("body").addClass("withimg"); 
$j(".single-post .entry-content a img").each(function(){ img_array.push($j(this).parent()); }); //oppure parent()
//create container
$j(".single-post .entry-content").prepend("<div class='gallery'><ul class='gallery_inner'></ul></div>");
//move in container
for(i=0;i<img_array.length;i++){
  $j(".gallery_inner").append(img_array[i]); }
$j(".gallery_inner a").attr("rel","shadowbox[gal]").wrap("<div class='wr' />");
//insert captions
$j(".wr").each(function(){
	for(n=0;n<(cap_text.length);n++){ 
		classi=$j("img", this).attr("class"); 
		classi=classi.split(" ");

		for(e=0;e<classi.length;e++)
			if(classi[e].search("wp-image")!=-1) classe=classi[e]; 
		pieces=classe.split("-");
		
		
		
//		console.log(pieces[2]+" "+cap_text[n]); 
		if($j.trim(pieces[2])==$j.trim(cap_text[n])){ $j(this).append(cap_array[n]).find("a").attr("title",cap_array[n].html()); } 
	}
});

$j(".single-format-gallery .entry-content .wp-caption").css("display","none");
$j(".single-format-gallery .entry-content .wr").hover(
	function(){$j(".wp-caption",this).fadeIn(300,"easeInOutCirc")},
	function(){$j(".wp-caption",this).fadeOut(300,"easeInOutCirc")});

}
//activate
$j(".gallery").carousel({ slider: '.gallery_inner', slide: '.wr', addPagination: true, speed: 500 });
}



//------------

Shadowbox.init({ modal: false, displayNav: true });

//------------


var top = new String();
top = $j("#social-bar").css("top");
if (top) {
  top = top.slice(0,(top.length-2));
}
postHeight = $j(".post").height();



$j(window).scroll(function(){
  var scrollTop = $j(window).scrollTop();
//  console.log(scrollTop+ " " + postHeight);
  if(scrollTop>325){
	if(scrollTop<(postHeight+($j(".entry-title").outerHeight())+parseFloat(top)))
      $j("#social-bar").animate({ "top": (parseFloat(top)+scrollTop-325) }, 200, "easeInOutCirc");
    }
  else
	$j("#social-bar").animate({ "top": (parseFloat(top)) }, 200, "linear");
});



function galleryfixff(){
if($j(".gallery").length &&  (navigator.userAgent.indexOf("Firefox")!=-1 || navigator.userAgent.indexOf("MSIE")!=-1))
	$j(".gallery div").each(function(i){ 
		$j("img", this).width((parseFloat($j(".gallery").width())-14));
	});
//	console.log($j(".gallery").width()); console.log($j("img", this).css("width"));
}

galleryfixff();
$j(window).resize(function(){ galleryfixff(); });

/* mainmenu */
function mobilemenu(){
	$j("#nav_menu-3").css("display","none");
	$j("#nav_menu-3").append($j("#nav_menu-4"));
	$j(".centered").prepend("<div class='menu_head'><a class='open_menu'></a></div>");
	$j(".open_menu").click(function(){ $j("#nav_menu-3").slideToggle(200, "swing"); });
	//add title
/*	titolo=($j(".home").length>0)?"menu":$j("h1.entry-title").text();
	titolo=(titolo.length>20)?titolo.substr(0,20)+"...":titolo;*/
	$j(".menu_head").prepend("<div class='back'><a href='javascript:history.back()'></a></div>")/*.prepend('<div class="mtitle">'+titolo+'</div>')*/;
	$j("#nav_menu-4").css("display","block");
}
function undomobilemenu(){
	$j("#nav_menu-3").css("display","block");
	$j(".centered").append($j("#nav_menu-4"));
	$j(".menu_head").remove();
}

flag = 0;
if($j(window).width()<500 && flag==0) { mobilemenu(); flag=1 }
$j(window).resize(function(){
	console.log($j(window).width());
	if($j(window).width()<500 && flag==0) { mobilemenu(); flag=1 }
	else if(flag==1 && $j(window).width()>500) { undomobilemenu(); flag=0 }
});

});

