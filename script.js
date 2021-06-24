


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

  
        $(document).on('change', '#division', function() {
            $('select[name="district"]').empty();
            var divisionId = $(this).val();
            console.log(divisionId);
            if(divisionId) {
                $.ajax({
                    url: 'https://api.sdelivery.xyz/api/v1/s-delivery/districts?division_name='+divisionId,
                    type: "GET",
                    dataType: "json",
                    success:function(res){
                        console.log(res);
                        
                        $.each(res.data, function(key, value) {
                            $('#district').append('<option value="'+ value.name +'">'+ value.display_name +'</option>');
                        });
                    }
                });
            }else{
                $('select[name="district"]').empty();
            }
        });


        $(document).on('change', '#district', function() {
            $('select[name="upzilla"]').empty();
            var districtId = $(this).val();
            console.log(districtId);
            if(districtId) {
                $.ajax({
                    url: 'https://api.sdelivery.xyz/api/v1/s-delivery/districts/'+districtId+'/upazilas',
                    type: "GET",
                    dataType: "json",
                    success:function(res){
                        console.log(res);
                        $.each(res.data, function(key, value) {
                            $('select[name="upzilla"]').append('<option value="'+ value.name +'">'+ value.display_name +'</option>');
                        });
                    }
                });
            }else{
                $('select[name="upzilla"]').empty();
            }
        });

    
       


    
