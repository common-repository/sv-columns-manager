// Required Components
import InspectorControls from './components/inspector_controls';

const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.blockEditor;

export default class extends Component {
    constructor(props) {
        super(...arguments);

        this.props = props;
        //console.log(props); //debug
        this.template = [
            ['core/columns'],
        ];
        this.allowedBlocks = [
            'core/columns',
        ];
    }

    render = () => {
        const {
            className,
            clientId,
            setAttributes,
            attributes: {
                desktop,
                tabletPro,
                tabletProLandscape,
                tablet,
                tabletLandscape,
                phone,
                phoneLandscape,

                /*spacingDesktop,
                spacingTabletPro,
                spacingTabletProLandscape,
                spacingTablet,
                spacingTabletLandscape,
                spacingPhone,
                spacingPhoneLandscape,*/
            }
        } = this.props;

        // Functions
        const getPatternClasses = () => {
            const classes = [
                'wp-block-straightvisions-sv-columns-manager',
                `svcm-lg-${desktop}`,
                `svcm-md-v-${tabletPro}`,
                `svcm-md-h-${tabletProLandscape}`,
                `svcm-sm-v-${tablet}`,
                `svcm-sm-h-${tabletLandscape}`,
                `svcm-xs-v-${phone}`,
                `svcm-xs-h-${phoneLandscape}`,

                /*`svcm-soacing-lg-${spacingDesktop}`,
                `svcm-spacing-md-v-${spacingTabletPro}`,
                `svcm-spacing-md-h-${spacingTabletProLandscape}`,
                `svcm-spacing-sm-v-${spacingTablet}`,
                `svcm-spacing-sm-h-${spacingTabletLandscape}`,
                `svcm-spacing-xs-v-${spacingPhone}`,
                `svcm-spacing-xs-h-${spacingPhoneLandscape}`*/
            ];

            return classes.join( ' ' );
        };

        const getClasses = () => {
          const classes = [
              className,
              getPatternClasses()
            ];

          return classes.join(' ');
        };

        return (
            <Fragment>
                <div className={ getClasses() }>
                    <InnerBlocks
                        allowedBlocks={ this.allowedBlocks }
                        template={ this.template }
                    />
                </div>
                <InspectorControls props={ this.props } />
            </Fragment>
        );
    }
}