
<?php
    add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
    
    function my_theme_enqueue_styles() {
        wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
        wp_enqueue_style( 'child-style', 
             get_stylesheet_directory_uri() . '/style.css',
             array( 'parent-style' ),
             wp_get_theme()->get('Version')
        );
     }

     function my_custom_scripts() {
        wp_enqueue_script( 'my.js', get_stylesheet_directory_uri() . '/js/my.js', array(),'',true );
    }
    add_action( 'wp_enqueue_scripts', 'my_custom_scripts' );