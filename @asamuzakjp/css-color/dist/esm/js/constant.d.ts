/**
 * constant
 */
export declare const ANGLE = "deg|g?rad|turn";
export declare const LENGTH = "[cm]m|[dls]?v(?:[bhiw]|max|min)|in|p[ctx]|q|r?(?:[cl]h|cap|e[mx]|ic)";
export declare const NUM = "[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?";
export declare const NUM_POSITIVE = "\\+?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?";
export declare const NONE = "none";
export declare const PCT = "[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%";
export declare const SYN_FN_CALC = "^(?:calc|clamp|max|min|exp|hypot|log|pow|sqrt|abs|sign|mod|rem|round|a?(?:cos|sin|tan)|atan2)\\(|(?<=[*\\/\\s\\(])(?:calc|clamp|max|min|exp|hypot|log|pow|sqrt|abs|sign|mod|rem|round|a?(?:cos|sin|tan)|atan2)\\(";
export declare const SYN_FN_MATH_START = "^(?:clamp|max|min|exp|hypot|log|pow|sqrt|abs|sign|mod|rem|round|a?(?:cos|sin|tan)|atan2)\\($";
export declare const SYN_FN_VAR = "^var\\(|(?<=[*\\/\\s\\(])var\\(";
export declare const SYN_FN_VAR_START = "^(?:var|calc|clamp|max|min|exp|hypot|log|pow|sqrt|abs|sign|mod|rem|round|a?(?:cos|sin|tan)|atan2)\\(";
export declare const CS_HUE = "(?:(?:ok)?lch|hsl|hwb)(?:\\s(?:(?:de|in)creasing|longer|shorter)\\shue)?";
export declare const CS_HUE_CAPT = "((?:ok)?lch|hsl|hwb)(?:\\s((?:de|in)creasing|longer|shorter)\\shue)?";
export declare const CS_LAB = "(?:ok)?lab";
export declare const CS_LCH = "(?:ok)?lch";
export declare const CS_SRGB = "srgb(?:-linear)?";
export declare const CS_RGB = "(?:a98|prophoto)-rgb|display-p3|rec2020|srgb(?:-linear)?";
export declare const CS_XYZ = "xyz(?:-d(?:50|65))?";
export declare const CS_RECT = "(?:ok)?lab|(?:a98|prophoto)-rgb|display-p3|rec2020|srgb(?:-linear)?|xyz(?:-d(?:50|65))?";
export declare const CS_MIX = "(?:(?:ok)?lch|hsl|hwb)(?:\\s(?:(?:de|in)creasing|longer|shorter)\\shue)?|(?:ok)?lab|(?:a98|prophoto)-rgb|display-p3|rec2020|srgb(?:-linear)?|xyz(?:-d(?:50|65))?";
export declare const FN_COLOR = "color(";
export declare const FN_MIX = "color-mix(";
export declare const FN_REL = "(?:(?:ok)?l(?:ab|ch)|color|hsla?|hwb|rgba?)\\(\\s*from\\s+";
export declare const FN_REL_CAPT = "((?:ok)?l(?:ab|ch)|color|hsla?|hwb|rgba?)\\(\\s*from\\s+";
export declare const FN_VAR = "var(";
export declare const SYN_FN_COLOR = "(?:(?:a98|prophoto)-rgb|display-p3|rec2020|srgb(?:-linear)?|xyz(?:-d(?:50|65))?)(?:\\s+(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)){3}(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?";
export declare const SYN_FN_REL = "^(?:(?:ok)?l(?:ab|ch)|color|hsla?|hwb|rgba?)\\(\\s*from\\s+|(?<=[\\s])(?:(?:ok)?l(?:ab|ch)|color|hsla?|hwb|rgba?)\\(\\s*from\\s+";
export declare const SYN_HSL = "(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:deg|g?rad|turn)?|none)(?:\\s+(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)){2}(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?";
export declare const SYN_HSL_LV3 = "[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:deg|g?rad|turn)?(?:\\s*,\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%){2}(?:\\s*,\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%))?";
export declare const SYN_LCH = "(?:(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)\\s+){2}(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:deg|g?rad|turn)?|none)(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?";
export declare const SYN_MOD = "(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)(?:\\s+(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)){2}(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?";
export declare const SYN_RGB_LV3 = "(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:\\s*,\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?){2}|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%(?:\\s*,\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%){2})(?:\\s*,\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%))?";
export declare const SYN_COLOR_TYPE = "[a-z]+|#[\\da-f]{3}|#[\\da-f]{4}|#[\\da-f]{6}|#[\\da-f]{8}|hsla?\\(\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:deg|g?rad|turn)?(?:\\s*,\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%){2}(?:\\s*,\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%))?\\s*\\)|rgba?\\(\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:\\s*,\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?){2}|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%(?:\\s*,\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%){2})(?:\\s*,\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%))?\\s*\\)|(?:hsla?|hwb)\\(\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:deg|g?rad|turn)?|none)(?:\\s+(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)){2}(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\)|(?:(?:ok)?lab|rgba?)\\(\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)(?:\\s+(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)){2}(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\)|(?:ok)?lch\\(\\s*(?:(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)\\s+){2}(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:deg|g?rad|turn)?|none)(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\)|color\\(\\s*(?:(?:a98|prophoto)-rgb|display-p3|rec2020|srgb(?:-linear)?|xyz(?:-d(?:50|65))?)(?:\\s+(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)){3}(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\)";
export declare const SYN_MIX_PART = "(?:[a-z]+|#[\\da-f]{3}|#[\\da-f]{4}|#[\\da-f]{6}|#[\\da-f]{8}|hsla?\\(\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:deg|g?rad|turn)?(?:\\s*,\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%){2}(?:\\s*,\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%))?\\s*\\)|rgba?\\(\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:\\s*,\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?){2}|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%(?:\\s*,\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%){2})(?:\\s*,\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%))?\\s*\\)|(?:hsla?|hwb)\\(\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:deg|g?rad|turn)?|none)(?:\\s+(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)){2}(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\)|(?:(?:ok)?lab|rgba?)\\(\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)(?:\\s+(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)){2}(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\)|(?:ok)?lch\\(\\s*(?:(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)\\s+){2}(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:deg|g?rad|turn)?|none)(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\)|color\\(\\s*(?:(?:a98|prophoto)-rgb|display-p3|rec2020|srgb(?:-linear)?|xyz(?:-d(?:50|65))?)(?:\\s+(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)){3}(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\))(?:\\s+[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%)?";
export declare const SYN_MIX = "color-mix\\(\\s*in\\s+(?:(?:(?:ok)?lch|hsl|hwb)(?:\\s(?:(?:de|in)creasing|longer|shorter)\\shue)?|(?:ok)?lab|(?:a98|prophoto)-rgb|display-p3|rec2020|srgb(?:-linear)?|xyz(?:-d(?:50|65))?)\\s*,\\s*(?:[a-z]+|#[\\da-f]{3}|#[\\da-f]{4}|#[\\da-f]{6}|#[\\da-f]{8}|hsla?\\(\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:deg|g?rad|turn)?(?:\\s*,\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%){2}(?:\\s*,\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%))?\\s*\\)|rgba?\\(\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:\\s*,\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?){2}|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%(?:\\s*,\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%){2})(?:\\s*,\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%))?\\s*\\)|(?:hsla?|hwb)\\(\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:deg|g?rad|turn)?|none)(?:\\s+(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)){2}(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\)|(?:(?:ok)?lab|rgba?)\\(\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)(?:\\s+(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)){2}(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\)|(?:ok)?lch\\(\\s*(?:(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)\\s+){2}(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:deg|g?rad|turn)?|none)(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\)|color\\(\\s*(?:(?:a98|prophoto)-rgb|display-p3|rec2020|srgb(?:-linear)?|xyz(?:-d(?:50|65))?)(?:\\s+(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)){3}(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\))(?:\\s+[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%)?\\s*,\\s*(?:[a-z]+|#[\\da-f]{3}|#[\\da-f]{4}|#[\\da-f]{6}|#[\\da-f]{8}|hsla?\\(\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:deg|g?rad|turn)?(?:\\s*,\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%){2}(?:\\s*,\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%))?\\s*\\)|rgba?\\(\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:\\s*,\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?){2}|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%(?:\\s*,\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%){2})(?:\\s*,\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%))?\\s*\\)|(?:hsla?|hwb)\\(\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:deg|g?rad|turn)?|none)(?:\\s+(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)){2}(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\)|(?:(?:ok)?lab|rgba?)\\(\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)(?:\\s+(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)){2}(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\)|(?:ok)?lch\\(\\s*(?:(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)\\s+){2}(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:deg|g?rad|turn)?|none)(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\)|color\\(\\s*(?:(?:a98|prophoto)-rgb|display-p3|rec2020|srgb(?:-linear)?|xyz(?:-d(?:50|65))?)(?:\\s+(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)){3}(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\))(?:\\s+[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%)?\\s*\\)";
export declare const SYN_MIX_CAPT = "color-mix\\(\\s*in\\s+((?:(?:ok)?lch|hsl|hwb)(?:\\s(?:(?:de|in)creasing|longer|shorter)\\shue)?|(?:ok)?lab|(?:a98|prophoto)-rgb|display-p3|rec2020|srgb(?:-linear)?|xyz(?:-d(?:50|65))?)\\s*,\\s*((?:[a-z]+|#[\\da-f]{3}|#[\\da-f]{4}|#[\\da-f]{6}|#[\\da-f]{8}|hsla?\\(\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:deg|g?rad|turn)?(?:\\s*,\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%){2}(?:\\s*,\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%))?\\s*\\)|rgba?\\(\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:\\s*,\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?){2}|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%(?:\\s*,\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%){2})(?:\\s*,\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%))?\\s*\\)|(?:hsla?|hwb)\\(\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:deg|g?rad|turn)?|none)(?:\\s+(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)){2}(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\)|(?:(?:ok)?lab|rgba?)\\(\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)(?:\\s+(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)){2}(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\)|(?:ok)?lch\\(\\s*(?:(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)\\s+){2}(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:deg|g?rad|turn)?|none)(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\)|color\\(\\s*(?:(?:a98|prophoto)-rgb|display-p3|rec2020|srgb(?:-linear)?|xyz(?:-d(?:50|65))?)(?:\\s+(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)){3}(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\))(?:\\s+[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%)?)\\s*,\\s*((?:[a-z]+|#[\\da-f]{3}|#[\\da-f]{4}|#[\\da-f]{6}|#[\\da-f]{8}|hsla?\\(\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:deg|g?rad|turn)?(?:\\s*,\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%){2}(?:\\s*,\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%))?\\s*\\)|rgba?\\(\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:\\s*,\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?){2}|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%(?:\\s*,\\s*[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%){2})(?:\\s*,\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%))?\\s*\\)|(?:hsla?|hwb)\\(\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:deg|g?rad|turn)?|none)(?:\\s+(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)){2}(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\)|(?:(?:ok)?lab|rgba?)\\(\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)(?:\\s+(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)){2}(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\)|(?:ok)?lch\\(\\s*(?:(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)\\s+){2}(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?(?:deg|g?rad|turn)?|none)(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\)|color\\(\\s*(?:(?:a98|prophoto)-rgb|display-p3|rec2020|srgb(?:-linear)?|xyz(?:-d(?:50|65))?)(?:\\s+(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none)){3}(?:\\s*\\/\\s*(?:[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?|[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%|none))?\\s*\\))(?:\\s+[+-]?(?:(?:0|[1-9]\\d*)(?:\\.\\d*)?|\\.\\d+)(?:e-?(?:0|[1-9]\\d*))?%)?)\\s*\\)";
export declare const VAL_COMP = "computedValue";
export declare const VAL_MIX = "mixValue";
export declare const VAL_SPEC = "specifiedValue";
