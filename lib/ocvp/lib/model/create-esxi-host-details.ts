/**
 * Oracle Cloud VMware Solution API
 * Use this API to manage the Oracle Cloud VMware Solution.

 * OpenAPI spec version: 20200501
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details of the ESXi host to add to the SDDC.
 */
export interface CreateEsxiHostDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the SDDC to add the
   * ESXi host to.
   *
   */
  "sddcId": string;
  /**
    * A descriptive name for the ESXi host. Does not have to be unique, and it's changeable.
* Avoid entering confidential information.
* <p>
If this attribute is not specified, the SDDC's `instanceDisplayNamePrefix` attribute is used
* to name and incrementally number the ESXi host. For example, if you're creating the fourth
* ESXi host in the SDDC, and `instanceDisplayNamePrefix` is `MySDDC`, the host's display
* name is `MySDDC-4`.
* 
    */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateEsxiHostDetails {
  export function getJsonObj(obj: CreateEsxiHostDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
