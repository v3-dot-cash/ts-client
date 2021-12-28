
# Fund Account Connection

Details of how to access a fund account

## Structure

`FundAccountConnection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `connectorCredentials` | `unknown` | Required | - |
| `connectorId` | `string` | Required | Unique Id of the associated type of connector |
| `fundAccountId` | `string` | Required | Unique Id of the associated fund account |
| `name` | `string` | Required | Unique name to identify the connector |
| `ownerId` | `string \| undefined` | Optional | Unique Id of the associated account holder |

## Example (as JSON)

```json
{
  "connector_credentials": {
    "token": "token"
  },
  "connector_id": "80dbf797-6e35-4b5c-8cfb-703a79cce584",
  "fund_account_id": "a0dbf797-6e35-4b5c-8cfb-703a79cce584",
  "name": "plaid token for BofA",
  "owner_id": "a0dbf797-6e35-4b5c-8cfb-703a79cce584"
}
```

