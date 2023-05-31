<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM filmai";  
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE ID = :ID";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':ID', $path[3]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        
        echo json_encode($users);
        break;
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO filmai(ID,Name,Type,Year) VALUES(null,:Name,:Type,:Year)";
        $stmt = $conn ->prepare($sql);
        $stmt->bindParam(':Name',$user->Name);
        $stmt->bindParam(':Type',$user->Type);
        $stmt->bindParam(':Year',$user->Year);
        if($stmt->execute()){
            $response = ['status' => 1, 'message' => 'Record CREATED Successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Record CREATED Unsuccessfully.'];
        }
        echo json_encode($response);
        break;
        case "PUT":
            $user = json_decode(file_get_contents('php://input'));
            $sql = "UPDATE filmai SET Name= :Name, Type= :Type, Year = :Year WHERE ID = :ID";
            $stmt = $conn ->prepare($sql);
            $stmt->bindParam(':ID',$user->ID);
            $stmt->bindParam(':Name',$user->Name);
            $stmt->bindParam(':Type',$user->Type);
            $stmt->bindParam(':Year',$user->Year);
            if($stmt->execute()){
                $response = ['status' => 1, 'message' => 'Record UPDATED Successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Record UPDATED Unsuccessfully.'];
            }
            echo json_encode($response);
            break;
        
    case "DELETE":    
        $sql = " DELETE FROM filmai WHERE ID = :ID";  
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':ID', $path[3]);
        if($stmt->execute()){
            $response = ['status' => 1, 'message' => 'Record DELETED Successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Record DELETED Unsuccessfully.'];
        }
        echo json_encode($response);
        break;
        
}