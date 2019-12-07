import React, { Component } from 'react';
import Layout from '../../components/layout';
import { CogniteClient } from '@cognite/sdk';
import Actions from './actions';
import client from "../../../src/api/cogniteclientInstance";
import "./model.css"
// const project = 'kvaerner-dev';
// const apikey ="ZjY2NTY2YTktMWRmYi00MzAyLWI2OTQtNTMwOTJiMzEzODFm";

class Model extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false,
      modelData: []
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    const currentID = event.currentTarget.id;
    this.props.history.push(`/model/${currentID}/revisions/`);
  }
  componentDidMount() {
 
    this.props.dispatch(Actions.test("In models"));
    //const client = new CogniteClient({ appId: 'Cognite 3D model' });
    //client.loginWithApiKey({ project: project,apiKey: apikey,});
  //  client.get("api/v1/projects/kvaerner-dev/3d/models/4008353286400193/revisions/8352436060423219")
    // fetch("https://api.cognitedata.com/api/v1/projects/kvaerner-dev/3d/models/")
    // .then(res => res.json())
    client.get("api/v1/projects/kvaerner-dev/3d/models/")
    .then((res) => {
  //    console.log("API model", res.data.items);
      this.setState({modelData: res.data.items})
    })
    .catch(() => this.setState({ hasErrors: true }));
  }

  render () {
    const {modelData} = this.state;
    return (
      <Layout className="model">
          <h2>{this.props.match.params.id}</h2>
        <div className="modelcontainer">
          <h1>model container</h1>
          <div className="row">
            {modelData&& this.state.modelData.map(asset => (
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

export default Model;