/**
 * v3.cashLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string, unknown } from '../schema';

/** Details of how to access a fund account */
export interface FundAccountConnection {
  connectorCredentials?: unknown;
  /** Unique Id of the associated type of connector */
  connectorId: string;
  /** Unique Id of the associated fund account */
  fundAccountId: string;
  /** Unique name to identify the connector */
  name: string;
  /** Unique Id of the associated account holder */
  ownerId?: string;
}

export const fundAccountConnectionSchema: Schema<FundAccountConnection> = object(
  {
    connectorCredentials: ['connector_credentials', unknown()],
    connectorId: ['connector_id', string()],
    fundAccountId: ['fund_account_id', string()],
    name: ['name', string()],
    ownerId: ['owner_id', optional(string())],
  }
);
