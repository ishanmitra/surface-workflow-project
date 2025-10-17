"use client";

import StepCard from "~/components/StepCard";
import InstallTagStep from "~/components/InstallTagStep";
import TestTagStep from "~/components/TestTagStep";
import { useState } from "react";

export default function HomePage() {
  const [ result, setResult ] = useState<'inactive' | 'test' | 'success' | 'error'>('inactive');
  const [ isOpen1, setIsOpen1 ] = useState<boolean>(false);
  const [ isOpen2, setIsOpen2 ] = useState<boolean>(false);
  const [ isUrl, setIsUrl ] = useState<string>("");

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
        isOpen={isOpen1}
        setIsOpen={setIsOpen1}
      >
        <InstallTagStep open1={setIsOpen1} open2={setIsOpen2} isUrl={isUrl} setIsUrl={setIsUrl} />
      </StepCard>

      <StepCard
        title="Test Surface Tag Events"
        description="Test if the Surface Tag is properly emitting events."
        result={undefined}
        setResult={setResult}
        actionLabel="Test Tag"
        actionVariant="secondary"
        isOpen={isOpen2 && isUrl !== "" && result == "success"}
        setIsOpen={setIsOpen2}
      >
        <TestTagStep isUrl={isUrl} />
      </StepCard>
    </>
  );
}
