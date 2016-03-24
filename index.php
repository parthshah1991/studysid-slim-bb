<!-- <html>
	<head>
		<script src="/studysid/javascript/requires.js", data-main="/studysid/javascript/main"></script>
		<link href='https://fonts.googleapis.com/css?family=Lora' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" type="text/css" href="stylesheets/common.css">
		<link rel="stylesheet" type="text/css" href="stylesheets/main_body.css">
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	</head>
	<body class = "body"> -->
		<?php

			require 'vendor/autoload.php';

			use \Psr\Http\Message\ServerRequestInterface as Request;
			use \Psr\Http\Message\ResponseInterface as Response;


			function getDB()
			{
				$dbhost = "localhost";
				$dbuser = "root";
				$dbpass = "";
				$dbname = "prophunters";

				$mysql_conn_string = "mysql:host=$dbhost;dbname=$dbname";
				$dbConnection = new PDO($mysql_conn_string, $dbuser, $dbpass); 
				$dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				return $dbConnection;
			}

			$app = new Slim\App();

			$app->get('/', function ($request, $response, $args) {
				
			});

			$app->get('/getScore/{id}', function (Request $request, Response $response) {
				$id = $request->getAttribute('id');
				try 
				{
					$db = getDB();
					$sth = $db->prepare("SELECT * 
						FROM students
						WHERE student_id = :id");
			 
					$sth->bindParam(':id', $id, PDO::PARAM_INT);
					$sth->execute();
			 
					$student = $sth->fetch(PDO::FETCH_OBJ);

					if($student) {
						// $app->response->setStatus(200);
						// $app->response()->headers->set('Content-Type', 'application/json');
						// header("Content-Type: application/json"); 

						$response->withHeader('Content-type', 'application/json');
						// print_r($student); exit;
						// echo json_encode($student);
						
						$response->withJson($student, 200);
						$db = null;
					} else {
						throw new PDOException('No records found.');
					}
			 
				} catch(PDOException $e) {
					// $app->response()->setStatus(404);
					echo '{"error":{"text":'. $e->getMessage() .'}}';
				}
			});


			// $app->get('/getScore/:id', function ($id) use($app) {
				
			// });






			
			$app->get('/{a}/{b}', function ($request, $response, $args) {
				
			});
			$app->get('/{a}', function ($request, $response, $args) {
				
			});


			$app->run();
		?>
		<!-- <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	</body>
</html> -->