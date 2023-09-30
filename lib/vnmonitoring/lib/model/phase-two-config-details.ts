/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

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
 * Configuration details for IPSec phase two configuration parameters.
 */
export interface PhaseTwoConfigDetails {
  /**
   * Indicates whether custom configuration is enabled for phase two options.
   */
  "isCustomPhaseTwoConfig"?: boolean;
  /**
   * The authentication algorithm proposed during phase two tunnel negotiation.
   *
   */
  "authenticationAlgorithm"?: PhaseTwoConfigDetails.AuthenticationAlgorithm;
  /**
   * The encryption algorithm proposed during phase two tunnel negotiation.
   *
   */
  "encryptionAlgorithm"?: PhaseTwoConfigDetails.EncryptionAlgorithm;
  /**
   * Lifetime in seconds for the IPSec session key set in phase two. The default is 3600 which is equivalent to 1 hour.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "lifetimeInSeconds"?: number;
  /**
   * Indicates whether perfect forward secrecy (PFS) is enabled.
   */
  "isPfsEnabled"?: boolean;
  /**
   * The Diffie-Hellman group used for PFS, if PFS is enabled.
   */
  "pfsDhGroup"?: PhaseTwoConfigDetails.PfsDhGroup;
}

export namespace PhaseTwoConfigDetails {
  export enum AuthenticationAlgorithm {
    HmacSha2256128 = "HMAC_SHA2_256_128",
    HmacSha1128 = "HMAC_SHA1_128"
  }

  export enum EncryptionAlgorithm {
    Aes256Gcm = "AES_256_GCM",
    Aes192Gcm = "AES_192_GCM",
    Aes128Gcm = "AES_128_GCM",
    Aes256Cbc = "AES_256_CBC",
    Aes192Cbc = "AES_192_CBC",
    Aes128Cbc = "AES_128_CBC"
  }

  export enum PfsDhGroup {
    Group2 = "GROUP2",
    Group5 = "GROUP5",
    Group14 = "GROUP14",
    Group19 = "GROUP19",
    Group20 = "GROUP20",
    Group24 = "GROUP24"
  }

  export function getJsonObj(obj: PhaseTwoConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PhaseTwoConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
