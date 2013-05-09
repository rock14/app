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

<!-- carrega questoes e alternativas -->
function onDeviceReady(){
			$.getJSON("http://www.aaconcursos.com/app/questao.php",function(data){
				cont = Object.keys(data).length; //conta a quantidade de objetos no json
							
				for(var k=0; k<cont; k++){ //insere as questoes no javascript
					jsquestao[k] = data[k].questao;
					jsa[k] = data[k].alternA;
					jsb[k] = data[k].alternB;
					jsc[k] = data[k].alternC;
					jsd[k] = data[k].alternD;
					jse[k] = data[k].alternE;
					jscorreta[k] = data[k].correta;
				}
				
				// carrega a primeira questao na tela
				document.getElementById("questao").innerHTML = jsquestao[0];
				document.getElementById("alterna").innerHTML = ("A) " +jsa[0]);
				document.getElementById("alternb").innerHTML = ("B) " +jsb[0]);
				document.getElementById("alternc").innerHTML = ("C) " +jsc[0]);
				document.getElementById("alternd").innerHTML = ("D) " +jsd[0]);
				document.getElementById("alterne").innerHTML = ("E) " +jse[0]);				
			})
}

<!-- carrega questoes e alternativas -->

<!-- carrega proxima questao -->
	function proximaQuestao(){
		j=j+1;
		if(j>=cont){
			//alert("fim");
			// desabilita proxima
			document.getElementById('proxima').disabled = true;
			$('[type="button"]').button('refresh');
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
				document.getElementById('responder').disabled = true;
				$('[type="button"]').button('refresh');
				
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
				
			}
			else{
				// errou		
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
		}
	}
}
<!-- fim verifica resposta -->
