"use client";

import StepCard from "~/components/StepCard";
import InstallTagStep from "~/components/InstallTagStep";
import TestTagStep from "~/components/TestTagStep";
import { useState } from "react";

export default function HomePage() {
  const [ result, setResult ] = useState<'inactive' | 'test' | 'success' | 'error'>('inactive');

  return (
    <>
      <h1 className="font-semibold text-[32px] mb-9 pb-[7px] border-b border-[#ebedf3]">
        Getting Started
      </h1>

      <StepCard
        title="Install Surface Tag on your site"
        description="Enable tracking and analytics."
        result={result}
        setResult={setResult}
        actionLabel="Install Tag"
        actionVariant="primary"
      >
        <InstallTagStep />
      </StepCard>

      <StepCard
        title="Test Surface Tag Events"
        description="Test if the Surface Tag is properly emitting events."
        result={undefined}
        setResult={setResult}
        actionLabel="Test Tag"
        actionVariant="secondary"
      >
        <TestTagStep />
      </StepCard>
    </>
  );
}
