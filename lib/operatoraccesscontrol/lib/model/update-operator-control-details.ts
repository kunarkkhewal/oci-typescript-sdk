/**
 * OperatorAccessControl API
 * Operator Access Control enables you to control the time duration and the actions an Oracle operator can perform on your Exadata Cloud@Customer infrastructure.
Using logging service, you can view a near real-time audit report of all actions performed by an Oracle operator. 

Use the table of contents and search tool to explore the OperatorAccessControl API.

 * OpenAPI spec version: 20200630
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
 * Information about the new operator control.
 */
export interface UpdateOperatorControlDetails {
  /**
   * Name of the operator control.
   */
  "operatorControlName": string;
  /**
   * Description of the operator control.
   */
  "description"?: string;
  /**
   * List of users who can approve an access request associated with a target resource under the governance of this operator control.
   */
  "approversList"?: Array<string>;
  /**
   * List of user groups who can approve an access request associated with a target resource under the governance of this operator control.
   */
  "approverGroupsList": Array<string>;
  /**
   * List of pre-approved operator actions. Access requests associated with a resource governed by this operator control will be
   * automatically approved if the access request only contain operator actions in the pre-approved list.
   *
   */
  "preApprovedOpActionList"?: Array<string>;
  /**
   * Whether all the operator actions have been pre-approved. If yes, all access requests associated with a resource governed by this operator control
   * will be auto-approved.
   *
   */
  "isFullyPreApproved": boolean;
  /**
   * List of emailId.
   *
   */
  "emailIdList"?: Array<string>;
  /**
   * Number of approvers required to approve an access request. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numberOfApprovers"?: number;
  /**
   * System message that would be displayed to the operator users on accessing the target resource under the governance of this operator control.
   */
  "systemMessage"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateOperatorControlDetails {
  export function getJsonObj(obj: UpdateOperatorControlDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateOperatorControlDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
