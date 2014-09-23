$(function() {
	// Essa função vai carregar as notícias do JSON e carregar na tela. Ela vai receber qual a categoria vai exibir e vai usar o nome da categoria para buscar o arquivo com o nome da categoria, dentro da pasta json/
	var carregarNoticias = function (categoria) {
		$.getJSON('json/' + categoria + '.js', function (data) {
			var codigoDaNoticia = '';
			for (var i = 0; i < data.responseData.feed.entries.length; i++) {
				var chamada = data.responseData.feed.entries[i];
				codigoDaNoticia +=
					'<strong>' + chamada.title + '</strong>' +
					'<br>' + chamada.contentSnippet + '<br>' +
					'<em>publicado em: ' + new Date(chamada.publishedDate).toLocaleDateString() + '</em>' +
					'<hr>';
			}
			$('div.chamadas').html(codigoDaNoticia);
		});
	};

	// Isso serve para assim que a página carregar, seja exibida as notícias da área geral. Para tal, chamamos a função criada acima
	carregarNoticias('geral');

	// Essa parte serve para pegar todos os elementos html <A> que tenham a classe bt-categoria e dizer que quando clicados devem executar algo
	$('a.bt-categoria').on('click', function () {
		// Pega qual a categoria do botão clicado. Ele faz isso procurando o valor dentro do atributo data-categoria dentro do elemento html <A>
		var categoria = $(this).attr('data-categoria');

		// Aqui, nós vamos esconder o jumbotron e colocar o título certo no elemento html H2 para cada categoria. Por padrão, quando nenhuma categoria for escolhida, exibirá o jumbotron, carregará a categoria geral e esconderá o título usado nas outras categorias
		switch (categoria) {
			case 'tecnologia':
				$('div.jumbotron').hide();
				$('h2').html('Tecnologia').show();
				break;
			case 'politica':
				$('div.jumbotron').hide();
				$('h2').html('Política').show();
				break;
			case 'economia':
				$('div.jumbotron').hide();
				$('h2').html('Economia').show();
				break;
			case 'educacao':
				$('div.jumbotron').hide();
				$('h2').html('Educação').show();
				break;
			case 'musica':
				$('div.jumbotron').hide();
				$('h2').html('Música').show();
				break;
			case 'natureza':
				$('div.jumbotron').hide();
				$('h2').html('Natureza').show();
				break;
			default:
				$('div.jumbotron').show();
				$('h2').hide();
				break;
		}

		// Chama a função que carrega as notícias dos JSON dizendo qual categoria você quer que seja carregada
		carregarNoticias(categoria);
	});
});