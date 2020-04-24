## First experiment with AWS Amplify

Followed this tutorial: https://github.com/dabit3/aws-appsync-react-workshop

## Amplify Console

Wired up continuous integration so that a push to GitHub's `master` branch will trigger a deploy:
https://us-west-2.console.aws.amazon.com/amplify/home?region=us-west-2#/

URL: https://master.d26v5hqf1tamjr.amplifyapp.com

## 2020-04-23 Update

Auth seems to be broken. Amplify no longer triggers the login flow in our app when a user is not logged in. This is the case in dev (using `amplify mock`) and production. It was working fine before, so I'm not sure when or how this broke.

## Known problems
When mocking using `amplify mock`, this query (which uses a Lambda GraphQL resolver) doesn't work:

```
query {
  getCoins {
    id
    name
    symbol
    price_usd
  }
}
```

The result is always:

```
{
  "data": {
    "getCoins": null
  }
}
```

The query does work in the published GraphQL API.