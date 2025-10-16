import { Inter } from "next/font/google";
import { RiErrorWarningFill, RiCheckboxCircleFill, RiInformationFill } from "react-icons/ri";

const inter = Inter({ subsets: ['latin'], weight: ['400'] });

interface ResultBarProps {
    result?: 'inactive' | 'test' | 'success' | 'error';
}

export default function ResultBar({ result }: ResultBarProps) {
    const getContent = () => {
        switch (result) {
            case 'success':
                return {
                    icon: <RiCheckboxCircleFill className="fill-[#38c793] w-5 h-5" />,
                    message: "Connected successfully!",
                    bgColor: "bg-[#effaf6]",
                    textSize: "text-xs"
                };

            case 'error':
                return {
                    icon: <RiErrorWarningFill className="fill-[#df1c41] w-5 h-5" />,
                    message: (
                        <>
                            We couldn&apos;t detect the Surface Tag on your website. Please ensure the snippet is added correctly.
                            <ul className="text-xs text-[#656565] list-disc list-inside ml-3">
                                <li>Recheck the code snippet to ensure it&apos;s correctly placed before the closing &lt;/head&gt; tag.</li>
                                <li>Ensure there are no blockers (like ad blockers) preventing the script from running.</li>
                                <li>Try again once you&apos;ve made the corrections.</li>
                            </ul>
                        </>
                    ),
                    bgColor: "bg-[#fdedf0]",
                    textSize: "text-[14px]"
                };

            case 'test':
                return {
                    icon: <RiInformationFill className="fill-[#4159cf] w-5 h-5" />,
                    message: "Checking for Tag...",
                    bgColor: "bg-[#f1f4fd]",
                    textSize: "text-xs"
                };

            default:
                return null;
        }
    };

    const content = getContent();

    return (
        <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${content ? 'opacity-100' : 'opacity-0'}`}
            style={{ maxHeight: content ? '500px' : '0px' }}
        >
            {content && (
                <div className={`${inter.className} ${content.textSize} ${content.bgColor} rounded-[8px] flex gap-2 px-2.5 py-2`}>
                    <div className="w-5 h-5 my-auto">
                        {content.icon}
                    </div>
                    <div className="content-center">
                        {content.message}
                    </div>
                </div>
            )}
        </div>
    );
}