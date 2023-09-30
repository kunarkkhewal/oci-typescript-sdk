/**
 * Support Management API
 * Use the Support Management API to manage support requests.
For more information, see [Getting Help and Contacting Support](/iaas/Content/GSG/Tasks/contactingsupport.htm).

**Note**: Before you can create service requests with this API, 
you need to have an Oracle Single Sign On (SSO) account, 
and you need to register your Customer Support Identifier (CSI) with My Oracle Support.

 * OpenAPI spec version: 20181231
 * Contact: oci_ops_cims_dev_us_grp@oracle.com
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
 * Details for creating a new user.
 */
export interface CreateUserDetails {
  /**
   * The OCID of the tenancy.
   */
  "compartmentId": string;
  /**
   * First name of the user.
   */
  "firstName": string;
  /**
   * Last name of the user.
   */
  "lastName": string;
  /**
   * CSI associated with the user.
   */
  "csi": string;
  /**
   * Contact number of the user.
   */
  "phone": string;
  /**
   * Timezone of the user.
   */
  "timezone": string;
  /**
   * Organization of the user.
   */
  "organizationName": string;
  /**
   * The kind of support ticket, such as a technical support request or a limit increase request.
   */
  "problemType": model.ProblemType;
}

export namespace CreateUserDetails {
  export function getJsonObj(obj: CreateUserDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateUserDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
