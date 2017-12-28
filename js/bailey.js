$('#container').animate(
    { opacity: 0 }, // what we are animating
    'fast', // how fast we are animating
    'swing', // the type of easing
    function() { // the callback
        alert('done');
    });
