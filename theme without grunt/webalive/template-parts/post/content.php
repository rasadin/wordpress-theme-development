<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package webalive
 */
/**
 * Options value
 */
$webalive_options = webalive_theme_options();
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php if( 'default' == $webalive_options['webalive_header_type'] ) : ?>
	<header class="entry-header">
		<?php  
		/**
		 * webalive_before_entry_title hook
		 */
		do_action( 'webalive_before_entry_title' );

		if ( is_singular() ) :
			the_title( '<h1 class="entry-title">', '</h1>' );
		else :
			the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		endif;

		/**
		 * webalive_after_entry_title hook
		 * 
		 * webalive_entry_meta - 10
		 */
		do_action( 'webalive_after_entry_title' );
		?>
	</header><!-- .entry-header -->
	<?php endif; ?>

	<?php webalive_post_thumbnail(); ?>

	<?php  
	/**
	 * webalive_before_content hook
	 */
	do_action( 'webalive_before_content' );
	?>
	<div class="entry-content">
		<?php
		the_content( sprintf(
			wp_kses(
				/* translators: %s: Name of current post. Only visible to screen readers */
				__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'webalive' ),
				array(
					'span' => array(
						'class' => array(),
					),
				)
			),
			get_the_title()
		) );

		wp_link_pages( array(
			'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'webalive' ),
			'after'  => '</div>',
		) );
		?>
	</div><!-- .entry-content -->

	<?php  
	/**
	 * webalive_after_content hook
	 */
	do_action( 'webalive_after_content' );
	?>

	<footer class="entry-footer">
		<?php webalive_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->
