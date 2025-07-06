import { resourceLink } from "@/lib/interface";
import Link from "next/link";
import { Card } from "./ui/card";

export default function Resources({
  title = "Additional Resources",
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
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className="group relative no-underline"
            >
              <Card className="relative gap-2 shadow p-6 border rounded-xl h-full w-full">
                <div className="inline-flex items-center space-x-3">
                  <h3 className="font-medium text-lg">{resource.title}</h3>
                  {resource.external && (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  )}
                </div>
                <p className="text-sm">{resource.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
