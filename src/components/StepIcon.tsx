import { RiCheckFill } from "react-icons/ri";
import { BiSolidErrorCircle } from "react-icons/bi";

interface StepIconProps {
  status?: 'inactive' | 'success' | 'error';
}

export function StepIcon({ status = 'inactive' }: StepIconProps) {
  switch (status) {
    case 'success':
      return (
        <div className="w-6 h-6 bg-[#cdfee1] rounded-full flex items-center justify-center self-center">
          <RiCheckFill className="fill-[#0c5132] w-4 h-4" />
        </div>
      );

    case 'error':
      return (
        <div className="w-6 h-6 bg-[#df1c41] rounded-full content-center justify-items-center relative self-center">
            <div className="bg-white w-3 h-3 absolute inset-0 m-auto" />
            <BiSolidErrorCircle className="fill-[#df1c41] w-6 h-6 absolute inset-0 m-auto"/>
        </div>
      );

    case 'inactive':
    default:
      return (
        <div className="w-6 h-6 bg-[#f3f3f3] rounded-full flex items-center justify-center self-center">
          <RiCheckFill className="fill-[#cececf] w-4 h-4" />
        </div>
      );
  }
}