/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * LoganParserDetails
 */
export interface LogAnalyticsParserSummary {
  /**
   * The content.
   */
  "content"?: string;
  /**
   * The parser description.
   */
  "description"?: string;
  /**
   * The parser display name.
   */
  "displayName"?: string;
  /**
   * The parser edit version. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "editVersion"?: number;
  /**
   * The encoding.
   */
  "encoding"?: string;
  /**
   * The example content.
   */
  "exampleContent"?: string;
  /**
   * The parser fields.
   */
  "fieldMaps"?: Array<model.LogAnalyticsParserField>;
  /**
   * The footer regular expression.
   */
  "footerContent"?: string;
  /**
   * The header content.
   */
  "headerContent"?: string;
  /**
   * The parser name.
   */
  "name"?: string;
  /**
   * A flag indicating if this is a default parser.
   *
   */
  "isDefault"?: boolean;
  /**
   * A flag indicating if this is a single line content parser.
   *
   */
  "isSingleLineContent"?: boolean;
  /**
   * The system flag.  A value of false denotes a custom, or user
   * defined object.  A value of true denotes a built in object.
   *
   */
  "isSystem"?: boolean;
  /**
   * The language.
   */
  "language"?: string;
  /**
   * The last updated date.
   */
  "timeUpdated"?: Date;
  /**
   * The log type test request version. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "logTypeTestRequestVersion"?: number;
  /**
   * The mapped parser list.
   */
  "mappedParsers"?: Array<model.LogAnalyticsParser>;
  /**
   * The line characters for the parser to ignore.
   */
  "parserIgnorelineCharacters"?: string;
  /**
   * A flag indicating if the parser is hidden or not.
   *
   */
  "isHidden"?: boolean;
  /**
   * The parser sequence. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "parserSequence"?: number;
  /**
   * The time zone.
   */
  "parserTimezone"?: string;
  "parserFilter"?: model.LogAnalyticsParserFilter;
  /**
   * A flag indicating whther or not the parser is write once.
   *
   */
  "isParserWrittenOnce"?: boolean;
  /**
   * The parser function list.
   */
  "parserFunctions"?: Array<model.LogAnalyticsParserFunction>;
  /**
   * The number of sources using this parser. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sourcesCount"?: number;
  /**
   * The list of sources using this parser.
   */
  "sources"?: Array<model.LogAnalyticsSource>;
  /**
   * A flag indicating whether or not to tokenize the original text.
   *
   */
  "shouldTokenizeOriginalText"?: boolean;
  /**
   * The parser field delimiter.
   */
  "fieldDelimiter"?: string;
  /**
   * The parser field qualifier.
   */
  "fieldQualifier"?: string;
  /**
   * The parser type.  Default value is REGEX.
   */
  "type"?: LogAnalyticsParserSummary.Type;
  /**
   * A flag indicating whether or not the parser has been deleted.
   *
   */
  "isUserDeleted"?: boolean;
}

export namespace LogAnalyticsParserSummary {
  export enum Type {
    Xml = "XML",
    Json = "JSON",
    Regex = "REGEX",
    Odl = "ODL",
    Delimited = "DELIMITED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: LogAnalyticsParserSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "fieldMaps": obj.fieldMaps
          ? obj.fieldMaps.map(item => {
              return model.LogAnalyticsParserField.getJsonObj(item);
            })
          : undefined,

        "mappedParsers": obj.mappedParsers
          ? obj.mappedParsers.map(item => {
              return model.LogAnalyticsParser.getJsonObj(item);
            })
          : undefined,

        "parserFilter": obj.parserFilter
          ? model.LogAnalyticsParserFilter.getJsonObj(obj.parserFilter)
          : undefined,

        "parserFunctions": obj.parserFunctions
          ? obj.parserFunctions.map(item => {
              return model.LogAnalyticsParserFunction.getJsonObj(item);
            })
          : undefined,

        "sources": obj.sources
          ? obj.sources.map(item => {
              return model.LogAnalyticsSource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
