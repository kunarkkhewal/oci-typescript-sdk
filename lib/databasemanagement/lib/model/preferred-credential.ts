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
 * The details of the preferred credential.
 */
export interface PreferredCredential {
  /**
   * The name of the preferred credential.
   */
  "credentialName"?: string;
  /**
   * The status of the preferred credential.
   */
  "status"?: model.PreferredCredentialStatus;
  /**
   * Indicates whether the preferred credential is accessible.
   */
  "isAccessible"?: boolean;

  "type": string;
}

export namespace PreferredCredential {
  export function getJsonObj(obj: PreferredCredential): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "NAMED_CREDENTIAL":
          return model.NamedPreferredCredential.getJsonObj(
            <model.NamedPreferredCredential>(<object>jsonObj),
            true
          );
        case "BASIC":
          return model.BasicPreferredCredential.getJsonObj(
            <model.BasicPreferredCredential>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PreferredCredential): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "NAMED_CREDENTIAL":
          return model.NamedPreferredCredential.getDeserializedJsonObj(
            <model.NamedPreferredCredential>(<object>jsonObj),
            true
          );
        case "BASIC":
          return model.BasicPreferredCredential.getDeserializedJsonObj(
            <model.BasicPreferredCredential>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
