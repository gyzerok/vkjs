/**
 * classNames
 */
export {
  classNames,
} from './classNames';

/**
 * clipboard
 */
export {
  copyTextToClipboard,
} from './clipboard';

/**
 * common
 */
export {
  isNumeric,
} from './common';

/**
 * detections
 */
export {
  isPassiveEventsSupported,
} from './detections';

/**
 * equal
 */
export {
  isEqual,
} from './equal';

export {
  sumArray,
  uniqueArray,
  shuffleArray,
  chunkArray,
  omitFromArray,
  difference,
} from './arrays';

export {
  getCookie,
} from './cookie';

export {
  SECONDS_IN_THE_DAY,
  isDateToday,
  isDateYesterday,
  isDateTomorrow,
  isSameDate,
  getBeginningOfDay,
  isLeapYear,
  getLastDayOfMonth,
  createDateFromUnixTimestamp,
  getUnixTimestampFromDate,
  convertDateToInputFormat,
} from './date';

export {
  formatDuration,
} from './duration';

export {
  noop,
  throttle,
  debounce,
} from './functions';

/**
 * OffsetRect
 */
export {
  getOffsetRect,
} from './getOffsetRect';

export {
  leadingZero,
  formatNumber,
} from './numbers';

export {
  getRandomInt,
  getRandomString,
} from './random';

export {
  hasReactNode,
  isPrimitiveReactNode,
} from './react_utils';

export {
  isObjectLike,
  isArray,
  isObject,
  isUndefined,
  isFunction,
  isFormData,
  isString,
  isNumber,
} from './type_checkers';

export type {
  Dictionary,
  AnyFunction,
  Writeable,
} from './types';

export {
  localStorage,
  sessionStorage,
} from './storage';
