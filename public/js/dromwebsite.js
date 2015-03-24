$( "a.social" ).hover(function() {
	$( ".followUsSvg" ).show();
	$( ".followus" ).show();
});
$( "a.social" ).mouseleave(function() {
	$( ".followUsSvg" ).hide();
	$( ".followus" ).hide();
});