/**
 * External Dependencies
 */
const { __ } = wp.i18n;
const { useBlockProps } = wp.blockEditor;

/**
 * The Event Description block.
 */
export default {
	id: 'event-description',
	title: __( 'Event Description', 'the-events-calendar' ),
	description: __( 'Display the event description.', 'the-events-calendar' ),
	icon: 'editor-alignleft',
	category: 'tribe-events',
	edit: ( props ) => {
		const { className, ...blockProps } = useBlockProps();

		return (
			<div className={ `${ className } ${ props.className }` } { ...blockProps }>
				<div className="tribe-events-description-placeholder" style={ {
					border: '1px dashed #ccc',
					padding: '20px',
					textAlign: 'center',
					background: '#f9f9f9',
					color: '#666',
				} }>
					{ __( 'Event Description Placeholder', 'the-events-calendar' ) }
				</div>
			</div>
		);
	},
	save: () => null, // Dynamic block
};
