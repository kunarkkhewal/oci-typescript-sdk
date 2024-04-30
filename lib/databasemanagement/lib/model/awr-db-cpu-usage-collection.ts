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
 * The AWR CPU usage data.
 */
export interface AwrDbCpuUsageCollection extends model.AwrQueryResult {
  /**
   * The number of available CPU cores, which include subcores of multicore and single-core CPUs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numCpuCores"?: number;
  /**
   * The number of CPUs available for the database to use. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCount"?: number;
  /**
   * The number of available CPUs or processors. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numCpus"?: number;
  /**
   * A list of AWR CPU usage summary data.
   */
  "items"?: Array<model.AwrDbCpuUsageSummary>;

  "awrResultType": string;
}

export namespace AwrDbCpuUsageCollection {
  export function getJsonObj(obj: AwrDbCpuUsageCollection, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AwrQueryResult.getJsonObj(obj) as AwrDbCpuUsageCollection)),
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.AwrDbCpuUsageSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const awrResultType = "AWRDB_ASH_CPU_USAGE_SET";
  export function getDeserializedJsonObj(
    obj: AwrDbCpuUsageCollection,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AwrQueryResult.getDeserializedJsonObj(obj) as AwrDbCpuUsageCollection)),
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.AwrDbCpuUsageSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
