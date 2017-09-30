import messages from './messages';

export const STATUS_OK = 'ok';
export const STATUS_ERR = 'err';
export const STATUS_TLE = 'tle';
export const STATUS_MEM = 'mem';
export const STATUS_RTE = 'rte';
export const STATUS_ANS = 'ans';
export const STATUS_CME = 'cme';
export const STATUS_QUE = 'que';


export const statusDescriptions = new Map([
  [STATUS_OK, messages.ok],
  [STATUS_ERR, messages.err],
  [STATUS_ANS, messages.ans],
  [STATUS_MEM, messages.mem],
  [STATUS_RTE, messages.rte],
  [STATUS_TLE, messages.tle],
  [STATUS_CME, messages.cme],
  [STATUS_QUE, messages.que],
]);
