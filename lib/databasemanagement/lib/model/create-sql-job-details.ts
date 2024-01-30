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
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The details specific to the SQL job request.
 */
export interface CreateSqlJobDetails extends model.CreateJobDetails {
  /**
   * The SQL text to be executed as part of the job.
   */
  "sqlText"?: string;
  "inBinds"?: model.JobInBindsDetails;
  "outBinds"?: model.JobOutBindsDetails;
  "sqlType"?: string;
  /**
   * The SQL operation type.
   */
  "operationType": string;
  /**
   * The database user name used to execute the SQL job. If the job is being executed on a
   * Managed Database Group, then the user name should exist on all the databases in the
   * group with the same password.
   *
   */
  "userName"?: string;
  /**
   * The password for the database user name used to execute the SQL job.
   */
  "password"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the secret containing the user password.
   */
  "secretId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Named Credentials containing password secret.
   */
  "namedCredentialId"?: string;
  /**
   * The role of the database user. Indicates whether the database user is a normal user or sysdba.
   */
  "role"?: string;

  "jobType": string;
}

export namespace CreateSqlJobDetails {
  export function getJsonObj(obj: CreateSqlJobDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.CreateJobDetails.getJsonObj(obj) as CreateSqlJobDetails)),
      ...{
        "inBinds": obj.inBinds ? model.JobInBindsDetails.getJsonObj(obj.inBinds) : undefined,
        "outBinds": obj.outBinds ? model.JobOutBindsDetails.getJsonObj(obj.outBinds) : undefined
      }
    };

    return jsonObj;
  }
  export const jobType = "SQL";
  export function getDeserializedJsonObj(
    obj: CreateSqlJobDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateJobDetails.getDeserializedJsonObj(obj) as CreateSqlJobDetails)),
      ...{
        "inBinds": obj.inBinds
          ? model.JobInBindsDetails.getDeserializedJsonObj(obj.inBinds)
          : undefined,
        "outBinds": obj.outBinds
          ? model.JobOutBindsDetails.getDeserializedJsonObj(obj.outBinds)
          : undefined
      }
    };

    return jsonObj;
  }
}
