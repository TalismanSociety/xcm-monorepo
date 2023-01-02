import type { RawData } from './_types'

export const chainTokens: RawData['chainTokens'] = [
  {
    chain: 'kintsugi',
    token: 'KINT',
    isNative: true,
    existentialDeposit: '0',
    tokenIdent: JSON.stringify({ Token: 'KINT' }),
  },
  {
    chain: 'kintsugi',
    token: 'KBTC',
    isNative: false,
    existentialDeposit: '0',
    tokenIdent: JSON.stringify({ Token: 'KBTC' }),
  },
  {
    chain: 'kintsugi',
    token: 'LKSM',
    isNative: false,
    existentialDeposit: '0',
    tokenIdent: JSON.stringify({ ForeignAsset: 2 }),
  },
]

const weightLimit = '5000000000'
export const routes: RawData['routes'] = [
  { to: 'karura', token: 'KINT', feeToken: 'KINT', fee: '170666666', weightLimit },
  { to: 'karura', token: 'KBTC', feeToken: 'KBTC', fee: '85', weightLimit },
  { to: 'karura', token: 'LKSM', feeToken: 'LKSM', fee: '647055467', weightLimit },
].map((route) => ({ from: 'kintsugi', ...route }))
