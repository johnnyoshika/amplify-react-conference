## First experiment with AWS Amplify

Followed this tutorial: https://github.com/dabit3/aws-appsync-react-workshop

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