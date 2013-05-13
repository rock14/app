// JavaScript Document
var idAssunto;
var idDificuldade;

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
	
	
		$.post("http://www.aaconcursos.com/app/opcoesquestao.php", {assunto: idAssunto, dificuldade: idDificuldade})
		
	
	
	
	/*
		var dificuldade = $("#nome");
		var nomePost = nome.val(); 
		var assunto = $("#email");
		var emailPost = email.val(); 
		var senha = $("#senha");
		var senhaPost = senha.val(); 	
		$.post("http://www.aaconcursos.com/app/cadastro.php", {nome: nomePost, email: emailPost, senha: senhaPost},
		function(data){
		 $("#resposta").html(data);
		 }
		 , "html");
		 */
}

