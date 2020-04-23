import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import { listTalks as ListTalks } from './graphql/queries';
import { GetTalkQuery } from './API';

interface GraphQLResult<T> {
  data?: T;
  errors?: [object];
  extensions?: { [key: string]: any };
}

// https://dev.to/stevelizcano/5-minute-tutorial-get-base-types-from-your-aws-amplify-graphql-schema-with-typescript-3636
interface Talk
  extends Omit<
    Exclude<GetTalkQuery['getTalk'], null>,
    '__typename'
  > {}

// https://stackoverflow.com/a/59223775/188740
type ListTalks = {
  listTalks: {
    items: Talk[];
  };
};

function App() {
  return <div>Hello!</div>;
}

export default App;
