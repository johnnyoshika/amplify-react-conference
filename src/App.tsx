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
  const [talks, setTalks] = useState<Talk[]>([]);

  useEffect(() => {
    try {
      // don't await directly inside useEffect, b/c then a Promise will be returned and useEffect expects undefined or cleanup code to be returned
      (async function () {
        const talkData = (await API.graphql(
          graphqlOperation(ListTalks),
        )) as GraphQLResult<ListTalks>;

        console.log('talkData', talkData);
        setTalks(talkData.data?.listTalks.items ?? []);
      })();
    } catch (error) {
      console.log('error fetching talks', error);
    }
  }, []);

  return (
    <>
      {talks.map((talk, index) => (
        <div key={index}>
          <h3>{talk.speakerName}</h3>
          <h5>{talk.name}</h5>
          <p>{talk.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
