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
 * The credentials used to connect to the database. Currently only the {@code DETAILS} type
 * is supported for creating MACS connector credentials.
 *
 */
export interface DatabaseConnectionCredentials {
  "credentialType": string;
}

export namespace DatabaseConnectionCredentials {
  export function getJsonObj(obj: DatabaseConnectionCredentials): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "credentialType" in obj && obj.credentialType) {
      switch (obj.credentialType) {
        case "NAME_REFERENCE":
          return model.DatabaseConnectionCredentailsByName.getJsonObj(
            <model.DatabaseConnectionCredentailsByName>(<object>jsonObj),
            true
          );
        case "SSL_DETAILS":
          return model.DatabaseSslConnectionCredentials.getJsonObj(
            <model.DatabaseSslConnectionCredentials>(<object>jsonObj),
            true
          );
        case "DETAILS":
          return model.DatabaseConnectionCredentialsByDetails.getJsonObj(
            <model.DatabaseConnectionCredentialsByDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.credentialType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseConnectionCredentials): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "credentialType" in obj && obj.credentialType) {
      switch (obj.credentialType) {
        case "NAME_REFERENCE":
          return model.DatabaseConnectionCredentailsByName.getDeserializedJsonObj(
            <model.DatabaseConnectionCredentailsByName>(<object>jsonObj),
            true
          );
        case "SSL_DETAILS":
          return model.DatabaseSslConnectionCredentials.getDeserializedJsonObj(
            <model.DatabaseSslConnectionCredentials>(<object>jsonObj),
            true
          );
        case "DETAILS":
          return model.DatabaseConnectionCredentialsByDetails.getDeserializedJsonObj(
            <model.DatabaseConnectionCredentialsByDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.credentialType}`);
      }
    }
    return jsonObj;
  }
}
