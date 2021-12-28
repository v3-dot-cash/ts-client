
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
})
```

## v3.cash Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

## Controllers

| Name | Description |
|  --- | --- |
| accountHolderPipeline | Gets AccountHolderPipelineController |
| accountHolder | Gets AccountHolderController |
| paymentRequest | Gets PaymentRequestController |

