<?php
	$module = $script->get_parent();
	$bp = $module->_get_breakpoints();
	
	$gap  = $module->get_setting('spacing')->get_data();
	
	require('alignment.php');
	require('alignment_margin.php');