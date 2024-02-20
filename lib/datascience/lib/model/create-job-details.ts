/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * Parameters needed to create a new job.
 *
 */
export interface CreateJobDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the project to associate the job with.
   */
  "projectId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment where you want to create the job.
   */
  "compartmentId": string;
  /**
   * A user-friendly display name for the resource.
   */
  "displayName"?: string;
  /**
   * A short description of the job.
   */
  "description"?: string;
  "jobConfigurationDetails": model.DefaultJobConfigurationDetails;
  "jobInfrastructureConfigurationDetails":
    | model.ManagedEgressStandaloneJobInfrastructureConfigurationDetails
    | model.StandaloneJobInfrastructureConfigurationDetails;
  "jobEnvironmentConfigurationDetails"?: model.OcirContainerJobEnvironmentConfigurationDetails;
  "jobLogConfigurationDetails"?: model.JobLogConfigurationDetails;
  /**
   * Collection of JobStorageMountConfigurationDetails.
   */
  "jobStorageMountConfigurationDetailsList"?: Array<model.StorageMountConfigurationDetails>;
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
}

export namespace CreateJobDetails {
  export function getJsonObj(obj: CreateJobDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "jobConfigurationDetails": obj.jobConfigurationDetails
          ? model.JobConfigurationDetails.getJsonObj(obj.jobConfigurationDetails)
          : undefined,
        "jobInfrastructureConfigurationDetails": obj.jobInfrastructureConfigurationDetails
          ? model.JobInfrastructureConfigurationDetails.getJsonObj(
              obj.jobInfrastructureConfigurationDetails
            )
          : undefined,
        "jobEnvironmentConfigurationDetails": obj.jobEnvironmentConfigurationDetails
          ? model.JobEnvironmentConfigurationDetails.getJsonObj(
              obj.jobEnvironmentConfigurationDetails
            )
          : undefined,
        "jobLogConfigurationDetails": obj.jobLogConfigurationDetails
          ? model.JobLogConfigurationDetails.getJsonObj(obj.jobLogConfigurationDetails)
          : undefined,
        "jobStorageMountConfigurationDetailsList": obj.jobStorageMountConfigurationDetailsList
          ? obj.jobStorageMountConfigurationDetailsList.map(item => {
              return model.StorageMountConfigurationDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateJobDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "jobConfigurationDetails": obj.jobConfigurationDetails
          ? model.JobConfigurationDetails.getDeserializedJsonObj(obj.jobConfigurationDetails)
          : undefined,
        "jobInfrastructureConfigurationDetails": obj.jobInfrastructureConfigurationDetails
          ? model.JobInfrastructureConfigurationDetails.getDeserializedJsonObj(
              obj.jobInfrastructureConfigurationDetails
            )
          : undefined,
        "jobEnvironmentConfigurationDetails": obj.jobEnvironmentConfigurationDetails
          ? model.JobEnvironmentConfigurationDetails.getDeserializedJsonObj(
              obj.jobEnvironmentConfigurationDetails
            )
          : undefined,
        "jobLogConfigurationDetails": obj.jobLogConfigurationDetails
          ? model.JobLogConfigurationDetails.getDeserializedJsonObj(obj.jobLogConfigurationDetails)
          : undefined,
        "jobStorageMountConfigurationDetailsList": obj.jobStorageMountConfigurationDetailsList
          ? obj.jobStorageMountConfigurationDetailsList.map(item => {
              return model.StorageMountConfigurationDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
