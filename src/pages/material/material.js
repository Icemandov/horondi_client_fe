import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './material.style';

const Material = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <section>
        <div className={styles.container}>
          <Typography variant='h1' className={styles.title}>
            Materials
          </Typography>
          <Typography paragraph>
            Tapestry - main part of HORONDI prduction. It&apos;s a piece of
            thick textile fabric with pictures or designs formed by weaving
            colored weft threads or by embroidering on canvas, used as a wall
            hanging or furniture covering.
          </Typography>
          <div />
        </div>
      </section>
      <section>
        <div className={styles.container}>
          <Typography variant='h2' className={styles.title}>
            Main textile
          </Typography>
          <div>
            <Typography variant='h3'>Malmo</Typography>
            <div>
              <Typography paragraph>
                (CNN) — European travelers have begun returning to the air as
                border restrictions ease, but the experience of a flight on the
                continent&apos;&apos;s biggest airline reveals just what&apos;s
                in store for those willing to fly in the wake of the pandemic.
              </Typography>
            </div>
          </div>
          <div>
            <Typography variant='h3'>Malmo</Typography>
            <div>
              <Typography paragraph>
                (CNN) — European travelers have begun returning to the air as
                border restrictions ease, but the experience of a flight on the
                continent&apos;s biggest airline reveals just what&apos;s in
                store for those willing to fly in the wake of the pandemic.
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.container}>
          <Typography variant='h2' className={styles.title}>
            Main textile
          </Typography>
          <div>
            <div>
              <Typography paragraph>
                (CNN) — European travelers have begun returning to the air as
                border restrictions ease, but the experience of a flight on the
                continent&apos;s biggest airline reveals just what&apos;s in
                store for those willing to fly in the wake of the pandemic.v
              </Typography>
            </div>
            <div>
              <Typography paragraph>
                (CNN) — European travelers have begun returning to the air as
                border restrictions ease, but the experience of a flight on the
                continent&apos;s biggest airline reveals just what&apos;s in
                store for those willing to fly in the wake of the pandemic.v
              </Typography>
            </div>
            <div>
              <Typography paragraph>
                (CNN) — European travelers have begun returning to the air as
                border restrictions ease, but the experience of a flight on the
                continent&apos;s biggest airline reveals just what&apos;s in
                store for those willing to fly in the wake of the pandemic.v
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Material;
