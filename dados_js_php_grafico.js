acertos = 0;
erros = 0;
tempo_estudado = 0;

tp_direito_processual_civil = 0;
tp_direito_administrativo = 0;
tp_direito_civil = 0;
tp_matematica = 0;
tp_raciocinio_logico = 0;
tp_direito_constitucional = 0;

acertos_direito_processual_civil = 0;
erros_direito_processual_civil = 0;
acertos_direito_administrativo = 0;
erros_direito_administrativo = 0;
acertos_direito_civil = 0;
erros_direito_civil = 0;
acertos_matematica = 0;
erros_matematica = 0;
acertos_raciocinio_logico = 0;
erros_raciocinio_logico = 0;
acertos_direito_constitucional = 0;
erros_direito_constitucional = 0;

	
function acerto_erros_total(){
	var controle = 1;
	$.post("http://www.aaconcursos.com/app/graficos.php", {controle: controle,username: username},
		function(data){
							
				arr = JSON.parse(data);
				cont = Object.keys(arr).length; //conta a quantidade de objetos no json
				
				acertos = 0;
				erros = 0;
				acertos_direito_processual_civil = 0;
				erros_direito_processual_civil = 0;
				acertos_direito_administrativo = 0;
				erros_direito_administrativo = 0;
				acertos_direito_civil = 0;
				erros_direito_civil = 0;
				acertos_matematica = 0;
				erros_matematica = 0;
				acertos_raciocinio_logico = 0;
				erros_raciocinio_logico = 0;
				acertos_direito_constitucional = 0;
				erros_direito_constitucional = 0;
				
				if(arr[0].acertos!=null)
					acertos_direito_processual_civil = parseInt(arr[0].acertos);
				if(arr[0].erros!=null)
					erros_direito_processual_civil = parseInt(arr[0].erros);
				
				if(arr[1].acertos!=null)
					acertos_direito_administrativo = parseInt(arr[1].acertos);
				if(arr[1].erros!=null)
					erros_direito_administrativo = parseInt(arr[1].erros);
					
				if(arr[2].acertos!=null)
					acertos_direito_civil = parseInt(arr[2].acertos);
				if(arr[2].erros!=null)
					erros_direito_civil = parseInt(arr[2].erros);
					
				if(arr[3].acertos!=null)
					acertos_matematica = parseInt(arr[3].acertos);
				if(arr[3].erros!=null)
					erros_matematica = parseInt(arr[3].erros);
						
				if(arr[4].acertos!=null)
					acertos_raciocinio_logico = parseInt(arr[4].acertos);
				if(arr[4].erros!=null)
					erros_raciocinio_logico = parseInt(arr[4].erros);	
					
				if(arr[5].acertos!=null)
					acertos_direito_constitucional = parseInt(arr[5].acertos);
				if(arr[5].erros!=null)
					erros_direito_constitucional = parseInt(arr[5].erros);
				
				
				acertos = (acertos_direito_processual_civil + acertos_direito_administrativo + acertos_direito_civil + acertos_matematica + acertos_raciocinio_logico + acertos_direito_constitucional);
				erros = (erros_direito_processual_civil + erros_direito_administrativo + erros_direito_civil + erros_matematica + erros_raciocinio_logico + erros_direito_constitucional);
					
					
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
					tp_direito_administrativo = parseInt(arr[1].tempo);
				if(arr[2].tempo!=null)
					tp_direito_civil = parseInt(arr[2].tempo);
				if(arr[3].tempo!=null)
					tp_matematica = parseInt(arr[3].tempo);
				if(arr[4].tempo!=null)
					tp_raciocinio_logico = parseInt(arr[4].tempo);
				if(arr[5].tempo!=null)
					tp_direito_constitucional = parseInt(arr[5].tempo);
				
	
				desenha_tempo_estudado();
												
		 }
		 , "html");
}