# Account Holder Pipeline

```ts
const accountHolderPipelineController = new AccountHolderPipelineController(client);
```

## Class Name

`AccountHolderPipelineController`


# Create Account Holder Pipeline

Create an AccountHolderPipeline to allow transactions

```ts
async createAccountHolderPipeline(
  tenantId: string,
  xUserId: string,
  body: AccountHolderPipelineCreateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AccountHolderPipelineResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tenantId` | `string` | Template, Required | Valid Tenant Id for request |
| `xUserId` | `string` | Header, Required | Valid User Id who is executing the request , this is used for audit invalid user id will fail |
| `body` | [`AccountHolderPipelineCreateRequest`](/doc/models/account-holder-pipeline-create-request.md) | Body, Required | The Account Holder Pipeline attributes |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AccountHolderPipelineResponse`](/doc/models/account-holder-pipeline-response.md)

## Example Usage

```ts
const tenantId = 'f64f5cda-3aa8-4b4d-961c-8f54df5db4a9';
const xUserId = '13358271-15b0-4f60-a6e9-f4cd479ec142';
const contentType = null;
const bodyAccountHolderPipelinePayerBilling: Address = {};
bodyAccountHolderPipelinePayerBilling.city = 'San Francisco';
bodyAccountHolderPipelinePayerBilling.country = 'USA';
bodyAccountHolderPipelinePayerBilling.line1 = '221, Baker St';
bodyAccountHolderPipelinePayerBilling.line2 = 'B';
bodyAccountHolderPipelinePayerBilling.state = 'CA';
bodyAccountHolderPipelinePayerBilling.status = 'verified';
bodyAccountHolderPipelinePayerBilling.zip = '12345';

const bodyAccountHolderPipelinePayerPrimaryIndividualAddress: Address = {};
bodyAccountHolderPipelinePayerPrimaryIndividualAddress.city = 'San Francisco';
bodyAccountHolderPipelinePayerPrimaryIndividualAddress.country = 'USA';
bodyAccountHolderPipelinePayerPrimaryIndividualAddress.line1 = '221, Baker St';
bodyAccountHolderPipelinePayerPrimaryIndividualAddress.line2 = 'B';
bodyAccountHolderPipelinePayerPrimaryIndividualAddress.state = 'CA';
bodyAccountHolderPipelinePayerPrimaryIndividualAddress.status = 'verified';
bodyAccountHolderPipelinePayerPrimaryIndividualAddress.zip = '12345';

const bodyAccountHolderPipelinePayerPrimaryIndividual: Individual = {};
bodyAccountHolderPipelinePayerPrimaryIndividual.address = bodyAccountHolderPipelinePayerPrimaryIndividualAddress;
bodyAccountHolderPipelinePayerPrimaryIndividual.dob = '2000-01-01';
bodyAccountHolderPipelinePayerPrimaryIndividual.email = 'hh@v3.cash';
bodyAccountHolderPipelinePayerPrimaryIndividual.firstName = 'Himangshu';
bodyAccountHolderPipelinePayerPrimaryIndividual.lastName = 'Hazarika';
bodyAccountHolderPipelinePayerPrimaryIndividual.phone = '4151231240';
bodyAccountHolderPipelinePayerPrimaryIndividual.ssnLast4 = '1000';
bodyAccountHolderPipelinePayerPrimaryIndividual.status = 'verified';
bodyAccountHolderPipelinePayerPrimaryIndividual.tokenizedSsn = '$argon2id$v=19$m=131072,t=8,p=4$1pylGTZ06KyH41v4Bae6dQ$nQUhTe9xpk34HK85EjZ2A+3fmuORXkIwRVIsiaeqDR4';

const bodyAccountHolderPipelinePayerCompanyAddress: Address = {};
bodyAccountHolderPipelinePayerCompanyAddress.city = 'San Francisco';
bodyAccountHolderPipelinePayerCompanyAddress.country = 'USA';
bodyAccountHolderPipelinePayerCompanyAddress.line1 = '221, Baker St';
bodyAccountHolderPipelinePayerCompanyAddress.line2 = 'B';
bodyAccountHolderPipelinePayerCompanyAddress.state = 'CA';
bodyAccountHolderPipelinePayerCompanyAddress.status = 'verified';
bodyAccountHolderPipelinePayerCompanyAddress.zip = '12345';

const bodyAccountHolderPipelinePayerCompany: Company = {};
bodyAccountHolderPipelinePayerCompany.address = bodyAccountHolderPipelinePayerCompanyAddress;
bodyAccountHolderPipelinePayerCompany.dbaName = 'Alexander Hamilton dot ai';
bodyAccountHolderPipelinePayerCompany.legalName = 'v3 dot cash';
bodyAccountHolderPipelinePayerCompany.status = 'verified';
bodyAccountHolderPipelinePayerCompany.taxId = '87-1234567';
bodyAccountHolderPipelinePayerCompany.taxIdName = 'CA';

const bodyAccountHolderPipelinePayer: AccountHolder = {
  billing: bodyAccountHolderPipelinePayerBilling,
  name: 'v3 dot cash demo account',
  ownerId: '80dbf797-6e35-4b5c-8cfb-703a79cce584',
  primaryIndividual: bodyAccountHolderPipelinePayerPrimaryIndividual,
  type: 'business',
};
bodyAccountHolderPipelinePayer.company = bodyAccountHolderPipelinePayerCompany;

const bodyAccountHolderPipeline: AccountHolderPipeline = {
  name: 'Himangshu_v3dotcash_consulting',
  ownerId: 'a0dbf797-6e35-4b5c-8cfb-703a79cce584',
  status: 'active',
};
bodyAccountHolderPipeline.beneficiaryId = '80dbf797-6e35-4b5c-8cfb-703a79cce584';
bodyAccountHolderPipeline.payer = bodyAccountHolderPipelinePayer;

const body: AccountHolderPipelineCreateRequest = {};
body.accountHolderPipeline = bodyAccountHolderPipeline;

try {
  const { result, ...httpResponse } = await accountHolderPipelineController.createAccountHolderPipeline(tenantId, xUserId, body);
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

