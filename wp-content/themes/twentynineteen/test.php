<?php


$name = filter_input( INPUT_POST, 'name', FILTER_SANITIZE_STRING );
?>
<a href="<?php echo esc_url($name);?>">test</a>
<?php

//$abc = extract($name);