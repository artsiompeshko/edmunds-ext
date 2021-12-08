import React from 'react';
import cn from 'classnames';
import ReactStars from 'react-stars';

import check from 'bundle-text:./check.svg';
import cross from 'bundle-text:./cross.svg';

import styles from './reviews.module.scss';
import bootstrapStyles from '../../styles/bootstrap.module.scss';

function Review({review}) {
  console.log(review);

  if (!review) {
    return null;
  }

  const renderDetails = () => {
    if (!review.pros && !review.cons) {
      return null;
    }

    return (
      <ul>
        {review?.pros.map(text => (
          <li
            key={text}
            className={cn(
              bootstrapStyles['d-flex'],
              bootstrapStyles['align-items-center'],
              bootstrapStyles['mb-2']
            )}
            style={{fontSize: '16px', color: '#555'}}
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
        {review?.cons.map(text => (
          <li
            key={text}
            className={cn(
              bootstrapStyles['d-flex'],
              bootstrapStyles['align-items-center'],
              bootstrapStyles['mb-2']
            )}
            style={{fontSize: '16px', color: '#555'}}
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

  return (
    <div>
      <h4 className={cn(bootstrapStyles['mb-2'])} style={{fontSize: '20px', color: '#333'}}>
        Edmunds Experts Review:
      </h4>
      {renderDetails()}
      <div
        dangerouslySetInnerHTML={{__html: review.summary}}
        className={(bootstrapStyles['fs-6'], bootstrapStyles['mt-2'], styles.reviews_summary)}
      ></div>
    </div>
  );
}

export default Review;
