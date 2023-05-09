/**
 * Access Governance APIs
 * Use the Oracle Access Governance API to create, view, and manage GovernanceInstances.
 * OpenAPI spec version: 20220518
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
 * The tenancy-wide configuration for GovernanceInstances.
 */
export interface GovernanceInstanceConfiguration {
  "senderInfo": model.SenderConfig;
}

export namespace GovernanceInstanceConfiguration {
  export function getJsonObj(obj: GovernanceInstanceConfiguration): object {
    const jsonObj = {
      ...obj,
      ...{
        "senderInfo": obj.senderInfo ? model.SenderConfig.getJsonObj(obj.senderInfo) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GovernanceInstanceConfiguration): object {
    const jsonObj = {
      ...obj,
      ...{
        "senderInfo": obj.senderInfo
          ? model.SenderConfig.getDeserializedJsonObj(obj.senderInfo)
          : undefined
      }
    };

    return jsonObj;
  }
}
