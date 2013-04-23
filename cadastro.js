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
		 $("#resposta").html(data);
		 }
		 , "html");
	});
});

