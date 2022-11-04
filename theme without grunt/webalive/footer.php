<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package webalive
 */

?>

	</div><!-- #content -->
	<?php 
		/**
		 * webalive_before_footer hook
		 */
		do_action( 'webalive_before_footer' );
	?>

	<footer class="webalive-footer">
		<!-- Widgets -->
		<div class="container">
			<div class="row">
				<div class="col-md-3 col-sm-6">
					<?php dynamic_sidebar( 'footer-widget-1' ); ?>
				</div>
				<div class="col-md-3 col-sm-6">
					<?php dynamic_sidebar( 'footer-widget-2' ); ?>
				</div>
				<div class="col-md-3 col-sm-6">
					<?php dynamic_sidebar( 'footer-widget-3' ); ?>
				</div>
				<div class="col-md-3 col-sm-6">
					<?php dynamic_sidebar( 'footer-widget-4' ); ?>
				</div>
			</div>
		</div>
		<!-- Copyright -->
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<?php dynamic_sidebar( 'copyright-widget-1' ); ?>
				</div>
				<div class="col-md-6">
					<?php dynamic_sidebar( 'copyright-widget-2' ); ?>
				</div>
			</div>
		</div>
	</footer>

	<?php  
		/**
		 * webalive_after_footer hook
		 */
		do_action( 'webalive_after_footer' );
	?>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
