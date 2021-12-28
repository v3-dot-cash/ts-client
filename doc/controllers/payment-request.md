# Payment Request

```ts
const paymentRequestController = new PaymentRequestController(client);
```

## Class Name

`PaymentRequestController`


# Create Payment Request

Creates a PaymentRequest for an accountholder_pipeline

```ts
async createPaymentRequest(
  tenantId: string,
  xUserId: string,
  body: PaymentRequestCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentRequestListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tenantId` | `string` | Template, Required | Valid Tenant Id for request |
| `xUserId` | `string` | Header, Required | Valid User Id who is executing the request , this is used for audit invalid user id will fail |
| `body` | [`PaymentRequestCreateRequest`](/doc/models/payment-request-create-request.md) | Body, Required | The attributes of payment request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PaymentRequestListResponse`](/doc/models/payment-request-list-response.md)

## Example Usage

```ts
const tenantId = 'f64f5cda-3aa8-4b4d-961c-8f54df5db4a9';
const xUserId = '13358271-15b0-4f60-a6e9-f4cd479ec142';
const contentType = null;
const body: PaymentRequestCreateRequest = {};

try {
  const { result, ...httpResponse } = await paymentRequestController.createPaymentRequest(tenantId, xUserId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 422 | Bad Request Parameter | [`ApiErrorsError`](/doc/models/api-errors-error.md) |

