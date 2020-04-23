import React, { useReducer } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
import { createTalk } from './graphql/mutations';

type TalkState = {
  name: string;
  description: string;
  speakerName: string;
  speakerBio: string;
};

const talkReducer = (
  state: TalkState,
  action: { type: string; payload: TalkState },
) => ({
  ...state,
  ...action.payload,
});

const Create = () => {
  const [talk, dispatchTalk] = useReducer(talkReducer, {
    name: '',
    description: '',
    speakerName: '',
    speakerBio: '',
  });

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    if (
      talk.name === '' ||
      talk.description === '' ||
      talk.speakerName === '' ||
      talk.speakerBio === ''
    )
      return;

    const newTalk = {
      ...talk,
      clientId: uuidv4(),
    };

    dispatchTalk({
      type: '',
      payload: {
        name: '',
        description: '',
        speakerName: '',
        speakerBio: '',
      },
    });

    console.log('newTalk', createTalk, newTalk);
    try {
      await API.graphql(
        graphqlOperation(createTalk, { input: newTalk }),
      );
    } catch (error) {
      console.log('error creating talk...', error);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const values: any = {};
    values[e.target.getAttribute('name') ?? 'catchall'] =
      e.target.value;

    dispatchTalk({
      type: '',
      payload: {
        ...talk,
        ...values,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        onChange={onChange}
        value={talk.name}
        placeholder="name"
      />
      <input
        name="description"
        onChange={onChange}
        value={talk.description}
        placeholder="description"
      />
      <input
        name="speakerName"
        onChange={onChange}
        value={talk.speakerName}
        placeholder="speakerName"
      />
      <input
        name="speakerBio"
        onChange={onChange}
        value={talk.speakerBio}
        placeholder="speakerBio"
      />
      <button type="submit">Create Talk</button>
    </form>
  );
};

export default Create;
