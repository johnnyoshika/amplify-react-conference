import { GetTalkQuery } from './API';

export interface GraphQLResult<T> {
  data?: T;
  errors?: [object];
  extensions?: { [key: string]: any };
}

// https://dev.to/stevelizcano/5-minute-tutorial-get-base-types-from-your-aws-amplify-graphql-schema-with-typescript-3636
export interface Talk
  extends Omit<
    Exclude<GetTalkQuery['getTalk'], null>,
    '__typename'
  > {}

// https://stackoverflow.com/a/59223775/188740
export type ListTalks = {
  listTalks: {
    items: Talk[];
  };
};
