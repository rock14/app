<?php 
	/*
	$assunto = 1;
	$dificuldade = 1;
	$questao = "teste";
	$alterna = "1";
	$alternb = "1";
	$alternc = "1";
	$alternd = "1";
	$alterne = "1";
	$correta = "C";
	
	$assunto = $_POST['assunto'];
	$dificuldade = $_POST['dificuldade'];
	$questao = $_POST['questao'];
	$alterna = $_POST['alterna'];
	$alternb = $_POST['alternb'];
	$alternc = $_POST['alternc'];
	$alternd = $_POST['alternd'];
	$alterne = $_POST['alterne'];
	$correta = $_POST['correta'];
	
	print "Assunto: $assunto"; 
	print "$dificuldade"; 
	print "$questao"; 
	print "$alterna"; 
	print "$alternb";
	print "$alternc";
	print "$alternd";
	print "$alterne";
	print "$correta";
	*/
	
	$assunto = isset( $_POST['assunto'] ) ? $_POST['assunto'] : 'NULL';
	$dificuldade = isset( $_POST['dificuldade'] ) ? $_POST['dificuldade'] : 'NULL';
	$questao = isset( $_POST['questao'] ) ? $_POST['questao'] : 'NULL';
	$alterna = isset( $_POST['alterna'] ) ? $_POST['alterna'] : 'NULL';
	$alternb = isset( $_POST['alternb'] ) ? $_POST['alternb'] : 'NULL';
	$alternc = isset( $_POST['alternc'] ) ? $_POST['alternc'] : 'NULL';
	$alternd = isset( $_POST['alternd'] ) ? $_POST['alternd'] : 'NULL';
	$alterne = isset( $_POST['alterne'] ) ? $_POST['alterne'] : 'NULL';
	$correta = isset( $_POST['correta'] ) ? $_POST['correta'] : 'NULL';
	
	if (!($assunto) || !($dificuldade) || !($questao) || !($correta)){
		print "Preencha todos os campos!";  
		exit();
	}

	//Abrindo Conexao com o banco de dados
	$conexao = mysql_pconnect("XwGo6Y94p8Sm.db.10856794.hostedresource.com","XwGo6Y94p8Sm","as@quA00P7JcC") or die (mysql_error());
	$banco = mysql_select_db("XwGo6Y94p8Sm");
	
	//Utilizando o  mysql_real_escape_string voce se protege o seu código contra SQL Injection.
	$assunto = mysql_real_escape_string($assunto);
	$dificuldade = mysql_real_escape_string($dificuldade);
	$questao = mysql_real_escape_string($questao);
	$alterna = mysql_real_escape_string($alterna);
	$alternb = mysql_real_escape_string($alternb);
	$alternc = mysql_real_escape_string($alternc);
	$alternd = mysql_real_escape_string($alternd);
	$alterne = mysql_real_escape_string($alterne);	
	$correta = mysql_real_escape_string($correta);
	
	$insert = mysql_query("insert into questao (idAssunto,idDificuldade,questao,alternA,alternB,alternC,alternD,alternE,correta) values ('{$assunto}','{$dificuldade}','{$questao}','{$alterna}','{$alternb}','{$alternc}','{$alternd}','{$alterne}','{$correta}')");
	if($insert) {
		print "Questão Inserida!";
	}else {
		print "Erro ao Cadastrar!";
	}
	mysql_close($conexao);

?>