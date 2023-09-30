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
 * The details of the Exadata storage server connector.
 */
export interface ExternalExadataStorageConnector extends model.DbmResource {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.
   */
  "exadataInfrastructureId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the agent for the Exadata storage server.
   */
  "agentId"?: string;
  /**
   * The unique string of the connection. For example, \"https://<storage-server-name>/MS/RESTService/\".
   */
  "connectionUri"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Exadata storage server.
   */
  "storageServerId"?: string;

  "resourceType": string;
}

export namespace ExternalExadataStorageConnector {
  export function getJsonObj(
    obj: ExternalExadataStorageConnector,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DbmResource.getJsonObj(obj) as ExternalExadataStorageConnector)),
      ...{}
    };

    return jsonObj;
  }
  export const resourceType = "STORAGE_CONNECTOR";
  export function getDeserializedJsonObj(
    obj: ExternalExadataStorageConnector,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DbmResource.getDeserializedJsonObj(obj) as ExternalExadataStorageConnector)),
      ...{}
    };

    return jsonObj;
  }
}
