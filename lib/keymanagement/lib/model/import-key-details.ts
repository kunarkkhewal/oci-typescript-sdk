/**
 * Vault Key Management API
 * Use the Key Management API to manage vaults and keys. For more information, see [Managing Vaults](/Content/KeyManagement/Tasks/managingvaults.htm) and [Managing Keys](/Content/KeyManagement/Tasks/managingkeys.htm).

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
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
 * The details of the Key that you wish to import.
 */
export interface ImportKeyDetails {
  /**
   * A parameter specifying whether the auto key rotation is enabled or not.
   */
  "isAutoRotationEnabled"?: boolean;
  "autoKeyRotationDetails"?: model.AutoKeyRotationDetails;
  /**
   * The OCID of the compartment that contains this key.
   */
  "compartmentId": string;
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"foo-value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name for the key. It does not have to be unique, and it is changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope.
   * Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  "keyShape": model.KeyShape;
  "wrappedImportKey": model.WrappedImportKey;
  /**
   * The key's protection mode indicates how the key persists and where cryptographic operations that use the key are performed.
   * A protection mode of {@code HSM} means that the key persists on a hardware security module (HSM) and all cryptographic operations are performed inside
   * the HSM. A protection mode of {@code SOFTWARE} means that the key persists on the server, protected by the vault's RSA wrapping key which persists
   * on the HSM. All cryptographic operations that use a key with a protection mode of {@code SOFTWARE} are performed on the server. By default,
   * a key's protection mode is set to {@code HSM}. You can't change a key's protection mode after the key is created or imported.
   *
   */
  "protectionMode"?: ImportKeyDetails.ProtectionMode;
}

export namespace ImportKeyDetails {
  export enum ProtectionMode {
    Hsm = "HSM",
    Software = "SOFTWARE"
  }

  export function getJsonObj(obj: ImportKeyDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "autoKeyRotationDetails": obj.autoKeyRotationDetails
          ? model.AutoKeyRotationDetails.getJsonObj(obj.autoKeyRotationDetails)
          : undefined,

        "keyShape": obj.keyShape ? model.KeyShape.getJsonObj(obj.keyShape) : undefined,
        "wrappedImportKey": obj.wrappedImportKey
          ? model.WrappedImportKey.getJsonObj(obj.wrappedImportKey)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ImportKeyDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "autoKeyRotationDetails": obj.autoKeyRotationDetails
          ? model.AutoKeyRotationDetails.getDeserializedJsonObj(obj.autoKeyRotationDetails)
          : undefined,

        "keyShape": obj.keyShape ? model.KeyShape.getDeserializedJsonObj(obj.keyShape) : undefined,
        "wrappedImportKey": obj.wrappedImportKey
          ? model.WrappedImportKey.getDeserializedJsonObj(obj.wrappedImportKey)
          : undefined
      }
    };

    return jsonObj;
  }
}
