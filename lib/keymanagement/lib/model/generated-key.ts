/**
 * Vault Key Management API
 * Use the Key Management API to manage vaults and keys. For more information, see [Managing Vaults](/Content/KeyManagement/Tasks/managingvaults.htm) and [Managing Keys](/Content/KeyManagement/Tasks/managingkeys.htm).

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
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
 * The reponse to the regeuest to generate the key to encrypt or decrypt the data.
 */
export interface GeneratedKey {
  /**
   * The encrypted data encryption key generated from a master encryption key.
   */
  "ciphertext": string;
  /**
   * The plaintext data encryption key, a base64-encoded sequence of random bytes, which is
   * included if the [GenerateDataEncryptionKey](https://docs.cloud.oracle.com/api/#/en/key/latest/GeneratedKey/GenerateDataEncryptionKey)
   * request includes the `includePlaintextKey` parameter and sets its value to \"true\".
   *
   */
  "plaintext"?: string;
  /**
   * The checksum of the plaintext data encryption key, which is included if the
   * [GenerateDataEncryptionKey](https://docs.cloud.oracle.com/api/#/en/key/latest/GeneratedKey/GenerateDataEncryptionKey)
   * request includes the `includePlaintextKey` parameter and sets its value to \"true\".
   *
   */
  "plaintextChecksum"?: string;
}

export namespace GeneratedKey {
  export function getJsonObj(obj: GeneratedKey): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GeneratedKey): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
