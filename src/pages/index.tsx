import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import Head from '@docusaurus/Head';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {/*<Link*/}
          {/*  className="button button--secondary button--lg"*/}
          {/*  to="/docs/intro">*/}
          {/*  Docusaurus Tutorial - 5min ⏱️*/}
          {/*</Link>*/}
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Head>
        <meta name="google-site-verification" content="Cz26yDpb24keq5f9kHKZXdKVd8eI4rmvm8MOfwFrAsQ" />
        <meta name="keywords" content="web development, front-end, back-end, full-stack, Angular, Vue.js, React, Spring Boot, Laravel, Node.js, Docker, Kubernetes, SQL, MongoDB, PostgreSQL, programming, coding, software engineering, developer learning, tutorials, API development" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="sovannaro" />
        <meta name="description" content="Explore the journey of a web developer learning front-end, back-end, and DevOps technologies. A comprehensive guide for developers and learners." />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
