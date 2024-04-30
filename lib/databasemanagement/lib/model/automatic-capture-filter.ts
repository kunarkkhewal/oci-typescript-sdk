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
 * An automatic capture filter that enables you to capture only those SQL statements
 * that you want, and exclude noncritical statements.
 *
 */
export interface AutomaticCaptureFilter {
  /**
    * The name of the automatic capture filter.
* <p>
- AUTO_CAPTURE_SQL_TEXT: Search pattern to apply to SQL text.
* - AUTO_CAPTURE_PARSING_SCHEMA_NAME: Parsing schema to include or exclude for SQL plan management auto capture.
* - AUTO_CAPTURE_MODULE: Module to include or exclude for SQL plan management auto capture.
* - AUTO_CAPTURE_ACTION: Action to include or exclude for SQL plan management automatic capture.
* 
    */
  "name"?: AutomaticCaptureFilter.Name;
  /**
   * A list of filter values to include.
   */
  "valuesToInclude"?: Array<string>;
  /**
   * A list of filter values to exclude.
   */
  "valuesToExclude"?: Array<string>;
  /**
   * The time the filter value was last updated.
   */
  "timeLastModified"?: Date;
  /**
   * The database user who last updated the filter value.
   */
  "modifiedBy"?: string;
}

export namespace AutomaticCaptureFilter {
  export enum Name {
    AutoCaptureSqlText = "AUTO_CAPTURE_SQL_TEXT",
    AutoCaptureParsingSchemaName = "AUTO_CAPTURE_PARSING_SCHEMA_NAME",
    AutoCaptureModule = "AUTO_CAPTURE_MODULE",
    AutoCaptureAction = "AUTO_CAPTURE_ACTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AutomaticCaptureFilter): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AutomaticCaptureFilter): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
