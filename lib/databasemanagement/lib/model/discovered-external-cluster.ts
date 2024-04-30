/**
 * Database Management API
 * Use the Database Management API to monitor and manage resources such as
Oracle Databases, MySQL Databases, and External Database Systems. 
For more information, see [Database Management](/iaas/database-management/home.htm).

 * OpenAPI spec version: 20201101
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
 * The details of an external cluster discovered in an external DB system discovery run.
 */
export interface DiscoveredExternalCluster extends model.DiscoveredExternalDbSystemComponent {
  /**
   * The directory in which Oracle Grid Infrastructure is installed.
   */
  "gridHome"?: string;
  /**
   * The version of Oracle Clusterware running in the cluster.
   */
  "version"?: string;
  /**
   * Indicates whether the cluster is an Oracle Flex Cluster or not.
   */
  "isFlexCluster"?: boolean;
  /**
   * The list of network address configurations of the external cluster.
   */
  "networkConfigurations"?: Array<model.ExternalClusterNetworkConfiguration>;
  /**
   * The list of Virtual IP (VIP) configurations of the external cluster.
   */
  "vipConfigurations"?: Array<model.ExternalClusterVipConfiguration>;
  /**
   * The list of Single Client Access Name (SCAN) configurations of the external cluster.
   */
  "scanConfigurations"?: Array<model.ExternalClusterScanListenerConfiguration>;
  /**
   * The location of the Oracle Cluster Registry (OCR) file.
   */
  "ocrFileLocation"?: string;
  "clusterInstances"?: Array<model.DiscoveredExternalClusterInstance>;

  "componentType": string;
}

export namespace DiscoveredExternalCluster {
  export function getJsonObj(obj: DiscoveredExternalCluster, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DiscoveredExternalDbSystemComponent.getJsonObj(obj) as DiscoveredExternalCluster)),
      ...{
        "networkConfigurations": obj.networkConfigurations
          ? obj.networkConfigurations.map(item => {
              return model.ExternalClusterNetworkConfiguration.getJsonObj(item);
            })
          : undefined,
        "vipConfigurations": obj.vipConfigurations
          ? obj.vipConfigurations.map(item => {
              return model.ExternalClusterVipConfiguration.getJsonObj(item);
            })
          : undefined,
        "scanConfigurations": obj.scanConfigurations
          ? obj.scanConfigurations.map(item => {
              return model.ExternalClusterScanListenerConfiguration.getJsonObj(item);
            })
          : undefined,

        "clusterInstances": obj.clusterInstances
          ? obj.clusterInstances.map(item => {
              return model.DiscoveredExternalClusterInstance.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const componentType = "CLUSTER";
  export function getDeserializedJsonObj(
    obj: DiscoveredExternalCluster,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DiscoveredExternalDbSystemComponent.getDeserializedJsonObj(
            obj
          ) as DiscoveredExternalCluster)),
      ...{
        "networkConfigurations": obj.networkConfigurations
          ? obj.networkConfigurations.map(item => {
              return model.ExternalClusterNetworkConfiguration.getDeserializedJsonObj(item);
            })
          : undefined,
        "vipConfigurations": obj.vipConfigurations
          ? obj.vipConfigurations.map(item => {
              return model.ExternalClusterVipConfiguration.getDeserializedJsonObj(item);
            })
          : undefined,
        "scanConfigurations": obj.scanConfigurations
          ? obj.scanConfigurations.map(item => {
              return model.ExternalClusterScanListenerConfiguration.getDeserializedJsonObj(item);
            })
          : undefined,

        "clusterInstances": obj.clusterInstances
          ? obj.clusterInstances.map(item => {
              return model.DiscoveredExternalClusterInstance.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
