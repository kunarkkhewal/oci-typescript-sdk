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
 * Object classes
 * <p>
 **SCIM++ Properties:**
 *  - idcsCompositeKey: [value]
 *  - idcsSearchable: true
 *  - multiValued: true
 *  - mutability: readOnly
 *  - required: false
 *  - returned: default
 *  - type: complex
 *  - uniqueness: none
 */
export interface AppObjectClasses {
  /**
   * Object class template identifier
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "value": string;
  /**
   * Object class URI
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: reference
   *  - uniqueness: none
   */
  "ref"?: string;
  /**
   * Object class display name
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "display"?: string;
  /**
   * Object class resource type
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "resourceType"?: string;
  /**
   * If true, the object class represents an account. The isAccountObjectClass attribute value 'true' MUST appear no more than once.
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "isAccountObjectClass"?: boolean;
  /**
   * Object Class type. Allowed values are AccountObjectClass, ManagedObjectClass.
   * <p>
   **Added In:** 18.1.6
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsDefaultValue: AccountObjectClass
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "type": AppObjectClasses.Type;
}

export namespace AppObjectClasses {
  export enum Type {
    AccountObjectClass = "AccountObjectClass",
    ManagedObjectClass = "ManagedObjectClass",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AppObjectClasses): object {
    const jsonObj = {
      ...obj,
      ...{
        "$ref": obj.ref
      }
    };

    delete (jsonObj as Partial<AppObjectClasses>).ref;

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AppObjectClasses): object {
    const jsonObj = {
      ...obj,
      ...{
        "ref": (obj as any)["$ref"]
      }
    };

    delete (jsonObj as any)["$ref"];

    return jsonObj;
  }
}
