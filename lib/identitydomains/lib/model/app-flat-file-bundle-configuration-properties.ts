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
 * Flat file connector bundle configuration properties
 * <p>
 **SCIM++ Properties:**
 *  - idcsCompositeKey: [name]
 *  - idcsSearchable: true
 *  - multiValued: true
 *  - mutability: readWrite
 *  - required: false
 *  - returned: default
 *  - type: complex
 *  - uniqueness: none
 */
export interface AppFlatFileBundleConfigurationProperties {
  /**
   * Name of the flatfile bundle configuration property. This attribute maps to \\\"name\\\" attribute in \\\"ConfigurationProperty\\\" in ICF.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "name": string;
  /**
   * Display name of the flatfile bundle configuration property. This attribute maps to \\\"displayName\\\" attribute in \\\"ConfigurationProperty\\\" in ICF.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "displayName"?: string;
  /**
   * ICF data type of flatfile the bundle configuration property. This attribute maps to \\\"type\\\" attribute in \\\"ConfigurationProperty\\\" in ICF.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "icfType": AppFlatFileBundleConfigurationProperties.IcfType;
  /**
   * Value of the flatfile bundle configuration property. This attribute maps to \\\"value\\\" attribute in \\\"ConfigurationProperty\\\" in ICF.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - idcsSensitive: encrypt
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "value"?: Array<string>;
  /**
   * Display sequence of the bundle configuration property.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "order"?: number;
  /**
   * Help message of the flatfile bundle configuration property. This attribute maps to \\\"helpMessage\\\" attribute in \\\"ConfigurationProperty\\\" in ICF.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "helpMessage"?: string;
  /**
   * If true, this flatfile bundle configuration property is required to connect to the target connected managed app. This attribute maps to \\\"isRequired\\\" attribute in \\\"ConfigurationProperty\\\" in ICF.
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: true
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "required": boolean;
  /**
   * If true, this flatfile bundle configuration property value is confidential and will be encrypted in Oracle Identity Cloud Service. This attribute maps to \\\"isConfidential\\\" attribute in \\\"ConfigurationProperty\\\" in ICF.
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "confidential"?: boolean;
}

export namespace AppFlatFileBundleConfigurationProperties {
  export enum IcfType {
    Long = "Long",
    String = "String",
    Character = "Character",
    Double = "Double",
    Float = "Float",
    Integer = "Integer",
    Boolean = "Boolean",
    Uri = "URI",
    File = "File",
    GuardedByteArray = "GuardedByteArray",
    GuardedString = "GuardedString",
    ArrayOfLong = "ArrayOfLong",
    ArrayOfString = "ArrayOfString",
    ArrayOfCharacter = "ArrayOfCharacter",
    ArrayOfDouble = "ArrayOfDouble",
    ArrayOfFloat = "ArrayOfFloat",
    ArrayOfInteger = "ArrayOfInteger",
    ArrayOfBoolean = "ArrayOfBoolean",
    ArrayOfUri = "ArrayOfURI",
    ArrayOfFile = "ArrayOfFile",
    ArrayOfGuardedByteArray = "ArrayOfGuardedByteArray",
    ArrayOfGuardedString = "ArrayOfGuardedString",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AppFlatFileBundleConfigurationProperties): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AppFlatFileBundleConfigurationProperties): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
