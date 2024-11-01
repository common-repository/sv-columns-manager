<div class="sv_setting_subpage">
	<h2><?php _e( 'Size Settings', 'sv100_companion' ); ?></h2>

    <?php 
        if ( $module->is_theme_active() ) {
            $sv_common 		= $module->get_theme()->get_module('sv_common');
	        $breakpoints = $sv_common->get_breakpoints();
    ?>

    <h3 class="divider"><?php _e( 'SV100 Theme', 'sv100' ); ?></h3>
    <div class="sv_setting_flex">
        <?php echo $module->get_setting( 'use_theme_values' )->form(); ?>
        <div class="sv_setting sv_setting_text_parent">
            <h4><?php _e( 'SV100 Theme Values' ); ?></h4>
            <p><strong>Breakpoints</strong></p>
            <ul class="info_list">
                <?php foreach($breakpoints as $key => $val){
                    $key = str_replace('_',' ', $key);
                    echo '<li style="text-transform:capitalize;">';
                    _e( $key.': ', 'sv100_companion' );
                    echo '<span>';
                    echo !empty( $val ) || $val === 0 ? $val . 'px' : __( 'Not set', 'sv100_companion' );
                    echo '</span>';
                    echo '</li>';
                }
                ?>
                
            </ul>
        </div>
    </div>
    <?php } ?>
   
    <h3 class="divider"><?php _e( 'Breakpoints', 'sv100' ); ?></h3>
    <div class="sv_setting_flex">
		<?php
			echo $module->get_setting( 'breakpoint_mobile' )->form();
			echo $module->get_setting( 'breakpoint_mobile_landscape' )->form();
		?>
    </div>
    <div class="sv_setting_flex">
		<?php
			echo $module->get_setting( 'breakpoint_tablet' )->form();
			echo $module->get_setting( 'breakpoint_tablet_landscape' )->form();
		?>
    </div>
    <div class="sv_setting_flex">
		<?php
			echo $module->get_setting( 'breakpoint_tablet_pro' )->form();
			echo $module->get_setting( 'breakpoint_tablet_pro_landscape' )->form();
		?>
    </div>
    <div class="sv_setting_flex">
		<?php
			echo $module->get_setting( 'breakpoint_desktop' )->form();
		?>
    </div>

    <h3 class="divider"><?php _e( 'Spacing', 'sv100' ); ?></h3>
    <div class="sv_setting_flex">
		<?php
			echo $module->get_setting( 'spacing' )->form();
		?>
    </div>
</div>
