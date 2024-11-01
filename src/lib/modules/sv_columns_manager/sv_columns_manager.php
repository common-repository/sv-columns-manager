<?php
namespace sv_columns_manager;

class sv_columns_manager extends modules {
	protected $lang_dir = '';

	public function init() {
		$this->lang_dir = plugin_dir_path( $this->get_root()->get_path() ) . 'languages';

		$this->load_settings()
			->register_scripts()
			->register_blocks()
			->load_plugin_translation()
			->set_section_title( __( 'Size Settings', 'sv100_companion' ) )
			->set_section_desc( __( 'Define sizes for the plugin.', 'sv100_companion' ) )
			->set_section_template_path( $this->get_path( 'lib/backend/tpl/settings.php' ) )
			->set_section_type( 'settings' )
			->get_root()
			->add_section( $this );

		// Actions Hooks & Filter
		add_action( 'init', array( $this, 'register_block_assets' ) );
		add_action( 'after_setup_theme', array( $this, 'update_settings' ) );
		add_filter( 'block_categories_all', array( $this, 'block_categories' ), 10, 2 );
	}

	public function load_settings(): sv_columns_manager {
		$this->get_setting( 'grid_base' )
			->set_title( __( 'Grid Base', 'sv100' ) )
			->set_description( __( 'Sets the grid base for the columns.', 'sv100' ) )
			->set_default_value( '32px' )
			->load_type( 'text' );

		$this->get_setting( 'use_theme_values' )
			->set_title( __( 'Use theme values', 'sv100' ) )
			->set_description( __( 'Uses the values from the SV100 theme.', 'sv100' ) )
			->set_default_value( true )
			->load_type( 'checkbox' );

		$breakpoints = $this->get_breakpoints();
		// Breakpoints
		$this->get_setting( 'breakpoint_mobile' )
		     ->set_title( __( 'Mobile', 'sv100' ) )
		     ->set_description( __( 'Minimum Size', 'sv100' ) )
		     ->set_default_value( $breakpoints['mobile'] )
		     ->set_disabled(true)
		     ->load_type( 'number' );

		$this->get_setting( 'breakpoint_mobile_landscape' )
		     ->set_title( __( 'Mobile (Landscape)', 'sv100' ) )
		     ->set_description( __( 'Small devices like landscape phones and less.', 'sv100' ) )
		     ->set_default_value( $breakpoints['mobile_landscape'] )
		     ->load_type( 'number' );

		$this->get_setting( 'breakpoint_tablet' )
		     ->set_title( __( 'Tablet', 'sv100' ) )
		     ->set_description( __( 'Medium devices like tablets and less.', 'sv100' ) )
		     ->set_default_value( $breakpoints['tablet'] )
		     ->load_type( 'number' );

		$this->get_setting( 'breakpoint_tablet_landscape' )
		     ->set_title( __( 'Tablet (Landscape)', 'sv100' ) )
		     ->set_description( __( 'Medium devices like landscape tablets and up.', 'sv100' ) )
		     ->set_default_value( $breakpoints['tablet_landscape'] )
		     ->load_type( 'number' );

		$this->get_setting( 'breakpoint_tablet_pro' )
		     ->set_title( __( 'Tablet Pro', 'sv100' ) )
		     ->set_description( __( 'Large tablets or less.', 'sv100' ) )
		     ->set_default_value( $breakpoints['tablet_pro'] )
		     ->load_type( 'number' );

		$this->get_setting( 'breakpoint_tablet_pro_landscape' )
		     ->set_title( __( 'Tablet Pro (Landscape)', 'sv100' ) )
		     ->set_description( __( 'Large tablets landscape or laptops.', 'sv100' ) )
		     ->set_default_value( $breakpoints['tablet_pro_landscape'] )
		     ->load_type( 'number' );

		$this->get_setting( 'breakpoint_desktop' )
		     ->set_title( __( 'Desktop', 'sv100' ) )
		     ->set_description( __( 'Desktop Devices', 'sv100' ) )
		     ->set_default_value( $breakpoints['desktop'] )
		     ->load_type( 'number' );

		// spacing
		$spacing_defaults = $breakpoints;

		foreacH($spacing_defaults as $key => &$val){
			$val = $key === 'mobile' || $key === 'mobile_landscape' ? '20px' : '40px';
		}

		$this->get_setting( 'spacing' )
		     ->set_title( __( 'Spacing', 'sv100' ) )
		     ->set_description( __( 'The distance between columns.', 'sv100' ) )
		     ->set_default_value($spacing_defaults)
		     ->set_is_responsive(true)
		     ->load_type( 'text' );

		return $this;
	}

	public function _get_breakpoints(){
		$output = array();

		foreach($this->get_breakpoints() as $key => $value){
			if( empty($value) === false || $value === 0){
				$output[$key] = $this->get_setting( $key )->get_data();
			}
		}

		return $output;
	}

	public function update_settings(): sv_columns_manager {
		if ( $this->is_theme_active() && $this->get_setting( 'use_theme_values' )->get_data() ) {
			$sv_common 		= $this->get_theme()->get_module('sv_common');
			if(!$sv_common){
				return $this;
			}

			foreach($sv_common->get_breakpoints() as $key => $value){
				if( empty($value) === false || $value === 0){
					$this->get_setting( $key )->set_data( $value . 'px' );
				}
			}

		}

		return $this;
	}

	public function get_theme() {
		return $GLOBALS['sv100'];
	}

	public function is_theme_active(): bool {
		$theme = wp_get_theme();

		return ( 'SV100' === $theme->name || 'SV100' === $theme->parent_theme ) && isset( $GLOBALS['sv100'] ) ? true : false;
	}

	// Registers all block styles and scripts for the frontend
	private function register_scripts(): sv_columns_manager {
		// config
		$this->get_script( 'config' )
			->set_is_gutenberg()
			->set_path( 'lib/frontend/css/config.php' )
			->set_inline( true );

		// Stylesheets
		$this->get_script( 'wrapper' )
			->set_is_gutenberg()
			->set_path( 'lib/frontend/css/wrapper.css' );

		return $this;
	}

	// Loops through the blocks directory and registers all blocks in it
	private function register_blocks(): sv_columns_manager {
		$dir = $this->get_root()->get_path( 'blocks' );
		$dir_array = array_diff( scandir( $dir ), array( '..', '.' ) );

		foreach( $dir_array as $key => $value ) {
			if (
				is_dir( $dir . '/' . $value )
				&& file_exists( $dir . '/' . $value . '/index.php' )
			) {
				$class_name = __NAMESPACE__ . '\\' . $value;

				require_once( $dir . '/' . $value . '/index.php' );

				$this->$value = new $class_name();
				$this->$value->set_root( $this->get_root() );
				$this->$value->set_parent( $this );
				$this->$value->init();
			}
		}

		return $this;
	}

	// Registers all block styles and scripts for the editor
	public function register_block_assets(): sv_columns_manager {
		wp_register_script(
			'sv-columns-manager-block',
			$this->get_root()->get_url( '../dist/blocks.build.js' ),
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
			filemtime( $this->get_root()->get_path( '../dist/blocks.build.js' ) ),
			true
		);

		// Loads the ${domain}-${locale}-${handle}.json file, for block translation in the editor
		wp_set_script_translations( 'sv-columns-manager-block', 'sv_columns_manager', $this->lang_dir );

		if ( $this->check_gutenberg() ) {
			wp_localize_script( 'sv-columns-manager-block', 'gutenbergPlugin', array( 'version' => GUTENBERG_VERSION ) );
		}

		wp_register_style(
			'sv-columns-manager-block-editor',
			$this->get_root()->get_url( '../dist/blocks.editor.build.css' ),
			array( 'wp-edit-blocks' ),
			filemtime( $this->get_root()->get_path( '../dist/blocks.editor.build.css' ) )
		);

		return $this;
	}

	// Registers the straightvisions block category
	public function block_categories( $categories ) {
		$category_slugs = wp_list_pluck( $categories, 'slug' );

		return
		in_array( 'straightvisions', $category_slugs, true )
		? $categories
		: array_merge(
			$categories,
			array(
				array(
					'slug' 	=> 'straightvisions',
					'title' => 'straightvisions',
				),
			)
		);
	}

	// Checks if the gutenberg plugin is active and if the version is compatible
	private function check_gutenberg() {
		if(!in_array('gutenberg/gutenberg.php', apply_filters('active_plugins', get_option('active_plugins')))){
			return false;
		}

		if ( floatval( GUTENBERG_VERSION ) < 6.7 ){
			return false;
		}

		return true;
	}

	public function load_plugin_translation(): sv_columns_manager {
		load_plugin_textdomain( 'sv_columns_manager', false, $this->lang_dir );

		return $this;
	}
}
