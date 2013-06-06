function handler_grafico_desempenho(){
	if(username=="[usuário não logado]")
		alert("usuário não logado!");
	else
		window.location = "#grafico";
	
}


// Column Chart
function desenha_tempo_estudado() {
	var data = google.visualization.arrayToDataTable([
	  ['Assunto', 'Tempo Estudado'],
	  ['Direito Processual Civil',  tp_direito_processual_civil],
	  ['Direito Administrativo',  tp_direito_administratico],
	  ['Direito Civil',  tp_direito_civil],
	  ['Matemática',  tp_matematica],
	  ['Raciocínio Lógico',  tp_raciocinio_logico],
	  ['Direito Constitucional',  tp_direito_constitucional],
	]);
	
	var options = {
	  title: 'Tempo Estudado por Assunto',
	  colors: ['green'],
	  hAxis: {title: 'Assunto', titleTextStyle: {color: 'red'}}
	};

	var chart = new google.visualization.ColumnChart(document.getElementById('visualization'));
	chart.draw(data, options);
	
}

// Column Chart
function desenha_desempenho_assunto() {
    
	var data = google.visualization.arrayToDataTable([
	  ['Assunto', acertos+' Acertos', erros+' Erros'],
	  ['Direito Processual Civil',  1000,      400],
	  ['Direito Administrativo',  1170,      460],
	  ['Direito Civil',  660,       1120],
	  ['Matemática',  1030,      540],
	  ['Raciocínio Lógico',  1030,      540],
	  ['Direito Constitucional',  1030,      540],
	]);

	var options = {
	  title: 'Desempenho por Assunto',
	  colors: ['green', 'red'],
	  hAxis: {title: 'Assunto', titleTextStyle: {color: 'red'}}
	};

	var chart = new google.visualization.ColumnChart(document.getElementById('visualization'));
	chart.draw(data, options);
	
}


/*
// Pie Chart
function desenha_total_acertos_erros() {
	
	// Create and populate the data table.
	var data = google.visualization.arrayToDataTable([
	  ['Acertos/Erros', 'Acertos Totais'],
	  [acertos+' Acertos', acertos],
	  [erros+' Erros', erros],
	]);
	
	var options = {
	  title: 'Taxa Total de Acertos e Erros',
	  colors: ['green', 'red'],
    };
  
	// Create and draw the visualization.
	new google.visualization.PieChart(document.getElementById('visualization')).
		draw(data, options);
	
}
*/