$(document).ready(function() {
	$("#logar").click(function() { 
		var email = $("#elogin");
		var emailPost = email.val(); 
		var senha = $("#slogin");
		var senhaPost = senha.val(); 	
		$.post("http://www.aaconcursos.com/app/login.php", {email: emailPost, senha: senhaPost},
		function(data){
		 // procura a string login efetuado
		 if(data.search("Login Inválido") > -1 ){
		 	alert(data);
			
		 }
		 else{
			
			idUser = JSON.parse(data);
			window.location = "#index";
			username = idUser[0];
			$('p1').replaceWith(email.val()); // insere o email no botao
			$('.hello').remove(); // remove o botao de login
			 
		 }
			
		 /*
		 $("#resposta").html(data);
		 */
		 }
		 , "html");
		 
	});
});

