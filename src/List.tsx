import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import { listTalks } from './graphql/queries';
import { GraphQLResult, ListTalks, Talk } from './models';

function List() {
  const [talks, setTalks] = useState<Talk[]>([]);

  useEffect(() => {
    try {
      // don't await directly inside useEffect, b/c then a Promise will be returned and useEffect expects undefined or cleanup code to be returned
      (async function () {
        const talkData = (await API.graphql(
          graphqlOperation(listTalks),
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

export default List;
