$(document).ready(function(){

    load_json_data();

   
    
   
    
   });

   function load_json_data()
    {
     
     var divObj = $('#division');
     $.getJSON('https://api.sdelivery.xyz/api/v1/s-delivery/divisions', function(res){
        
        console.log(res);
        $.each(res.data, function(key, value){
            divObj.append('<option value="'+value.name+'">'+value.display_name+'</option>')
        
        });
        
     });
   
    }


    


    $(document).on('change', '#division', function(){
        var division_id = $(this).val();
        if(division_id != '')
        {
         load_json_data('district', division_id);
        }
        else
        {
         $('#district').html('<option value="">Select district</option>');
         $('#upzilla').html('<option value="">Select upzilla</option>');
        }
       });
   
   
       $(document).on('change', '#district', function(){
        var district_id = $(this).val();
        if(district_id != '')
        {
         load_json_data('upzilla', district_id);
        }
        else
        {
         $('#upzilla').html('<option value="">Select upzilla</option>');
        }
       });


