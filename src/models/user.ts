/**
 * v3.cashLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import { Type2Enum, type2EnumSchema } from './type2Enum';

/** A user of the platform. This is used in context of authentication and authorization. A user can be a human or an api-client every request to the platform is invoked by a user */
export interface User {
  /** User ID */
  id?: string;
  /** Unique name of the user, useful for human debugging */
  name?: string;
  /** The unique id of the tenant to which the user belongs */
  ownerId?: string;
  /** type of user */
  type?: Type2Enum;
}

export const userSchema: Schema<User> = object({
  id: ['id', optional(string())],
  name: ['name', optional(string())],
  ownerId: ['owner_id', optional(string())],
  type: ['type', optional(type2EnumSchema)],
});