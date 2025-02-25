import { InvitationData } from '@quiet/types'
import { composeInvitationDeepUrl, composeInvitationShareUrl } from './invitationCode'
import { QUIET_JOIN_PAGE } from './static'

export const validInvitationCodeTestData: InvitationData[] = [
  {
    pairs: [
      {
        onionAddress: 'y7yczmugl2tekami7sbdz5pfaemvx7bahwthrdvcbzw5vex2crsr26qd',
        peerId: 'QmZoiJNAvCffeEHBjk766nLuKVdkxkAT7wfFJDPPLsbKSE',
      },
    ],
    psk: 'BNlxfE2WBF7LrlpIX0CvECN5o1oZtA16PkAb7GYiwYw=',
    ownerOrbitDbIdentity: '018f9e87541d0b61cb4565af8df9699f658116afc54ae6790c31bbf6df3fc343b0',
  },
  {
    pairs: [
      {
        onionAddress: 'pgzlcstu4ljvma7jqyalimcxlvss5bwlbba3c3iszgtwxee4qjdlgeqd',
        peerId: 'QmaRchXhkPWq8iLiMZwFfd2Yi4iESWhAYYJt8cTCVXSwpG',
      },
    ],
    psk: '5T9GBVpDoRpKJQK4caDTz5e5nym2zprtoySL2oLrzr4=',
    ownerOrbitDbIdentity: '028f9e87541d0b61cb4565af8df9699f658116afc54ae6790c31bbf6df3fc343b0',
  },
]

export const getValidInvitationUrlTestData = (data: InvitationData) => {
  return {
    shareUrl: () => composeInvitationShareUrl(data),
    deepUrl: () => composeInvitationDeepUrl(data),
    code: () => composeInvitationShareUrl(data).split(QUIET_JOIN_PAGE + '#')[1],
    data: data,
  }
}
