
import { experiences } from "@/lib/data";

export default function Body(){
  return (
    <main className="flex flex-col space-y-7 row-start-2 items-center sm:items-start w-full ">
        <div className="nes-container with-title width: auto space-y-3">
          <p className="title">Experience</p>
          <details name="experience">
            <summary>Huawei HKRC - Research Intern</summary>

            <p className="text-sm">Period: February 2025 - February 2026</p>

          </details>

          <details name="experience">
            <summary>Jollybee - Member</summary>

            <p className="text-sm">Period: September 2022 - February 2025</p>
            
          </details>
        </div>

        <div className="nes-container with-title width: auto">
          <p className="title">Achievement</p>
        </div>

        <div className="nes-container with-title width: auto">
          <p className="title">Project</p>
        </div>
        
        <div className="nes-container with-title width: auto">
          <p className="title">Education</p>
        </div>
      </main>
  );
}