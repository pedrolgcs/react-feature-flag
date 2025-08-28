import { GithubIcon, LogInIcon } from 'lucide-react'

import { FeatureFlag } from './components/feature-flag'

export function App() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-zinc-50">
      <div className="flex flex-col gap-4 border border-zinc-200 p-4 rounded-lg w-lg">
        <form className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-zinc-900">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              className="border border-zinc-200 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-zinc-300 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-zinc-900">
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              className="border border-zinc-200 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-zinc-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-zinc-700 text-zinc-50 py-2 rounded-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <LogInIcon className="size-5" /> Entrar
          </button>
        </form>

        <div className="flex items-center gap-4">
          <div className="h-px w-full bg-zinc-200" />
          <span className="text-xs text-zinc-400">OU</span>
          <div className="h-px w-full bg-zinc-200" />
        </div>

        <FeatureFlag feature="GIT_HUB_SIGNIN">
          <button className="bg-sky-500 text-zinc-50 py-2 rounded-md flex items-center justify-center gap-2 cursor-pointer">
            <GithubIcon className="size-5" /> Entrar com GitHub
          </button>
        </FeatureFlag>
      </div>
    </div>
  )
}
