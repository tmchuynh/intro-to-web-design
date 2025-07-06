import { resourceLink } from "@/lib/interface";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { Card } from "./ui/card";

export default function Supplementary({
  title = "Supplementary Reading",
  description = "Explore these resources to deepen your understanding of web design and development. These links provide valuable insights, tutorials, and documentation to help you enhance your skills. Whether you're looking for design inspiration, technical documentation, or best practices, these resources will guide you on your journey. Make the most of these curated links to expand your knowledge and stay updated with the latest trends in web design. Happy learning!",
  resources,
}: {
  title: string;
  description: string;
  resources: resourceLink[];
}) {
  return (
    <div className="my-12 not-prose">
      <div className="mx-auto">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p className="mb-6 text-lg text-muted-foreground">{description}</p>
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {resources.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className="group relative no-underline"
            >
              <Card className="relative flex flex-col gap-2 justify-between shadow p-6 border rounded-xl h-full w-full">
                <div>
                  <div className="inline-flex items-start space-x-3 w-4/5">
                    <h3 className="font-medium text-lg underline-offset-3 group-hover:underline decoration-1">
                      {resource.title}
                    </h3>
                  </div>
                  <p className="text-sm">{resource.description}</p>
                </div>
                <p className="flex items-center mt-2 text-sm">
                  Read more{" "}
                  <FaChevronRight className="inline ml-1 duration-300 group-hover:translate-x-2 ease-in-out" />
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
