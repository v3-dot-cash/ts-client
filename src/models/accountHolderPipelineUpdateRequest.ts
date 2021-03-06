/**
 * v3.cashLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  AccountHolderPipeline,
  accountHolderPipelineSchema,
} from './accountHolderPipeline';

/** Request schema for creating an account holder pipeline */
export interface AccountHolderPipelineUpdateRequest {
  /** The details of the pipeline */
  accountHolderPipeline?: AccountHolderPipeline;
}

export const accountHolderPipelineUpdateRequestSchema: Schema<AccountHolderPipelineUpdateRequest> = object(
  {
    accountHolderPipeline: [
      'account_holder_pipeline',
      optional(lazy(() => accountHolderPipelineSchema)),
    ],
  }
);
