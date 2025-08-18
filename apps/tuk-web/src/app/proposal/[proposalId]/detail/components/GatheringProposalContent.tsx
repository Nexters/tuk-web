'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { ProposalItemType } from '@/app/gathering/[gatheringId]/invites/src/service/schema/get-gathering-proposals.schema';
import { QuoteIcon } from '@/app/invite/meet/[meetId]/src/components/InviteProposal';
import { proposalAPIService } from '@/app/invite/meet/[meetId]/src/service';
import { ProposalDetailType } from '@/app/invite/meet/[meetId]/src/service/schema/get-proposal-detail.schema';
import { BackgroundTemplate, CloseIcon32, Header } from '@/shared/components';
import { useAppBridge } from '@/shared/components/provider/AppBridgeProvider';
import { useParam } from '@/shared/hooks/useParam';
import { AppBridgeMessageType, cn } from '@/shared/lib';

const GatheringProposalContent = () => {
  const proposalId = Number(useParam('proposalId'));

  const { send } = useAppBridge();

  const [slideDown, setSlideDown] = useState(false);

  const {
    data: proposalDetail,
    isLoading,
    isError,
  } = useSuspenseQuery({
    queryKey: ['getProposalDetail', proposalId],
    queryFn: () => proposalAPIService.getProposalDetail(proposalId),
  });

  useEffect(() => {
    if (!isLoading && !isError) {
      const id = requestAnimationFrame(() => setSlideDown(true));
      return () => cancelAnimationFrame(id);
    }
  }, [isLoading, isError]);

  return (
    <BackgroundTemplate>
      <BackgroundTemplate.Main>
        <BackgroundTemplate.Gradient />

        <Header className="bg-transparent">
          <Header.Left />
          <Header.Right
            onClick={() => send({ type: AppBridgeMessageType.NAVIGATE_BACK, payload: '' })}
          >
            <Header.Button>
              <CloseIcon32 />
            </Header.Button>
          </Header.Right>
        </Header>

        <h2 className="serif-title-24-M px-5 text-[#222222]">
          보고싶은 마음이
          <br />
          도착했어요
        </h2>

        <div className="relative mt-[70px] flex flex-col items-center justify-center">
          <div className="flex justify-center">
            <Card proposalData={proposalDetail.data} />
          </div>

          <div
            className={cn(
              'ease-outmotion-reduce:transition-none absolute bottom-[-100px] left-1/2 h-[421px] w-[408px] -translate-x-1/2 transition-transform duration-1000',
              slideDown ? 'translate-y-52' : 'translate-y-0'
            )}
            style={{ willChange: 'transform', transitionDelay: '150ms' }}
          >
            <div className="relative size-full">
              <div className="absolute inset-0 z-0">
                <CardFrame />
              </div>

              <div className="serif-body-16-M absolute bottom-[100px] left-1/2 z-[1] -translate-x-1/2 text-center text-gray-900">
                {proposalDetail.data.gatheringName}
                <br />
                친구들에게
              </div>
            </div>
          </div>
        </div>
      </BackgroundTemplate.Main>
    </BackgroundTemplate>
  );
};

export default GatheringProposalContent;

export const Card = ({ proposalData }: { proposalData: ProposalItemType | ProposalDetailType }) => {
  const purposeLines = (proposalData.purpose ?? '').split('\n').filter(Boolean).slice(0, 3);

  return (
    <div className="h-[368px] w-[278px] rounded-[10px] bg-gray-50 pt-4">
      <div className="flex flex-col items-center">
        <QuoteIcon />
        <h3 className="serif-body-16-M mt-[65px] text-gray-900">말이 안되는거 알지만</h3>
      </div>
      <div className="px-9">
        <p className="serif-body-16-M mt-[22px] text-gray-900">우리</p>
        <div className="mt-[15px] flex flex-col gap-[5px]">
          {purposeLines.map((line, i) => (
            <p key={i} className="serif-body-16-M text-gray-900">
              {line}
            </p>
          ))}
        </div>
        <p className="serif-body-16-M mt-[15px] text-gray-900">어때</p>
      </div>
    </div>
  );
};

export const CardFrame = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="408"
      height="421"
      viewBox="0 0 408 421"
      fill="none"
    >
      <foreignObject x="0" y="0" width="408" height="421">
        <div
          style={{
            backdropFilter: 'blur(15px)',
            clipPath: 'url(#bgblur_0_2340_21174_clip_path)',
            height: '100%',
            width: '100%',
          }}
        />
      </foreignObject>
      <g filter="url(#filter0_d_2340_21174)" data-figma-bg-blur-radius="30">
        <mask id="path-1-inside-1_2340_21174" fill="white">
          <path d="M348 46C353.523 46 358 50.4772 358 56V357C358 362.523 353.523 367 348 367H60C54.4772 367 50 362.523 50 357V56C50 50.4772 54.4772 46 60 46H166.428C171.924 46 176.216 50.5948 178.305 55.6788C182.543 65.9967 193.239 73.3201 205.766 73.3203C218.293 73.3203 228.989 65.9968 233.227 55.6788C235.316 50.5948 239.609 46 245.105 46H348Z" />
        </mask>
        <path
          d="M348 46C353.523 46 358 50.4772 358 56V357C358 362.523 353.523 367 348 367H60C54.4772 367 50 362.523 50 357V56C50 50.4772 54.4772 46 60 46H166.428C171.924 46 176.216 50.5948 178.305 55.6788C182.543 65.9967 193.239 73.3201 205.766 73.3203C218.293 73.3203 228.989 65.9968 233.227 55.6788C235.316 50.5948 239.609 46 245.105 46H348Z"
          fill="url(#paint0_linear_2340_21174)"
          fillOpacity="0.2"
          shapeRendering="crispEdges"
        />
        <path
          d="M348 46V45V46ZM358 56H359H358ZM358 357H359H358ZM348 367V368V367ZM60 367V368V367ZM50 357H49H50ZM50 56L49 56V56H50ZM60 46V45V46ZM205.766 73.3203L205.766 74.3203H205.766V73.3203ZM178.305 55.6788L179.23 55.2988L178.305 55.6788ZM348 46V47C352.971 47 357 51.0294 357 56H358H359C359 49.9249 354.075 45 348 45V46ZM358 56H357V357H358H359V56H358ZM358 357H357C357 361.971 352.971 366 348 366V367V368C354.075 368 359 363.075 359 357H358ZM348 367V366H60V367V368H348V367ZM60 367V366C55.0294 366 51 361.971 51 357H50H49C49 363.075 53.9249 368 60 368V367ZM50 357H51V56H50H49V357H50ZM50 56L51 56C51 51.0294 55.0294 47 60 47V46V45C53.9249 45 49 49.9249 49 56L50 56ZM60 46V47H166.428V46V45H60V46ZM178.305 55.6788L177.38 56.0587C181.779 66.7682 192.851 74.3201 205.766 74.3203L205.766 73.3203L205.766 72.3203C193.626 72.3201 183.307 65.2252 179.23 55.2988L178.305 55.6788ZM205.766 73.3203V74.3203C218.68 74.3203 229.753 66.7683 234.152 56.0587L233.227 55.6788L232.302 55.2988C228.225 65.2253 217.905 72.3203 205.766 72.3203V73.3203ZM245.105 46V47H348V46V45H245.105V46ZM233.227 55.6788L234.152 56.0587C236.175 51.134 240.205 47 245.105 47V46V45C239.012 45 234.456 50.0556 232.302 55.2988L233.227 55.6788ZM166.428 46V47C171.327 47 175.357 51.134 177.38 56.0587L178.305 55.6788L179.23 55.2988C177.076 50.0556 172.521 45 166.428 45V46Z"
          fill="url(#paint1_linear_2340_21174)"
          mask="url(#path-1-inside-1_2340_21174)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2340_21174"
          x="0"
          y="0"
          width="408"
          height="421"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="25" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2340_21174" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2340_21174"
            result="shape"
          />
        </filter>
        <clipPath id="bgblur_0_2340_21174_clip_path" transform="translate(0 0)">
          <path d="M348 46C353.523 46 358 50.4772 358 56V357C358 362.523 353.523 367 348 367H60C54.4772 367 50 362.523 50 357V56C50 50.4772 54.4772 46 60 46H166.428C171.924 46 176.216 50.5948 178.305 55.6788C182.543 65.9967 193.239 73.3201 205.766 73.3203C218.293 73.3203 228.989 65.9968 233.227 55.6788C235.316 50.5948 239.609 46 245.105 46H348Z" />
        </clipPath>
        <linearGradient
          id="paint0_linear_2340_21174"
          x1="204"
          y1="46"
          x2="204"
          y2="367"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2340_21174"
          x1="50"
          y1="373.999"
          x2="334.88"
          y2="27.0176"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E1E1E1" />
          <stop offset="1" stopColor="white" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
};
