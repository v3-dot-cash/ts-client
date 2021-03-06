/**
 * v3.cashLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { ApiErrorDetails } from '../models/apiErrorDetails';

/**
 * Creates an instance of ApiErrors
 */
interface ApiErrors {
  errors: ApiErrorDetails[];
}

export class ApiErrorsError extends ApiError<ApiErrors> {}
