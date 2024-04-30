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
 * The configuration variables for a MySQL Database.
 */
export interface MySqlConfigurationDataSummary {
  /**
   * The name of the configuration variable
   */
  "name": string;
  /**
   * The value of the variable.
   */
  "value": string;
  /**
   * The source from which the variable was most recently set.
   */
  "source": MySqlConfigurationDataSummary.Source;
  /**
   * The minimum value of the variable. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minValue": number;
  /**
   * The maximum value of the variable. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxValue": number;
  /**
   * The type of variable.
   */
  "type": string;
  /**
   * The default value of the variable.
   */
  "defaultValue": string;
  /**
   * The time when the value of the variable was set.
   */
  "timeSet": Date;
  /**
   * The host from where the value of the variable was set. This is empty for a MySQL Database System.
   */
  "hostSet": string;
  /**
   * The user who sets the value of the variable. This is empty for a MySQL Database System.
   */
  "userSet": string;
  /**
   * Indicates whether the variable can be set dynamically or not.
   */
  "isDynamic": boolean;
  /**
   * Indicates whether the variable is set at server startup.
   */
  "isInit": boolean;
  /**
   * Indicates whether the variable is configurable.
   */
  "isConfigurable": boolean;
  /**
   * The path name of the option file (VARIABLE_PATH), if the variable was set in an option file. If the variable was not set in an
   */
  "path": string;
  /**
   * The description of the variable.
   */
  "description": string;
  /**
   * The comma-separated list of possible values for the variable in value:valueDescription format.
   */
  "possibleValues": string;
  /**
   * The comma-separated list of MySQL versions that support the variable.
   */
  "supportedVersions": string;
}

export namespace MySqlConfigurationDataSummary {
  export enum Source {
    Compiled = "COMPILED",
    Global = "GLOBAL",
    Server = "SERVER",
    Explicit = "EXPLICIT",
    Extra = "EXTRA",
    User = "USER",
    Login = "LOGIN",
    CommandLine = "COMMAND_LINE",
    Persisted = "PERSISTED",
    Dynamic = "DYNAMIC",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: MySqlConfigurationDataSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MySqlConfigurationDataSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
