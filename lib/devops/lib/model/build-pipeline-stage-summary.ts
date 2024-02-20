/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Summary of the Stage.
 */
export interface BuildPipelineStageSummary {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * Stage display name, which can be renamed and is not necessarily unique. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The OCID of the DevOps project.
   */
  "projectId": string;
  /**
   * The OCID of the build pipeline.
   */
  "buildPipelineId": string;
  /**
   * The OCID of the compartment where the pipeline is created.
   */
  "compartmentId": string;
  /**
   * The time the stage was created. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeCreated"?: Date;
  /**
   * The time the stage was updated. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the stage.
   *
   */
  "lifecycleState"?: string;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * Optional description about the build stage.
   */
  "description"?: string;
  "buildPipelineStagePredecessorCollection"?: model.BuildPipelineStagePredecessorCollection;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.  See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: {@code {\"bar-key\": \"value\"}}
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };

  "buildPipelineStageType": string;
}

export namespace BuildPipelineStageSummary {
  export function getJsonObj(obj: BuildPipelineStageSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "buildPipelineStagePredecessorCollection": obj.buildPipelineStagePredecessorCollection
          ? model.BuildPipelineStagePredecessorCollection.getJsonObj(
              obj.buildPipelineStagePredecessorCollection
            )
          : undefined
      }
    };

    if (obj && "buildPipelineStageType" in obj && obj.buildPipelineStageType) {
      switch (obj.buildPipelineStageType) {
        case "WAIT":
          return model.WaitStageSummary.getJsonObj(<model.WaitStageSummary>(<object>jsonObj), true);
        case "BUILD":
          return model.BuildStageSummary.getJsonObj(
            <model.BuildStageSummary>(<object>jsonObj),
            true
          );
        case "DELIVER_ARTIFACT":
          return model.DeliverArtifactStageSummary.getJsonObj(
            <model.DeliverArtifactStageSummary>(<object>jsonObj),
            true
          );
        case "TRIGGER_DEPLOYMENT_PIPELINE":
          return model.TriggerDeploymentStageSummary.getJsonObj(
            <model.TriggerDeploymentStageSummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.buildPipelineStageType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BuildPipelineStageSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "buildPipelineStagePredecessorCollection": obj.buildPipelineStagePredecessorCollection
          ? model.BuildPipelineStagePredecessorCollection.getDeserializedJsonObj(
              obj.buildPipelineStagePredecessorCollection
            )
          : undefined
      }
    };

    if (obj && "buildPipelineStageType" in obj && obj.buildPipelineStageType) {
      switch (obj.buildPipelineStageType) {
        case "WAIT":
          return model.WaitStageSummary.getDeserializedJsonObj(
            <model.WaitStageSummary>(<object>jsonObj),
            true
          );
        case "BUILD":
          return model.BuildStageSummary.getDeserializedJsonObj(
            <model.BuildStageSummary>(<object>jsonObj),
            true
          );
        case "DELIVER_ARTIFACT":
          return model.DeliverArtifactStageSummary.getDeserializedJsonObj(
            <model.DeliverArtifactStageSummary>(<object>jsonObj),
            true
          );
        case "TRIGGER_DEPLOYMENT_PIPELINE":
          return model.TriggerDeploymentStageSummary.getDeserializedJsonObj(
            <model.TriggerDeploymentStageSummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.buildPipelineStageType}`);
      }
    }
    return jsonObj;
  }
}
