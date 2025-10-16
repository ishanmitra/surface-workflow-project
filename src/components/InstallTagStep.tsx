import { CodeBlock, CodeBlockCopyButton } from "~/components/ai-elements/code-block";
import { Button } from "~/components/ui/button";
import { Manrope } from "next/font/google";
import React, { type Dispatch, type SetStateAction } from "react";
import ResultBar from "./ResultBar";

interface Event {
  id: string;
  type: string;
  pageUrl: string;
  visitorId: string;
  metadata: Record<string, unknown>;
  createdAt: string;
}

interface InstallTagStepProps {
  result?: 'inactive' | 'test' | 'success' | 'error';
  setResult?: Dispatch<SetStateAction<"inactive" | "test" | "success" | "error">>;
  open1: Dispatch<SetStateAction<boolean>>;
  open2: Dispatch<SetStateAction<boolean>>;
}

const manrope = Manrope({ subsets: ['latin'], weight: ['600'] });

const code = `<script>
  (function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      'surface.start': new Date().getTime(),
      event: 'surface.js'
    });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'surface' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.surface-analytics.com/tag.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'surface', 'SURFACE_TAG_ID');
</script>`;

function InstallTagStep({ result, setResult, open1, open2 }: InstallTagStepProps) {
  const verifyInstallation = async () => {
    if (!setResult) return;
    setResult("test");
    try {
      // Add minimum 500ms delay
      const [eventsResponse] = await Promise.all([
        fetch("/api/events"),
        new Promise(resolve => setTimeout(resolve, 500))
      ]);
      
      const events = (await eventsResponse.json()) as Event[];
      const hasValidEvent = events.some(
        (event) => 
          event.type === "script_initialized" && 
          event.pageUrl === "https://ishanmitra.github.io/tracker-test/"
      );
      
      setResult(hasValidEvent ? "success" : "error");
    } catch(error) {
      console.log(error);
      setResult("error");
    }
  };

  const buttonProps = {
    disabled: result === "test",
    text:
      result === "success" ? "Next step" :
      result === "error" ? "Try again" :
      "Test Connection",
  };

  return (
    <>
      <div className="mb-[23px] mx-6">
        <CodeBlock
          code={code}
          language="html"
          showLineNumbers
          className="border-2 border-[#e2e4e9] shadow-[0_2px_4px_0_#1b1c1d0a] bg-[#f9f9f9] mb-[23px]"
        >
          <CodeBlockCopyButton />
        </CodeBlock>
        <ResultBar result={result} />
      </div>
      <div className="flex justify-end">
        <Button 
          {...buttonProps} 
          onClick={result === "success" ? () => {
            open1(false);
            open2(true);
          } : verifyInstallation}
          className={`${manrope.className} font-semibold bg-[#2f64ee] hover:bg-[#0b2d84] disabled:text-[#5f6065] disabled:bg-[#f1f1f2] disabled:opacity-100 mx-6 cursor-pointer`}
        >
          {buttonProps.text}
        </Button>
      </div>
    </>
  );
}

export default React.memo(InstallTagStep);