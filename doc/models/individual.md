
# Individual

Legal details of an individual required to identify a transaction

## Structure

`Individual`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`Address \| undefined`](/doc/models/address.md) | Optional | Legal physical address |
| `dob` | `string \| undefined` | Optional | Date of Birth |
| `email` | `string \| undefined` | Optional | Email Id of the individual |
| `firstName` | `string \| undefined` | Optional | First name of the individual |
| `lastName` | `string \| undefined` | Optional | Last name of the individual |
| `phone` | `string \| undefined` | Optional | Phone of the individual |
| `ssnLast4` | `string \| undefined` | Optional | Last4 digits of ssn |
| `status` | [`Status2Enum \| undefined`](/doc/models/status-2-enum.md) | Optional | status of account holder, non active consumers will get blocked |
| `tokenizedSsn` | `string \| undefined` | Optional | Tokenized ssn, this cannot be decrypted and has to be looked up in pci_datas |

## Example (as JSON)

```json
{
  "address": {
    "city": "San Francisco",
    "country": "USA",
    "line1": "221, Baker St",
    "line2": "B",
    "state": "CA",
    "status": "verified",
    "zip": "12345"
  },
  "dob": "2000-01-01",
  "email": "hh@v3.cash",
  "first_name": "Himangshu",
  "last_name": "Hazarika",
  "phone": "4151231240",
  "ssn_last4": "1000",
  "status": "verified",
  "tokenized_ssn": "$argon2id$v=19$m=131072,t=8,p=4$1pylGTZ06KyH41v4Bae6dQ$nQUhTe9xpk34HK85EjZ2A+3fmuORXkIwRVIsiaeqDR4"
}
```

