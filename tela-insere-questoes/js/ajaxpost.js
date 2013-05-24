$(document).ready(function() {
	$("#enviar").click(function() {
		var assunto = $("#assunto");
		var assuntoPost = assunto.val(); 
		var dificuldade = $("#dificuldade");
		var dificuldadePost = dificuldade.val(); 
		var questao = $("#questao");
		var questaoPost = questao.val(); 
		var alterna = $("#alterna");
		var alternaPost = alterna.val(); 
		var alternb = $("#alternb");
		var alternbPost = alternb.val();
		var alternc = $("#alternc");
		var alterncPost = alternc.val();
		var alternd = $("#alternd");
		var alterndPost = alternd.val();
		var alterne = $("#alterne");
		var alternePost = alterne.val();
		var correta = $("#correta");
		var corretaPost = correta.val();
		$.post("enviaquestao.php", {assunto: assuntoPost, dificuldade: dificuldadePost, questao: questaoPost, alterna: alternaPost, alternb: alternbPost, alternc: alterncPost, alternd: alterndPost, alterne: alternePost, correta: corretaPost},
		function(data){
		 $("#resposta").html(data);
		 }
		 , "html");
	});
});
