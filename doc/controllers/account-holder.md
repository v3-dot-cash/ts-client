# Account Holder

```ts
const accountHolderController = new AccountHolderController(client);
```

## Class Name

`AccountHolderController`

## Methods

* [Get Account Holder List](/doc/controllers/account-holder.md#get-account-holder-list)
* [Get Account Holder](/doc/controllers/account-holder.md#get-account-holder)


# Get Account Holder List

List all Account Holder

```ts
async getAccountHolderList(
  tenantId: string,
  xUserId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountHolderListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tenantId` | `string` | Template, Required | Valid Tenant Id for request |
| `xUserId` | `string` | Header, Required | Valid User Id who is executing the request , this is used for audit invalid user id will fail |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AccountHolderListResponse`](/doc/models/account-holder-list-response.md)

## Example Usage

```ts
const tenantId = 'f64f5cda-3aa8-4b4d-961c-8f54df5db4a9';
const xUserId = '13358271-15b0-4f60-a6e9-f4cd479ec142';
try {
  const { result, ...httpResponse } = await accountHolderController.getAccountHolderList(tenantId, xUserId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Account Holder

Details of Single Account Holder

```ts
async getAccountHolder(
  tenantId: string,
  id: string,
  xUserId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountHolderResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tenantId` | `string` | Template, Required | Valid Tenant Id for request |
| `id` | `string` | Template, Required | Valid Account Holder Id |
| `xUserId` | `string` | Header, Required | Valid User Id who is executing the request , this is used for audit invalid user id will fail |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AccountHolderResponse`](/doc/models/account-holder-response.md)

## Example Usage

```ts
const tenantId = 'f64f5cda-3aa8-4b4d-961c-8f54df5db4a9';
const id = '66c4e043-8168-4c31-bd1b-9038cccea95a';
const xUserId = '13358271-15b0-4f60-a6e9-f4cd479ec142';
try {
  const { result, ...httpResponse } = await accountHolderController.getAccountHolder(tenantId, id, xUserId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

