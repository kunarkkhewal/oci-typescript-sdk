/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * Attributes for configuring automatic deployment maintenance.
 *
 */
export interface MaintenanceConfiguration {
  /**
   * By default auto upgrade for interim releases are not enabled. If auto-upgrade is enabled for interim release,
   * you have to specify interimReleaseUpgradePeriodInDays too.
   *
   */
  "isInterimReleaseAutoUpgradeEnabled": boolean;
  /**
   * Defines auto upgrade period for interim releases. This period must be shorter or equal to bundle release upgrade period.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "interimReleaseUpgradePeriodInDays"?: number;
  /**
   * Defines auto upgrade period for bundle releases. Manually configured period cannot be longer than service defined period for bundle releases.
   * This period must be shorter or equal to major release upgrade period. Not passing this field during create will equate to using the service default.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "bundleReleaseUpgradePeriodInDays": number;
  /**
   * Defines auto upgrade period for major releases. Manually configured period cannot be longer than service defined period for major releases.
   * Not passing this field during create will equate to using the service default.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "majorReleaseUpgradePeriodInDays": number;
  /**
   * Defines auto upgrade period for releases with security fix. Manually configured period cannot be longer than service defined period for security releases.
   * Not passing this field during create will equate to using the service default.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "securityPatchUpgradePeriodInDays": number;
}

export namespace MaintenanceConfiguration {
  export function getJsonObj(obj: MaintenanceConfiguration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MaintenanceConfiguration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
