!function(e){function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});t(1)},function(e,n,t){"use strict";var r=t(2),a=(t.n(r),t(3)),l=t(4),__=wp.i18n.__,o=wp.blockEditor.InnerBlocks;(0,wp.blocks.registerBlockType)("straightvisions/sv-columns-manager",{title:__("SV Columns Manager"),description:__("Control how your column blocks behave.","sv_columns_manager"),icon:a.a,category:"straightvisions",keywords:[__("SV Columns Manager","sv_columns_manager"),__("Columns Mobile","sv_columns_manager"),__("Columns Breakpoint","sv_columns_manager"),__("Columns Spacing","sv_columns_manager"),__("Columns Grid","sv_columns_manager")],supports:{align:["wide","full"]},attributes:{desktop:{type:"string",default:"row"},tabletPro:{type:"string",default:"row"},tabletProLandscape:{type:"string",default:"row"},tablet:{type:"string",default:"row"},tabletLandscape:{type:"string",default:"row"},phone:{type:"string",default:"col"},phoneLandscape:{type:"string",default:"row"},className:{type:"string"}},edit:l.a,save:function(e){return e.attributes,wp.element.createElement(o.Content,null)}})},function(e,n){},function(e,n,t){"use strict";n.a=wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},wp.element.createElement("path",{d:"M17 12.645v-2.289c-1.17-.417-1.907-.533-2.28-1.431-.373-.9.07-1.512.6-2.625l-1.618-1.619c-1.105.525-1.723.974-2.626.6-.9-.374-1.017-1.117-1.431-2.281h-2.29c-.412 1.158-.53 1.907-1.431 2.28h-.001c-.9.374-1.51-.07-2.625-.6l-1.617 1.619c.527 1.11.973 1.724.6 2.625-.375.901-1.123 1.019-2.281 1.431v2.289c1.155.412 1.907.531 2.28 1.431.376.908-.081 1.534-.6 2.625l1.618 1.619c1.107-.525 1.724-.974 2.625-.6h.001c.9.373 1.018 1.118 1.431 2.28h2.289c.412-1.158.53-1.905 1.437-2.282h.001c.894-.372 1.501.071 2.619.602l1.618-1.619c-.525-1.107-.974-1.723-.601-2.625.374-.899 1.126-1.019 2.282-1.43zm-8.5 1.689c-1.564 0-2.833-1.269-2.833-2.834s1.269-2.834 2.833-2.834 2.833 1.269 2.833 2.834-1.269 2.834-2.833 2.834zm15.5 4.205v-1.077c-.55-.196-.897-.251-1.073-.673-.176-.424.033-.711.282-1.236l-.762-.762c-.52.248-.811.458-1.235.283-.424-.175-.479-.525-.674-1.073h-1.076c-.194.545-.25.897-.674 1.073-.424.176-.711-.033-1.235-.283l-.762.762c.248.523.458.812.282 1.236-.176.424-.528.479-1.073.673v1.077c.544.193.897.25 1.073.673.177.427-.038.722-.282 1.236l.762.762c.521-.248.812-.458 1.235-.283.424.175.479.526.674 1.073h1.076c.194-.545.25-.897.676-1.074h.001c.421-.175.706.034 1.232.284l.762-.762c-.247-.521-.458-.812-.282-1.235s.529-.481 1.073-.674zm-4 .794c-.736 0-1.333-.597-1.333-1.333s.597-1.333 1.333-1.333 1.333.597 1.333 1.333-.597 1.333-1.333 1.333z"}))},function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function l(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var o=t(5),s=wp.element,c=s.Component,u=s.Fragment,i=wp.blockEditor.InnerBlocks,m=function(e){function n(e){r(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments));return t.render=function(){var e=t.props,n=e.className,r=(e.clientId,e.setAttributes,e.attributes),a=r.desktop,l=r.tabletPro,s=r.tabletProLandscape,c=r.tablet,m=r.tabletLandscape,p=r.phone,v=r.phoneLandscape,_=function(){return["wp-block-straightvisions-sv-columns-manager","svcm-lg-"+a,"svcm-md-v-"+l,"svcm-md-h-"+s,"svcm-sm-v-"+c,"svcm-sm-h-"+m,"svcm-xs-v-"+p,"svcm-xs-h-"+v].join(" ")};return wp.element.createElement(u,null,wp.element.createElement("div",{className:function(){return[n,_()].join(" ")}()},wp.element.createElement(i,{allowedBlocks:t.allowedBlocks,template:t.template})),wp.element.createElement(o.a,{props:t.props}))},t.props=e,t.template=[["core/columns"]],t.allowedBlocks=["core/columns"],t}return l(n,e),n}(c);n.a=m},function(e,n,t){"use strict";var r=t(6),a=wp.blockEditor.InspectorControls;n.a=function(e){var n=e.props;return n?wp.element.createElement(a,null,wp.element.createElement(r.a,{props:n})):""}},function(e,n,t){"use strict";var r=t(7),a=t(8),l=t(9),o=t(10),__=wp.i18n.__,s=wp.components.PanelBody;n.a=function(e){var n=e.props;return n?wp.element.createElement(s,{title:__("Alignment","sv_columns_manager"),initialOpen:!1},wp.element.createElement(r.a,{props:n}),wp.element.createElement(a.a,{props:n}),wp.element.createElement(l.a,{props:n}),wp.element.createElement(o.a,{props:n})):""}},function(e,n,t){"use strict";var __=wp.i18n.__,r=wp.components,a=r.PanelBody,l=r.SelectControl;n.a=function(e){var n=e.props;if(!n)return"";var t=n.setAttributes,r=n.attributes.desktop,o=function(e){return t({desktop:e})},s=[{label:__("Row","sv_columns_manager"),value:"row"},{label:__("Row Reverse","sv_columns_manager"),value:"row-reverse"},{label:__("Column","sv_columns_manager"),value:"col"},{label:__("Column Reverse","sv_columns_manager"),value:"col-reverse"}];return wp.element.createElement(a,{title:__("Desktop","sv_columns_manager"),initialOpen:!1},wp.element.createElement(l,{label:__("Alignment","sv_columns_manager"),value:r,onChange:function(e){return o(e)},options:s}))}},function(e,n,t){"use strict";var __=wp.i18n.__,r=wp.components,a=r.PanelBody,l=r.SelectControl;n.a=function(e){var n=e.props;if(!n)return"";var t=n.setAttributes,r=n.attributes,o=r.tabletPro,s=r.tabletProLandscape,c=function(e){return t({tabletPro:e})},u=function(e){return t({tabletProLandscape:e})},i=[{label:__("Row","sv_columns_manager"),value:"row"},{label:__("Row Reverse","sv_columns_manager"),value:"row-reverse"},{label:__("Column","sv_columns_manager"),value:"col"},{label:__("Column Reverse","sv_columns_manager"),value:"col-reverse"}];return wp.element.createElement(a,{title:__("Tablet Pro","sv_columns_manager"),initialOpen:!1},wp.element.createElement(l,{label:__("Alignment (Portrait)","sv_columns_manager"),value:o,onChange:function(e){return c(e)},options:i}),wp.element.createElement(l,{label:__("Alignment (Landscape)","sv_columns_manager"),value:s,onChange:function(e){return u(e)},options:i}))}},function(e,n,t){"use strict";var __=wp.i18n.__,r=wp.components,a=r.PanelBody,l=r.SelectControl;n.a=function(e){var n=e.props;if(!n)return"";var t=n.setAttributes,r=n.attributes,o=r.tablet,s=r.tabletLandscape,c=function(e){return t({tablet:e})},u=function(e){return t({tabletLandscape:e})},i=[{label:__("Row","sv_columns_manager"),value:"row"},{label:__("Row Reverse","sv_columns_manager"),value:"row-reverse"},{label:__("Column","sv_columns_manager"),value:"col"},{label:__("Column Reverse","sv_columns_manager"),value:"col-reverse"}];return wp.element.createElement(a,{title:__("Tablet","sv_columns_manager"),initialOpen:!1},wp.element.createElement(l,{label:__("Alignment (Portrait)","sv_columns_manager"),value:o,onChange:function(e){return c(e)},options:i}),wp.element.createElement(l,{label:__("Alignment (Landscape)","sv_columns_manager"),value:s,onChange:function(e){return u(e)},options:i}))}},function(e,n,t){"use strict";var __=wp.i18n.__,r=wp.components,a=r.PanelBody,l=r.SelectControl;n.a=function(e){var n=e.props;if(!n)return"";var t=n.setAttributes,r=n.attributes,o=r.phone,s=r.phoneLandscape,c=function(e){return t({phone:e})},u=function(e){return t({phoneLandscape:e})},i=[{label:__("Row","sv_columns_manager"),value:"row"},{label:__("Row Reverse","sv_columns_manager"),value:"row-reverse"},{label:__("Column","sv_columns_manager"),value:"col"},{label:__("Column Reverse","sv_columns_manager"),value:"col-reverse"}];return wp.element.createElement(a,{title:__("Phone","sv_columns_manager"),initialOpen:!1},wp.element.createElement(l,{label:__("Alignment (Portrait)","sv_columns_manager"),value:o,onChange:function(e){return c(e)},options:i}),wp.element.createElement(l,{label:__("Alignment (Landscape)","sv_columns_manager"),value:s,onChange:function(e){return u(e)},options:i}))}}]);