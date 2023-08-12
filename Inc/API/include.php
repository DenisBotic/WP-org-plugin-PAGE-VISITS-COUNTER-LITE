<?php
/**
 * INCLUDE ALL API FILES
 *
 * @package Strongetic - count page visits
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
		exit;
}




// BACKEND.
if( file_exists( dirname( __FILE__ ) . '/SettingsApi.php' ) ) {
		require_once dirname(__FILE__) . '/SettingsApi.php';
}


?>
