// Required Components
import Alignment from './inspector_controls/alignment/';
// import Spacing from './inspector_controls/spacing/';

const { InspectorControls } = wp.blockEditor;

export default ( { props } ) => {
    if ( ! props ) return '';

    return(
        <InspectorControls>
            <Alignment props={ props } />
        </InspectorControls>
    );
}