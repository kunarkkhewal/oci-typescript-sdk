/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The list of Java installation sites to add.
 */
export interface AddFleetInstallationSitesDetails {
  /**
   * The list of installation sites to add.
   */
  "installationSites": Array<model.NewInstallationSite>;
}

export namespace AddFleetInstallationSitesDetails {
  export function getJsonObj(obj: AddFleetInstallationSitesDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "installationSites": obj.installationSites
          ? obj.installationSites.map(item => {
              return model.NewInstallationSite.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AddFleetInstallationSitesDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "installationSites": obj.installationSites
          ? obj.installationSites.map(item => {
              return model.NewInstallationSite.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
