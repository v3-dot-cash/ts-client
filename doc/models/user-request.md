
# User Request

Request schema for one user

## Structure

`UserRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `user` | [`User \| undefined`](/doc/models/user.md) | Optional | A user of the platform. This is used in context of authentication and authorization. A user can be a human or an api-client every request to the platform is invoked by a user |

## Example (as JSON)

```json
{
  "user": {
    "description": "Default Api User created when app is installed",
    "display_image": "/images/logo.jpeg",
    "name": "default-api-user",
    "owner_id": "80dbf797-6e35-4b5c-8cfb-703a79cce584",
    "type": "api"
  }
}
```

