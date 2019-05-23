<?php


$name = filter_input( INPUT_POST, 'name', FILTER_SANITIZE_STRING );
?>
<a href="<?php echo esc_url($name);?>">test</a>
<?php
$args = array(
    'post_type' => 'post',
    'posts_per_page' => 150
);

$my_query = new WP_Query( $args );

if ( $my_query->have_posts() ) {

    while ( $my_query->have_posts() ) {

        $my_query->the_post();

        // Post data goes here.

    }

}