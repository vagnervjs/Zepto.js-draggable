$(function(){
	$('#main img').each(function(){
		
	drag.set(this, {
		start: function(){

		},
		move: function(hits){		
			if(hits.length) {
			    $(rect.closest(hits, this));
			}
		},
		drop: function(hits){

			}
		});
	});
});