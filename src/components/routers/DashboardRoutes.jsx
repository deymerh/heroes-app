import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DcScreen } from '../dc/DcScreen';
import { HeroScreen } from '../heroes/HeroScreen';
import { MarvelScreen } from '../marvel/MarvelScreen';
import { SearchScreen } from '../search/SearchScreen';
import { Navbar } from '../ui/Nabvar'

export const DashboardRoutes = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Route exact path="/hero/:heroesId" component={HeroScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>

    </div>
  )
}
