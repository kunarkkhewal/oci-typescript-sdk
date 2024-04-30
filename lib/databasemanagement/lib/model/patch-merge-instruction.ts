/**
 * Database Management API
 * Use the Database Management API to monitor and manage resources such as
Oracle Databases, MySQL Databases, and External Database Systems. 
For more information, see [Database Management](/iaas/database-management/home.htm).

 * OpenAPI spec version: 20201101
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * An operation that recursively updates items of the selection, or adding the value if the selection is empty.
 * If the value is not an object, it is used directly, otherwise each key-value member is used
 * to create or update a member of the same name in the target and the same process is applied recursively for each object-typed value
 * (similar to [RFC 7396](https://tools.ietf.org/html/rfc7396#section-2) JSON Merge Patch, except that null values are copied
 * rather than transformed into deletions).
 * NOT_FOUND exceptions are handled by creating the implied containing structure.
 * To avoid referential errors if an item's descendant is also in the selection, items of the selection are processed in order of decreasing depth.
 *
 */
export interface PatchMergeInstruction extends model.PatchInstruction {
  /**
   * A value to be merged into the target.
   */
  "value"?: any;

  "operation": string;
}

export namespace PatchMergeInstruction {
  export function getJsonObj(obj: PatchMergeInstruction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PatchInstruction.getJsonObj(obj) as PatchMergeInstruction)),
      ...{}
    };

    return jsonObj;
  }
  export const operation = "MERGE";
  export function getDeserializedJsonObj(
    obj: PatchMergeInstruction,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PatchInstruction.getDeserializedJsonObj(obj) as PatchMergeInstruction)),
      ...{}
    };

    return jsonObj;
  }
}
