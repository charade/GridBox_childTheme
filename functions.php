
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
// /////////////////////////////
    /* functions.php */
add_action(
    'customize_register', 'gridbox_child_add_stuff_to_customizer' );

    function gridbox_child_add_stuff_to_customizer( $wp_customize ) {
        $wp_customize->add_section(
          'gridbox_child_custom_section',
          array(
            'title'       => 'Réglages Brioche et Canelle',
            'description' => 'Les options ajoutés via le thème gridbox-child',
          )
        );
      
        $wp_customize->add_setting(
          'gridbox_child_info_sponsor_text',
          array(
            'default'           => '',
            'sanitize_callback' => 'wp_filter_nohtml_kses',
          )
        );
      
        $wp_customize->add_control(
          'gridbox_child_info_sponsor_text',
          array(
            'type'        => 'text',
            'section'     => 'gridbox_child_custom_section',
            'label'       => 'Info sponsor (text)',
            'description' => 'Texte affiché en haut de toutes les pages.',
          )
        );
      
        $wp_customize->add_setting(
          'gridbox_child_info_sponsor_link',
          array(
            'default'           => '',
            'sanitize_callback' => 'esc_url_raw',
          )
        );
      
        $wp_customize->add_control(
          'gridbox_child_info_sponsor_link',
          array(
            'type'        => 'text',
            'section'     => 'gridbox_child_custom_section',
            'label'       => 'Info sponsor (link)',
            'description' => 'Texte affiché en haut de toutes les pages.',
          )
        );
        
        $wp_customize->selective_refresh->add_partial(
          'gridbox_child_info_sponsor_text',
          array(
            'selector' => '.sponsor-info a',
          )
        );
      }