import { TypeRegistry } from '@polkadot/types'
import { tokensToPlanck } from '@talismn/util'

import { BuildResult } from '../../server-extension/model'
import type { RouteImplementationProps } from '..'

export const buildHydradxBasiliskTx = ({
  route,
  to,
  token,
  fromChainToken,
  recipient,
  amount: amountTokens,
}: RouteImplementationProps): BuildResult => {
  const { tokenIdent } = fromChainToken
  if (!tokenIdent) throw new Error(`No tokenIdent for token ${token.symbol} (${token.id})`)

  const currencyId = (() => {
    try {
      return JSON.parse(tokenIdent)
    } catch {
      return tokenIdent
    }
  })()

  const amount = tokensToPlanck(amountTokens, token.decimals)
  const accountId = new TypeRegistry().createType('AccountId32', recipient).toHex()
  const destination = {
    V1: {
      parents: 1,
      interior: ['Polkadot', 'Kusama'].includes(to.name)
        ? { X1: { AccountId32: { id: accountId, network: 'Any' } } }
        : { X2: [{ Parachain: to.paraId }, { AccountId32: { id: accountId, network: 'Any' } }] },
    },
  }
  const destinationWeightLimit = route.weightLimit === 'Unlimited' ? route.weightLimit : { Limited: route.weightLimit }

  return {
    module: 'xTokens',
    method: 'transfer',
    params: [currencyId, amount, destination, destinationWeightLimit],
  }
}
