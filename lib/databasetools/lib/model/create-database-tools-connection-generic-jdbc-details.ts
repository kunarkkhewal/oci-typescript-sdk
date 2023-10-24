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
 * Details of the new Database Tools connection for a Generic JDBC database system.
 */
export interface CreateDatabaseToolsConnectionGenericJdbcDetails
  extends model.CreateDatabaseToolsConnectionDetails {
  /**
   * The JDBC URL used to connect to the Generic JDBC database system.
   */
  "url": string;
  /**
   * The user name.
   */
  "userName": string;
  "userPassword": model.DatabaseToolsUserPasswordSecretIdDetails;
  /**
   * The advanced connection properties key-value pair.
   */
  "advancedProperties"?: { [key: string]: string };
  /**
   * The CA certificate to verify the server's certificate and
   * the client private key and associated certificate required for client authentication.
   *
   */
  "keyStores"?: Array<model.DatabaseToolsKeyStoreGenericJdbcDetails>;

  "type": string;
}

export namespace CreateDatabaseToolsConnectionGenericJdbcDetails {
  export function getJsonObj(
    obj: CreateDatabaseToolsConnectionGenericJdbcDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDatabaseToolsConnectionDetails.getJsonObj(
            obj
          ) as CreateDatabaseToolsConnectionGenericJdbcDetails)),
      ...{
        "userPassword": obj.userPassword
          ? model.DatabaseToolsUserPasswordDetails.getJsonObj(obj.userPassword)
          : undefined,

        "keyStores": obj.keyStores
          ? obj.keyStores.map(item => {
              return model.DatabaseToolsKeyStoreGenericJdbcDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "GENERIC_JDBC";
  export function getDeserializedJsonObj(
    obj: CreateDatabaseToolsConnectionGenericJdbcDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDatabaseToolsConnectionDetails.getDeserializedJsonObj(
            obj
          ) as CreateDatabaseToolsConnectionGenericJdbcDetails)),
      ...{
        "userPassword": obj.userPassword
          ? model.DatabaseToolsUserPasswordDetails.getDeserializedJsonObj(obj.userPassword)
          : undefined,

        "keyStores": obj.keyStores
          ? obj.keyStores.map(item => {
              return model.DatabaseToolsKeyStoreGenericJdbcDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
