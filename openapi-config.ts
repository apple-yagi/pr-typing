// https://redux-toolkit.js.org/rtk-query/usage/code-generation#simple-usage
const config = {
  schemaFile: 'https://hackathon.stg-prtimes.net/spec/hackathon-api.yaml',
  apiFile: './src/api/emptyApi.ts',
  apiImport: 'emptySplitApi',
  outputFile: './src/api/prtimesHackthonApi.ts',
  exportName: 'prtimesHackthonApi',
  hooks: true,
};

export default config;
