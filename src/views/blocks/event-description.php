<?php
/**
 * Block: Event Description
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/events/blocks/event-description.php
 *
 * See more documentation about our Blocks Editor templating system.
 *
 * @link http://evnt.is/1aiy
 *
 * @version 6.15.17
 *
 */

$event_id = get_the_ID();
$event = get_post( $event_id );

if ( ! $event instanceof WP_Post ) {
	return;
}

$classes = [ 'tribe-events-description', 'tribe-common-b2' ];

if ( ! empty( $attributes['className'] ) ) {
	$classes[] = $attributes['className'];
}
?>
<div <?php tec_classes( $classes ); ?>>
	<?php echo apply_filters( 'the_content', $event->post_content ); ?>
</div>
