// Required Components
const { __ } = wp.i18n;
const { 
    PanelBody,
    SelectControl, 
} = wp.components;

export default ( { props } ) => {
    if ( ! props ) return '';

    // Block Properties
    const { 
        setAttributes,
        attributes: {
            phone,
            phoneLandscape
        },
    } = props;

    // Functions to set the block attributes
    const setPhone          = phone             => setAttributes({ phone });
    const setPhoneLandscape = phoneLandscape    => setAttributes({ phoneLandscape });

    // Variables
    const patterns = [
        { label: __( 'Row', 'sv_columns_manager' ), value: 'row' },
        { label: __( 'Row Reverse', 'sv_columns_manager' ), value: 'row-reverse' },
        { label: __( 'Column', 'sv_columns_manager' ), value: 'col' },
        { label: __( 'Column Reverse', 'sv_columns_manager' ), value: 'col-reverse' }
    ];

    return(
        <PanelBody 
            title={ __( 'Phone', 'sv_columns_manager' ) }
            initialOpen={ false }
        >
            <SelectControl
                label={ __( 'Alignment (Portrait)', 'sv_columns_manager' ) }
                value={ phone }
                onChange={ value => setPhone( value ) }
                options={ patterns }
            />
            <SelectControl
                label={ __( 'Alignment (Landscape)', 'sv_columns_manager' ) }
                value={ phoneLandscape }
                onChange={ value => setPhoneLandscape( value ) }
                options={ patterns }
            />
        </PanelBody>
    );
}