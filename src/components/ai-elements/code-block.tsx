"use client";

import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import type { ComponentProps, HTMLAttributes, ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import { Ubuntu_Mono, Manrope } from "next/font/google";

const ubuntuMono = Ubuntu_Mono({ subsets: ['latin'], weight: ['400'] });
const manrope = Manrope({ subsets: ['latin'], weight: ['600'] });

type CodeBlockContextType = {
  code: string;
};

const CodeBlockContext = createContext<CodeBlockContextType>({
  code: "",
});

export type CodeBlockProps = HTMLAttributes<HTMLDivElement> & {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  children?: ReactNode;
};

export const CodeBlock = ({
  code,
  language,
  showLineNumbers = false,
  className,
  children,
  ...props
}: CodeBlockProps) => (
  <CodeBlockContext.Provider value={{ code }}>
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-md border bg-background text-foreground",
        className
      )}
      {...props}
    >
      <div className="relative">
        <SyntaxHighlighter
          className="overflow-hidden dark:hidden syntax-highlighter-line-numbers"
          codeTagProps={{
            className: `text-base ${ubuntuMono.className}`,
          }}
          customStyle={{
            margin: 0,
            padding: "1rem",
            fontSize: "0.875rem",
            background: "hsl(var(--background))",
            color: "hsl(var(--foreground))",
            lineHeight: 1.5,
            fontStyle: "normal"
          }}
          language={language}
          lineNumberStyle={{
            color: "hsl(var(--muted-foreground))",
            paddingRight: "1rem",
            minWidth: "2.5rem",
          }}
          showLineNumbers={showLineNumbers}
          style={oneLight}
        >
          {code}
        </SyntaxHighlighter>
        <SyntaxHighlighter
          className="hidden overflow-hidden dark:block syntax-highlighter-line-numbers"
          codeTagProps={{
            className: `text-base ${ubuntuMono.className}`,
          }}
          customStyle={{
            margin: 0,
            padding: "1rem",
            fontSize: "0.875rem",
            background: "hsl(var(--background))",
            color: "hsl(var(--foreground))",
          }}
          language={language}
          lineNumberStyle={{
            color: "hsl(var(--muted-foreground))",
            paddingRight: "1rem",
            minWidth: "2.5rem",
          }}
          showLineNumbers={showLineNumbers}
          style={oneDark}
        >
          {code}
        </SyntaxHighlighter>
        {children && (
          <div className="absolute top-4.5 right-4.5 flex items-center gap-2">
            {children}
          </div>
        )}
      </div>
    </div>
  </CodeBlockContext.Provider>
);

export type CodeBlockCopyButtonProps = ComponentProps<typeof Button> & {
  onCopy?: () => void;
  onError?: (error: Error) => void;
  timeout?: number;
};

export const CodeBlockCopyButton = ({
  onCopy,
  onError,
  timeout = 2000,
  children,
  className,
  ...props
}: CodeBlockCopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const { code } = useContext(CodeBlockContext);

  const copyToClipboard = async () => {
    if (typeof window === "undefined" || !navigator.clipboard.writeText) {
      onError?.(new Error("Clipboard API not available"));
      return;
    }

    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      onCopy?.();
      setTimeout(() => setIsCopied(false), timeout);
    } catch (error) {
      onError?.(error as Error);
    }
  };

  return (
    <Button
      className={`${manrope.className} font-semibold bg-[#2f64ee] hover:bg-[#0b2d84] cursor-pointer`}
      onClick={copyToClipboard}
      {...props}
    >
      { isCopied ? "Copied!" : "Copy Snippet" }
    </Button>
  )
};
