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
 * The inventory count of HeatWave clusters in the fleet and a summary of the metrics that provide the aggregated usage of CPU, storage, and so on of all the clusters.
 */
export interface HeatWaveFleetSummary {
  /**
   * The usage metrics for the HeatWave clusters in the fleet.
   */
  "aggregatedMetrics": Array<model.HeatWaveFleetMetricSummaryDefinition>;
  /**
   * The number of HeatWave clusters in the fleet, grouped by cluster type or other properties.
   */
  "inventory": Array<model.HeatWaveFleetByCategory>;
}

export namespace HeatWaveFleetSummary {
  export function getJsonObj(obj: HeatWaveFleetSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "aggregatedMetrics": obj.aggregatedMetrics
          ? obj.aggregatedMetrics.map(item => {
              return model.HeatWaveFleetMetricSummaryDefinition.getJsonObj(item);
            })
          : undefined,
        "inventory": obj.inventory
          ? obj.inventory.map(item => {
              return model.HeatWaveFleetByCategory.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: HeatWaveFleetSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "aggregatedMetrics": obj.aggregatedMetrics
          ? obj.aggregatedMetrics.map(item => {
              return model.HeatWaveFleetMetricSummaryDefinition.getDeserializedJsonObj(item);
            })
          : undefined,
        "inventory": obj.inventory
          ? obj.inventory.map(item => {
              return model.HeatWaveFleetByCategory.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
