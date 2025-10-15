"use client";

import StepCard from "~/components/StepCard";
import InstallTagStep from "~/components/InstallTagStep";
import TestTagStep from "~/components/TestTagStep";

export default function HomePage() {
  return (
    <>
      <h1 className="font-semibold text-[32px] mb-9 pb-[7px] border-b border-[#ebedf3]">
        Getting Started
      </h1>

      <StepCard
        title="Install Surface Tag on your site"
        description="Enable tracking and analytics."
        result="inactive"
        actionLabel="Install Tag"
        actionVariant="primary"
      >
        <InstallTagStep />
      </StepCard>

      <StepCard
        title="Test Surface Tag Events"
        description="Test if the Surface Tag is properly emitting events."
        actionLabel="Test Tag"
        actionVariant="secondary"
      >
        <TestTagStep />
      </StepCard>
    </>
  );
}
