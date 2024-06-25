/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20230518
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
 * Optional dump settings
 */
export interface MySqlInitialLoadSettings {
  /**
   * Enable (true) or disable (false) consistent data dumps by locking the instance for backup during the dump.
   *
   */
  "isConsistent"?: boolean;
  /**
   * Include a statement at the start of the dump to set the time zone to UTC.
   *
   */
  "isTzUtc"?: boolean;
  /**
   * Apply the specified requirements for compatibility with MySQL Database Service for all tables in the dump
   * output, altering the dump files as necessary.
   *
   */
  "compatibility"?: Array<model.CompatibilityOption>;
  /**
   * Primary key compatibility option
   */
  "primaryKeyCompatibility"?: model.PrimaryKeyCompatibility;
  /**
   * Import the dump even if it contains objects that already exist in the target schema in the MySQL instance.
   *
   */
  "isIgnoreExistingObjects"?: boolean;
  /**
   * The action taken in the event of errors related to GRANT or REVOKE errors.
   */
  "handleGrantErrors"?: model.HandleGrantErrors;
  /**
   * MySql Job Mode
   */
  "jobMode": model.JobModeMySql;
}

export namespace MySqlInitialLoadSettings {
  export function getJsonObj(obj: MySqlInitialLoadSettings): object {
    const jsonObj = {
      ...obj,
      ...{
        "compatibility": obj.compatibility
          ? obj.compatibility.map(item => {
              return model.CompatibilityOption.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MySqlInitialLoadSettings): object {
    const jsonObj = {
      ...obj,
      ...{
        "compatibility": obj.compatibility
          ? obj.compatibility.map(item => {
              return model.CompatibilityOption.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
