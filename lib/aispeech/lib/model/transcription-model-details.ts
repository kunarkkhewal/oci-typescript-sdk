/**
 * Speech API
 * The OCI Speech Service harnesses the power of spoken language by allowing developers to easily convert file-based data containing human speech into highly accurate text transcriptions.
 * OpenAPI spec version: 20220101
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
 * Model details.
 */
export interface TranscriptionModelDetails {
  /**
   * Select a model to use for generating transcriptions. Currently supported models are:
   * - ORACLE
   * - WHISPER_MEDIUM
   * - WHISPER_LARGE_V2 (upon service request)
   *
   */
  "modelType"?: string;
  /**
   * Domain for input files.
   */
  "domain"?: TranscriptionModelDetails.Domain;
  /**
    * 
* Oracle supported language codes are (Oracle models are locale specific).
* - en-US: English - United States (default)
* - es-ES: Spanish - Spain
* - pt-BR: Portuguese - Brazil
* - en-GB: English - Great Britain
* - en-AU: English - Australia
* - en-IN: English - India
* - hi-IN: Hindi - India
* - fr-FR: French - France
* - de-DE: German - Germany
* - it-IT: Italian - Italy
* <p>
Whisper supported language codes are (Whisper models are locale agnostic).
* - af: Afrikaans
* - ar: Arabic
* - az: Azerbaijani
* - be: Belarusian
* - bg: Bulgarian
* - bs: Bosnian
* - ca: Catalan
* - cs: Czech
* - cy: Welsh
* - da: Danish
* - de: German
* - el: Greek
* - en: English (default)
* - es: Spanish
* - et: Estonian
* - fa: Persian
* - fi: Finnish
* - fr: French
* - gl: Galician
* - he: Hebrew
* - hi: Hindi
* - hr: Croatian
* - hu: Hungarian
* - hy: Armenian
* - id: Indonesian
* - is: Icelandic
* - it: Italian
* - ja: Japanese
* - kk: Kazakh
* - kn: Kannada
* - ko: Korean
* - lt: Lithuanian
* - lv: Latvian
* - mi: Maori
* - mk: Macedonian
* - mr: Marathi
* - ms: Malay
* - ne: Nepali
* - nl: Dutch
* - no: Norwegian
* - pl: Polish
* - pt: Portuguese
* - ro: Romanian
* - ru: Russian
* - sk: Slovak
* - sl: Slovenian
* - sr: Serbian
* - sv: Swedish
* - sw: Swahili
* - ta: Tamil
* - th: Thai
* - tl: Tagalog
* - tr: Turkish
* - uk: Ukrainian
* - ur: Urdu
* - vi: Vietnamese
* - zh: Chinese
* 
    */
  "languageCode"?: TranscriptionModelDetails.LanguageCode;
  "transcriptionSettings"?: model.TranscriptionSettings;
}

export namespace TranscriptionModelDetails {
  export enum Domain {
    Generic = "GENERIC",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LanguageCode {
    EnUs = "en-US",
    EsEs = "es-ES",
    PtBr = "pt-BR",
    EnGb = "en-GB",
    EnAu = "en-AU",
    EnIn = "en-IN",
    HiIn = "hi-IN",
    FrFr = "fr-FR",
    DeDe = "de-DE",
    ItIt = "it-IT",
    Af = "af",
    Ar = "ar",
    Az = "az",
    Be = "be",
    Bg = "bg",
    Bs = "bs",
    Ca = "ca",
    Cs = "cs",
    Cy = "cy",
    Da = "da",
    De = "de",
    El = "el",
    En = "en",
    Es = "es",
    Et = "et",
    Fa = "fa",
    Fi = "fi",
    Fr = "fr",
    Gl = "gl",
    He = "he",
    Hi = "hi",
    Hr = "hr",
    Hu = "hu",
    Hy = "hy",
    Id = "id",
    Is = "is",
    It = "it",
    Ja = "ja",
    Kk = "kk",
    Kn = "kn",
    Ko = "ko",
    Lt = "lt",
    Lv = "lv",
    Mi = "mi",
    Mk = "mk",
    Mr = "mr",
    Ms = "ms",
    Ne = "ne",
    Nl = "nl",
    No = "no",
    Pl = "pl",
    Pt = "pt",
    Ro = "ro",
    Ru = "ru",
    Sk = "sk",
    Sl = "sl",
    Sr = "sr",
    Sv = "sv",
    Sw = "sw",
    Ta = "ta",
    Th = "th",
    Tl = "tl",
    Tr = "tr",
    Uk = "uk",
    Ur = "ur",
    Vi = "vi",
    Zh = "zh",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TranscriptionModelDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "transcriptionSettings": obj.transcriptionSettings
          ? model.TranscriptionSettings.getJsonObj(obj.transcriptionSettings)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TranscriptionModelDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "transcriptionSettings": obj.transcriptionSettings
          ? model.TranscriptionSettings.getDeserializedJsonObj(obj.transcriptionSettings)
          : undefined
      }
    };

    return jsonObj;
  }
}
