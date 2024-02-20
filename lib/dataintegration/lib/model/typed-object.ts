/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The {@code TypedObject} class is a base class for any model object that has a type.
 */
export interface TypedObject {
  /**
   * The key of the object.
   */
  "key"?: string;
  /**
   * The model version of an object.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  "configValues"?: model.ConfigValues;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * Detailed description for the object.
   */
  "description"?: string;

  "modelType": string;
}

export namespace TypedObject {
  export function getJsonObj(obj: TypedObject): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,
        "configValues": obj.configValues
          ? model.ConfigValues.getJsonObj(obj.configValues)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "OUTPUT_PORT":
          return model.OutputPort.getJsonObj(<model.OutputPort>(<object>jsonObj), true);
        case "DYNAMIC_INPUT_FIELD":
          return model.DynamicInputField.getJsonObj(
            <model.DynamicInputField>(<object>jsonObj),
            true
          );
        case "FIELD":
          return model.AbstractField.getJsonObj(<model.AbstractField>(<object>jsonObj), true);
        case "INPUT_FIELD":
          return model.InputField.getJsonObj(<model.InputField>(<object>jsonObj), true);
        case "SHAPE":
          return model.Shape.getJsonObj(<model.Shape>(<object>jsonObj), true);
        case "INPUT_PORT":
          return model.InputPort.getJsonObj(<model.InputPort>(<object>jsonObj), true);
        case "CONDITIONAL_OUTPUT_PORT":
          return model.ConditionalOutputPort.getJsonObj(
            <model.ConditionalOutputPort>(<object>jsonObj),
            true
          );
        case "DECISION_OUTPUT_PORT":
          return model.DecisionOutputPort.getJsonObj(
            <model.DecisionOutputPort>(<object>jsonObj),
            true
          );
        case "MATERIALIZED_DYNAMIC_FIELD":
          return model.MaterializedDynamicField.getJsonObj(
            <model.MaterializedDynamicField>(<object>jsonObj),
            true
          );
        case "PROXY_FIELD":
          return model.ProxyField.getJsonObj(<model.ProxyField>(<object>jsonObj), true);
        case "DYNAMIC_PROXY_FIELD":
          return model.DynamicProxyField.getJsonObj(
            <model.DynamicProxyField>(<object>jsonObj),
            true
          );
        case "SHAPE_FIELD":
          return model.ShapeField.getJsonObj(<model.ShapeField>(<object>jsonObj), true);
        case "INPUT_PROXY_FIELD":
          return model.InputProxyField.getJsonObj(<model.InputProxyField>(<object>jsonObj), true);
        case "PARAMETER":
          return model.Parameter.getJsonObj(<model.Parameter>(<object>jsonObj), true);
        case "PIVOT_FIELD":
          return model.PivotField.getJsonObj(<model.PivotField>(<object>jsonObj), true);
        case "OUTPUT_FIELD":
          return model.OutputField.getJsonObj(<model.OutputField>(<object>jsonObj), true);
        case "MACRO_FIELD":
          return model.MacroField.getJsonObj(<model.MacroField>(<object>jsonObj), true);
        case "DERIVED_FIELD":
          return model.DerivedField.getJsonObj(<model.DerivedField>(<object>jsonObj), true);
        case "TYPED_EXPRESSION":
          return model.TypedExpression.getJsonObj(<model.TypedExpression>(<object>jsonObj), true);
        case "FLOW_PORT":
          return model.FlowPort.getJsonObj(<model.FlowPort>(<object>jsonObj), true);
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TypedObject): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,
        "configValues": obj.configValues
          ? model.ConfigValues.getDeserializedJsonObj(obj.configValues)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "OUTPUT_PORT":
          return model.OutputPort.getDeserializedJsonObj(<model.OutputPort>(<object>jsonObj), true);
        case "DYNAMIC_INPUT_FIELD":
          return model.DynamicInputField.getDeserializedJsonObj(
            <model.DynamicInputField>(<object>jsonObj),
            true
          );
        case "FIELD":
          return model.AbstractField.getDeserializedJsonObj(
            <model.AbstractField>(<object>jsonObj),
            true
          );
        case "INPUT_FIELD":
          return model.InputField.getDeserializedJsonObj(<model.InputField>(<object>jsonObj), true);
        case "SHAPE":
          return model.Shape.getDeserializedJsonObj(<model.Shape>(<object>jsonObj), true);
        case "INPUT_PORT":
          return model.InputPort.getDeserializedJsonObj(<model.InputPort>(<object>jsonObj), true);
        case "CONDITIONAL_OUTPUT_PORT":
          return model.ConditionalOutputPort.getDeserializedJsonObj(
            <model.ConditionalOutputPort>(<object>jsonObj),
            true
          );
        case "DECISION_OUTPUT_PORT":
          return model.DecisionOutputPort.getDeserializedJsonObj(
            <model.DecisionOutputPort>(<object>jsonObj),
            true
          );
        case "MATERIALIZED_DYNAMIC_FIELD":
          return model.MaterializedDynamicField.getDeserializedJsonObj(
            <model.MaterializedDynamicField>(<object>jsonObj),
            true
          );
        case "PROXY_FIELD":
          return model.ProxyField.getDeserializedJsonObj(<model.ProxyField>(<object>jsonObj), true);
        case "DYNAMIC_PROXY_FIELD":
          return model.DynamicProxyField.getDeserializedJsonObj(
            <model.DynamicProxyField>(<object>jsonObj),
            true
          );
        case "SHAPE_FIELD":
          return model.ShapeField.getDeserializedJsonObj(<model.ShapeField>(<object>jsonObj), true);
        case "INPUT_PROXY_FIELD":
          return model.InputProxyField.getDeserializedJsonObj(
            <model.InputProxyField>(<object>jsonObj),
            true
          );
        case "PARAMETER":
          return model.Parameter.getDeserializedJsonObj(<model.Parameter>(<object>jsonObj), true);
        case "PIVOT_FIELD":
          return model.PivotField.getDeserializedJsonObj(<model.PivotField>(<object>jsonObj), true);
        case "OUTPUT_FIELD":
          return model.OutputField.getDeserializedJsonObj(
            <model.OutputField>(<object>jsonObj),
            true
          );
        case "MACRO_FIELD":
          return model.MacroField.getDeserializedJsonObj(<model.MacroField>(<object>jsonObj), true);
        case "DERIVED_FIELD":
          return model.DerivedField.getDeserializedJsonObj(
            <model.DerivedField>(<object>jsonObj),
            true
          );
        case "TYPED_EXPRESSION":
          return model.TypedExpression.getDeserializedJsonObj(
            <model.TypedExpression>(<object>jsonObj),
            true
          );
        case "FLOW_PORT":
          return model.FlowPort.getDeserializedJsonObj(<model.FlowPort>(<object>jsonObj), true);
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}
