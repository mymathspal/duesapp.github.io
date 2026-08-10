<?php

$loginCredentials = json_decode(file_get_content("php://input"));

http_response_code(204);