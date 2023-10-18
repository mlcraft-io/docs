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
    title: 'Overview',
    Svg: require('@site/static/img/overview.svg').default,
    description: (
      <>
        This is the overview of our project.
      </>
    ),
    link: '/docs/overview',
  },
  {
    title: 'Data Sources',
    Svg: require('@site/static/img/data.svg').default,
    description: (
      <>
        Learn about data sources.
      </>
    ),
    link: '/docs/interface/datasources',
  },
  {
    title: 'Models',
    Svg: require('@site/static/img/models.svg').default,
    description: (
      <>
        Explore models.
      </>
    ),
    link: '/docs/interface/models',
  },
  {
    title: 'Alerts',
    Svg: require('@site/static/img/alerts.svg').default,
    description: (
      <>
        Understand alerts.
      </>
    ),
    link: '/docs/interface/alerts',
  },
  {
    title: 'Reports',
    Svg: require('@site/static/img/reports.svg').default,
    description: (
      <>
        Access reports.
      </>
    ),
    link: '/docs/interface/reports',
  },
  {
    title: 'Logs',
    Svg: require('@site/static/img/logs.svg').default,
    description: (
      <>
        View logs.
      </>
    ),
    link: '/docs/interface/logs',
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
