/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for instances in OCI, your private data center, or 3rd-party clouds. 
For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
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
 * The names of the packages to be installed on the managed instance group.
 */
export interface InstallPackagesOnManagedInstanceGroupDetails {
  /**
   * The list of package names.
   */
  "packageNames": Array<string>;
  "workRequestDetails"?: model.WorkRequestDetails;
}

export namespace InstallPackagesOnManagedInstanceGroupDetails {
  export function getJsonObj(obj: InstallPackagesOnManagedInstanceGroupDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "workRequestDetails": obj.workRequestDetails
          ? model.WorkRequestDetails.getJsonObj(obj.workRequestDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: InstallPackagesOnManagedInstanceGroupDetails
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "workRequestDetails": obj.workRequestDetails
          ? model.WorkRequestDetails.getDeserializedJsonObj(obj.workRequestDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
