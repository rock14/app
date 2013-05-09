// JavaScript Document
var correta = "I'm a global!";
var i=0;
var cont = 0;
var j =0;
jsquestao = new Array();
jsa = new Array();
jsb = new Array();
jsc = new Array();
jsd = new Array();
jse = new Array();
jscorreta = new Array();


function onDeviceReady(){
			$.getJSON("http://www.aaconcursos.com/app/questao.php",function(data){
				cont = Object.keys(data).length; //conta a quantidade de objetos no json
				document.getElementById("questao").innerHTML = data[i].questao;
				document.getElementById("alterna").innerHTML = document.getElementById("alterna").innerHTML.concat("A) ", data[i].alternA);
				document.getElementById("alternb").innerHTML = document.getElementById("alternb").innerHTML.concat("B) ", data[i].alternB);
				document.getElementById("alternc").innerHTML = document.getElementById("alternc").innerHTML.concat("C) ", data[i].alternC);
				document.getElementById("alternd").innerHTML = document.getElementById("alternd").innerHTML.concat("D) ", data[i].alternD);
				document.getElementById("alterne").innerHTML = document.getElementById("alterne").innerHTML.concat("E) ", data[i].alternE);
				correta = data[i].correta; 	
				// carrega a primeira questao na tela
						
				for(i=0; i<cont; i++){ //insere as demais questoes no javascript
					jsquestao[i] = data[i].questao;
					jsa[i] = data[i].alternA;
					jsb[i] = data[i].alternB;
					jsc[i] = data[i].alternC;
					jsd[i] = data[i].alternD;
					jse[i] = data[i].alternE;
					jscorreta[i] = data[i].correta;
				}			
			})
}

<!-- carrega questoes e alternativas -->

<!-- carrega proxima questao -->
	function proximaQuestao(){
		j++;
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
			document.getElementById("alterna").innerHTML = document.getElementById("alterna").innerHTML.concat("A) ", jsa[j]);
			document.getElementById("alternb").innerHTML = document.getElementById("alternb").innerHTML.concat("B) ", jsb[j]);
			document.getElementById("alternc").innerHTML = document.getElementById("alternc").innerHTML.concat("C) ", jsc[j]);
			document.getElementById("alternd").innerHTML = document.getElementById("alternd").innerHTML.concat("D) ", jsd[j]);
			document.getElementById("alterne").innerHTML = document.getElementById("alterne").innerHTML.concat("E) ", jse[j]);	
			correta = jscorreta[j];		
		}	
	}
<!-- carrega proxima questao -->

<!-- verifica resposta -->
function verificaChecks() {
	var aChk = document.getElementsByName("radioquestoes");
	for (var i=0;i<aChk.length;i++){  
		if (aChk[i].checked == true){  
			if (aChk[i].value == correta){
				// acertou
				// desabilita reponder
				//$('[type="submit"]').button('disable');			
				//$('[type="submit"]').button('refresh');
				document.getElementById('responder').disabled = true;
				$('[type="button"]').button('refresh');
				
				if(correta== "A")
					document.getElementById("alterna").style.color="#339933";
				if(correta== "B")
					document.getElementById("alternb").style.color="#339933";
				if(correta== "C")
					document.getElementById("alternc").style.color="#339933";
				if(correta== "D")
					document.getElementById("alternd").style.color="#339933";
				if(correta== "E")
					document.getElementById("alterne").style.color="#339933";
			}
			else{
				// errou
				// desabilita reponder
				document.getElementById('responder').disabled = true;
				$('[type="button"]').button('refresh');
				
				if(correta== "A")
					document.getElementById("alterna").style.color="#339933";
				if(correta== "B")
					document.getElementById("alternb").style.color="#339933";
				if(correta== "C")
					document.getElementById("alternc").style.color="#339933";
				if(correta== "D")
					document.getElementById("alternd").style.color="#339933";
				if(correta== "E")
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
			}
		}  else {
			// nao marcou nenhuma
			//alert("Escolha uma resposta!");
		}
	}
}
<!-- fim verifica resposta -->
