import { Inter } from "next/font/google";
import { RiErrorWarningFill, RiCheckboxCircleFill, RiInformationFill } from "react-icons/ri";

const inter = Inter({ subsets: ['latin'], weight: ['400'] });

interface ResultBarProps {
    result?: 'inactive' | 'test' | 'success' | 'error';
}

export default function ResultBar({ result }: ResultBarProps) {
    switch (result) {
        case 'success':
            return (
                <div className={`${inter.className} text-xs bg-[#effaf6] rounded-[8px] flex gap-2 px-2.5 py-2 `}>
                    <div className="w-5 h-5 my-auto">
                        <RiCheckboxCircleFill className="fill-[#38c793] w-5 h-5" />
                    </div>
                    <div className="content-center">
                        Connected successfully!
                    </div>
                </div>
            );

        case 'error':
            return (
                <div className={`${inter.className} text-[14px] bg-[#fdedf0] rounded-[8px] flex gap-2 px-2.5 py-2`}>
                    <div className="w-5 h-5 my-auto">
                        <RiErrorWarningFill className="fill-[#df1c41] w-5 h-5" />
                    </div>
                    <div>
                        We couldn’t detect the Surface Tag on your website. Please ensure the snippet is added correctly.
                        <ul className="text-xs text-[#656565] list-disc list-inside ml-3">
                            <li>Recheck the code snippet to ensure it&apos;s correctly placed before the closing &lt;/head&gt; tag.</li>
                            <li>Ensure there are no blockers (like ad blockers) preventing the script from running.</li>
                            <li>Try again once you’ve made the corrections.</li>
                        </ul>
                    </div>
                </div>
            );

        case 'test':
            return (
                <div className={`${inter.className} text-xs bg-[#f1f4fd] rounded-[8px] flex gap-2 px-2.5 py-2 `}>
                    <div className="w-5 h-5 my-auto">
                        <RiInformationFill className="fill-[#4159cf] w-5 h-5" />
                    </div>
                    <div className="content-center">
                        Checking for Tag...
                    </div>
                </div>
            );
    }
}