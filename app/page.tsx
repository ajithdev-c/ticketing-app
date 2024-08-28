import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { verifySupabase } from "@/utils/supabase/verify-supabase";

export default async function Index() {
  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4 m-auto min-h-screen justify-center items-center">
        {/* <h2 className="font-medium text-xl mb-4">Next steps</h2>
        {verifySupabase ? <SignUpUserSteps /> : <ConnectSupabaseSteps />} */}
        <h1 className="text-4xl font-bold">Welcome To Ticketing App...</h1>
        <h2 className="p-2 text-xl font-semibold">SignIn / SignUp for more details</h2>
      </main>
    </>
  );
}
