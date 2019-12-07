import React, { Component } from 'react';
import Layout from '../../components/layout'
import Actions from './actions';
import client from "../../../src/api/cogniteclientInstance";
import {Cognite3DViewer,Cognite3DModel,OnProgressData} from '@cognite/3d-viewer';
import { Revision3D } from '@cognite/sdk';
import { Model3DViewer } from '@cognite/gearbox';
import { ClientSDKProvider } from "@cognite/gearbox";
import "./getNodes.css"

class GetNodes extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false,
      nodeData: []
    }
  }

  componentDidMount() {
    this.props.dispatch(Actions.test("Nodes data"));
    // fetch("models/5928237790582814/revisions/5161268522729558/nodes?")
    // .then(res => res.json())
    // .then(res => this.setState({ nodeData: res }))
    // .catch(() => this.setState({ hasErrors: true }));
    client.get("api/v1/projects/kvaerner-dev/3d/models/5928237790582814/revisions/5161268522729558/nodes?")
    .then((res) => {
     //console.log("API model", res.data.items);
     this.setState({nodeData: res.data.items})
   })
       .catch(() => this.setState({ hasErrors: true }));
   }
  

  render () {
    const {nodeData} = this.state;

    return (
      <Layout > 
      <div className="getNodes">
          <h1>Nodes details</h1> 
        <div className="row">
        { nodeData && this.state.nodeData.map(asset => (
  <div className="col-md-4" key={asset.id} className="colheader">
    <div key={asset.id} id={asset.id} onClick={this.handleSort} className= "rowcards" onClick={this.handleClick}>
      <h3>Id:{asset.id}</h3>
      <p>Name:{asset.name}</p>
      <p>tree: {asset.treeIndex}</p>
      <p>boundingBox Max {asset.boundingBox.max}</p>
      <p>boundingBox min {asset.boundingBox.min}</p>
      </div>
      </div>
      ))}
         </div>  </div>                 
      </Layout>
    );
  }
}

export default GetNodes;