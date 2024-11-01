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
            tabletPro,
            tabletProLandscape
        },
    } = props;

    // Functions to set the block attributes
    const setTabletPro          = tabletPro             => setAttributes({ tabletPro });
    const setTabletProLandscape = tabletProLandscape    => setAttributes({ tabletProLandscape });

    // Variables
    const patterns = [
        { label: __( 'Row', 'sv_columns_manager' ), value: 'row' },
        { label: __( 'Row Reverse', 'sv_columns_manager' ), value: 'row-reverse' },
        { label: __( 'Column', 'sv_columns_manager' ), value: 'col' },
        { label: __( 'Column Reverse', 'sv_columns_manager' ), value: 'col-reverse' }
    ];

    return(
        <PanelBody 
            title={ __( 'Tablet Pro', 'sv_columns_manager' ) }
            initialOpen={ false }
        >
            <SelectControl
                label={ __( 'Alignment (Portrait)', 'sv_columns_manager' ) }
                value={ tabletPro }
                onChange={ value => setTabletPro( value ) }
                options={ patterns }
            />
            <SelectControl
                label={ __( 'Alignment (Landscape)', 'sv_columns_manager' ) }
                value={ tabletProLandscape }
                onChange={ value => setTabletProLandscape( value ) }
                options={ patterns }
            />
        </PanelBody>
    );
}