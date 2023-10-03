$(document).ready(function(){
    $("#hideHeader").hide();

    $("#btnExample").on("click", function(){
        alert("Hola mundo");
        $("#hideHeader").show();
    });
});