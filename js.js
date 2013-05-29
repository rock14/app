// JavaScript Document
// JavaScript Document
var correta = "I'm a global!";
var cont = 0;
var j =0;
var i =0;
var controlarespondidas = 0;
var acertou = 0;
var errou = 0;
var username = "[usuário não logado]";
var idsimulado = 0;
idUser = new Array();
jsidQuestao = new Array();
jsquestao = new Array();
jsa = new Array();
jsb = new Array();
jsc = new Array();
jsd = new Array();
jse = new Array();
jscorreta = new Array();
jsrespondida = new Array();
arr = new Array();

var idAssunto;
var idDificuldade;
var idLimite;


<!-- carrega questoes e alternativas -->
function onDeviceReady(){			
	
		
		
	
	
	$.getJSON("http://www.aaconcursos.com/app/dificuldade.php",function(data){
		var select = $('#cboDificuldade');
		if (select.prop) {
			var options = select.prop('options');
		}
		else {
			var options = select.attr('options');
		}
		$('option', select).remove();
		$.each(data, function(key, value){
			options[options.length] = new Option(value['nome'], value['idDificuldade']);
		});
	});       
		
	$.getJSON("http://www.aaconcursos.com/app/assunto.php",function(data){
		var select = $('#cboAssunto');
		if (select.prop) {
			var options = select.prop('options');
		}
		else {
			var options = select.attr('options');
		}
		$('option', select).remove();
		$.each(data, function(key, value){
			options[options.length] = new Option(value['nome'], value['idAssunto']);
		});
	});	
								
}

<!-- voltar questao -->
function voltarQuestao(){
	j=j-1;
	$('#proxima').button('enable');
	$("input[type='radio']").attr("checked",false).checkboxradio("refresh"); // desmarca todos os radios
	
	if(j<0){ // é a primeira questao, desabilita o botao voltar
		j=j+1;
		$('#anterior').button('disable');
	}else{
		
		//restaura o texto em preto
		document.getElementById("alterna").style.color="black";
		document.getElementById("alternb").style.color="black";
		document.getElementById("alternc").style.color="black";
		document.getElementById("alternd").style.color="black";
		document.getElementById("alterne").style.color="black";
		
		//insere a questao no form
		document.getElementById("questao").innerHTML = jsquestao[j];
		document.getElementById("alterna").innerHTML = ("A) " +jsa[j]);
		document.getElementById("alternb").innerHTML = ("B) " +jsb[j]);
		document.getElementById("alternc").innerHTML = ("C) " +jsc[j]);
		document.getElementById("alternd").innerHTML = ("D) " +jsd[j]);
		document.getElementById("alterne").innerHTML = ("E) " +jse[j]);
		
		<!-- verifica se a questao foi respodida -->
		if(jsrespondida[j]!=10){ // foi respondida
					
			// marca a respondida de vermelho, se acertou depois troca para verde
			if(jsrespondida[j]=="A"){
				document.getElementById("alterna").style.color="#FF0000";
			}
			if(jsrespondida[j]=="B"){
				document.getElementById("alternb").style.color="#FF0000";
			}
			if(jsrespondida[j]=="C"){					
				document.getElementById("alternc").style.color="#FF0000";
			}
			if(jsrespondida[j]=="D"){
				document.getElementById("alternd").style.color="#FF0000";
			}
			if(jsrespondida[j]=="E"){
				document.getElementById("alterne").style.color="#FF0000";
			}
	
			// marca a correta de verde
			if(jscorreta[j]== "A"){
				document.getElementById("alterna").style.color="#339933";
			}
			if(jscorreta[j]== "B"){
				document.getElementById("alternb").style.color="#339933";
			}
			if(jscorreta[j]== "C"){
				document.getElementById("alternc").style.color="#339933";
			}
			if(jscorreta[j]== "D"){
				document.getElementById("alternd").style.color="#339933";
			}
			if(jscorreta[j]== "E"){
				document.getElementById("alterne").style.color="#339933";
			}
				
			//alert("Correta: "+ jscorreta[j]);
			//alert("Marcada: "+ jsrespondida[j]);
			
			$('#responder').button('disable');
			
		}else{ //nao foi respondida
			$('#responder').button('enable');
			
		}
		<!-- fim verifica se a questao foi respodida -->				
	}
}
<!-- voltar questao -->


<!-- carrega proxima questao -->
function proximaQuestao(){
	j=j+1;
	$('#anterior').button('enable');
	
	if(j>=cont){ // é a ultima questao, desabilita o botao proxima
		$('#proxima').button('disable');	
		j=j-1;
	}
	else{
	
		$("input[type='radio']").attr("checked",false).checkboxradio("refresh"); // desmarca todos os radios
		
		//restaura o texto em preto
		document.getElementById("alterna").style.color="black";
		document.getElementById("alternb").style.color="black";
		document.getElementById("alternc").style.color="black";
		document.getElementById("alternd").style.color="black";
		document.getElementById("alterne").style.color="black";
		
		//insere a questao no form
		document.getElementById("questao").innerHTML = arr[j].questao;
		document.getElementById("alterna").innerHTML = ("A) " +jsa[j]);
		document.getElementById("alternb").innerHTML = ("B) " +jsb[j]);
		document.getElementById("alternc").innerHTML = ("C) " +jsc[j]);
		document.getElementById("alternd").innerHTML = ("D) " +jsd[j]);
		document.getElementById("alterne").innerHTML = ("E) " +jse[j]);
		
		<!-- verifica se a questao foi respodida -->
		if(jsrespondida[j]!=10){ // foi respondida
					
			// marca a respondida de vermelho, se acertou depois troca para verde
			if(jsrespondida[j]=="A"){
				document.getElementById("alterna").style.color="#FF0000";
			}
			if(jsrespondida[j]=="B"){
				document.getElementById("alternb").style.color="#FF0000";
			}
			if(jsrespondida[j]=="C"){					
				document.getElementById("alternc").style.color="#FF0000";
			}
			if(jsrespondida[j]=="D"){
				document.getElementById("alternd").style.color="#FF0000";
			}
			if(jsrespondida[j]=="E"){
				document.getElementById("alterne").style.color="#FF0000";
			}
	
			// marca a correta de verde
			if(jscorreta[j]== "A"){
				document.getElementById("alterna").style.color="#339933";
			}
			if(jscorreta[j]== "B"){
				document.getElementById("alternb").style.color="#339933";
			}
			if(jscorreta[j]== "C"){
				document.getElementById("alternc").style.color="#339933";
			}
			if(jscorreta[j]== "D"){
				document.getElementById("alternd").style.color="#339933";
			}
			if(jscorreta[j]== "E"){
				document.getElementById("alterne").style.color="#339933";
			}
				
			//alert("Correta: "+ jscorreta[j]);
			//alert("Marcada: "+ jsrespondida[j]);
			
			$('#responder').button('disable');
			
		}else{ //nao foi respondida
			$('#responder').button('enable');
			
		}
		<!-- fim verifica se a questao foi respodida -->		
		
		
		
	}	
	
}
<!-- carrega proxima questao -->

<!-- verifica resposta -->
function verificaChecks() {
	var aChk = document.getElementsByName("radioquestoes"); //aChk recebe o valor do radio
	for (var i=0;i<aChk.length;i++){  
		if (aChk[i].checked == true){  
			if (aChk[i].value == jscorreta[j]){ // acertou
				controlarespondidas++;
				acertou++;
				
				//terminou o simulado e mostra o aproveitamento
				if(controlarespondidas==cont){
					var aproveitamento = (acertou/cont*100).toFixed(2);
					alert("Aproveitamento: "+ aproveitamento +"%");
					
					// atualiza o simulado a hora fim
					if(idsimulado != 0){
						var phpacerto = 0;
						var phperro = 0;
						var phptermino = 1;
						
						$.post("http://www.aaconcursos.com/app/atualiza_acertos_simulado.php", {idSimulado: idsimulado, phpacerto: phpacerto, phperro: phperro, phptermino: phptermino}, function(data){
							console.log(data);
						}, "html");
					}
					
				}
			
				// atualiza o banco com as respostas
				if(idsimulado != 0){
					$.post("http://www.aaconcursos.com/app/atualiza_respostas.php", {idSimulado: idsimulado, idQuestao: jsidQuestao[j], 
					opcaoRespondida: aChk[i].value, opcaoCorreta: jscorreta[j]}, function(data){
						console.log("atualiza_respostas.php: "+ data);
					}, "html");
				}
				
				// atualiza o simulado com os acertos
				if(idsimulado != 0){
					var phpacerto = 1;
					var phperro = 0;
					var phptermino = 0;
					
					$.post("http://www.aaconcursos.com/app/atualiza_acertos_simulado.php", {idSimulado: idsimulado, phpacerto: phpacerto, phperro: phperro, phptermino: phptermino}, function(data){
						console.log(data);
					}, "html");
				}
				
				
				
			
				if(jscorreta[j]== "A"){
					document.getElementById("alterna").style.color="#339933";
					jsrespondida[j]="A";
				}
				if(jscorreta[j]== "B"){
					document.getElementById("alternb").style.color="#339933";
					jsrespondida[j]="B";
				}
				if(jscorreta[j]== "C"){
					document.getElementById("alternc").style.color="#339933";
					jsrespondida[j]="C";
				}
				if(jscorreta[j]== "D"){
					document.getElementById("alternd").style.color="#339933";
					jsrespondida[j]="D";
				}
				if(jscorreta[j]== "E"){
					document.getElementById("alterne").style.color="#339933";
					jsrespondida[j]="E";
				}
								
				$('#responder').button('disable');
				
			}
			else{  // errou
				controlarespondidas++;
				errou++;
				
				//terminou o simulado e mostra o aproveitamento
				if(controlarespondidas==cont){
					var aproveitamento = (acertou/cont*100).toFixed(2);
					alert("Aproveitamento: "+ aproveitamento +"%");
					
					// atualiza o simulado a hora fim
					if(idsimulado != 0){
						var phpacerto = 0;
						var phperro = 0;
						var phptermino = 1;
						
						$.post("http://www.aaconcursos.com/app/atualiza_acertos_simulado.php", {idSimulado: idsimulado, phpacerto: phpacerto, phperro: phperro, phptermino: phptermino}, function(data){
							console.log(data);
						}, "html");
					}
					
					
				}
				
				if(idsimulado != 0){
					// atualiza o banco com as respostas
					$.post("http://www.aaconcursos.com/app/atualiza_respostas.php", {idSimulado: idsimulado, idQuestao: jsidQuestao[j], 
					opcaoRespondida: aChk[i].value, opcaoCorreta: jscorreta[j]}, function(data){
						console.log("atualiza_respostas.php: "+ data);
					}, "html");
				}
				
				// atualiza o simulado com os erros
				if(idsimulado != 0){
					var phpacerto = 0;
					var phperro = 1;
					var phptermino = 0;
					
					$.post("http://www.aaconcursos.com/app/atualiza_acertos_simulado.php", {idSimulado: idsimulado, phpacerto: phpacerto, phperro: phperro, phptermino: phptermino}, function(data){
						console.log(data);
					}, "html");
				}
				
				
				// marca a correta de verde
				if(jscorreta[j]== "A")
					document.getElementById("alterna").style.color="#339933";
				if(jscorreta[j]== "B")
					document.getElementById("alternb").style.color="#339933";
				if(jscorreta[j]== "C")
					document.getElementById("alternc").style.color="#339933";
				if(jscorreta[j]== "D")
					document.getElementById("alternd").style.color="#339933";
				if(jscorreta[j]== "E")
					document.getElementById("alterne").style.color="#339933";
				
				// marca a selecionada de vermelho
				if(aChk[i].value == "A"){
					document.getElementById("alterna").style.color="#FF0000";
					jsrespondida[j]="A";
				}
				if(aChk[i].value == "B"){
					document.getElementById("alternb").style.color="#FF0000";
					jsrespondida[j]="B";
				}
				if(aChk[i].value == "C"){					
					document.getElementById("alternc").style.color="#FF0000";
					jsrespondida[j]="C";
				}
				if(aChk[i].value == "D"){
					document.getElementById("alternd").style.color="#FF0000";
					jsrespondida[j]="D";
				}
				if(aChk[i].value == "E"){
					document.getElementById("alterne").style.color="#FF0000";
					jsrespondida[j]="E";
				}
				
				$('#responder').button('disable');
								
			}
		}  else { // nao marcou nenhuma
			
		}
	}
}
<!-- fim verifica resposta -->

function iniciaSimulado() {
	j=0; //reseta o j manipulado em simulados anteriores
	controlarespondidas = 0;
	acertou = 0;
	errou = 0;
	
	
	
	var myselect=document.getElementById("cboDificuldade")
		for (var i=0; i<myselect.options.length; i++){ //pega o idDificuldade
		 if (myselect.options[i].selected==true){
		  //alert("idDificuldade: "+i)
		  idDificuldade=i;
		  break
		 }
	}
	
	var myselect=document.getElementById("cboAssunto")
		for (var i=0; i<myselect.options.length; i++){ //pega o idAssunto
		 if (myselect.options[i].selected==true){
		  //alert("idAssunto: "+i)
		  i++;
		  idAssunto=i;
		  break
		 }
	}
	
	var myselect=document.getElementById("cboLimite")
		for (var i=0; i<myselect.options.length; i++){ //pega o idLimite
		 if (myselect.options[i].selected==true){
		  
		  idLimite=myselect.options[i].value;
		  
		  if(idLimite=="standard"){
			  alert("Escolha um Limite");
		  	  window.history.back(-1);
			  return;
		  }
		  
		  break
		  
		 }
	}
		
		
	if(username=="[usuário não logado]"){
		console.log("nao logado");
	}
	else{
		//cria o simulado
		$.post("http://www.aaconcursos.com/app/cria_simulado.php", {username: username, limite: idLimite}, function(data){
			arr = JSON.parse(data);
			idsimulado = arr[0];
			console.log("Simulado criado com id: "+idsimulado);
		}, "html");
		//console.log("logado");	
	}
	
	
	
	$.post("http://www.aaconcursos.com/app/opcoesquestao.php", {assunto: idAssunto, dificuldade: idDificuldade, limite: idLimite},
	function(data){
		//$("#faznada").html(data);
			
			arr = JSON.parse(data);
			cont = Object.keys(arr).length; //conta a quantidade de objetos no json
			
			if(cont==0){
				alert("Nenhuma Questão");
				window.history.back(-1);
			  	return;
			}
							
			for(var k=0; k<cont; k++){ //insere as questoes no javascript
				jsidQuestao[k] = arr[k].idQuestao;
				jsquestao[k] = arr[k].questao;
				jsa[k] = arr[k].alternA;
				jsb[k] = arr[k].alternB;
				jsc[k] = arr[k].alternC;
				jsd[k] = arr[k].alternD;
				jse[k] = arr[k].alternE;
				jscorreta[k] = arr[k].correta;
				jsrespondida[k] = 10;
			}
			
			$("input[type='radio']").attr("checked",false).checkboxradio("refresh"); // desmarca todos os radios
			
			// deixa a cor do texto preta
			document.getElementById("alterna").style.color="black";
			document.getElementById("alternb").style.color="black";
			document.getElementById("alternc").style.color="black";
			document.getElementById("alternd").style.color="black";
			document.getElementById("alterne").style.color="black";
			
			// carrega a primeira questao na tela
			document.getElementById("questao").innerHTML = arr[0].questao;
			document.getElementById("alterna").innerHTML = ("A) " +jsa[0]);
			document.getElementById("alternb").innerHTML = ("B) " +jsb[0]);
			document.getElementById("alternc").innerHTML = ("C) " +jsc[0]);
			document.getElementById("alternd").innerHTML = ("D) " +jsd[0]);
			document.getElementById("alterne").innerHTML = ("E) " +jse[0]);
			
			$('#anterior').button('disable');	
			
								
	 }
	 , "html");
			 
	$('#anterior').button('enable');
	$('#responder').button('enable');
	$('#proxima').button('enable');
	
}
