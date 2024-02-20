/**
 * Service Catalog API
 * Manage solutions in Oracle Cloud Infrastructure Service Catalog.
 * OpenAPI spec version: 20210527
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
 * A base object for all types of private application packages.
 */
export interface PrivateApplicationPackage {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the private application package.
   *
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the private application where the package is hosted.
   *
   */
  "privateApplicationId": string;
  /**
   * The display name of the package.
   */
  "displayName"?: string;
  /**
   * The package version.
   */
  "version": string;
  /**
    * The date and time the private application package was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
* timestamp format.
* <p>
Example: {@code 2021-05-27T21:10:29.600Z}
* 
    */
  "timeCreated": Date;

  "packageType": string;
}

export namespace PrivateApplicationPackage {
  export function getJsonObj(obj: PrivateApplicationPackage): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "packageType" in obj && obj.packageType) {
      switch (obj.packageType) {
        case "STACK":
          return model.PrivateApplicationStackPackage.getJsonObj(
            <model.PrivateApplicationStackPackage>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.packageType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PrivateApplicationPackage): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "packageType" in obj && obj.packageType) {
      switch (obj.packageType) {
        case "STACK":
          return model.PrivateApplicationStackPackage.getDeserializedJsonObj(
            <model.PrivateApplicationStackPackage>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.packageType}`);
      }
    }
    return jsonObj;
  }
}
