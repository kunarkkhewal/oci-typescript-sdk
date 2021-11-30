/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The information about new deployment environment.
 */
export interface CreateDeployEnvironmentDetails {
  /**
   * Optional description about the deployment environment.
   */
  "description"?: string;
  /**
   * Deployment environment display name. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The OCID of a project.
   */
  "projectId": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.  See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"bar-key\": \"value\"}`
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "deployEnvironmentType": string;
}

export namespace CreateDeployEnvironmentDetails {
  export function getJsonObj(obj: CreateDeployEnvironmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("deployEnvironmentType" in obj && obj.deployEnvironmentType) {
      switch (obj.deployEnvironmentType) {
        case "COMPUTE_INSTANCE_GROUP":
          return model.CreateComputeInstanceGroupDeployEnvironmentDetails.getJsonObj(
            <model.CreateComputeInstanceGroupDeployEnvironmentDetails>(<object>jsonObj),
            true
          );
        case "OKE_CLUSTER":
          return model.CreateOkeClusterDeployEnvironmentDetails.getJsonObj(
            <model.CreateOkeClusterDeployEnvironmentDetails>(<object>jsonObj),
            true
          );
        case "FUNCTION":
          return model.CreateFunctionDeployEnvironmentDetails.getJsonObj(
            <model.CreateFunctionDeployEnvironmentDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.deployEnvironmentType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDeployEnvironmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("deployEnvironmentType" in obj && obj.deployEnvironmentType) {
      switch (obj.deployEnvironmentType) {
        case "COMPUTE_INSTANCE_GROUP":
          return model.CreateComputeInstanceGroupDeployEnvironmentDetails.getDeserializedJsonObj(
            <model.CreateComputeInstanceGroupDeployEnvironmentDetails>(<object>jsonObj),
            true
          );
        case "OKE_CLUSTER":
          return model.CreateOkeClusterDeployEnvironmentDetails.getDeserializedJsonObj(
            <model.CreateOkeClusterDeployEnvironmentDetails>(<object>jsonObj),
            true
          );
        case "FUNCTION":
          return model.CreateFunctionDeployEnvironmentDetails.getDeserializedJsonObj(
            <model.CreateFunctionDeployEnvironmentDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.deployEnvironmentType);
      }
    }
    return jsonObj;
  }
}
