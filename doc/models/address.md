
# Address

Legal physical address

## Structure

`Address`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `city` | `string \| undefined` | Optional | city |
| `country` | `string \| undefined` | Optional | country of address |
| `line1` | `string \| undefined` | Optional | street address |
| `line2` | `string \| undefined` | Optional | Apt No/Suite No |
| `state` | `string \| undefined` | Optional | State |
| `status` | [`StatusEnum \| undefined`](/doc/models/status-enum.md) | Optional | status of address |
| `zip` | `string \| undefined` | Optional | Zip code |

## Example (as JSON)

```json
{
  "city": "San Francisco",
  "country": "USA",
  "line1": "221, Baker St",
  "line2": "B",
  "state": "CA",
  "status": "verified",
  "zip": "12345"
}
```

