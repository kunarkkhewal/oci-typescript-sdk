/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The status of a Sql tuning set admin action.
 */
export interface SqlTuningSetAdminActionStatus {
  /**
   * The status of a Sql tuning set admin action.
   *
   */
  "status": SqlTuningSetAdminActionStatus.Status;
  /**
   * The success message of the Sql tuning set admin action. The success message is \"null\" if the admin action is non successful.
   *
   */
  "successMessage"?: string;
  /**
   * The error code that denotes failure if the Sql tuning set admin action is not successful. The error code is \"null\" if the admin action is successful.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "errorCode"?: number;
  /**
   * The error message that indicates the reason for failure if the Sql tuning set admin action is not successful. The error message is \"null\" if the admin action is successful.
   *
   */
  "errorMessage"?: string;
  /**
   * Flag to indicate whether to create the Sql tuning set or just display the plsql used for the selected user action.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "showSqlOnly"?: number;
  /**
   * When showSqlOnly is set to 1, this attribute displays the plsql generated for the selected user action.
   * When showSqlOnly is set to 0, this attribute will not be returned.
   *
   */
  "sqlStatement"?: string;
}

export namespace SqlTuningSetAdminActionStatus {
  export enum Status {
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SqlTuningSetAdminActionStatus): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SqlTuningSetAdminActionStatus): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
