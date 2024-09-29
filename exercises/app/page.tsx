import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

type HubItem = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const hubItems: HubItem[] = [
  {
    title: "Exercise 01",
    description: "Create a maze with processing",
    image: "/images/exercise_01.png",
    link: "/exercises/exercise_01",
  },
  {
    title: "Exercise 02",
    description: "Truchet's art",
    image: "/images/exercise_02.png",
    link: "/exercises/exercise_02",
  },
  {
    title: "Exercise 03",
    description: "Raindrops",
    image: "/images/exercise_03.png",
    link: "/exercises/exercise_03",
  },
  {
    title: "Exercise 04",
    description: "Particles with a small noise effect",
    image: "/images/exercise_04.png",
    link: "/exercises/exercise_04",
  },
  {
    title: "Exercise 05",
    description: "Memory game",
    image: "/images/exercise_05.png",
    link: "/exercises/exercise_05",
  },
  {
    title: "Exercise 06",
    description: "Rasterization",
    image: "/images/exercise_06.png",
    link: "/exercises/exercise_06",
  },
];

const Exercises = () => {
  return (
    <div className="h-screen container mx-auto py-8 px-5">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Creative coding Hub
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hubItems.map((item, index) => (
          <Link href={item.link} key={index} className="no-underline">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
