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
 * The object that defines a custom software source. A software source contains a collection of packages. For more information, see [Managing Software Sources](https://docs.cloud.oracle.com/iaas/osmh/doc/software-sources.htm).
 */
export interface CustomSoftwareSource extends model.SoftwareSource {
  /**
   * List of vendor software sources that are used for the basis of the custom software source.
   */
  "vendorSoftwareSources": Array<model.Id>;
  "customSoftwareSourceFilter"?: model.CustomSoftwareSourceFilter;
  /**
   * Indicates whether the service should automatically update the custom software source to use the latest package versions available. The service reviews packages levels once a day.
   */
  "isAutomaticallyUpdated"?: boolean;
  /**
   * Indicates whether the service should automatically resolve package dependencies when including specific packages in the software source.
   */
  "isAutoResolveDependencies"?: boolean;
  /**
   * Indicates whether the service should create the software source from a list of packages provided by the user.
   */
  "isCreatedFromPackageList"?: boolean;
  /**
   * The packages in the software source.
   */
  "packages"?: Array<string>;

  "softwareSourceType": string;
}

export namespace CustomSoftwareSource {
  export function getJsonObj(obj: CustomSoftwareSource, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.SoftwareSource.getJsonObj(obj) as CustomSoftwareSource)),
      ...{
        "vendorSoftwareSources": obj.vendorSoftwareSources
          ? obj.vendorSoftwareSources.map(item => {
              return model.Id.getJsonObj(item);
            })
          : undefined,
        "customSoftwareSourceFilter": obj.customSoftwareSourceFilter
          ? model.CustomSoftwareSourceFilter.getJsonObj(obj.customSoftwareSourceFilter)
          : undefined
      }
    };

    return jsonObj;
  }
  export const softwareSourceType = "CUSTOM";
  export function getDeserializedJsonObj(
    obj: CustomSoftwareSource,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SoftwareSource.getDeserializedJsonObj(obj) as CustomSoftwareSource)),
      ...{
        "vendorSoftwareSources": obj.vendorSoftwareSources
          ? obj.vendorSoftwareSources.map(item => {
              return model.Id.getDeserializedJsonObj(item);
            })
          : undefined,
        "customSoftwareSourceFilter": obj.customSoftwareSourceFilter
          ? model.CustomSoftwareSourceFilter.getDeserializedJsonObj(obj.customSoftwareSourceFilter)
          : undefined
      }
    };

    return jsonObj;
  }
}
