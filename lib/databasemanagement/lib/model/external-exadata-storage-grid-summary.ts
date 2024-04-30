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
 * The Exadata storage server grid of the Exadata infrastructure.
 */
export interface ExternalExadataStorageGridSummary extends model.DbmResource {
  /**
   * The number of Exadata storage servers in the Exadata infrastructure. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "serverCount"?: number;

  "resourceType": string;
}

export namespace ExternalExadataStorageGridSummary {
  export function getJsonObj(
    obj: ExternalExadataStorageGridSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DbmResource.getJsonObj(obj) as ExternalExadataStorageGridSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const resourceType = "STORAGE_GRID_SUMMARY";
  export function getDeserializedJsonObj(
    obj: ExternalExadataStorageGridSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DbmResource.getDeserializedJsonObj(obj) as ExternalExadataStorageGridSummary)),
      ...{}
    };

    return jsonObj;
  }
}
