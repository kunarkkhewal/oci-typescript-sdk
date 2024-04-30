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
 * The database Input/Output metric details.
 */
export interface DatabaseIOAggregateMetrics {
  /**
   * The Input/Output Operations Per Second metrics grouped by IOType for a specific Managed Database.
   */
  "iops"?: Array<model.MetricDataPoint>;
  /**
   * The IOThroughput metrics grouped by IOType for a specific Managed Database.
   */
  "ioThroughput"?: Array<model.MetricDataPoint>;
  /**
   * The Input/Output metric statistics such as min, max, mean, lowerQuartile, and upperQuartile.
   */
  "iopsStatistics"?: Array<model.MetricStatisticsDefinition>;
  /**
   * The IOThroughput metric statistics such as min, max, mean, lowerQuartile, and upperQuartile.
   */
  "ioThroughputStatistics"?: Array<model.MetricStatisticsDefinition>;
}

export namespace DatabaseIOAggregateMetrics {
  export function getJsonObj(obj: DatabaseIOAggregateMetrics): object {
    const jsonObj = {
      ...obj,
      ...{
        "iops": obj.iops
          ? obj.iops.map(item => {
              return model.MetricDataPoint.getJsonObj(item);
            })
          : undefined,
        "ioThroughput": obj.ioThroughput
          ? obj.ioThroughput.map(item => {
              return model.MetricDataPoint.getJsonObj(item);
            })
          : undefined,
        "iopsStatistics": obj.iopsStatistics
          ? obj.iopsStatistics.map(item => {
              return model.MetricStatisticsDefinition.getJsonObj(item);
            })
          : undefined,
        "ioThroughputStatistics": obj.ioThroughputStatistics
          ? obj.ioThroughputStatistics.map(item => {
              return model.MetricStatisticsDefinition.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseIOAggregateMetrics): object {
    const jsonObj = {
      ...obj,
      ...{
        "iops": obj.iops
          ? obj.iops.map(item => {
              return model.MetricDataPoint.getDeserializedJsonObj(item);
            })
          : undefined,
        "ioThroughput": obj.ioThroughput
          ? obj.ioThroughput.map(item => {
              return model.MetricDataPoint.getDeserializedJsonObj(item);
            })
          : undefined,
        "iopsStatistics": obj.iopsStatistics
          ? obj.iopsStatistics.map(item => {
              return model.MetricStatisticsDefinition.getDeserializedJsonObj(item);
            })
          : undefined,
        "ioThroughputStatistics": obj.ioThroughputStatistics
          ? obj.ioThroughputStatistics.map(item => {
              return model.MetricStatisticsDefinition.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
