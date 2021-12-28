
# Company

Legal details of a business entity

## Structure

`Company`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`Address \| undefined`](/doc/models/address.md) | Optional | Legal physical address |
| `dbaName` | `string \| undefined` | Optional | Trading Name or business name which may be different from registered name |
| `legalName` | `string \| undefined` | Optional | Trading Name or business name which may be different from registered name |
| `status` | [`StatusEnum \| undefined`](/doc/models/status-enum.md) | Optional | status of address |
| `taxId` | `string \| undefined` | Optional | value of TIN or EIN |
| `taxIdName` | `string \| undefined` | Optional | Type of Tax Id TIN/EIN |

## Example (as JSON)

```json
{
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
}
```

