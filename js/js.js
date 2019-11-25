$(document).ready(function(){
    var myList = ["Bopha","Romdul","Chompey","Chmpa","Kolab","Krovan","Romchong"];
    
    $('#search, button').attr("disabled",true);
        $('#accept').on('click',function(){
        $('#search,button').attr("disabled",false);
    })
    $('button').on('click',function(){
       
        var name = $('#search').val();
        var check = $('#find');
        if(name !=""){
            var result = searchName(myList,name);
            result ? check.html("Find: " + name): check.html("Cannot find : " + name)
        } else{
            check.html("Please enter something");
        }       
        $('a').html("You are agree to search only in good way");
    });
    
});
function searchName(list, names){
    for(let i = 0 ; i < list.length; i++){
        if(list[i].toLowerCase() == names.toLowerCase()){
            return true;
        }
    }
    return false;
}