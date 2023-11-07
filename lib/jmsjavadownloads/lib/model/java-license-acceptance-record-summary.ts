/**
 * Java Management Service Download API
 * The APIs for the download engine of the Java Management Service.
 * OpenAPI spec version: 20230601
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
 * User acceptance record summary for a Java license.
 *
 */
export interface JavaLicenseAcceptanceRecordSummary {
  /**
   * The unique identifier for the acceptance record.
   */
  "id": string;
  /**
   * Status of license acceptance.
   */
  "licenseAcceptanceStatus": model.LicenseAcceptanceStatus;
  /**
   * The tenancy [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the user accepting the license.
   */
  "compartmentId": string;
  /**
   * License type associated with the acceptance.
   */
  "licenseType": model.LicenseType;
  "createdBy": model.Principal;
  "lastUpdatedBy"?: model.Principal;
  /**
   * The date and time of license acceptance(formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   *
   */
  "timeAccepted": Date;
  /**
   * The date and time of last update(formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   *
   */
  "timeLastUpdated"?: Date;
  /**
   * The current state of the JavaLicenseAcceptanceRecord.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`. (See [Managing Tags and Tag Namespaces](https://docs.cloud.oracle.com/Content/Tagging/Concepts/understandingfreeformtags.htm).)
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`. (See [Understanding Free-form Tags](https://docs.cloud.oracle.com/Content/Tagging/Tasks/managingtagsandtagnamespaces.htm)).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * System tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* System tags can be viewed by users, but can only be created by the system.
* <p>
Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace JavaLicenseAcceptanceRecordSummary {
  export function getJsonObj(obj: JavaLicenseAcceptanceRecordSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "createdBy": obj.createdBy ? model.Principal.getJsonObj(obj.createdBy) : undefined,
        "lastUpdatedBy": obj.lastUpdatedBy
          ? model.Principal.getJsonObj(obj.lastUpdatedBy)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JavaLicenseAcceptanceRecordSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "createdBy": obj.createdBy
          ? model.Principal.getDeserializedJsonObj(obj.createdBy)
          : undefined,
        "lastUpdatedBy": obj.lastUpdatedBy
          ? model.Principal.getDeserializedJsonObj(obj.lastUpdatedBy)
          : undefined
      }
    };

    return jsonObj;
  }
}
