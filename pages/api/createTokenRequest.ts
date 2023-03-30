import Ably from 'ably/promises'
import type { NextApiRequest, NextApiResponse } from 'next'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // console.log(process.env.ABLY_API_KEY)
    const client = new Ably.Realtime(process.env.ABLY_API_KEY || "")
    const tokenRequestData = await client.auth.createTokenRequest({
        clientId: req.query.clientId as string,
    })
    res.status(200).json(tokenRequestData)
}