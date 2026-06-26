
function moveSlide(button, direction) {

    const wrapper = button.parentElement; 
    const slider = wrapper.querySelector('.img-slider');
    
    const slideWidth = slider.clientWidth; 
    
    
    if (direction === 'next') {
        slider.scrollBy({ left: -slideWidth, behavior: 'smooth' });  
    } else {
        slider.scrollBy({ left: slideWidth, behavior: 'smooth' }); 
    }
}