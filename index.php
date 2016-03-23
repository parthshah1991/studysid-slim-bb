<html>
	<head>
		<script src="javascript/requires.js", data-main="javascript/main"></script>
		<link href='https://fonts.googleapis.com/css?family=Lora' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" type="text/css" href="stylesheets/common.css">
		<link rel="stylesheet" type="text/css" href="stylesheets/main_body.css">
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	</head>
	<body class = "body">
		<?php

			require 'vendor/autoload.php';

			$app = new Slim\App();

			$app->get('/', function ($request, $response, $args) {
				
			});
			$app->get('/{a}/{b}', function ($request, $response, $args) {
				
			});
			$app->get('/{a}', function ($request, $response, $args) {
				
			});


			$app->run();
		?>
		<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	</body>
</html>