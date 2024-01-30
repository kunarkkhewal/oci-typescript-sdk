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
 * The details required to drop a tablespace.
 * It takes either credentialDetails or databaseCredential. It's recommended to provide databaseCredential
 *
 */
export interface DropTablespaceDetails {
  "credentialDetails"?:
    | model.TablespaceAdminPasswordCredentialDetails
    | model.TablespaceAdminSecretCredentialDetails;
  "databaseCredential"?:
    | model.DatabaseSecretCredentialDetails
    | model.DatabaseNamedCredentialDetails
    | model.DatabasePasswordCredentialDetails;
  /**
   * Specifies whether all the contents of the tablespace being dropped should be dropped.
   *
   */
  "isIncludingContents"?: boolean;
  /**
   * Specifies whether all the associated data files of the tablespace being dropped should be dropped.
   *
   */
  "isDroppingDataFiles"?: boolean;
  /**
   * Specifies whether all the constraints on the tablespace being dropped should be dropped.
   *
   */
  "isCascadeConstraints"?: boolean;
}

export namespace DropTablespaceDetails {
  export function getJsonObj(obj: DropTablespaceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "credentialDetails": obj.credentialDetails
          ? model.TablespaceAdminCredentialDetails.getJsonObj(obj.credentialDetails)
          : undefined,
        "databaseCredential": obj.databaseCredential
          ? model.DatabaseCredentialDetails.getJsonObj(obj.databaseCredential)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DropTablespaceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "credentialDetails": obj.credentialDetails
          ? model.TablespaceAdminCredentialDetails.getDeserializedJsonObj(obj.credentialDetails)
          : undefined,
        "databaseCredential": obj.databaseCredential
          ? model.DatabaseCredentialDetails.getDeserializedJsonObj(obj.databaseCredential)
          : undefined
      }
    };

    return jsonObj;
  }
}
