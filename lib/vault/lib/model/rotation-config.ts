/**
 * Vault Secret Management API
 * Use the Secret Management API to manage secrets and secret versions. For more information, see [Managing Secrets](/Content/KeyManagement/Tasks/managingsecrets.htm).
 * OpenAPI spec version: 20180608
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
 * Defines the frequency of the rotation and the information about the target system
 */
export interface RotationConfig {
  /**
   * The time interval that indicates the frequency for rotating secret data, as described in ISO 8601 format.
   * The minimum value is 1 day and maximum value is 360 days.
   * For example, if you want to set the time interval for rotating a secret data as 30 days, the duration is expressed as \"P30D.\"
   *
   */
  "rotationInterval"?: string;
  "targetSystemDetails": model.AdbTargetSystemDetails | model.FunctionTargetSystemDetails;
  /**
   * Enables auto rotation, when set to true rotationInterval must be set.
   *
   */
  "isScheduledRotationEnabled"?: boolean;
}

export namespace RotationConfig {
  export function getJsonObj(obj: RotationConfig): object {
    const jsonObj = {
      ...obj,
      ...{
        "targetSystemDetails": obj.targetSystemDetails
          ? model.TargetSystemDetails.getJsonObj(obj.targetSystemDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RotationConfig): object {
    const jsonObj = {
      ...obj,
      ...{
        "targetSystemDetails": obj.targetSystemDetails
          ? model.TargetSystemDetails.getDeserializedJsonObj(obj.targetSystemDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
