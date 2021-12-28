
# Account Holder Pipeline Update Request

Request schema for creating an account holder pipeline

## Structure

`AccountHolderPipelineUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderPipeline` | [`AccountHolderPipeline \| undefined`](/doc/models/account-holder-pipeline.md) | Optional | The details of the pipeline |

## Example (as JSON)

```json
{
  "account_holder_pipeline": {
    "beneficiary_id": "80dbf797-6e35-4b5c-8cfb-703a79cce584",
    "name": "Himangshu_v3dotcash_consulting",
    "owner_id": "a0dbf797-6e35-4b5c-8cfb-703a79cce584",
    "payer_id": "a0dbf797-6e35-4b5c-8cfb-703a79cce584",
    "status": "active"
  }
}
```

