var main = function()
{  
  $(".hidden").hide()
  $(".content").click(function(){
    $(this).toggle("fast");  
      
  });
};

$(document).ready(main);


