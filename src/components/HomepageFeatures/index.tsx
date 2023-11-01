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
    title: 'Development',
    ImgPath: require('@site/static/img/development.png').default,
    description: (
      <>
        Learn about development practices and guidelines.
      </>
    ),
    link: '/docs/development',
  },
  {
    title: 'Requirements',
    ImgPath: require('@site/static/img/requirements.png').default,
    description: (
      <>
        Check out the requirements for your project.
      </>
    ),
    link: '/docs/production-deployment/requirements',
  },
  {
    title: 'Production Deployment',
    ImgPath: require('@site/static/img/deployment.png').default,
    description: (
      <>
        Explore how to deploy your project in a production environment.
      </>
    ),
    link: '/docs/production-deployment',
  },
  {
    title: 'Architecture and Design',
    ImgPath: require('@site/static/img/architecture.png').default,
    description: (
      <>
        Understand the architecture and design of our project.
      </>
    ),
    link: '/docs/architecture-and-design',
  },
  {
    title: 'Caching',
    ImgPath: require('@site/static/img/caching.png').default,
    description: (
      <>
        Learn about caching and its importance in our project.
      </>
    ),
    link: '/docs/caching',
  },
  {
    title: 'SQL Interface',
    ImgPath: require('@site/static/img/sql.png').default,
    description: (
      <>
        Explore the SQL interface in our project.
      </>
    ),
    link: '/docs/sql-interface',
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
    title: 'Testing and Debugging',
    ImgPath: require('@site/static/img/testing.png').default,
    description: (
      <>
        Tips and techniques for testing and debugging your project.
      </>
    ),
    link: '/docs/testing-and-debugging',
  },
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
