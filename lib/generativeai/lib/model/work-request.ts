/**
 * Generative AI Service Management API
 * OCI Generative AI is a fully managed service that provides a set of state-of-the-art, customizable large language models (LLMs) that cover a wide range of use cases for text generation, summarization, and text embeddings. 

Use the Generative AI service management API to create and manage [dedicated AI clusters](#/en/generative-ai/latest/DedicatedAiCluster/), [endpoints](#/en/generative-ai/latest/Endpoint/), [custom models](#/en/generative-ai/latest/Model/), and [work requests](#/en/generative-ai/latest/WorkRequest/) in the Generative AI service. For example, create a custom model by fine-tuning an out-of-the-box model using your own data, on a fine-tuning dedicated AI cluster. Then, create a hosting dedicated AI cluster with an endpoint to host your custom model. 

To access your custom model endpoints, or to try the out-of-the-box models to generate text, summarize, and create text embeddings see the [Generative AI Inference API](/#/en/generative-ai-inference/latest/).

To learn more about the service, see the [Generative AI documentation](/iaas/Content/generative-ai/home.htm).

 * OpenAPI spec version: 20231130
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
* An asynchronous work request. When you start a long-running operation, the service creates a work request. Work requests help you monitor long-running operations. 
* <p>
A work request is an activity log that lets you track each step in the operation's progress. Each work request has an OCID that lets you interact with it programmatically and use it for automation.
* 
*/
export interface WorkRequest {
  /**
   * The asynchronous operation tracked by this work request.
   */
  "operationType": model.OperationType;
  /**
   * The status of the work request.
   */
  "status": model.OperationStatus;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the work request.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment that contains the work request.
   *
   */
  "compartmentId": string;
  /**
   * The resources that are affected by the work request.
   */
  "resources": Array<model.WorkRequestResource>;
  /**
   * Shows the progress of the operation tracked by the work request, as a percentage of the total work
   * that must be performed.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete": number;
  /**
   * The date and time the work request was created, in the format defined by
   * [RFC 3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeAccepted": Date;
  /**
   * The date and time the work request was started, in the format defined by
   * [RFC 3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeStarted"?: Date;
  /**
   * The date and time the work request was finished, in the format defined by
   * [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   *
   */
  "timeFinished"?: Date;
}

export namespace WorkRequest {
  export function getJsonObj(obj: WorkRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
