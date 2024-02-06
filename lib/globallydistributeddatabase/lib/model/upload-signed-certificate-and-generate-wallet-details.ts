/**
 * Globally Distributed Database
 * Use the Globally Distributed Database service APIs to create and manage distributed databases.
 * OpenAPI spec version: 20230301
 *
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
 * Details of the request to upload the CA signed certificates to GSMs and generate wallets for
 * GSMs of the sharded database.
 *
 */
export interface UploadSignedCertificateAndGenerateWalletDetails {
  /**
   * The CA signed certificate key..
   */
  "caSignedCertificate": string;
}

export namespace UploadSignedCertificateAndGenerateWalletDetails {
  export function getJsonObj(obj: UploadSignedCertificateAndGenerateWalletDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: UploadSignedCertificateAndGenerateWalletDetails
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
