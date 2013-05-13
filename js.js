// JavaScript Document
// JavaScript Document
var correta = "I'm a global!";
var cont = 0;
var j =0;
var i =0;
jsquestao = new Array();
jsa = new Array();
jsb = new Array();
jsc = new Array();
jsd = new Array();
jse = new Array();
jscorreta = new Array();
arr = new Array();
var idAssunto;
var idDificuldade;

<!-- carrega dificuldades e assuntos -->
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
<!-- carrega dificuldades e assuntos -->

<!-- voltar questao -->
	function voltarQuestao(){
		j=j-1;
		document.getElementById('proxima').disabled = false;
		$('[type="button"]').button('refresh');
		if(j<0){
			//alert("fim");
			// desabilita proxima
			j=j+1;
			document.getElementById('anterior').disabled = true;
			$('[type="button"]').button('refresh');
			//alert(jscorreta[j]);
		}
		else{
			document.getElementById('responder').disabled = false;
			$('[type="button"]').button('refresh');
			$("input[type='radio']").attr("checked",false).checkboxradio("refresh"); // desmarca todos os radios
			
			document.getElementById("alterna").style.color="black";
			document.getElementById("alternb").style.color="black";
			document.getElementById("alternc").style.color="black";
			document.getElementById("alternd").style.color="black";
			document.getElementById("alterne").style.color="black";
			
			document.getElementById("questao").innerHTML = jsquestao[j];
			document.getElementById("alterna").innerHTML = ("A) " +jsa[j]);
			document.getElementById("alternb").innerHTML = ("B) " +jsb[j]);
			document.getElementById("alternc").innerHTML = ("C) " +jsc[j]);
			document.getElementById("alternd").innerHTML = ("D) " +jsd[j]);
			document.getElementById("alterne").innerHTML = ("E) " +jse[j]);		
			
			if(j==0){
				document.getElementById('anterior').disabled = true;
				$('[type="button"]').button('refresh');	
			}
		}	
	}
<!-- voltar questao -->


<!-- carrega proxima questao -->
	function proximaQuestao(){
		j=j+1;
		document.getElementById('anterior').disabled = false;
		$('[type="button"]').button('refresh');
		if(j>=cont){
			//alert("fim");
			// desabilita proxima
			document.getElementById('proxima').disabled = true;
			$('[type="button"]').button('refresh');
			j=j-1;
			//alert(jscorreta[j]);
		}
		else{
			document.getElementById('responder').disabled = false;
			$('[type="button"]').button('refresh');
			$("input[type='radio']").attr("checked",false).checkboxradio("refresh"); // desmarca todos os radios
			
			document.getElementById("alterna").style.color="black";
			document.getElementById("alternb").style.color="black";
			document.getElementById("alternc").style.color="black";
			document.getElementById("alternd").style.color="black";
			document.getElementById("alterne").style.color="black";
			
			document.getElementById("questao").innerHTML = arr[j].questao;
			document.getElementById("alterna").innerHTML = ("A) " +jsa[j]);
			document.getElementById("alternb").innerHTML = ("B) " +jsb[j]);
			document.getElementById("alternc").innerHTML = ("C) " +jsc[j]);
			document.getElementById("alternd").innerHTML = ("D) " +jsd[j]);
			document.getElementById("alterne").innerHTML = ("E) " +jse[j]);		
		}	
	}
<!-- carrega proxima questao -->

<!-- verifica resposta -->
function verificaChecks() {
	var aChk = document.getElementsByName("radioquestoes"); //aChk recebe o valor do radio
	for (var i=0;i<aChk.length;i++){  
		if (aChk[i].checked == true){  
			if (aChk[i].value == jscorreta[j]){
				// acertou
				// desabilita reponder
				//$('[type="submit"]').button('disable');			
				//$('[type="submit"]').button('refresh');
				//alert("acertou "+jscorreta[j]);
				
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
				document.getElementById('responder').disabled = true;
				$('[type="button"]').button('refresh');
			}
			else{
				// errou		
				//alert("errou "+jscorreta[j]);
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
				
				if(aChk[i].value == "A")
					document.getElementById("alterna").style.color="#FF0000";
				if(aChk[i].value == "B")
					document.getElementById("alternb").style.color="#FF0000";
				if(aChk[i].value == "C")
					document.getElementById("alternc").style.color="#FF0000";
				if(aChk[i].value == "D")
					document.getElementById("alternd").style.color="#FF0000";
				if(aChk[i].value == "E")
					document.getElementById("alterne").style.color="#FF0000";	
					
				// desabilita reponder
				document.getElementById('responder').disabled = true;
				$('[type="button"]').button('refresh');				
			}
		}  else {
			// nao marcou nenhuma
			//alert("Escolha uma resposta!");
			//alert("outro "+jscorreta[j]);
		}
	}
}
<!-- fim verifica resposta -->

function iniciaSimulado() {
	
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
	
		$.post("http://www.aaconcursos.com/app/opcoesquestao.php", {assunto: idAssunto, dificuldade: idDificuldade},
		function(data){
			$("#faznada").html(data);
				arr = JSON.parse(data);
				cont = Object.keys(arr).length; //conta a quantidade de objetos no json
							
				for(var k=0; k<cont; k++){ //insere as questoes no javascript
					jsquestao[k] = arr[k].questao;
					jsa[k] = arr[k].alternA;
					jsb[k] = arr[k].alternB;
					jsc[k] = arr[k].alternC;
					jsd[k] = arr[k].alternD;
					jse[k] = arr[k].alternE;
					jscorreta[k] = arr[k].correta;
				}
				
				// carrega a primeira questao na tela
				document.getElementById("questao").innerHTML = arr[0].questao;
				document.getElementById("alterna").innerHTML = ("A) " +jsa[0]);
				document.getElementById("alternb").innerHTML = ("B) " +jsb[0]);
				document.getElementById("alternc").innerHTML = ("C) " +jsc[0]);
				document.getElementById("alternd").innerHTML = ("D) " +jsd[0]);
				document.getElementById("alterne").innerHTML = ("E) " +jse[0]);
				
				document.getElementById('anterior').disabled = true;
				$('[type="button"]').button('refresh');						
		 }
		 , "html");
}