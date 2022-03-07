import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Fácil de usar',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        O sistema agulhão é totalmente web e desenhado para ser prático e poderoso.
        Tudo para aumentar sua produtividade! Achou algo difícil? A gente descomplica 😉
      </>
    ),
  },
  {
    title: 'Foque no seu trabalho',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        O foco do agulhão e desta documentação é para que você possa agilizar suas dúvidas
        ou conhecer mais sobre nossas ferramentas, tudo para que você possa focar no que importa, seu trabalho 😁
      </>
    ),
  },
  {
    title: 'Aplicativo',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Com nosso aplicativo otimizamos sua vida e a de seus parceiros. Confira o que podemos fazer 🧐
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
