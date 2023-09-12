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
 * The database credentials used to perform management activity.
 *
 */
export interface DatabaseCredentials {
  /**
   * The database user name used to perform management activity.
   *
   */
  "userName"?: string;
  /**
   * The password for the database user name.
   *
   */
  "password"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the secret containing the user password.
   */
  "secretId"?: string;
  /**
   * The role of the database user. Indicates whether the database user is a normal user or sysdba.
   */
  "role"?: DatabaseCredentials.Role;
}

export namespace DatabaseCredentials {
  export enum Role {
    Normal = "NORMAL",
    Sysdba = "SYSDBA"
  }

  export function getJsonObj(obj: DatabaseCredentials): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseCredentials): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
