/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The information needed to create a new workspace.
 */
export interface CreateWorkspaceDetails {
  /**
   * The OCID of the VCN the subnet is in.
   */
  "vcnId"?: string;
  /**
   * The OCID of the subnet for customer connected databases.
   */
  "subnetId"?: string;
  /**
   * The IP of the custom DNS.
   */
  "dnsServerIp"?: string;
  /**
   * The DNS zone of the custom DNS to use to resolve names.
   */
  "dnsServerZone"?: string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user defined description for the workspace.
   */
  "description"?: string;
  /**
   * A user-friendly display name for the workspace. Does not have to be unique, and can be modified. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * The OCID of the compartment containing the workspace.
   */
  "compartmentId": string;
  /**
   * Specifies whether the private network connection is enabled or disabled.
   */
  "isPrivateNetworkEnabled"?: boolean;
  /**
   * DCMS Data Asset Registry ID to which the workspace is associated
   */
  "registryId"?: string;
  /**
   * DCMS Private Endpoint ID associated with workspace if the pvt networking is enabled
   */
  "endpointId"?: string;
  /**
   * DCMS Data Asset Registry display name
   */
  "registryName"?: string;
  /**
   * DCMS Data Asset Registry Compartment Identifier
   */
  "registryCompartmentId"?: string;
  /**
   * DCMS Private Endpoint Name
   */
  "endpointName"?: string;
  /**
   * DCMS PRivate Endpoint Compartment Identifier
   */
  "endpointCompartmentId"?: string;
  /**
   * Key-values pairs of workspace for storing properties on the workspace.
   */
  "workspaceProperties"?: { [key: string]: string };
}

export namespace CreateWorkspaceDetails {
  export function getJsonObj(obj: CreateWorkspaceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateWorkspaceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
