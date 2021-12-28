
# Api Error Details

ApiErrorDetails

## Structure

`ApiErrorDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `field` | `string` | Required | Field with error message |
| `messages` | `string[]` | Required | Error message |

## Example (as JSON)

```json
{
  "field": "name",
  "messages": [
    "can't be blank"
  ]
}
```

