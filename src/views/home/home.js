import React, { Component } from 'react';
import { CogniteClient } from '@cognite/sdk';
import './home.css'
import Layout from '../../components/layout'
import Actions from './actions';
import client from "../../../src/api/cogniteclientInstance";

const project = 'kvaerner-dev';
const apikey ="ZjY2NTY2YTktMWRmYi00MzAyLWI2OTQtNTMwOTJiMzEzODFm";

export default class Home extends Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event.currentTarget.id);
    const currentID = event.currentTarget.id;
    this.props.history.push(`/model/${currentID}/revisions/`);
  }
 state = { assets: [] }
 async componentDidMount() {
 //   this.props.dispatch(Actions.test("John Doe"));
 const client = new CogniteClient({ appId: 'Cognite 3D model' });
 client.loginWithApiKey({ project: project,apiKey: apikey,});
 const assets = await client.assets.list().autoPagingToArray({ limit: 100 });
  this.setState({ assets});
  }
  
  render() {
    const { assets } = this.state;
    return (
      <Layout className="home">
          <div className="container">
  <h1>Cognite 3D model</h1>
  <div className="row">
  {assets && this.state.assets.map(asset => (
  <div className="col-md-4" key={asset.id} className="colheader">
    <div key={asset.id} id={asset.id} onClick={this.handleSort} className= "rowcards" onClick={this.handleClick}>
      <h3>Id:{asset.id}</h3><p>Name:{asset.name}</p>
      </div>
      </div>
      ))}
      </div>                 
</div>
      </Layout>
    );
  }
}