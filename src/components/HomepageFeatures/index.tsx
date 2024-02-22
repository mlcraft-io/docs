import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  ImgPath: string;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Quick Start',
    ImgPath: require('@site/static/img/start.png').default,
    description: (
      <>
        Get started quickly with our quick start guide.
      </>
    ),
    link: '/docs/quickstart',
  },
  {
    title: 'User Guide',
    ImgPath: require('@site/static/img/user-guide.png').default,
    description: (
      <>
        A comprehensive user guide to help you get started.
      </>
    ),
    link: '/docs/user-guide/',
  },
  {
    title: 'Development',
    ImgPath: require('@site/static/img/development.png').default,
    description: (
      <>
        Learn about development practices and guidelines.
      </>
    ),
    link: '/docs/development',
  }
];

function Feature({ title, ImgPath, description, link }: FeatureItem) {
  return (
    <a href={link} className={clsx('col col--4')}>
      <div className="text--center">
        <img src={ImgPath} className={styles.featureImg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
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
