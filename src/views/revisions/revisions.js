import React, { Component } from 'react';
import Layout from '../../components/layout'
import Actions from './actions'
import client from "../../../src/api/cogniteclientInstance";

class Revisions extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false,
      revisionData: []
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    let path = this.props.location.pathname;
    const currentID = event.currentTarget.id;
    this.props.history.push(`${path}${currentID}`);
  }
  componentDidMount() {

    const { match, location, history } = this.props
    this.props.dispatch(Actions.test("Revisions"));

    const currentpath = this.props.match.params.id
    console.log("currentpath",currentpath)
   // fetch("models/5928237790582814/revisions/")
   //client.get("api/v1/projects/kvaerner-dev/3d/models/4008353286400193/revisions/")
   //const url = "api/v1/projects/kvaerner-dev/3d/models/"+currentpath+ "/revisions/"; // passing current id in url
   const url ="api/v1/projects/kvaerner-dev/3d/models/4008353286400193/revisions/"
   client.get(url)
   .then((res) => {
    console.log("API model", res.data.items);
    this.setState({revisionData: res.data.items})
  })
      .catch(() => this.setState({ hasErrors: true }));
  }

  render () {
    const {revisionData} = this.state;
    console.log(revisionData);
    return (
      <Layout className="revisions">
        Welcome  {this.props.test}
        <div className="container">
          <h1>Revision container</h1>
        <div className="row">
        {revisionData && this.state.revisionData.map(asset => (
      <div className="col-md-4" key={asset.id} className="colheader">
        <div key={asset.id} id={asset.id} onClick={this.handleSort} className= "rowcards" onClick={this.handleClick}>
          <h3>Id:{asset.id}</h3>
          <p>status:{asset.status}</p>
          <p>fileId:{asset.fileId}</p>
          </div>
          </div>
      ))}
            </div>                 
      </div>
      </Layout>
    );
  }
}

export default Revisions;