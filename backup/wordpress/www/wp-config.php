<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'wpuser');

/** MySQL database password */
define('DB_PASSWORD', 'wppassword');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');
define('WP_SITEURL', 'https://shifumix.com/www');
define('WP_HOME', 'https://shifumix.com/www');
define( 'WP_CONTENT_URL', 'https://shifumix.com/www/wp-content');
define('FORCE_SSL_ADMIN', true);

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'R&lPAwTqa%U=eJCdLdC(:gu+/6,?} Fo7]j_9Ax{h@:pE0?w#JMj`}tC<]@<C/ w');
define('SECURE_AUTH_KEY',  '9hy01dsC1&@7O@HON!yZQ+/Eb})$Be)O(XHO{V`lL#en>-f|<O$A?`9IYRW)0O[p');
define('LOGGED_IN_KEY',    'lLH,dPm7L<uN|nw;!Q]jH`tSe,nOh]BF/)Ul-S-/UNFb:X{-TR6W+;%)<QiO}1@6');
define('NONCE_KEY',        'LC7aTwt~0#^t3mlaP{.L<N+guf0azq%~ggXH{RW|+[7bJ1,MF{}Cr4nR<T(?=tOL');
define('AUTH_SALT',        '<,~B$OfWq!r;dT*dxC&h.LU*s7fwh=iXwM+{s6rv4PnYEaq1QlDbOe,TwGZ~?#H1');
define('SECURE_AUTH_SALT', 'fPDDlhIOL|VN~GAv5EhJP`UkvbjtmefZ0W3Ki]L-QKju9 6sC8* Q9Iu$o]iGeh~');
define('LOGGED_IN_SALT',   'mH]F5z|#wTp>Xl:PH`c~,+T:O=6I$z0NL,}}K;&Knm8`TA2$Ip.J.96eEmc7s|;!');
define('NONCE_SALT',       '~nWkkjN#^;}aIu*?f#h<)Ajo5ks(.)~S@6<o}-.ks^r_/|1ggAcb|ti7%Lq8Ed|?');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'WP_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

@ini_set( ‘upload_max_size’ , ’64MB’ );
@ini_set( ‘post_max_size’, ’64MB’);
@ini_set( ‘memory_limit’, ’64MB’ );
