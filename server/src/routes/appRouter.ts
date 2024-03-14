import { router } from "../trpc"
import { blogRouter } from "./blog"

export const appRouter = router({
    blog: blogRouter,
})
