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
 * The details of the key store.
 */
export interface DatabaseToolsKeyStorePostgresql {
  /**
   * The key store type.
   */
  "keyStoreType"?: model.KeyStoreTypePostgresql;
  "keyStoreContent"?: model.DatabaseToolsKeyStoreContentSecretIdPostgresql;
  "keyStorePassword"?: model.DatabaseToolsKeyStorePasswordSecretIdPostgresql;
}

export namespace DatabaseToolsKeyStorePostgresql {
  export function getJsonObj(obj: DatabaseToolsKeyStorePostgresql): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyStoreContent": obj.keyStoreContent
          ? model.DatabaseToolsKeyStoreContentPostgresql.getJsonObj(obj.keyStoreContent)
          : undefined,
        "keyStorePassword": obj.keyStorePassword
          ? model.DatabaseToolsKeyStorePasswordPostgresql.getJsonObj(obj.keyStorePassword)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseToolsKeyStorePostgresql): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyStoreContent": obj.keyStoreContent
          ? model.DatabaseToolsKeyStoreContentPostgresql.getDeserializedJsonObj(obj.keyStoreContent)
          : undefined,
        "keyStorePassword": obj.keyStorePassword
          ? model.DatabaseToolsKeyStorePasswordPostgresql.getDeserializedJsonObj(
              obj.keyStorePassword
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
