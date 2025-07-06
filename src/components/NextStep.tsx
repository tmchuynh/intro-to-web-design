import { sectionNextStepsDescription } from "@/data/nextSteps";
import { NextStepProps } from "@/lib/interface";
import { capitalize } from "@/lib/utils";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { Card } from "./ui/card";

const NextStep = ({
  href = "/",
  description,
  ctaText = "Continue Learning",
  sectionTitle = "Next Step",
  sectionDescription = "Ready to move forward? Continue your learning journey with the next topic in the curriculum.",
}: NextStepProps) => {
  const segment = href.split("/").filter(Boolean);
  const pathname = capitalize(segment[segment.length - 1]);
  return (
    <div className="my-12 not-prose">
      <div className="mx-auto">
        <h2 className="mb-2 font-bold text-2xl">{sectionTitle}</h2>
        <p className="mb-6 text-lg text-muted-foreground">
          {sectionDescription}
        </p>

        <Link href={href} className="group relative no-underline">
          <Card className="relative flex flex-col gap-4 justify-between shadow hover:shadow-lg p-6 border rounded-xl w-full duration-200 transition-all">
            <div>
              <div className="inline-flex items-start space-x-3 w-full">
                <h3 className="font-medium text-lg underline-offset-3 group-hover:underline decoration-1">
                  {pathname}
                </h3>
              </div>
              {description && (
                <p className="mt-2 leading-relaxed text-sm">
                  {description ||
                    sectionNextStepsDescription[
                      Math.random() * sectionNextStepsDescription.length
                    ]}
                </p>
              )}
            </div>
            <p className="flex items-center mt-2 font-medium text-sm">
              {ctaText}{" "}
              <FaChevronRight className="inline ml-2 duration-300 group-hover:translate-x-2 ease-in-out" />
            </p>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default NextStep;
