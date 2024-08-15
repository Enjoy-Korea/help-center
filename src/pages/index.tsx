import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures, { FeatureItem } from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';


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

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/articles/housing/faq">
            Frequently asked questions
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Enkorwithus official help center."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures features={FeatureList} />
      </main>
    </Layout>
  );
}
