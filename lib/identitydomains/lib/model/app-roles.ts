/**
 * Identity Domains API
 * Use the Identity Domains API to manage resources within an identity domain, for example, users, dynamic resource groups, groups, and identity providers. For information about managing resources within identity domains, see [Identity and Access Management (with identity domains)](https://docs.oracle.com/iaas/Content/Identity/home.htm). This REST API is SCIM compliant.
Use the table of contents and search tool to explore the Identity Domains API.
 * OpenAPI spec version: v1
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
 * The SCIM protocol defines a standard set of query parameters that can be used to filter, sort, and paginate to return zero or more resources in a query response. Queries MAY be made against a single resource or a resource type endpoint (e.g., /Users), or the service provider Base URI.
 */
export interface AppRoles {
  /**
   * The schemas attribute is an array of Strings which allows introspection of the supported schema version for a SCIM representation as well any schema extensions supported by that representation. Each String value must be a unique URI. All representations of SCIM schema MUST include a non-zero value array with value(s) of the URIs supported by that representation. Duplicate values MUST NOT be included. Value order is not specified and MUST not impact behavior. REQUIRED.
   */
  "schemas": Array<string>;
  /**
   * The total number of results returned by the list or query operation.  The value may be larger than the number of resources returned such as when returning a single page of results where multiple pages are available. REQUIRED. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalResults": number;
  /**
   * A multi-valued list of complex objects containing the requested resources. This MAY be a subset of the full set of resources if pagination is requested. REQUIRED if \"totalResults\" is non-zero.
   */
  "resources": Array<model.AppRole>;
  /**
   * The 1-based index of the first result in the current set of list results.  REQUIRED when partial results returned due to pagination. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "startIndex": number;
  /**
   * The number of resources returned in a list response page. REQUIRED when partial results returned due to pagination. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "itemsPerPage": number;
}

export namespace AppRoles {
  export function getJsonObj(obj: AppRoles): object {
    const jsonObj = {
      ...obj,
      ...{
        "Resources": obj.resources
          ? obj.resources.map(item => {
              return model.AppRole.getJsonObj(item);
            })
          : undefined
      }
    };

    delete (jsonObj as Partial<AppRoles>).resources;

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AppRoles): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": (obj as any)["Resources"]
          ? (obj as any)["Resources"].map((item: any) => {
              return model.AppRole.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    delete (jsonObj as any)["Resources"];

    return jsonObj;
  }
}
