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
 * Representation of a job definition resource. Job definitions define the harvest scope and includes the list
 * of objects to be harvested along with a schedule. The list of objects is usually specified through a combination
 * of object type, regular expressions, or specific names of objects and a sample size for the data harvested.
 *
 */
export interface JobDefinition {
  /**
   * Unique key of the job definition resource that is immutable.
   */
  "key": string;
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * The data catalog's OCID.
   */
  "catalogId"?: string;
  /**
   * Type of the job definition.
   */
  "jobType"?: model.JobType;
  /**
   * Specifies if the job definition is incremental or full.
   */
  "isIncremental"?: boolean;
  /**
   * The key of the data asset for which the job is defined.
   */
  "dataAssetKey"?: string;
  /**
   * Unique key of the glossary to which this job applies.
   */
  "glossaryKey"?: string;
  /**
   * Detailed description of the job definition.
   */
  "description"?: string;
  /**
   * The key of the default connection resource to be used for harvest, sampling, profiling jobs.
   * This may be overridden in each job instance.
   *
   */
  "connectionKey"?: string;
  /**
   * Version of the job definition object. Used internally but can be visible to users.
   */
  "internalVersion"?: string;
  /**
   * Lifecycle state of the job definition.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * The date and time the job definition was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2019-03-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * The last time that any change was made to the data asset. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * OCID of the user who created this job definition.
   */
  "createdById"?: string;
  /**
   * OCID of the user who updated this job definition.
   */
  "updatedById"?: string;
  /**
   * URI to the job definition instance in the API.
   */
  "uri"?: string;
  /**
   * Specify if sample data to be extracted as part of this harvest.
   */
  "isSampleDataExtracted"?: boolean;
  /**
   * Specify the sample data size in MB, specified as number of rows, for this metadata harvest. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sampleDataSizeInMBs"?: number;
  /**
   * Time that the latest job execution started. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeLatestExecutionStarted"?: Date;
  /**
   * Time that the latest job execution ended or null if it hasn't yet completed.
   * An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   *
   */
  "timeLatestExecutionEnded"?: Date;
  /**
   * Status of the latest job execution, such as running, paused, or completed.
   */
  "jobExecutionState"?: model.JobExecutionState;
  /**
   * Type of job schedule for the latest job executed.
   */
  "scheduleType"?: model.JobScheduleType;
  /**
   * A map of maps that contains the properties which are specific to the job type. Each job type
   * definition may define it's set of required and optional properties. The map keys are category names and the
   * values are maps of property name to property value. Every property is contained inside of a category. Most
   * job definitions have required properties within the \"default\" category.
   * Example: `{\"properties\": { \"default\": { \"host\": \"host1\", \"port\": \"1521\", \"database\": \"orcl\"}}}`
   *
   */
  "properties"?: { [key: string]: { [key: string]: string } };
}

export namespace JobDefinition {
  export function getJsonObj(obj: JobDefinition): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JobDefinition): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
