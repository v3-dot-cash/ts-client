
# User Response

Response schema for one user

## Structure

`UserResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`User \| undefined`](/doc/models/user.md) | Optional | A user of the platform. This is used in context of authentication and authorization. A user can be a human or an api-client every request to the platform is invoked by a user |

## Example (as JSON)

```json
{
  "data": {
    "description": "Default Api User created when app is installed",
    "display_image": "/images/logo.jpeg",
    "id": "a172dc49-ce39-4222-a7a7-7c500d1c1c1c",
    "name": "default-api-user",
    "owner_id": "80dbf797-6e35-4b5c-8cfb-703a79cce584",
    "type": "api"
  }
}
```

