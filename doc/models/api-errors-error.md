
# Api Errors Error

Error Responses

## Structure

`ApiErrorsError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`ApiErrorDetails[]`](/doc/models/api-error-details.md) | Required | - |

## Example (as JSON)

```json
{
  "errors": [
    {
      "field": "name",
      "messages": [
        "can't be blank"
      ]
    }
  ]
}
```

