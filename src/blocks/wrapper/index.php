<?php
namespace sv_columns_manager;

class wrapper extends sv_columns_manager {
	protected $block_attr = array();

	public function init() {
		$this->register_block();
	}

	public function render_block( array $attr, string $content ): string {
		$this->block_attr = $attr;

		if ( did_action( 'wp_enqueue_scripts' ) ) {
			$this->load_block_assets();
		} else {
			add_action( 'wp_enqueue_scripts', array( $this, 'load_block_assets' ), 999 );
		}

		ob_start();
		
		require( $this->get_path( 'lib/frontend/tpl/wrapper.php' ) );

		$output = ob_get_contents();
		ob_end_clean();

		return $output;
	}

	public function load_block_assets() {
		if ( ! is_admin() ) {
			foreach($this->get_parent()->get_scripts() as $script){
				$script->set_is_enqueued();
			}
		}
	}

	private function register_block() {
		register_block_type(
			'straightvisions/sv-columns-manager', array(
				'editor_script' => 'sv-columns-manager-block',
				'editor_style'  => 'sv-columns-manager-block-editor',
				'attributes'	=> array(
					// Alignment
					'desktop' => array(
						'type' => 'string',
						'default' => 'row'
					),
					'tabletPro' => array(
						'type' => 'string',
						'default' => 'row'
					),
					'tabletProLandscape' => array(
						'type' => 'string',
						'default' => 'row'
					),
					'tablet' => array(
						'type' => 'string',
						'default' => 'row'
					),
					'tabletLandscape' => array(
						'type' => 'string',
						'default' => 'row'
					),
					'phone' => array(
						'type' => 'string',
						'default' => 'col'
					),
					'phoneLandscape' => array(
						'type' => 'string',
						'default' => 'row'
					),
					
					// Spacing
					/*
					'spacingDesktop' => array(
						'type' => 'number',
						'default' => 42
					),
					'spacingTabletPro' => array(
						'type' => 'number',
						'default' => 42
					),
					'spacingTabletProLandscape' => array(
						'type' => 'number',
						'default' => 42
					),
					'spacingTablet' => array(
						'type' => 'number',
						'default' => 42
					),
					'spacingTabletLandscape' => array(
						'type' => 'number',
						'default' => 42
					),
					'spacingPhone' => array(
						'type' => 'number',
						'default' => 42
					),
					'spacingPhoneLandscape' => array(
						'type' => 'string',
						'default' => 42
					),*/

					// Advanced
					'className' => array(
						'type' => 'string',
					),

				),
				'render_callback'	=> array( $this, 'render_block' ),
			)
		);
	}

	// Returns a string with all classes for the input wrapper
	protected function get_wrapper_class(): string {
		$class = array();
		
		// Alignment Classes
		$class[] = 'svcm-lg-' . $this->block_attr['desktop'];
		$class[] = 'svcm-md-v-' . $this->block_attr['tabletPro'];
		$class[] = 'svcm-md-h-' . $this->block_attr['tabletProLandscape'];
		$class[] = 'svcm-sm-v-' . $this->block_attr['tablet'];
		$class[] = 'svcm-sm-h-' . $this->block_attr['tabletLandscape'];
		$class[] = 'svcm-xs-v-' . $this->block_attr['phone'];
		$class[] = 'svcm-xs-h-' . $this->block_attr['phoneLandscape'];

		// Alignment
		if ( isset( $this->block_attr['align'] ) ) { 
			$class[] = 'align' . $this->block_attr['align'];
		}

		// Additional Classes
		if ( isset( $this->block_attr['className'] ) ) { 
			$class[] = $this->block_attr['className'];
		}

		return implode( ' ', $class );
	}
	
	protected function get_spacings():array {
		$output = array();
		$output['spacingDesktop'] = $this->block_attr['spacingDesktop'];
		
		$output['spacingTabletPro'] = $this->block_attr['spacingTabletPro'];
		$output['spacingTabletProLandscape'] = $this->block_attr['spacingTabletProLandscape'];

		$output['spacingTablet'] = $this->block_attr['spacingTablet'];
		$output['spacingTabletLandscape'] = $this->block_attr['spacingTabletLandscape'];
		
		$output['spacingPhone'] = $this->block_attr['spacingPhone'];
		$output['spacingPhoneLandscape'] = $this->block_attr['spacingPhoneLandscape'];
		
		return $output;
	}
}