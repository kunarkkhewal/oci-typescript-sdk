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
 * The details required to update a job.
 */
export interface UpdateJobDetails {
  /**
   * The description of the job.
   */
  "description"?: string;
  /**
   * The job timeout duration, which is expressed like \"1h 10m 15s\".
   */
  "timeout"?: string;
  "resultLocation"?: model.ObjectStorageJobExecutionResultLocation;
  "scheduleDetails"?: model.JobScheduleDetails;

  "jobType": string;
}

export namespace UpdateJobDetails {
  export function getJsonObj(obj: UpdateJobDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "resultLocation": obj.resultLocation
          ? model.JobExecutionResultLocation.getJsonObj(obj.resultLocation)
          : undefined,
        "scheduleDetails": obj.scheduleDetails
          ? model.JobScheduleDetails.getJsonObj(obj.scheduleDetails)
          : undefined
      }
    };

    if (obj && "jobType" in obj && obj.jobType) {
      switch (obj.jobType) {
        case "SQL":
          return model.UpdateSqlJobDetails.getJsonObj(
            <model.UpdateSqlJobDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.jobType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateJobDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "resultLocation": obj.resultLocation
          ? model.JobExecutionResultLocation.getDeserializedJsonObj(obj.resultLocation)
          : undefined,
        "scheduleDetails": obj.scheduleDetails
          ? model.JobScheduleDetails.getDeserializedJsonObj(obj.scheduleDetails)
          : undefined
      }
    };

    if (obj && "jobType" in obj && obj.jobType) {
      switch (obj.jobType) {
        case "SQL":
          return model.UpdateSqlJobDetails.getDeserializedJsonObj(
            <model.UpdateSqlJobDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.jobType}`);
      }
    }
    return jsonObj;
  }
}
