acertos = 0;
erros = 0;
tempo_estudado = 0;

tp_direito_processual_civil = 0;
tp_direito_administratico = 0;
tp_direito_civil = 0;
tp_matematica = 0;
tp_raciocinio_logico = 0;
tp_direito_constitucional = 0;

				
function acerto_erros_total(){
	var controle = 1;
	$.post("http://www.aaconcursos.com/app/graficos.php", {controle: controle,username: username},
		function(data){
							
				arr = JSON.parse(data);
				cont = Object.keys(arr).length; //conta a quantidade de objetos no json
				
				acertos = 0;
				erros = 0;
								
				for(var k=0; k<cont; k++){ //insere as questoes no javascript
					acertos = (acertos + parseInt(arr[k].numeroAcertos));
					erros = (erros + parseInt(arr[k].numeroErros));
				}
				console.log(acertos +" Acertos" );
				console.log(erros +" Erros" );
				
				//desenha_total_acertos_erros();	
				desenha_desempenho_assunto();
							
		 }
		 , "html");
		 
}



function total_tempo_estudado(){
	var controle = 2;
	$.post("http://www.aaconcursos.com/app/graficos.php", {controle: controle, username: username},
		function(data){
							
				arr = JSON.parse(data);
				cont = Object.keys(arr).length; //conta a quantidade de objetos no json
				
				if(arr[0].tempo!=null)
					tp_direito_processual_civil = parseInt(arr[0].tempo);
				if(arr[1].tempo!=null)
					tp_direito_administratico = parseInt(arr[1].tempo);
				if(arr[2].tempo!=null)
					tp_direito_civil = parseInt(arr[2].tempo);
				if(arr[3].tempo!=null)
					tp_matematica = parseInt(arr[3].tempo);
				if(arr[4].tempo!=null)
					tp_raciocinio_logico = parseInt(arr[4].tempo);
				if(arr[5].tempo!=null)
					tp_direito_constitucional = parseInt(arr[5].tempo);
				
	
				desenha_tempo_estudado();
				/*
				for(var k=0; k<cont; k++){ //insere as questoes no javascript
					if (arr[k].tempo!=null)
						console.log("Total Tempo Estudado: "+ parseInt(arr[k].tempo) +" segundos.");
				}
				*/
				
									
		 }
		 , "html");
}