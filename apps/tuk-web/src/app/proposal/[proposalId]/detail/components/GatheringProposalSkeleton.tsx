import React from 'react';

const GatheringProposalSkeleton = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center overflow-hidden">
      <div className="mt-[136px] h-[368px] w-[270px] rounded-[10px] bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="mt-[68px] h-5 w-[154px] animate-pulse rounded-[5px] bg-[#eaeaea]" />

          <div className="mt-[25px] h-[182px] w-[220px] rounded-[5px] bg-[#eaeaea]" />
        </div>

        <div className="ml-[25px] mt-[10px] h-5 w-[110px] rounded-[5px] bg-[#eaeaea]" />
      </div>
    </div>
  );
};

export default GatheringProposalSkeleton;
