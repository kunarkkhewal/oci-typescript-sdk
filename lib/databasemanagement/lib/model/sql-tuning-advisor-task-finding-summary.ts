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
 * A summary of the findings of the objects in a tuning task that match a given filter.
 * This includes the kind of findings that were reported, whether the benefits were analyzed, and the number of benefits obtained.
 *
 */
export interface SqlTuningAdvisorTaskFindingSummary {
  /**
   * The unique identifier of the SQL Tuning Advisor task. This is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sqlTuningAdvisorTaskId": number;
  /**
   * The key of the object to which these recommendations apply.
   * This is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sqlTuningAdvisorTaskObjectId": number;
  /**
   * The execution id of the analyzed SQL object. This is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sqlTuningAdvisorTaskObjectExecutionId": number;
  /**
   * The text of the SQL statement.
   */
  "sqlText": string;
  /**
   * The parsing schema of the object.
   */
  "parsingSchema": string;
  /**
   * The unique key of this SQL statement.
   */
  "sqlKey": string;
  /**
   * The time benefit (in seconds) for the highest-rated finding for this object. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dbTimeBenefit"?: number;
  /**
   * The per-execution percentage benefit. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "perExecutionPercentage"?: number;
  /**
   * Indicates whether a statistics recommendation was reported for this SQL statement.
   */
  "isStatsFindingPresent"?: boolean;
  /**
   * Indicates whether a SQL Profile recommendation was reported for this SQL statement.
   */
  "isSqlProfileFindingPresent"?: boolean;
  /**
   * Indicates whether a SQL Profile recommendation has been implemented for this SQL statement.
   */
  "isSqlProfileFindingImplemented"?: boolean;
  /**
   * Indicates whether an index recommendation was reported for this SQL statement.
   */
  "isIndexFindingPresent"?: boolean;
  /**
   * Indicates whether a restructure SQL recommendation was reported for this SQL statement.
   */
  "isRestructureSqlFindingPresent"?: boolean;
  /**
   * Indicates whether an alternative execution plan was reported for this SQL statement.
   */
  "isAlternativePlanFindingPresent"?: boolean;
  /**
   * Indicates whether a miscellaneous finding was reported for this SQL statement.
   */
  "isMiscellaneousFindingPresent"?: boolean;
  /**
   * Indicates whether there is an error in this SQL statement.
   */
  "isErrorFindingPresent"?: boolean;
  /**
   * Indicates whether the task timed out.
   */
  "isTimeoutFindingPresent"?: boolean;
}

export namespace SqlTuningAdvisorTaskFindingSummary {
  export function getJsonObj(obj: SqlTuningAdvisorTaskFindingSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SqlTuningAdvisorTaskFindingSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
