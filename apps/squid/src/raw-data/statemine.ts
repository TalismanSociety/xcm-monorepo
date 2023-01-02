import { BN } from '@polkadot/util'

import type { RawData } from './_types'

export const chainTokens: RawData['chainTokens'] = [
  { chain: 'statemine', token: 'KSM', isNative: true, existentialDeposit: '79999999', tokenIdent: '' },
  {
    chain: 'statemine',
    token: 'RMRK',
    isNative: false,
    existentialDeposit: '100000000',
    tokenIdent: new BN(8).toString(),
  },
  {
    chain: 'statemine',
    token: 'ARIS',
    isNative: false,
    existentialDeposit: '10000000',
    tokenIdent: new BN(16).toString(),
  },
  {
    chain: 'statemine',
    token: 'USDT',
    isNative: false,
    existentialDeposit: '1000',
    tokenIdent: new BN(1984).toString(),
  },
]

const weightLimit = 'Unlimited'
export const routes: RawData['routes'] = [
  { to: 'kusama', token: 'KSM', feeToken: 'KSM', fee: '106666660', weightLimit },
  { to: 'karura', token: 'RMRK', feeToken: 'RMRK', fee: '6400000', weightLimit },
  { to: 'karura', token: 'ARIS', feeToken: 'ARIS', fee: '6400000', weightLimit },
  { to: 'karura', token: 'USDT', feeToken: 'USDT', fee: '640', weightLimit },
].map((route) => ({ from: 'statemine', ...route }))
