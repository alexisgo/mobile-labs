// JavaScript Document
$(document).ready(function(e) {
	if (!hasHistoryApi()) { return; }
	buildLinks();

});

$(window).bind("popstate", function(e) {

  // window.location.pathname
  // location: gives you information about the current URL
  // pathname: gives you the path (relative to the host).
  // example: the folder	/search, the folder /images
	switchPhoto(location.pathname);
});

function hasHistoryApi() {
	return !!(window.history && history.pushState);
}

function buildLinks() {
	$("#prev,#next").click(function(e) {
		switchPhoto($(this).attr("href"))
		var newURL = "/examples/photogallery/" + $(this).attr("href");
		history.pushState(null, null, newURL);
		e.preventDefault();
	});
}

function switchPhoto(href) {
	var req;
	if (href.split("/").pop() == "history-api-examples-photogallery.html") {
		href = "http://www.html5in24hours.com/examples/photogallery/shasta1.html";
	} else {
		href = "http://www.html5in24hours.com/examples/photogallery/" + href.split("/").pop();
	}
	req = $.get(href, {},function() { 
		$("#photogallery").html(req.responseText);
		buildLinks();
    return true;
	});
	return false;
}