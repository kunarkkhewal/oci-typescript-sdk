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
 * The file data entity details.
 */
export interface DataEntityFromFileEntityDetails extends model.DataEntityDetails {
  /**
   * The key of the object.
   */
  "key"?: string;
  /**
   * The model version of an object.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value can be edited by the user and it is restricted to 1000 characters
   */
  "name"?: string;
  /**
   * Detailed description for the object.
   */
  "description"?: string;
  /**
   * The version of the object that is used to track changes in the object instance.
   */
  "objectVersion"?: number;
  /**
   * The external key for the object.
   */
  "externalKey"?: string;
  "shape"?: model.Shape;
  /**
   * The shape ID.
   */
  "shapeId"?: string;
  "types"?: model.TypeLibrary;
  /**
   * The entity type.
   */
  "entityType"?: DataEntityFromFileEntityDetails.EntityType;
  /**
   * Specifies other type label.
   */
  "otherTypeLabel"?: string;
  /**
   * An array of unique keys.
   */
  "uniqueKeys"?: Array<model.UniqueKey>;
  /**
   * An array of foreign keys.
   */
  "foreignKeys"?: Array<model.ForeignKey>;
  /**
   * The resource name.
   */
  "resourceName"?: string;
  "dataFormat"?: model.DataFormat;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore and numbers. It should begin with upper case letter or underscore. The value can be edited by the user.
   */
  "identifier"?: string;

  "modelType": string;
}

export namespace DataEntityFromFileEntityDetails {
  export enum EntityType {
    TABLE = "TABLE",
    VIEW = "VIEW",
    FILE = "FILE",
    QUEUE = "QUEUE",
    STREAM = "STREAM",
    OTHER = "OTHER"
  }

  export function getJsonObj(
    obj: DataEntityFromFileEntityDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataEntityDetails.getJsonObj(obj) as DataEntityFromFileEntityDetails)),
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "shape": obj.shape ? model.Shape.getJsonObj(obj.shape) : undefined,

        "types": obj.types ? model.TypeLibrary.getJsonObj(obj.types) : undefined,

        "uniqueKeys": obj.uniqueKeys
          ? obj.uniqueKeys.map(item => {
              return model.UniqueKey.getJsonObj(item);
            })
          : undefined,
        "foreignKeys": obj.foreignKeys
          ? obj.foreignKeys.map(item => {
              return model.ForeignKey.getJsonObj(item);
            })
          : undefined,

        "dataFormat": obj.dataFormat ? model.DataFormat.getJsonObj(obj.dataFormat) : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "FILE_ENTITY";
}
