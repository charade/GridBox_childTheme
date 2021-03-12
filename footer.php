<?php
/**
 * The template for displaying the footer.
 *
 * Contains all content after the main content area and sidebar
 *
 * @package Gridbox
 */

?>
	
	</div><!-- #content -->
	
	<?php do_action( 'gridbox_before_footer' ); ?>

	<div id="footer" class="footer-wrap">
		
		<footer id="colophon" class="site-footer container clearfix" role="contentinfo">
		<canvas id='charlesCanvas'></canvas>

			<div id="footer-text" class="site-info">
				<p>Interactive Gridbox child Theme by Charles.Ek</p>
			</div><!-- .site-info -->
			
			<?php do_action( 'gridbox_footer_menu' ); ?>

		</footer><!-- #colophon -->
		
	</div>

</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
