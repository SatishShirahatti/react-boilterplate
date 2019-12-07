import { CogniteClient } from '@cognite/sdk';

const project = 'kvaerner-dev';
const apikey ="ZjY2NTY2YTktMWRmYi00MzAyLWI2OTQtNTMwOTJiMzEzODFm";

const client = new CogniteClient({ appId: 'Cognite 3D model' });
client.loginWithApiKey({ project: project,apiKey: apikey,});
 
export default client;
