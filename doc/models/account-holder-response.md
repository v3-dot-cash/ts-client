
# Account Holder Response

Response schema for a single account holders

## Structure

`AccountHolderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`AccountHolder \| undefined`](/doc/models/account-holder.md) | Optional | Legal defination of an account holder |

## Example (as JSON)

```json
{
  "data": {
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
  }
}
```

