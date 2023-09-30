/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
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
 * Properties used to update MACsec settings.
 */
export interface UpdateMacsecProperties {
  /**
   * Indicates whether or not MACsec is enabled.
   */
  "state": model.MacsecState;
  "primaryKey"?: model.UpdateMacsecKey;
  /**
   * Type of encryption cipher suite to use for the MACsec connection.
   */
  "encryptionCipher"?: model.MacsecEncryptionCipher;
  /**
   * Indicates whether unencrypted traffic is allowed if MACsec Key Agreement protocol (MKA) fails.
   */
  "isUnprotectedTrafficAllowed"?: boolean;
}

export namespace UpdateMacsecProperties {
  export function getJsonObj(obj: UpdateMacsecProperties): object {
    const jsonObj = {
      ...obj,
      ...{
        "primaryKey": obj.primaryKey ? model.UpdateMacsecKey.getJsonObj(obj.primaryKey) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateMacsecProperties): object {
    const jsonObj = {
      ...obj,
      ...{
        "primaryKey": obj.primaryKey
          ? model.UpdateMacsecKey.getDeserializedJsonObj(obj.primaryKey)
          : undefined
      }
    };

    return jsonObj;
  }
}
