// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateTalk = /* GraphQL */ `
  subscription OnCreateTalk {
    onCreateTalk {
      id
      clientId
      name
      description
      speakerName
      speakerBio
    }
  }
`;
export const onUpdateTalk = /* GraphQL */ `
  subscription OnUpdateTalk {
    onUpdateTalk {
      id
      clientId
      name
      description
      speakerName
      speakerBio
    }
  }
`;
export const onDeleteTalk = /* GraphQL */ `
  subscription OnDeleteTalk {
    onDeleteTalk {
      id
      clientId
      name
      description
      speakerName
      speakerBio
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($createdBy: String!) {
    onCreateComment(createdBy: $createdBy) {
      id
      message
      createdBy
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($createdBy: String!) {
    onUpdateComment(createdBy: $createdBy) {
      id
      message
      createdBy
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($createdBy: String!) {
    onDeleteComment(createdBy: $createdBy) {
      id
      message
      createdBy
    }
  }
`;
