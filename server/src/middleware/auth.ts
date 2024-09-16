import { Request, Response, NextFunction } from "express"
import { getSession } from "next-auth/react"
import { Session } from "next-auth"

interface AuthenticatedRequest extends Request {
    session?: Session
}

const authMiddleware = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction,
) => {
    try {
        const session = await getSession({ req })
        if (session) {
            req.session = session
            next()
        } else {
            res.status(401).json({ error: "User not authenticated" })
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }
}

export default authMiddleware
