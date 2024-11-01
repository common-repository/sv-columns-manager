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
            tablet,
            tabletLandscape
        },
    } = props;

    // Functions to set the block attributes
    const setTablet          = tablet             => setAttributes({ tablet });
    const setTabletLandscape = tabletLandscape    => setAttributes({ tabletLandscape });

    // Variables
    const patterns = [
        { label: __( 'Row', 'sv_columns_manager' ), value: 'row' },
        { label: __( 'Row Reverse', 'sv_columns_manager' ), value: 'row-reverse' },
        { label: __( 'Column', 'sv_columns_manager' ), value: 'col' },
        { label: __( 'Column Reverse', 'sv_columns_manager' ), value: 'col-reverse' }
    ];

    return(
        <PanelBody 
            title={ __( 'Tablet', 'sv_columns_manager' ) }
            initialOpen={ false }
        >
            <SelectControl
                label={ __( 'Alignment (Portrait)', 'sv_columns_manager' ) }
                value={ tablet }
                onChange={ value => setTablet( value ) }
                options={ patterns }
            />
            <SelectControl
                label={ __( 'Alignment (Landscape)', 'sv_columns_manager' ) }
                value={ tabletLandscape }
                onChange={ value => setTabletLandscape( value ) }
                options={ patterns }
            />
        </PanelBody>
    );
}