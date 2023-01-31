function Circlle (el) {
  $(el).circleProgress({fill: {color: 'red'}})
    .on('circle-animation-progress', function(event, progress, stepValue){
    
    $(this).find('strong').text(String(stepValue.toFixed(2)).substring (2)+'%');
    
  });
};

Circlle('.round');