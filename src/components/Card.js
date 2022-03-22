import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ content }) => {
  return (
    <article className="card">
      <div className="card__wrapper">
        <div className="card__header">
          <div className="card__details-wrapper">
            <div className="card__length">
              <span className="sr-only">Course length:</span>
              {content.length}
              <span className="sr-only">Minutes</span>
            </div>
            <div className="card__created">
              Created <span className="sr-only">on</span>
              {new Date(content.created_at)
                .toDateString()
                .split(' ')
                .slice(1)
                .join(' ')}
            </div>
          </div>
          <div
            className="card__thumbnail"
            style={{ backgroundImage: `url(${window.location.origin + '/' + content.image_url})` }}
          ></div>
        </div>
        <div className="card__desc-wrapper">
          <Link to="#">
            <h2 className="card__title">{content.title}</h2>
            <div className="card__subtitle">{content.description}</div>
          </Link>
        </div>
        <div className="card__footer">
          {/* <Button
            type="primary"
            buttonClass="card__btn"
            text={!isCoursePaid ? 'Start Course' : 'Buy Course'}
          /> */}
        </div>
      </div>
    </article>
  );
};

export default Card;
