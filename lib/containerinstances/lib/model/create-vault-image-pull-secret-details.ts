/**
 * Container Instance API
 * A description of the Container Instance API
 * OpenAPI spec version: 20210415
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
 * A CreateVaultImagePullSecretDetails is a ImagePullSecret which accepts secretId as credentials information.
 * **Sample Format for username and password in Vault Secret**
 * ```
 * {
 *   \"username\": \"this-is-not-the-secret\",
 *   \"password\": \"example-password\"
 * }
 * ```
 *
 */
export interface CreateVaultImagePullSecretDetails extends model.CreateImagePullSecretDetails {
  /**
   * The OCID of the secret for registry credentials.
   */
  "secretId": string;

  "secretType": string;
}

export namespace CreateVaultImagePullSecretDetails {
  export function getJsonObj(
    obj: CreateVaultImagePullSecretDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateImagePullSecretDetails.getJsonObj(
            obj
          ) as CreateVaultImagePullSecretDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const secretType = "VAULT";
  export function getDeserializedJsonObj(
    obj: CreateVaultImagePullSecretDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateImagePullSecretDetails.getDeserializedJsonObj(
            obj
          ) as CreateVaultImagePullSecretDetails)),
      ...{}
    };

    return jsonObj;
  }
}
