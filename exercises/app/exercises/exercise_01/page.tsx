import { Button } from "@/components/ui/button";
import { ChevronRight, Home } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Sketch = dynamic(
  () => {
    return import("@/components/sketch_exercise_01");
  },
  { ssr: false }
);

export default function Exercise01() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative p-4">
      <Link href="/" className="absolute top-4 left-4 sm:top-8 sm:left-8">
        <Button
          variant="ghost"
          size="icon"
          className="w-12 h-12 rounded-full bg-white/50 hover:bg-white/20 transition-colors"
        >
          <Home className="w-6 h-6" />
          <span className="sr-only">Home</span>
        </Button>
      </Link>

      <h1 className="text-3xl font-bold text-gray-800 mb-8">Exercise 01</h1>

      <div className=" max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <Sketch />
      </div>

      <div className="flex justify-end w-full max-w-4xl mt-8">
        <Link href="./exercise_02">
          <Button
            variant="outline"
            className="text-gray-700 hover:text-gray-900"
          >
            Next Exercise
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
