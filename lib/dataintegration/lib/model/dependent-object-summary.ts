/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details of the dependent object.
 */
export interface DependentObjectSummary {
  /**
   * The user that created the object.
   */
  "createdBy"?: string;
  /**
   * The user that created the object.
   */
  "createdByName"?: string;
  /**
   * The user that updated the object.
   */
  "updatedBy"?: string;
  /**
   * The user that updated the object.
   */
  "updatedByName"?: string;
  /**
   * The date and time that the object was created.
   */
  "timeCreated"?: Date;
  /**
   * The date and time that the object was updated.
   */
  "timeUpdated"?: Date;
  /**
   * The owning object key for this object.
   */
  "aggregatorKey"?: string;
  /**
   * The full path to identify this object.
   */
  "identifierPath"?: string;
  /**
   * infoFields
   */
  "infoFields"?: { [key: string]: string };
  /**
   * registryVersion
   */
  "registryVersion"?: number;
  /**
   * Labels are keywords or tags that you can add to data assets, dataflows etc. You can define your own labels and use them to categorize content.
   */
  "labels"?: Array<string>;
}

export namespace DependentObjectSummary {
  export function getJsonObj(obj: DependentObjectSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
