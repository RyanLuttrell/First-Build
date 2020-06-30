<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        require_once( 'instagram-basic-display-api.php');

        $params = array(
            'get_code' => isset($_GET['code']) ? $_GET['code'] : ''
        );
        $ig = new instagram_basic_display_api($params);
    ?>
    <h1>Authorize wwith instagram</h1>
    <a href='<?php $ig->authorizationUrl; ?>'>
        Authorize With Instagram
    </a>
</body>
</html>

