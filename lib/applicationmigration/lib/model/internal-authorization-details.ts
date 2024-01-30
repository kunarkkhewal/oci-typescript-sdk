/**
 * Application Migration API
 * Application Migration simplifies the migration of applications from Oracle Cloud Infrastructure Classic to Oracle Cloud Infrastructure.
You can use Application Migration API to migrate applications, such as Oracle Java Cloud Service, SOA Cloud Service, and Integration Classic
instances, to Oracle Cloud Infrastructure. For more information, see
[Overview of Application Migration](/iaas/application-migration/appmigrationoverview.htm).

 * OpenAPI spec version: 20191031
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
 * Credentials to access Oracle Cloud Infrastructure - Classic, which is the source environment from which you want to migrate the application.
 *
 */
export interface InternalAuthorizationDetails extends model.AuthorizationDetails {
  /**
   * User with Compute Operations role in Oracle Cloud Infrastructure - Classic.
   */
  "username": string;
  /**
   * Password for this user.
   */
  "password": string;

  "type": string;
}

export namespace InternalAuthorizationDetails {
  export function getJsonObj(obj: InternalAuthorizationDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AuthorizationDetails.getJsonObj(obj) as InternalAuthorizationDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "INTERNAL_COMPUTE";
  export function getDeserializedJsonObj(
    obj: InternalAuthorizationDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AuthorizationDetails.getDeserializedJsonObj(obj) as InternalAuthorizationDetails)),
      ...{}
    };

    return jsonObj;
  }
}
