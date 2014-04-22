$(document).ready(function() {
    $.get( "inc/head.html", function( data ) {
        $( "#head" ).html( data );
    });

    $.get( "inc/foot.html", function( data ) {
        $( "#foot" ).html( data );
    });
});
