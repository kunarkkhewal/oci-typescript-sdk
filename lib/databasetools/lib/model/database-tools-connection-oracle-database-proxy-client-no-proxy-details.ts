/**
 * Database Tools
 * Use the Database Tools API to manage connections, private endpoints, and work requests in the Database Tools service.
 * OpenAPI spec version: 20201005
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
 * Represents blank proxy client information.
 */
export interface DatabaseToolsConnectionOracleDatabaseProxyClientNoProxyDetails
  extends model.DatabaseToolsConnectionOracleDatabaseProxyClientDetails {
  "proxyAuthenticationType": string;
}

export namespace DatabaseToolsConnectionOracleDatabaseProxyClientNoProxyDetails {
  export function getJsonObj(
    obj: DatabaseToolsConnectionOracleDatabaseProxyClientNoProxyDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseToolsConnectionOracleDatabaseProxyClientDetails.getJsonObj(
            obj
          ) as DatabaseToolsConnectionOracleDatabaseProxyClientNoProxyDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const proxyAuthenticationType = "NO_PROXY";
  export function getDeserializedJsonObj(
    obj: DatabaseToolsConnectionOracleDatabaseProxyClientNoProxyDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseToolsConnectionOracleDatabaseProxyClientDetails.getDeserializedJsonObj(
            obj
          ) as DatabaseToolsConnectionOracleDatabaseProxyClientNoProxyDetails)),
      ...{}
    };

    return jsonObj;
  }
}
