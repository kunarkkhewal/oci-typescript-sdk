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
 * The group members. <b>Important:</b> When requesting group members, a maximum of 10,000 members can be returned in a single request. If the response contains more than 10,000 members, the request will fail. Use 'startIndex' and 'count' to return members in pages instead of in a single response, for example: #attributes=members[startIndex=1%26count=10]. This REST API is SCIM compliant.
 */
export interface GroupMembers {
  /**
   * The ID of the member of this Group
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: always
   *  - type: string
   *  - uniqueness: none
   */
  "value": string;
  /**
   * The date and time that the member was added to the group.
   * <p>
   **Added In:** 2012271618
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - returned: default
   *  - type: dateTime
   *  - uniqueness: none
   */
  "dateAdded"?: string;
  /**
   * The OCID of the member of this group.
   * <p>
   **Added In:** 2012271618
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: always
   *  - type: string
   *  - uniqueness: none
   */
  "ocid"?: string;
  /**
   * The membership OCID.
   * <p>
   **Added In:** 2102181953
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "membershipOcid"?: string;
  /**
   * The URI that corresponds to the member Resource of this group.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
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
   * The member's display name.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "display"?: string;
  /**
   * Indicates the type of resource, for example, User or Group.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - idcsDefaultValue: User
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "type": GroupMembers.Type;
  /**
   * The member's name.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "name"?: string;
}

export namespace GroupMembers {
  export enum Type {
    User = "User",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: GroupMembers): object {
    const jsonObj = {
      ...obj,
      ...{
        "$ref": obj.ref
      }
    };

    delete (jsonObj as Partial<GroupMembers>).ref;

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GroupMembers): object {
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
