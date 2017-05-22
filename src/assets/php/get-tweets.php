<?php
session_start();
require_once("twitteroauth.php"); //Path to twitteroauth library
 
$twitteruser = "RosettaMktg"; 
$notweets = 30;
$consumerkey = "EoqE8APg2DTEPT2VnsfPZXenA";
$consumersecret = "IfxMNiiT5jMvnTgUrApCP2u4CA2prqBupPu8S1mJWoNUMn84sX";
$accesstoken = "16223982-YrHxpV1kaZOAWwH2rPj5QeOzJeIvOAsc4EE7ogpTt";
$accesstokensecret = "GeVoIsIPANrFImSuoynu7RYdoiX3qbp5QgRgD2F27fFnX";
 
function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}
 
$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
 
$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);
 
echo json_encode($tweets);
?>