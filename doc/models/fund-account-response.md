
# Fund Account Response

Response schema for a single fund account

## Structure

`FundAccountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`FundAccount \| undefined`](/doc/models/fund-account.md) | Optional | Details of account from which to collect or deposit funds |

## Example (as JSON)

```json
{
  "data": {
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
}
```

