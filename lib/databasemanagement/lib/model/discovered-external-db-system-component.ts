/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

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
 * The details of an external DB system component.
 */
export interface DiscoveredExternalDbSystemComponent {
  /**
   * The identifier of the discovered DB system component.
   */
  "componentId": string;
  /**
   * The user-friendly name for the discovered DB system component. The name does not have to be unique.
   */
  "displayName": string;
  /**
   * The name of the discovered DB system component.
   */
  "componentName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the existing OCI resource matching the discovered DB system component.
   */
  "resourceId"?: string;
  /**
   * Indicates whether the DB system component should be provisioned as an OCI resource or not.
   */
  "isSelectedForMonitoring"?: boolean;
  /**
   * The state of the discovered DB system component.
   */
  "status"?: DiscoveredExternalDbSystemComponent.Status;
  /**
   * The list of associated components.
   */
  "associatedComponents"?: Array<model.AssociatedComponent>;

  "componentType": string;
}

export namespace DiscoveredExternalDbSystemComponent {
  export enum Status {
    New = "NEW",
    Existing = "EXISTING",
    MarkedForDeletion = "MARKED_FOR_DELETION",
    Unknown = "UNKNOWN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DiscoveredExternalDbSystemComponent): object {
    const jsonObj = {
      ...obj,
      ...{
        "associatedComponents": obj.associatedComponents
          ? obj.associatedComponents.map(item => {
              return model.AssociatedComponent.getJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "componentType" in obj && obj.componentType) {
      switch (obj.componentType) {
        case "CLUSTER":
          return model.DiscoveredExternalCluster.getJsonObj(
            <model.DiscoveredExternalCluster>(<object>jsonObj),
            true
          );
        case "DATABASE_HOME":
          return model.DiscoveredExternalDbHome.getJsonObj(
            <model.DiscoveredExternalDbHome>(<object>jsonObj),
            true
          );
        case "DATABASE":
          return model.DiscoveredExternalDatabase.getJsonObj(
            <model.DiscoveredExternalDatabase>(<object>jsonObj),
            true
          );
        case "PLUGGABLE_DATABASE":
          return model.DiscoveredExternalPluggableDatabase.getJsonObj(
            <model.DiscoveredExternalPluggableDatabase>(<object>jsonObj),
            true
          );
        case "CLUSTER_INSTANCE":
          return model.DiscoveredExternalClusterInstance.getJsonObj(
            <model.DiscoveredExternalClusterInstance>(<object>jsonObj),
            true
          );
        case "LISTENER":
          return model.DiscoveredExternalListener.getJsonObj(
            <model.DiscoveredExternalListener>(<object>jsonObj),
            true
          );
        case "DATABASE_NODE":
          return model.DiscoveredExternalDbNode.getJsonObj(
            <model.DiscoveredExternalDbNode>(<object>jsonObj),
            true
          );
        case "ASM":
          return model.DiscoveredExternalAsm.getJsonObj(
            <model.DiscoveredExternalAsm>(<object>jsonObj),
            true
          );
        case "ASM_INSTANCE":
          return model.DiscoveredExternalAsmInstance.getJsonObj(
            <model.DiscoveredExternalAsmInstance>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.componentType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DiscoveredExternalDbSystemComponent): object {
    const jsonObj = {
      ...obj,
      ...{
        "associatedComponents": obj.associatedComponents
          ? obj.associatedComponents.map(item => {
              return model.AssociatedComponent.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "componentType" in obj && obj.componentType) {
      switch (obj.componentType) {
        case "CLUSTER":
          return model.DiscoveredExternalCluster.getDeserializedJsonObj(
            <model.DiscoveredExternalCluster>(<object>jsonObj),
            true
          );
        case "DATABASE_HOME":
          return model.DiscoveredExternalDbHome.getDeserializedJsonObj(
            <model.DiscoveredExternalDbHome>(<object>jsonObj),
            true
          );
        case "DATABASE":
          return model.DiscoveredExternalDatabase.getDeserializedJsonObj(
            <model.DiscoveredExternalDatabase>(<object>jsonObj),
            true
          );
        case "PLUGGABLE_DATABASE":
          return model.DiscoveredExternalPluggableDatabase.getDeserializedJsonObj(
            <model.DiscoveredExternalPluggableDatabase>(<object>jsonObj),
            true
          );
        case "CLUSTER_INSTANCE":
          return model.DiscoveredExternalClusterInstance.getDeserializedJsonObj(
            <model.DiscoveredExternalClusterInstance>(<object>jsonObj),
            true
          );
        case "LISTENER":
          return model.DiscoveredExternalListener.getDeserializedJsonObj(
            <model.DiscoveredExternalListener>(<object>jsonObj),
            true
          );
        case "DATABASE_NODE":
          return model.DiscoveredExternalDbNode.getDeserializedJsonObj(
            <model.DiscoveredExternalDbNode>(<object>jsonObj),
            true
          );
        case "ASM":
          return model.DiscoveredExternalAsm.getDeserializedJsonObj(
            <model.DiscoveredExternalAsm>(<object>jsonObj),
            true
          );
        case "ASM_INSTANCE":
          return model.DiscoveredExternalAsmInstance.getDeserializedJsonObj(
            <model.DiscoveredExternalAsmInstance>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.componentType}`);
      }
    }
    return jsonObj;
  }
}
