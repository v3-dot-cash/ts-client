
# Payment Request Create Request

Schema to create a payment request

## Structure

`PaymentRequestCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`FundAccount \| undefined`](/doc/models/fund-account.md) | Optional | Details of account from which to collect or deposit funds |

## Example (as JSON)

```json
{
  "payment_request": {
    "account_holder_pipeline_id": "80dbf797-6e35-4b5c-8cfb-703a79cce584",
    "amount": "1560.42",
    "cut_off_time": "2021-12-06 03:19:00Z",
    "name": "checking account",
    "owner_id": "80dbf797-6e35-4b5c-8cfb-703a79cce584"
  }
}
```

