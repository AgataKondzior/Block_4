var main = function()
{  
  $(".hidden").hide()
  $(".content").click(function(){
    $(".hidden").toggle("fast");  
      
  });
};

$(document).ready(main);


