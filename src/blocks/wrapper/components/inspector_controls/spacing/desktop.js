// Required Components
const { __ } = wp.i18n;
const { 
    PanelBody,
    RangeControl,
} = wp.components;

export default ( { props } ) => {
    if ( ! props ) return '';

    // Block Properties
    const { 
        setAttributes,
        attributes: { desktop },
    } = props;

    // Functions to set the block attributes
    const setDesktop = desktop => setAttributes({ desktop });

    // Variables
    const patterns = [
        { label: __( 'Row', 'sv_columns_manager' ), value: 'row' },
        { label: __( 'Row Reverse', 'sv_columns_manager' ), value: 'row-reverse' },
        { label: __( 'Column', 'sv_columns_manager' ), value: 'col' },
        { label: __( 'Column Reverse', 'sv_columns_manager' ), value: 'col-reverse' }
    ];

    return(
        <PanelBody 
            title={ __( 'Desktop', 'sv_columns_manager' ) }
            initialOpen={ false }
        >
            <RangeControl
                label={ __( 'Spacing', 'sv_columns_manager' ) }
                value={ desktop }
                onChange={ value => setDesktop( value ) }
                options={ patterns }
            />
        </PanelBody>
    );
}