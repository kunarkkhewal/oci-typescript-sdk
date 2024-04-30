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
 * The details required to enable Automatic SPM Evolve Advisor task.
 * It takes either credentials or databaseCredential. It's recommended to provide databaseCredential
 *
 */
export interface EnableAutomaticSpmEvolveAdvisorTaskDetails {
  "credentials"?: model.ManagedDatabasePasswordCredential | model.ManagedDatabaseSecretCredential;
  "databaseCredential"?:
    | model.DatabaseSecretCredentialDetails
    | model.DatabaseNamedCredentialDetails
    | model.DatabasePasswordCredentialDetails;
}

export namespace EnableAutomaticSpmEvolveAdvisorTaskDetails {
  export function getJsonObj(obj: EnableAutomaticSpmEvolveAdvisorTaskDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "credentials": obj.credentials
          ? model.ManagedDatabaseCredential.getJsonObj(obj.credentials)
          : undefined,
        "databaseCredential": obj.databaseCredential
          ? model.DatabaseCredentialDetails.getJsonObj(obj.databaseCredential)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EnableAutomaticSpmEvolveAdvisorTaskDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "credentials": obj.credentials
          ? model.ManagedDatabaseCredential.getDeserializedJsonObj(obj.credentials)
          : undefined,
        "databaseCredential": obj.databaseCredential
          ? model.DatabaseCredentialDetails.getDeserializedJsonObj(obj.databaseCredential)
          : undefined
      }
    };

    return jsonObj;
  }
}
