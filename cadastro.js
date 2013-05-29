$(document).ready(function() {
	$("#enviar").click(function() {
		var nome = $("#nome");
		var nomePost = nome.val(); 
		var email = $("#email");
		var emailPost = email.val(); 
		var senha = $("#senha");
		var senhaPost = senha.val(); 	
		$.post("http://www.aaconcursos.com/app/cadastro.php", {nome: nomePost, email: emailPost, senha: senhaPost},
		function(data){
		 // procura a string cadastro realizado em data
		 if(data.search("Cadastro Realizado") > -1 ){
		 	alert("Cadastro Realizado!");
		 	window.location = "#login";
		 }
		 else{
			 alert(data);
		 }
			
		 /*
		 $("#resposta").html(data);
		 */
		 }
		 , "html");
		 
	});
});

