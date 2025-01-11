<?php
// Database connection
$servername = "localhost:3306";  // Change to your MySQL server details
$username = "root";         // Change to your MySQL username
$password = "ashna";             // Change to your MySQL password
$dbname = "EDUWORLDDB"; // Change to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error . " Error No: " . $conn->connect_errno);

}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$course = $_POST['course'];
$state = $_POST['state'];
$city = $_POST['city'];

// SQL query to insert data into the table
$sql = "INSERT INTO users (name, email, phone, course, state, city) VALUES ('$name', '$email', '$phone', '$course', '$state', '$city')";

// Execute query
if ($conn->query($sql) === TRUE) {
    echo "Registration successful!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
