## First experiment with AWS Amplify

Followed this tutorial: https://github.com/dabit3/aws-appsync-react-workshop

## Amplify Console

Wired up continuous integration so that a push to GitHub's `master` branch will trigger a deploy:
https://us-west-2.console.aws.amazon.com/amplify/home?region=us-west-2#/

URL: https://master.d26v5hqf1tamjr.amplifyapp.com


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