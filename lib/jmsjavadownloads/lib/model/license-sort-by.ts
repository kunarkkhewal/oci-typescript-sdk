/**
 * Java Management Service Download API
 * The APIs for the download engine of the Java Management Service.
 * OpenAPI spec version: 20230601
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
 * The field used to sort the JavaLicenses.
 **/
export enum LicenseSortBy {
  LicenseType = "licenseType",
  DisplayName = "displayName"
}

export namespace LicenseSortBy {
  export function getJsonObj(obj: LicenseSortBy): LicenseSortBy {
    return obj;
  }
  export function getDeserializedJsonObj(obj: LicenseSortBy): LicenseSortBy {
    return obj;
  }
}
