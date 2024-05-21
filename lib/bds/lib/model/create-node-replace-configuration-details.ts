/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
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
 * The information about the NodeReplaceConfiguration
 */
export interface CreateNodeReplaceConfigurationDetails {
  "levelTypeDetails": model.NodeTypeLevelDetails | model.NodeLevelDetails;
  /**
   * A user-friendly name. Only ASCII alphanumeric characters with no spaces allowed. The name does not have to be unique, and it may be changed. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * Base-64 encoded password for the cluster admin user.
   */
  "clusterAdminPassword": string;
  /**
   * Type of compute instance health metric to use for node replacement
   */
  "metricType": string;
  /**
   * This value is the minimum period of time to wait before triggering node replacement. The value is in minutes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "durationInMinutes": number;
}

export namespace CreateNodeReplaceConfigurationDetails {
  export function getJsonObj(obj: CreateNodeReplaceConfigurationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "levelTypeDetails": obj.levelTypeDetails
          ? model.LevelTypeDetails.getJsonObj(obj.levelTypeDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateNodeReplaceConfigurationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "levelTypeDetails": obj.levelTypeDetails
          ? model.LevelTypeDetails.getDeserializedJsonObj(obj.levelTypeDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
