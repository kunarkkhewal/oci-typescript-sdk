/**
 * Language API
 * OCI Language Service solutions can help enterprise customers integrate AI into their products immediately using our proven,
pre-trained and custom models or containers, without a need to set up an house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI and ML operations, which shortens the time to market.

 * OpenAPI spec version: 20221001
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Possible NER model information
 */
export interface NamedEntityRecognitionModelDetails extends model.ModelDetails {
  /**
   * Optional if nothing specified latest base model will be used for training. Supported versions can be found at /modelTypes/{modelType}
   */
  "version"?: string;

  "modelType": string;
}

export namespace NamedEntityRecognitionModelDetails {
  export function getJsonObj(
    obj: NamedEntityRecognitionModelDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ModelDetails.getJsonObj(obj) as NamedEntityRecognitionModelDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const modelType = "NAMED_ENTITY_RECOGNITION";
  export function getDeserializedJsonObj(
    obj: NamedEntityRecognitionModelDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ModelDetails.getDeserializedJsonObj(obj) as NamedEntityRecognitionModelDetails)),
      ...{}
    };

    return jsonObj;
  }
}
