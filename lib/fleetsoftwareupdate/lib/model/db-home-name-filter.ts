/**
 * Exadata Fleet Update service API
 * Use the Exadata Fleet Update service to patch large collections of components directly,
as a single entity, orchestrating the maintenance actions to update all chosen components in the stack in a single cycle.

 * OpenAPI spec version: 20220528
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Database home name to include in the discovery.
 * '*' Wildcard is allowed for 'startsWith' or 'endsWith' filtering.
 *
 */
export interface DbHomeNameFilter extends model.DbFleetDiscoveryFilter {
  /**
   * List of Database home names to include in the discovery.
   *
   */
  "names": Array<string>;

  "type": string;
}

export namespace DbHomeNameFilter {
  export function getJsonObj(obj: DbHomeNameFilter, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DbFleetDiscoveryFilter.getJsonObj(obj) as DbHomeNameFilter)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "DB_HOME_NAME";
  export function getDeserializedJsonObj(obj: DbHomeNameFilter, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DbFleetDiscoveryFilter.getDeserializedJsonObj(obj) as DbHomeNameFilter)),
      ...{}
    };

    return jsonObj;
  }
}
