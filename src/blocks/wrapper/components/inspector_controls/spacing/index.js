// Required Components
import Desktop from './desktop';
import TabletPro from './tablet_pro';
import Tablet from './tablet';
import Phone from './phone';

// Required Components
const { __ } = wp.i18n;
const {
    PanelBody,
} = wp.components;

export default ( { props } ) => {
    if ( ! props ) return '';

    return(
        <PanelBody
            title={ __( 'Spacing', 'sv_columns_manager' ) }
            initialOpen={ false }
        >
            <Desktop props={ props } />
            <TabletPro props={ props } />
            <Tablet props={ props } />
            <Phone props={ props } />
        </PanelBody>
    );
}