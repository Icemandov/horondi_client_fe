import React from 'react';
import useStyles from './feedback-item.styles';

const FeedbackItem = ({ name, value, date }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.comments}>
        <div>
          <div className={styles.head}>
            <h3>{name}</h3>
            <div className={styles.date}>{date}</div>
          </div>
          <div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              nesciunt odit perferendis saepe velit? Beatae eaque eius error
              molestias nostrum quasi sapiente similique tenetur voluptates.
              Enim iure nostrum numquam similique?
            </div>
            <div>
              Aut consequuntur ea esse libero nobis ratione saepe sequi! Aliquam
              assumenda blanditiis exercitationem neque nihil perferendis quas
              repellat sint voluptatem. Autem culpa dolores eaque enim fuga hic
              possimus quos voluptatem.
            </div>
            <div>
              Ad cum cumque cupiditate, esse ipsa labore nisi obcaecati
              reprehenderit sequi vero! Asperiores dolorem impedit nihil nulla
              vitae. Consequatur dolore doloribus explicabo id inventore porro
              quas quia vel voluptas voluptates.
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default FeedbackItem;
