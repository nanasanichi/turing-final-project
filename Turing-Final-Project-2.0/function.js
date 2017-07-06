$(document).ready(function() { 
	$.ajax({
		url: "https://api.unsplash.com/photos/random",
		method: "GET",
		contentType: "application/json",
		data: {
			"client_id": "da0fc30f36195782ab7c402ba6584f32280a6daafbd7a381f65e01cec8b7935f",
			"query": "wedding",
  			"orientation": "landscape",
		},
		success: poppingChampagne
	});
	
	function poppingChampagne(response) {
		var url = response.urls.small;
		var image = $(document.createElement("img"));
		image.attr("src", url);
		image.appendTo("#results");
	}
});