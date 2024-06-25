/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20230518
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
 * The information about a new Connection.
 */
export interface CreateConnectionDetails {
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * A user-friendly description. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "description"?: string;
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see Resource Tags. Example: {\"Department\": \"Finance\"}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * OCI resource ID.
   */
  "vaultId": string;
  /**
   * The OCID of the key used in cryptographic operations.
   */
  "keyId": string;
  /**
   * OCI resource ID.
   */
  "subnetId"?: string;
  /**
   * An array of Network Security Group OCIDs used to define network access for Connections.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * The username (credential) used when creating or updating this resource.
   *
   */
  "username": string;
  /**
   * The password (credential) used when creating or updating this resource.
   *
   */
  "password": string;
  /**
   * The username (credential) used when creating or updating this resource.
   *
   */
  "replicationUsername"?: string;
  /**
   * The password (credential) used when creating or updating this resource.
   *
   */
  "replicationPassword"?: string;

  "connectionType": string;
}

export namespace CreateConnectionDetails {
  export function getJsonObj(obj: CreateConnectionDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "connectionType" in obj && obj.connectionType) {
      switch (obj.connectionType) {
        case "MYSQL":
          return model.CreateMysqlConnectionDetails.getJsonObj(
            <model.CreateMysqlConnectionDetails>(<object>jsonObj),
            true
          );
        case "ORACLE":
          return model.CreateOracleConnectionDetails.getJsonObj(
            <model.CreateOracleConnectionDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectionType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateConnectionDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "connectionType" in obj && obj.connectionType) {
      switch (obj.connectionType) {
        case "MYSQL":
          return model.CreateMysqlConnectionDetails.getDeserializedJsonObj(
            <model.CreateMysqlConnectionDetails>(<object>jsonObj),
            true
          );
        case "ORACLE":
          return model.CreateOracleConnectionDetails.getDeserializedJsonObj(
            <model.CreateOracleConnectionDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectionType}`);
      }
    }
    return jsonObj;
  }
}
