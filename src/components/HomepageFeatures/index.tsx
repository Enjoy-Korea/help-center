import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
  img: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Enkor Stay',
    description: (
      <>
        Cheaper and easier stays in Korea. No deposit. Resident Card documents automatically issued.
      </>
    ),
    img: '/img/service_portfolio_housing.png'
  },
  {
    title: 'Enkor Visa',
    description: (
      <>
        Resident Card application processing trusted by institutions in Korea. Easy and reliable with English customer support.
      </>
    ),
    img: '/img/service_portfolio_visa.png'
  },
  {
    title: 'Premium Bedding Rental',
    description: (
      <>Hassle-free bedding rental delivered to your dorm. Routine washing provided.</>
    ),
    img: '/img/service_portfolio_bedding.png'
  }
];

function Feature({ title, description, img }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <img src={img} className={styles.featureImg} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
