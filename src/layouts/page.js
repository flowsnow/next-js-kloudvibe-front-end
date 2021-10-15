import React from 'react';
import _ from 'lodash';

import { Layout } from '../components/index';
import { htmlToReact, withPrefix, markdownify } from '../utils';

export default class Page extends React.Component {
    render() {
        const page = _.get(this.props, 'page');
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const title = _.get(page, 'title');
        const subtitle = _.get(page, 'subtitle');
        const image = _.get(page, 'image');
        const imageAlt = _.get(page, 'image_alt');
        const markdownContent = _.get(page, 'markdown_content');

        return (
            <Layout page={page} config={config}>
                <div className="outer">
                    <div className="inner-medium">
                        <article className="post post-full">
                            <header className="post-header">
                                <h1 className="post-title">{title}</h1>
                                {subtitle && <div className="post-subtitle">{htmlToReact(subtitle)}</div>}
                            </header>
                            {image && (
                                <div className="post-image">
                                    <img src={withPrefix(image)} alt={imageAlt} />
                                </div>
                            )}
                            {markdownContent && <div className="post-content">{markdownify(markdownContent)}</div>}
                       <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5931.426406523086!2d-87.824581!3d41.984967!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc9859154b971%3A0xa30a8641e1b7e1e8!2s100%20W%20Higgins%20Rd%2C%20Park%20Ridge%2C%20IL%2060068!5e0!3m2!1sen!2sus!4v1634320969953!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe> </article>
                    </div>
                </div>
            </Layout>
        );
    }
}
