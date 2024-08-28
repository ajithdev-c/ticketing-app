import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }
  const projects = [
    {
      projectName:'Rodney Hunt',
      button1:'Started',
      button2: 'Progress',
      button3: 'Completed',
      button4: 'Raise An Issue'
    },
    {
      projectName:'Kena',
      button1:'Started',
      button2: 'Progress',
      button3: 'Completed',
      button4: 'Raise An Issue'
    }
  ]

  return (
    <div className="min-h-screen bg-green-400">
      <div className="text-center p-4 text-4xl font-bold">Projects</div>
      <div className="p-6 flex gap-6">
        {projects.map(({ projectName,button1,button2,button3,button4}) => (
          <div key={projectName} className="h-80 w-80 bg-slate-200 rounded-md">
          <div className="text-center text-2xl font-semibold py-4">
            {projectName}
          </div>
          <div className="grid grid-cols-2">
            <div className="m-2 flex flex-col gap-4">
              <button className="p-2 w-32 bg-yellow-300 rounded-md">{button1}</button>
              <button className="p-2 w-32 bg-green-600 rounded-md">{button2}</button>
              <button className="p-2 w-32 bg-red-600 rounded-md">{button3}</button>
            </div>
            <div className="m-2 flex flex-col gap-4"><button className="p-2 w-32 bg-blue-400 rounded-md">{button4}</button></div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
