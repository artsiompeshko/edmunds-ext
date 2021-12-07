import React from 'react';
import cn from 'classnames';
import ReactStars from 'react-stars';

import check from 'bundle-text:./check.svg';
import cross from 'bundle-text:./cross.svg';

import bootstrapStyles from '../../styles/bootstrap.module.scss';

function Reviews({reviews}) {
  const renderEditorial = () => {
    if (!reviews.editorial) {
      return null;
    }

    return (
      <ul>
        {reviews.editorial.pros.map(text => (
          <li
            key={text}
            className={cn(
              bootstrapStyles['d-flex'],
              bootstrapStyles['align-items-center'],
              bootstrapStyles['mb-2']
            )}
          >
            <div
              className={cn(
                bootstrapStyles['d-flex'],
                bootstrapStyles['align-items-center'],
                bootstrapStyles['me-2']
              )}
              dangerouslySetInnerHTML={{__html: check}}
            ></div>
            {text}
          </li>
        ))}
        {reviews.editorial.cons &&
          reviews.editorial.cons.map(text => (
            <li
              key={text}
              className={cn(
                bootstrapStyles['d-flex'],
                bootstrapStyles['align-items-center'],
                bootstrapStyles['mb-2']
              )}
            >
              <div
                className={cn(
                  bootstrapStyles['d-flex'],
                  bootstrapStyles['align-items-center'],
                  bootstrapStyles['me-2']
                )}
                dangerouslySetInnerHTML={{__html: cross}}
              ></div>
              {text}
            </li>
          ))}
      </ul>
    );
  };

  const renderConsumers = () => {
    if (!reviews.consumers) {
      return null;
    }

    return (
      <ul>
        {reviews.consumers.map(review => (
          <li key={review.name} className={cn(bootstrapStyles['mb-2'])}>
            <div className={cn(bootstrapStyles['d-flex'], bootstrapStyles['align-items-center'])}>
              <ReactStars
                size={16}
                count={5}
                value={review.rating}
                edit={false}
                color1={'#a3a3a3'}
                color2={'#0069bf'}
                className={bootstrapStyles['pe-1']}
              />
              <span style={{color: '#0069bf'}} className={cn(bootstrapStyles['fw-bolder'])}>
                {review.short}
              </span>
            </div>
            <div
              style={{color: '#767676', fontSize: '12px'}}
              className={cn(
                bootstrapStyles['d-flex'],
                bootstrapStyles['align-items-center'],
                bootstrapStyles['mb-2']
              )}
            >
              <span>{review.name}, </span>
              <span>{review.date}</span>
            </div>
            <p>{review.text}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h4 className={cn(bootstrapStyles['mb-2'], bootstrapStyles['fs-5'])}>
        Edmunds Experts Review:
      </h4>
      {renderEditorial()}
      <h4 className={cn(bootstrapStyles['mb-2'], bootstrapStyles['mt-4'], bootstrapStyles['fs-5'])}>
        Consumer Reviews:
      </h4>
      {renderConsumers()}
    </div>
  );
}

export default Reviews;
