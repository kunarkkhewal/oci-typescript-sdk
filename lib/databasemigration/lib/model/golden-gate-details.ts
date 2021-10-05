/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20210929
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
 * Details about Oracle GoldenGate Microservices.
 *
 */
export interface GoldenGateDetails {
  "hub": model.GoldenGateHub;
  "settings"?: model.GoldenGateSettings;
}

export namespace GoldenGateDetails {
  export function getJsonObj(obj: GoldenGateDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "hub": obj.hub ? model.GoldenGateHub.getJsonObj(obj.hub) : undefined,
        "settings": obj.settings ? model.GoldenGateSettings.getJsonObj(obj.settings) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GoldenGateDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "hub": obj.hub ? model.GoldenGateHub.getDeserializedJsonObj(obj.hub) : undefined,
        "settings": obj.settings
          ? model.GoldenGateSettings.getDeserializedJsonObj(obj.settings)
          : undefined
      }
    };

    return jsonObj;
  }
}
