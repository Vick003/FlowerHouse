var pix_box_container_2;
var carousel_2_images; //array to hold images
var left_arrow;
var right_arrow;
var pix2_index = 0;
var dots;


function initiate() {
	pix_box_container_2 = $('#pix-box-container-2');
	carousel_2_images = $('.event-images'); //This will return an array of the images
	left_arrow = $('#left-arrow');
	right_arrow = $('#right-arrow');
    dots = $(".space-dots");
	left_arrow.click(slidePrev);
	right_arrow.click(slideNext);
}

function nextPixIndex() {
    if (pix2_index == carousel_2_images.length-1) {
        return 0;
    }//if the index is equal to last pix + 1, reset it to 0;
    return pix2_index + 1;
}



function slideNext() {
    $(carousel_2_images[nextPixIndex()]).css("left", "1020px");

	 $(carousel_2_images[pix2_index]).animate(
        {
            left: '-1020px'
        },
        500,
        function() {
            $(this).css('left', '1020px');
        } 
         
    
    );
        $(dots[pix2_index]).attr("src", "images/dot-inactive.png"); 
	    pix2_index++;  //moves index to next imadge
        $(dots[pix2_index]).attr("src","images/dot-active.png");
	       if(pix2_index === carousel_2_images.length) {
	 	     pix2_index=0; //resets the index back to zero to start from the beginning
     
             $(dots[pix2_index]).attr("src", "images/dot-active.png");
	       }
	 //Animate the next box
	 $(carousel_2_images[pix2_index]).animate(
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
    if(pix2_index - 1 < 0) { 
        return carousel_2_images.length - 1;
    }
 //this function resets the previous index back to the end of the array   
    return pix2_index-1;
}

//--------------------------------------------------------------------------------
function slidePrev() {
    // Animate the current box
    $(carousel_2_images[previousPixIndex()]).css("left", "-1020px");
    //line above resets the css to the far left position 
    $(carousel_2_images[pix2_index]).animate(
        {
            left: '1020px'
        },
        500,
        function() {
            $(this).css('left', '-1020px');//happens when done
        }
    );
    
    $(dots[pix2_index]).attr("src", "images/dot-inactive.png");
    
    pix2_index = previousPixIndex();
    
    $(dots[pix2_index]).attr("src", "images/dot-active.png");
    
    // Animate the next box
    $(carousel_2_images[pix2_index]).animate(
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