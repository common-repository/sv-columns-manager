import './editor.scss';
import icon from './icons/block';
import edit from './edit';

const { __ } = wp.i18n;
const { InnerBlocks } = wp.blockEditor;
const { registerBlockType } = wp.blocks;

registerBlockType( 'straightvisions/sv-columns-manager', {
	title: __( 'SV Columns Manager' ),
	description: __( 'Control how your column blocks behave.', 'sv_columns_manager' ),
	icon,
	category: 'straightvisions',
	keywords: [
		__( 'SV Columns Manager', 'sv_columns_manager' ),
		__( 'Columns Mobile', 'sv_columns_manager' ),
		__( 'Columns Breakpoint', 'sv_columns_manager' ),
		__( 'Columns Spacing', 'sv_columns_manager' ),
		__( 'Columns Grid', 'sv_columns_manager' ),
	],
	supports: {
		align:[ 'wide', 'full' ],
	},
	attributes: {
		// Alignment
		desktop: {
			type: 'string',
			default: 'row'
		},
		tabletPro: {
			type: 'string',
			default: 'row'
		},
		tabletProLandscape: {
			type: 'string',
			default: 'row'
		},
		tablet: {
			type: 'string',
			default: 'row'
		},
		tabletLandscape: {
			type: 'string',
			default: 'row'
		},
		phone: {
			type: 'string',
			default: 'col'
		},
		phoneLandscape: {
			type: 'string',
			default: 'row'
		},

		// Spacing
       /* spacingDesktop: {
            type: 'number',
            default: 42
        },
        spacingTabletPro: {
            type: 'number',
            default: 42
        },
        spacingTabletProLandscape: {
            type: 'number',
            default: 42
        },
        spacingTablet: {
            type: 'number',
            default: 42
        },
        spacingTabletLandscape: {
            type: 'number',
            default: 42
        },
        spacingPhone: {
            type: 'number',
            default: 42
        },
        spacingPhoneLandscape: {
            type: 'number',
            default: 'row'
        },*/

		// Advanced
		className: {
			type: 'string',
		},

	},
	edit,
	save: ( props ) => {
        const { attributes } = props;

		return <InnerBlocks.Content />;
	}
} );