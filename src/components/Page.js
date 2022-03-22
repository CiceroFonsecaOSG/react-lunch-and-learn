import React from 'react';
import Card from './Card';
import { courses } from '../data';

const Page = ({ componentName, componentUrl }) => {
  const component = componentName.toLowerCase();

  return (
    <section className={component}>
      <div className={`${component} page-content__wrapper padded-section`}>
        {courses && courses.sort( () => Math.random() - 0.5).map((item) => <Card content={item} key={item.id} />)}
      </div>
    </section>
  );
};

export default Page;
