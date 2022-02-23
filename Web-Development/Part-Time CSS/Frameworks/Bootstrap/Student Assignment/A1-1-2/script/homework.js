$(document).ready(function(){
  $("#text,#ព្រះបរមរាជរាំង,#ចរាចរណ៏នៅទីក្រុងភ្នំពេញ").hide();
//  $("#ព្រះបរមរាជរាំង").hide();
     $("#kompi1").mouseover(function(){
         $("#kompi1").fadeOut(7000);
        $("#text").show();
     });
     $("#kompi1").mouseout(function(){
        $("#text").hide();
        $("#kompi1").fadeIn();
     });
   
     $("#ចរាចរណ៏").mouseover(function(){
      $("#ចរាចរណ៏នៅទីក្រុងភ្នំពេញ").show();
      });
     $("#ចរាចរណ៏").mouseout(function(){
      $("#ចរាចរណ៏នៅទីក្រុងភ្នំពេញ").hide();   
      });

      
     $("#បរមរាជរាំង").mouseover(function(){
          $("#ព្រះបរមរាជរាំង").show();
          
      });
     $("#បរមរាជរាំង").mouseout(function(){
          $("#ព្រះបរមរាជរាំង").hide();   
     });
   
});
       