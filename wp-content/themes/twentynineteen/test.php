<?php
require_once get_stylesheet_directory().'page.php';
$a = "test";
$name = filter_input( INPUT_POST, 'name', FILTER_SANITIZE_STRING );
?>
<a href="<?php echo esc_url($name);?>">test</a>
