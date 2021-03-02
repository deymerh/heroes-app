import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className="card-colums">
      {
        heroes.map(hero => {
          return (
            <HeroCard
              key={hero.id}
              {...hero}
            />
          )
        })
      }
    </div>
  )
};
