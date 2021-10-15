import React from 'react';
import _ from 'lodash';

import { htmlToReact, withPrefix } from '../utils';

export default class SectionReviews extends React.Component {
    renderReview(review, index) {
        const content = _.get(review, 'content');
        const avatar = _.get(review, 'avatar');
        const avatarAlt = _.get(review, 'avatar_alt');
        const author = _.get(review, 'author');

        return (
            <blockquote key={index} className="cell review">
                <div className="card">
                    <p className="review-text">{htmlToReact(content)}</p>
                    <footer className="review-footer">
                        {avatar && <img className="review-avatar" src={withPrefix(avatar)} alt={avatarAlt} />}
                        {author && <cite className="review-author">{author}</cite>}
                    </footer>
                </div>
            </blockquote>
        );
    }

    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const background = _.get(section, 'background');
        const title = _.get(section, 'title');
        const subtitle = _.get(section, 'subtitle');
        const reviews = _.get(section, 'reviews');

        return (
            <section id={sectionId} className={`block reviews-block bg-${background} outer`}>
                <div className="block-header inner-small">
                    {title && <h2 className="block-title">{title}</h2>}
                    {subtitle && <p className="block-subtitle">{htmlToReact(subtitle)}</p>}
                </div>
                {reviews && (
                    <div className="inner">
                        <div className="grid">{_.map(reviews, (review, index) => this.renderReview(review, index))}</div>
                    </div>
                )}
                <div style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"><div style="z-index: 4; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px);"><div style="position: absolute; left: 0px; top: 0px; z-index: 104; width: 100%;"></div><div style="position: absolute; left: 0px; top: 0px; z-index: 105; width: 100%;"></div><div style="position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;"></div><div style="position: absolute; left: 0px; top: 0px; z-index: 107; width: 100%;"></div></div></div>
            </section>
        );
    }
}
