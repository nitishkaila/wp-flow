<?php

//$abc = extract($name);
$a = 1;
$b = 2;
$name = filter_input( INPUT_POST, 'name', FILTER_SANITIZE_STRING );
?>
<a href="<?php echo esc_url($name);?>">test</a>
<?php
if ( $a == $b ) {
    echo "sdfsdf";
}

