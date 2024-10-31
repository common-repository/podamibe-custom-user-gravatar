(function($){
	$(document).ready(function(){
		var frame,
			uploadImageBtn = $("#pcg-upload-profile-pic"),
			removeImageBtn = $('#pcg-remove-img');
	
		uploadImageBtn.on( 'click', function( event ){
			event.preventDefault();
			// If the media frame already exists, reopen it.
			if ( frame ) {
			  frame.open();
			  return;
			}
			frame = wp.media({
				library: {
					type: 'image'
				},
				title: 'Select or Upload Picture',
				button: {
					text: 'Select'
				},
				multiple: false  // Set to true to allow multiple files to be selected			 
			});
			
			frame.on( 'select', function() {
				var attachment = frame.state().get('selection').first().toJSON();
				$( "#pcg-custom-gravatar" ).val(attachment.id);
				$("#pcg-custom-gravatar-pic img").attr( "src", attachment.url );
			});
			
			frame.open();
		});

		/**
		 * Remove Image Btn
		 */
		removeImageBtn.on( 'click', function( event ){
			$( "#pcg-custom-gravatar" ).val('');
			$("#pcg-custom-gravatar-pic img").attr( "src", '' );
		});
		
		if( $( "#pcg-use-custom-gravatar" ).is(":checked") ){
			$( "#pcg-upload-profile-pic" ).closest("tr").show();
		}
		else{
			$( "#pcg-upload-profile-pic" ).closest("tr").hide();
		}
			
		 $( "#pcg-use-custom-gravatar" ).click(function(){
			if( $(this).is(":checked") ){
				$( "#pcg-upload-profile-pic" ).closest("tr").show();
			}
			else{
				$( "#pcg-upload-profile-pic" ).closest("tr").hide();
			}
		 });
	});
	
})(jQuery);