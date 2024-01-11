<?php

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Extract form data
    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $address = $_POST["address"];
    $city = $_POST["city"];
    $state = $_POST["state"];
    $zip = $_POST["zip"];
    $country = $_POST["country"];
    $phone = $_POST["phone"];
    
    // You may want to perform additional validation and sanitization here
    
    // Process the payment using the collected data
    $amount = 100;  // Set your desired payment amount
    $currency = "USD";  // Set your desired currency
    
    // Perform the payment processing logic here (e.g., communicate with the payment gateway API)
    
    // Assuming the payment is successful, you can redirect the user to a success page
    header("Location: success.php");
    exit;
}

// If the form is not submitted, redirect to the home page or handle it accordingly
header("Location: index.php");
exit;

?>