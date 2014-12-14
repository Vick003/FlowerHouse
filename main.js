var pix_box_container_1;
var carousel_1_images; //array to hold images
var left_arrow;
var right_arrow;
var pix_index = 0;

function initiate() {
	pix_box_container_1 = $('#picture-box-container-1');
	carousel_1_images = $('.carousel-1-images'); //This will return an array of the images
	left_arrow = $('#left-arrow');
	right_arrow = $('#right-arrow');
	left_arrow.click(slideNext);
	right_arrow.click(slidePrev);
}

function slideNext() {
	 $(carousel_1_images[pix_index]).animate(
        {
            left: '-1020px'
        },
        500,
        function() {
            $(this).css('left', '1020px');
        } 
    );
	 pix_index++;  //moves index to next imadge
	 if(pix_index === carousel_1_images.length) {
	 	pix_index=0; //resets the index back to zero to start from the beginning
	 }
	 //Animate the next box
	 $(carousel_1_images[pix_index]).animate(
        {
            left: '0px'
        },
        500,
        function() {
            //alert('Animation done');
        }
    );

}
//---------------------------------------------------------------------------------
function previousPixIndex() {
    if(pix_index - 1 < 0) { 
        return carousel_1_images.length - 1;
    }
 //this function resets the previous index back to the end of the array   
    return pix_index - 1;
}

//--------------------------------------------------------------------------------
function slidePrev() {
    // Animate the current box
    $(carousel_1_images[previousPixIndex()]).css("left", "-1020px");
    //line above resets the css to the far left position 
    $(carousel_1_images[pix_index]).animate(
        {
            left: '1020px'
        },
        500,
        function() {
            $(this).css('left', '-1020px');//happens when done
        }
    );
    
    pix_index = previousPixIndex();
    
    // Animate the next box
    $(carousel_1_images[pix_index]).animate(
        {
            left: '0px'
        },
        500,
        function() {
            //alert('Animation done');
        }
    );
}

$(document).ready(initiate);



