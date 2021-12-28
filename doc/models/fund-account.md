
# Fund Account

Details of account from which to collect or deposit funds

## Structure

`FundAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `connections` | [`FundAccountConnection[] \| undefined`](/doc/models/fund-account-connection.md) | Optional | - |
| `name` | `string` | Required | Unique name to identify the account holder |
| `ownerId` | `string` | Required | Unique Id of the account holder |
| `type` | [`Type1Enum`](/doc/models/type-1-enum.md) | Required | status of account holder, non active consumers will get blocked |

## Example (as JSON)

```json
{
  "connections": [
    {
      "connector_credentials": {
        "token": "token"
      },
      "connector_id": "80dbf797-6e35-4b5c-8cfb-703a79cce584",
      "fund_account_id": "a0dbf797-6e35-4b5c-8cfb-703a79cce584",
      "name": "plaid token for BofA",
      "owner_id": "a0dbf797-6e35-4b5c-8cfb-703a79cce584"
    }
  ],
  "name": "checking account",
  "owner_id": "80dbf797-6e35-4b5c-8cfb-703a79cce584",
  "type": "checking"
}
```

