/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * Result of the Java migration analysis. The analysis result is stored in an Object Storage bucket.
 */
export interface JavaMigrationAnalysisResult {
  /**
   * The OCID of the migration analysis report.
   */
  "id": string;
  /**
   * The OCID of the work request of this analysis.
   */
  "workRequestId"?: string;
  /**
   * The fleet OCID.
   */
  "fleetId": string;
  /**
   * The unique key that identifies the application.
   */
  "applicationKey"?: string;
  /**
   * The name of the application for which the Java migration analysis was performed.
   */
  "applicationName": string;
  /**
   * The installation path of the application for which the Java migration analysis was performed.
   */
  "applicationPath": string;
  /**
   * Execution type of the application for an application type, such as WAR and EAR, that is deployed or installed.
   */
  "applicationExecutionType": model.ApplicationExecutionType;
  /**
   * The source JDK version of the application that's currently running.
   */
  "sourceJdkVersion": string;
  /**
   * The target JDK version of the application to be migrated.
   */
  "targetJdkVersion": string;
  /**
   * The managed instance OCID.
   */
  "managedInstanceId"?: string;
  /**
   * The hostname of the managed instance that hosts the application for which the Java migration analysis was performed.
   */
  "hostName"?: string;
  /**
   * The time the result is compiled.
   */
  "timeCreated"?: Date;
  /**
   * The object storage namespace that contains the results of the migration analysis.
   */
  "namespace": string;
  /**
   * The name of the object storage bucket that contains the results of the migration analysis.
   */
  "bucketName": string;
  /**
   * The directory path of the object storage bucket that contains the results of the migration analysis.
   */
  "objectStorageUploadDirPath": string;
  /**
   * The names of the object storage objects that contain the results of the migration analysis.
   */
  "objectList": Array<string>;
  /**
   * Additional info reserved for future use.
   */
  "metadata": string;
}

export namespace JavaMigrationAnalysisResult {
  export function getJsonObj(obj: JavaMigrationAnalysisResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JavaMigrationAnalysisResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
