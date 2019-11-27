$(document).ready(function(){
var message = "Hover over an image below."
				var images = $("img");
				
				images.each(function (){
				  images.mouseover(function(){
					$('#image').css("backgroundImage", 'url(' +this.src+')');
					$('#image').html(this.alt);
				  })
	
				  images.mouseout(function(){
					$('#image').css("backgroundImage", 'url()');
					$('#image').html(message);
				  })
	
				  images.focus(function(){
					$('#image').css("backgroundImage", 'url(' +this.src+')');
					$('#image').html(this.alt);
				  })
	
				  images.blur(function(){
					$('#image').css("backgroundImage", 'url()');
					$('#image').html(message);
				  })
				})
})
