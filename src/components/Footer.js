import React from 'react';
import _ from 'lodash';

import components from './index';
import ActionLink from './ActionLink';
import { htmlToReact } from '../utils';

export default class Footer extends React.Component {
    render() {
        const config = _.get(this.props, 'config');
        const footer = _.get(config, 'footer');
        const footerSections = _.get(footer, 'sections');
        const hasNav = _.get(footer, 'has_nav');
        const navLinks = _.get(footer, 'nav_links');
        const footerContent = _.get(footer, 'content');
        const links = _.get(footer, 'links');

        return (
            <footer id="colophon" className="site-footer">
                {footerSections && !_.isEmpty(footerSections) && (
                    <div className="footer-top outer">
                        <div className="inner">
                            <div className="grid footer-widgets">
                                {_.map(footerSections, (section, sectionIdx) => {
                                    const sectionType = _.get(section, 'type');
                                    const component = _.upperFirst(_.camelCase(sectionType));
                                    if (!component) {
                                        throw new Error(`footer section does not have the 'type' property`);
                                    }
                                    const Component = components[component];
                                    if (!Component) {
                                        throw new Error(`no component matching the footer section's type: ${sectionType}`);
                                    }
                                    return <Component key={sectionIdx} section={section} />;
                                })}
                            </div>
                        </div>
                    </div>
                )}
                <div className="footer-bottom outer">
                    <div className="inner">
                        {hasNav && navLinks && (
                            <div className="footer-nav">
                                <ul className="menu">
                                    {_.map(navLinks, (action, actionIdx) => (
                                        <li key={actionIdx} className="menu-item">
                                            <ActionLink action={action} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <div className="site-info">
                            {htmlToReact(footerContent)}
                            &nbsp;
                            {_.map(links, (action, actionIdx) => (
                                <ActionLink key={actionIdx} action={action} />
                            ))}
                        </div>
                    </div>
                </div><div style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"><div style="z-index: 4; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px);"><div style="position: absolute; left: 0px; top: 0px; z-index: 104; width: 100%;"></div><div style="position: absolute; left: 0px; top: 0px; z-index: 105; width: 100%;"></div><div style="position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;"></div><div style="position: absolute; left: 0px; top: 0px; z-index: 107; width: 100%;"></div></div></div>
            </footer>
        );
    }
}
