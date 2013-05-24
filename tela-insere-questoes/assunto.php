<?php
	require_once 'conexao.php';
    
	$sql = mysql_query("select nome from assunto");
	if(mysql_num_rows($sql))
	{
		$data = array(); $index = 0;
		while($recset = mysql_fetch_array($sql))
		{
			$data[$index] = $recset;
			$index++;
		}
		echo json_encode($data);
	}
	
?>