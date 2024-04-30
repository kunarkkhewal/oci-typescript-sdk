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
 * The summary of the AWR metric data for a particular metric at a specific time.
 */
export interface AwrDbMetricSummary {
  /**
   * The name of the metric.
   */
  "name": string;
  /**
   * The time of the sampling.
   */
  "timestamp"?: Date;
  /**
   * The average value of the sampling period. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "avgValue"?: number;
  /**
   * The minimum value of the sampling period. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minValue"?: number;
  /**
   * The maximum value of the sampling period. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxValue"?: number;
}

export namespace AwrDbMetricSummary {
  export function getJsonObj(obj: AwrDbMetricSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AwrDbMetricSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
