$(function() {
	// Handler for .ready() called.
	$.getJSON('json_geral.js', function (data) {

		var codigoDaNoticia = '';

		for (var i = 0; i < data.responseData.feed.entries.length; i++) {

			codigoDaNoticia += data.responseData.feed.entries[i].title +
				'<br>publicado em: ' +
				new Date(data.responseData.feed.entries[i].publishedDate).toLocaleDateString() +
				'<hr>';

		}

		$('div.chamadas').html(codigoDaNoticia);
	});
});