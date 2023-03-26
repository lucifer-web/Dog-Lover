var msg;
fetch('https://dog.ceo/api/breeds/list/all')
.then((res)=>res.json())
.then((res)=>{
    for( msg in res.message){
        $('#drop').append('<option value="' + msg + '">' + msg + '</option>')
    }
})
$('#btn').click(function(e){
    e.preventDefault();
    getimage();
})
$('#next').clicked(function(e){
    e.preventDefault();
    getimage();
})
function getimage(){
    fetch("https://dog.ceo/api/breed/" + $('#drop').val() + "/images/random")
    .then((res)=>res.json())
    .then((res)=>{
        // console.log(res);
        $('#img').attr('src',res.message)
    })
}