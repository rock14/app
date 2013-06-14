function handler_grafico_desempenho(){
	if(username=="[usuário não logado]"){
		console.log("Usuário não logado!");
		
		// alert phonegap  (message, callback, title, buttonName)
		navigator.notification.alert('Usuário não logado!', fcalert, 'Comunicado', 'OK');
	}
	else
		window.location = "#grafico";
	
}

function fcalert(){
	
}

// Column Chart
function desenha_tempo_estudado() {
	var data = google.visualization.arrayToDataTable([
	  ['Assunto', 'Tempo Estudado'],
	  ['Direito Processual Civil',  tp_direito_processual_civil],
	  ['Direito Administrativo',  tp_direito_administrativo],
	  ['Direito Civil',  tp_direito_civil],
	  ['Matemática',  tp_matematica],
	  ['Raciocínio Lógico',  tp_raciocinio_logico],
	  ['Direito Constitucional',  tp_direito_constitucional],
	]);
	
	var options = {
	  title: 'Tempo Estudado por Assunto (em segundos)',
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
	  ['Direito Processual Civil',  acertos_direito_processual_civil, erros_direito_processual_civil],
	  ['Direito Administrativo',  acertos_direito_administrativo, erros_direito_administrativo],
	  ['Direito Civil',  acertos_direito_civil, erros_direito_civil],
	  ['Matemática',  acertos_matematica, erros_matematica],
	  ['Raciocínio Lógico',  acertos_raciocinio_logico, erros_raciocinio_logico],
	  ['Direito Constitucional',  acertos_direito_constitucional, erros_direito_constitucional],
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