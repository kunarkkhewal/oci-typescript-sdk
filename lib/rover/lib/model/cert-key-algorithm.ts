/**
 * RoverCloudService API
 * A description of the RoverCloudService API.
 * OpenAPI spec version: 20201210
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
 * Possible key algorithms for leaf certificate.
 **/
export enum CertKeyAlgorithm {
  Rsa2048 = "RSA2048",
  Rsa4096 = "RSA4096",
  EcdsaP256 = "ECDSA_P256",
  EcdsaP384 = "ECDSA_P384",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace CertKeyAlgorithm {
  export function getJsonObj(obj: CertKeyAlgorithm): CertKeyAlgorithm {
    return obj;
  }
  export function getDeserializedJsonObj(obj: CertKeyAlgorithm): CertKeyAlgorithm {
    return obj;
  }
}
