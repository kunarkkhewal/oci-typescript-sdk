/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
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
 * Details of a job. Jobs are scheduled instances of a job definition.
 */
export interface Job {
  /**
   * Unique key of the job resource.
   */
  "key": string;
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Detailed description of the job.
   */
  "description"?: string;
  /**
   * The data catalog's OCID.
   */
  "catalogId"?: string;
  /**
   * Lifecycle state for job.
   */
  "lifecycleState"?: model.JobLifecycleState;
  /**
   * The date and time the job was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2019-03-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * Time that this job was last updated. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * Type of the job.
   */
  "jobType"?: model.JobType;
  /**
   * Interval on which the job will be run. Value is specified as a cron-supported time specification \"nickname\".
   * The following subset of those is supported: @monthly, @weekly, @daily, @hourly.
   * For metastore sync, an additional option @default is supported, which will schedule jobs at a more granular frequency.
   *
   */
  "scheduleCronExpression"?: string;
  /**
   * Date that the schedule should be operational. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeScheduleBegin"?: Date;
  /**
   * Date that the schedule should end from being operational. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeScheduleEnd"?: Date;
  /**
   * Type of job schedule that is inferred from the scheduling properties.
   */
  "scheduleType"?: model.JobScheduleType;
  /**
   * The key of the connection used by the job. This connection will override the default connection specified in
   * the associated job definition. All executions will use this connection.
   *
   */
  "connectionKey"?: string;
  /**
   * The unique key of the job definition resource that defined the scope of this job.
   */
  "jobDefinitionKey"?: string;
  /**
   * Internal version of the job resource.
   */
  "internalVersion"?: string;
  /**
   * The total number of executions for this job schedule.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "executionCount"?: number;
  /**
   * The date and time of the most recent execution for this Job, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2019-03-25T21:10:29.600Z`
   *
   */
  "timeOfLatestExecution"?: Date;
  /**
   * OCID of the user who created this job.
   */
  "createdById"?: string;
  /**
   * OCID of the user who updated this job.
   */
  "updatedById"?: string;
  /**
   * The display name of the job definition resource that defined the scope of this job.
   */
  "jobDefinitionName"?: string;
  /**
   * Unique key of the data asset to which this job applies, if the job involves a data asset.
   */
  "dataAssetKey"?: string;
  /**
   * Unique key of the glossary to which this job applies.
   */
  "glossaryKey"?: string;
  /**
   * Error code returned from the latest job execution for this job. Useful when the latest Job execution is in FAILED state.
   *
   */
  "errorCode"?: string;
  /**
   * Error message returned from the latest job execution for this job. Useful when the latest Job Execution is in a FAILED state.
   *
   */
  "errorMessage"?: string;
  /**
   * URI to the job instance in the API.
   */
  "uri"?: string;
}

export namespace Job {
  export function getJsonObj(obj: Job): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Job): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
