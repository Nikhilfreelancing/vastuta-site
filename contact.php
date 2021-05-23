<?php 

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$phone = $_REQUEST['phone'];
$message = $_REQUEST['message'];

if (empty($name) || empty($email) || empty($phone) || empty($message)) {
	
	echo "Please fill all the fields";
}

else {
	mail("nikhilkhandelwal.it20@gmail.com", "Vastuta MAil", $message, "From: $name <$email>");
	echo "<script type="text/javascript">  alert('Thanks for submiiting your query');
	window.history.log(-1);
	</script> ";
}
?>