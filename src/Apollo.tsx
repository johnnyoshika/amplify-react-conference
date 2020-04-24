import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { listTalks } from './graphql/queries';
import { Talk } from './models';

const Apollo = () => {
  const { data, loading, error } = useQuery(gql(listTalks));

  if (error) return <div>Error</div>;
  if (loading && !data) return <div>Loading...</div>;

  return (
    <>
      {data.listTalks.items.map((talk: Talk, index: Number) => (
        <div key={index.toString()}>
          <div>
            <strong>{talk.speakerName}</strong>
          </div>
          <div>{talk.name}</div>
          <div>{talk.description}</div>
        </div>
      ))}
    </>
  );
};

export default Apollo;
