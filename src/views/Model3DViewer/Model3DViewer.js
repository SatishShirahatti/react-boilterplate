import React, { Component } from 'react';
import Layout from '../../components/layout'
import Actions from './actions';
import client from "../../../src/api/cogniteclientInstance";
import {Cognite3DViewer,Cognite3DModel,OnProgressData} from '@cognite/3d-viewer';
import { Revision3D } from '@cognite/sdk';
import { Model3DViewer } from '@cognite/gearbox';
import { ClientSDKProvider } from "@cognite/gearbox";
import "./Model3DViewer.css"
import * as THREE from 'three';

const modelID = 5928237790582814;
const revisionID = 5161268522729558;
const cache = {};
const handleClick = (nodeId,vector) => {
  console.log("clk", nodeId,vector);
  //const intersection = this.Cognite3DViewer.getIntersectionFromPixel(vector.x,vector.y);
  //console.log("intersection ->",intersection)
}

const onProgress = (progress) => {
//  console.log("progress",progress);
};

const onComplete = () => {
 // console.log("progress",onComplete);
};
const onReady = (
  Cognite3DViewer ,
  Cognite3DModel ,
  Revision3D
) => {
  console.log("readrview ->>",Cognite3DViewer)
  console.log("Cognite3DModel ->",Cognite3DModel)
  console.log("readrevision ->>>",Revision3D)
};
class Model3DView extends Component {
  
  constructor(props) {
    super(props);
   // this.handleClick = this.handleClick.bind(this);
  }

  

  componentDidMount() {
    this.props.dispatch(Actions.test("Model3DViewer"));
  }
 
  render () { 
    console.log(" worrking client->", client);
    return (
      <ClientSDKProvider client={client}>
        <h1>Welcome 3D Models World</h1>
      <Layout className="Model3DViewer" >
        <Model3DViewer
      modelId={modelID}
      revisionId={revisionID}
      showScreenshotButton={true}
      onClick={handleClick}
      onProgress={onProgress}
      onComplete={onComplete}
      onReady={onReady}
      cache={cache}
    />
      </Layout>
      </ClientSDKProvider>
    );
  }
}

export default Model3DView;