<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package webalive
 */

get_header();
?>
<div class="container">
	<div class="row">
		<div class="col-md-9">
			<div id="primary" class="webalive-content-area">
				<main id="main" class="webalive-site-main">

					<?php
					/**
					 * webalive_before_main_content hook
					 */
					do_action( 'webalive_before_main_content' );

					while ( have_posts() ) :
						the_post();

						get_template_part( 'template-parts/post/content', get_post_format($post->ID) );

						the_post_navigation();

						// If comments are open or we have at least one comment, load up the comment template.
						if ( comments_open() || get_comments_number() ) :
							comments_template();
						endif;

					endwhile; // End of the loop.

					/**
					 * webalive_after_main_content hook
					 */
					do_action( 'webalive_after_main_content' );
					?>

				</main><!-- #main -->
			</div><!-- #primary -->
		</div>
		<div class="col-md-3">
				
			<?php 
				/**
				 * webalive_before_sidebar hook
				 */
				do_action( 'webalive_before_sidebar' );

				get_sidebar();
				
				/**
				 * webalive_after_sidebar hook
				 */
				do_action( 'webalive_after_sidebar' );
			?>
			
		</div>
	</div>
</div>
	

<?php
get_footer();
