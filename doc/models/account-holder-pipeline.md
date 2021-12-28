
# Account Holder Pipeline

Describes a connection between payer and beneficiary. This is used to evaluate dispute and aml risks

## Structure

`AccountHolderPipeline`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `beneficiary` | [`AccountHolder \| undefined`](/doc/models/account-holder.md) | Optional | This will be used only if beneficiary_id is abscent |
| `beneficiaryId` | `string \| undefined` | Optional | Unique Id of the associated beneficiary |
| `name` | `string` | Required | Unique name to identify the pipeline |
| `ownerId` | `string` | Required | Unique Id of the associated tenant |
| `payer` | [`AccountHolder \| undefined`](/doc/models/account-holder.md) | Optional | This will be used only if payer_id is abscent |
| `payerId` | `string \| undefined` | Optional | Unique Id of the payer |
| `status` | [`Status3Enum`](/doc/models/status-3-enum.md) | Required | status of account holder pipeline, non active pipeliones will get blocked |

## Example (as JSON)

```json
{
  "beneficiary_id": "80dbf797-6e35-4b5c-8cfb-703a79cce584",
  "name": "Himangshu_v3dotcash_consulting",
  "owner_id": "a0dbf797-6e35-4b5c-8cfb-703a79cce584",
  "payer": {
    "billing": {
      "city": "San Francisco",
      "country": "USA",
      "line1": "221, Baker St",
      "line2": "B",
      "state": "CA",
      "status": "verified",
      "zip": "12345"
    },
    "company": {
      "address": {
        "city": "San Francisco",
        "country": "USA",
        "line1": "221, Baker St",
        "line2": "B",
        "state": "CA",
        "status": "verified",
        "zip": "12345"
      },
      "dba_name": "Alexander Hamilton dot ai",
      "legal_name": "v3 dot cash",
      "status": "verified",
      "tax_id": "87-1234567",
      "tax_id_name": "CA"
    },
    "name": "v3 dot cash demo account",
    "owner_id": "80dbf797-6e35-4b5c-8cfb-703a79cce584",
    "primary_individual": {
      "address": {
        "city": "San Francisco",
        "country": "USA",
        "line1": "221, Baker St",
        "line2": "B",
        "state": "CA",
        "status": "verified",
        "zip": "12345"
      },
      "dob": "2000-01-01",
      "email": "hh@v3.cash",
      "first_name": "Himangshu",
      "last_name": "Hazarika",
      "phone": "4151231240",
      "ssn_last4": "1000",
      "status": "verified",
      "tokenized_ssn": "$argon2id$v=19$m=131072,t=8,p=4$1pylGTZ06KyH41v4Bae6dQ$nQUhTe9xpk34HK85EjZ2A+3fmuORXkIwRVIsiaeqDR4"
    },
    "type": "business"
  },
  "payer_id": "a0dbf797-6e35-4b5c-8cfb-703a79cce584",
  "status": "active"
}
```

