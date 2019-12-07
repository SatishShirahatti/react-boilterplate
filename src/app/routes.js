import React from 'react';
import { Route, Switch }  from 'react-router-dom';
import NotFound from "../views/notfound"
import Home from "../views/home"
import Model from '../views/model'
import Revisions from '../views/revisions'
import GetNodes from '../views/getNodes'
import Model3DView from '../views/Model3DViewer';

/**
 * Defines components to routes mapping.
 *
 * Everytime a new view is created, entry is required here to map the component to a specific route.
 *
 * [IMPORTANT]
 * All route entries are required to be done before the notFound component.
 *
 * @returns {XML}
 */
export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Model3DView}/>
      <Route exact path='/model' component={Model}/>
      <Route exact path='/model/:id' component={Model}/>
        {/* <Route exact path='/models/4008353286400193/revisions/8352436060423219' component={Model}/> */}
      <Route exact path='revisions' component={Revisions}/>
      <Route exact path='/model/:id/revisions' component={Revisions}/>
      <Route exact path='/model/:id/revisions/:id' component={Revisions}/>
      <Route exact path='/model/:id/revisions/:id/getNodes' component={GetNodes}/>
      <Route exact path='/getNodes' component={GetNodes}/>
      <Route exact path='/Model3DView' component={Model3DView}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  );
}