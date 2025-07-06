import { resourceLink } from "@/lib/interface";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { Card } from "./ui/card";

export default function Guides({
  title = "Additional Reading & Resources",
  description = "Here are some additional resources and guides to help you deepen your understanding of web design and development. These links provide valuable insights, tutorials, and documentation to enhance your skills. Whether you're looking for design inspiration, technical documentation, or best practices, these resources will guide you on your journey. Make the most of these curated links to expand your knowledge and stay updated with the latest trends in web design. Happy learning!",
  resources,
}: {
  title: string;
  description: string;
  resources: resourceLink[];
}) {
  return (
    <div className="my-12 not-prose">
      <div className="mx-auto">
        <h2 className="mb-8 font-bold text-2xl">{title}</h2>
        <p className="mb-6 text-lg text-muted-foreground">{description}</p>
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group relative no-underline"
            >
              <Card className="relative flex flex-col space-y-4 p-6 ring-1 rounded-xl h-full w-full leading-none">
                <p className="font-medium text-lg underline-offset-3 group-hover:underline decoration-1">
                  {guide.title}
                </p>
                <p className="leading-6 text-sm">{guide.description}</p>
                <p className="my-0 font-medium text-sm">
                  Start learning{" "}
                  <FaChevronRight className="inline duration-300 group-hover:translate-x-2 ease-in-out" />
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
