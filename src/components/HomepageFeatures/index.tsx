import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export type FeatureItem = {
  title: string;
  description: JSX.Element;
  img?: string;
};

function Feature4Column({ title, description, img }: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center padding-horiz--md">
        <img src={img} className={styles.featureImg} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
function Feature3Column({ title, description, img }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        {img ? <img src={img} className={styles.featureImg} /> : <></>}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures({ features }: { features: FeatureItem[] }): JSX.Element {

  const FeatureElement = features.length === 3 ? Feature3Column : Feature4Column
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <FeatureElement key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
