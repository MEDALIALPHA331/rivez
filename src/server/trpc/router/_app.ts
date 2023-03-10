import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./userinfo";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
