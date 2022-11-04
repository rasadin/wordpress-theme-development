    <header id="masthead" class="webalive-header webalive-site-inline-menu">
		<nav id="site-navigation" class="webalive-navbar mb-5">
		    <div class="container">
				<div class="webalive-menu-wrap">
					<div class="webalive-brand-wrap">
						<?php  
							/**
							 * webalive_before_logo hook
							 */
							do_action( 'webalive_before_logo' );
						?>
						<a class="webalive-navbar-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
							<?php webalive_custom_logo(); ?>
						</a>
						<?php  
							/**
							 * webalive_after_logo hook
							 */
							do_action( 'webalive_after_logo' );
						?>
						<span class="webalive-navbar-toggler js-show-nav">
							<i class="fas fa-bars"></i>
						</span>
					</div>
					<?php
						if( has_nav_menu( 'primary' ) ) :
							wp_nav_menu( array(
								'theme_location'	=> 'primary',
								'container'			=> false,
								'menu_class'		=> 'webalive-main-menu webalive-inline-menu',
								'menu_id'			=> false,
							) );
						endif;
					?>
				</div>
		    </div>
		</nav>
	</header><!-- #masthead -->