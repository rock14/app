$(document).ready(function() {
	$("#logar").click(function() { 
		var email = $("#elogin");
		var emailPost = email.val(); 
		var senha = $("#slogin");
		var senhaPost = senha.val(); 	
		$.post("http://www.aaconcursos.com/app/login.php", {email: emailPost, senha: senhaPost},
		function(data){
		 // procura a string login efetuado
		 if(data.search("Login Efetuado com Sucesso") > -1 ){
		 	alert(data);
			window.location = "#index";

			$('p1').replaceWith(email.val()); // insere o email no botao
			$('.hello').remove(); // remove o botao de login
			
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

