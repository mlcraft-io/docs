import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Quick Start',
    Svg: require('@site/static/img/start.svg').default,
    description: (
      <>
        Get started quickly with our quick start guide.
      </>
    ),
    link: '/docs/quickstart',
  },
  {
    title: 'Development',
    Svg: require('@site/static/img/Development.svg').default,
    description: (
      <>
        Learn about development practices and guidelines.
      </>
    ),
    link: '/docs/development',
  },
  {
    title: 'Requirements',
    Svg: require('@site/static/img/requirements.svg').default,
    description: (
      <>
        Check out the requirements for your project.
      </>
    ),
    link: '/docs/production-deployment/requirements',
  },
  {
    title: 'Production Deployment',
    Svg: require('@site/static/img/deployment.svg').default,
    description: (
      <>
        Explore how to deploy your project in a production environment.
      </>
    ),
    link: '/docs/production-deployment',
  },
  {
    title: 'Architecture and Design',
    Svg: require('@site/static/img/architecture.svg').default,
    description: (
      <>
        Understand the architecture and design of our project.
      </>
    ),
    link: '/docs/architecture-and-design',
  },
  {
    title: 'Caching',
    Svg: require('@site/static/img/caching.svg').default,
    description: (
      <>
        Learn about caching and its importance in our project.
      </>
    ),
    link: '/docs/caching',
  },
  {
    title: 'SQL Interface',
    Svg: require('@site/static/img/sql.svg').default,
    description: (
      <>
        Explore the SQL interface in our project.
      </>
    ),
    link: '/docs/sql-interface',
  },
  {
    title: 'User Guide',
    Svg: require('@site/static/img/User Guide.svg').default,
    description: (
      <>
        A comprehensive user guide to help you get started.
      </>
    ),
    link: '/docs/user-guide/',
  },
  {
    title: 'Testing and Debugging',
    Svg: require('@site/static/img/testing.svg').default,
    description: (
      <>
        Tips and techniques for testing and debugging your project.
      </>
    ),
    link: '/docs/testing-and-debugging',
  },
];

function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <a href={link} className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
