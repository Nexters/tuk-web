import { useInfiniteQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useMemo } from 'react';

import { gatheringAPIService } from '@/app/gathering/[gatheringId]/invites/src/service';
import { InviteCard } from '@/app/invite/meet/[meetId]/src/components/InviteMeet';
import InviteCardFrame from '@/shared/components/InviteCardFrame';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import { useParam } from '@/shared/hooks/useParam';

const ReceiveInviteList = () => {
  const gatheringId = Number(useParam('gatheringId'));

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['getGatheringProposals', gatheringId, 'RECEIVED'],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) =>
      gatheringAPIService.getGatheringProposals(gatheringId, 'RECEIVED', {
        pageNumber: pageParam,
        pageSize: 10,
      }),
    getNextPageParam: lastPage => {
      const { hasNext, pageNumber } = lastPage.data;
      return hasNext ? pageNumber + 1 : undefined;
    },
  });

  const proposals = useMemo(() => data?.pages.flatMap(p => p.data.content) ?? [], [data]);

  const { targetRef } = useIntersectionObserver({
    enabled: hasNextPage && !isFetchingNextPage,
    onIntersect: () => fetchNextPage(),
    rootMargin: '200px 0px',
  });

  return (
    <div className="mb-[6.25rem] mt-[1.875rem] flex flex-col justify-center gap-10">
      {proposals.length === 0 ? (
        <div className="flex h-[16.25rem] items-center justify-center">
          <span className="pretendard-body-14-R text-gray-800">받은 초대장이 아직 없어요</span>
        </div>
      ) : (
        proposals.map(proposal => (
          <div className="flex flex-col items-center gap-12" key={proposal.proposalId}>
            <Link href={`/gathering/${gatheringId}/invites/${proposal.proposalId}`}>
              <div className="relative flex justify-center">
                <InviteCardFrame />

                <div className="absolute left-1/2 top-12 -translate-x-1/2">
                  <InviteCard />
                </div>
              </div>
            </Link>

            <span className="pretendard-body-12-R text-gray-800">{proposal.relativeTime}</span>
          </div>
        ))
      )}

      <div ref={targetRef} className="h-1" />
    </div>
  );
};

export default ReceiveInviteList;

// const GradientInviteCard = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="348"
//     height="381"
//     viewBox="0 0 348 381"
//     fill="none"
//   >
//     <g filter="url(#filter0_d_1289_22773)">
//       <mask
//         id="mask0_1289_22773"
//         style={{ maskType: 'alpha' }}
//         maskUnits="userSpaceOnUse"
//         x="30"
//         y="34"
//         width="288"
//         height="322"
//       >
//         <mask id="path-1-inside-1_1289_22773" fill="white">
//           <path d="M308 34.999C313.523 34.999 318 39.4772 318 45V345.999C318 351.522 313.523 356 308 356H40C34.4772 356 30 351.522 30 345.999V45C30 39.4772 34.4772 34.999 40 34.999H138.218C143.716 34.999 148.008 39.5816 149.986 44.7113C153.958 55.0117 163.951 62.3193 175.652 62.3193C187.353 62.3193 197.346 55.0117 201.318 44.7113C203.296 39.5816 207.589 34.999 213.087 34.999H308Z" />
//         </mask>
//         <path
//           d="M308 34.999C313.523 34.999 318 39.4772 318 45V345.999C318 351.522 313.523 356 308 356H40C34.4772 356 30 351.522 30 345.999V45C30 39.4772 34.4772 34.999 40 34.999H138.218C143.716 34.999 148.008 39.5816 149.986 44.7113C153.958 55.0117 163.951 62.3193 175.652 62.3193C187.353 62.3193 197.346 55.0117 201.318 44.7113C203.296 39.5816 207.589 34.999 213.087 34.999H308Z"
//           fill="#F5F5F5"
//         />
//         <path
//           d="M308 356V357.5V356ZM40 34.999V33.499V34.999ZM149.986 44.7113L148.587 45.251L149.986 44.7113ZM308 34.999V36.499C312.694 36.499 316.5 40.3054 316.5 45H318H319.5C319.5 38.6489 314.351 33.499 308 33.499V34.999ZM318 45H316.5V345.999H318H319.5V45H318ZM318 345.999H316.5C316.5 350.694 312.694 354.5 308 354.5V356V357.5C314.351 357.5 319.5 352.35 319.5 345.999H318ZM308 356V354.5H40V356V357.5H308V356ZM40 356V354.5C35.3058 354.5 31.5 350.694 31.5 345.999H30H28.5C28.5 352.35 33.6485 357.5 40 357.5V356ZM30 345.999H31.5V45H30H28.5V345.999H30ZM30 45H31.5C31.5 40.3054 35.3058 36.499 40 36.499V34.999V33.499C33.6485 33.499 28.5 38.6489 28.5 45H30ZM40 34.999V36.499H138.218V34.999V33.499H40V34.999ZM149.986 44.7113L148.587 45.251C152.774 56.1107 163.311 63.8193 175.652 63.8193V62.3193V60.8193C164.592 60.8193 155.142 53.9127 151.386 44.1716L149.986 44.7113ZM175.652 62.3193V63.8193C187.994 63.8193 198.53 56.1107 202.718 45.251L201.318 44.7113L199.919 44.1716C196.163 53.9127 186.713 60.8193 175.652 60.8193V62.3193ZM213.087 34.999V36.499H308V34.999V33.499H213.087V34.999ZM201.318 44.7113L202.718 45.251C204.593 40.3896 208.486 36.499 213.087 36.499V34.999V33.499C206.692 33.499 202 38.7736 199.919 44.1716L201.318 44.7113ZM138.218 34.999V36.499C142.819 36.499 146.712 40.3896 148.587 45.251L149.986 44.7113L151.386 44.1716C149.304 38.7736 144.613 33.499 138.218 33.499V34.999Z"
//           fill="url(#paint0_linear_1289_22773)"
//           mask="url(#path-1-inside-1_1289_22773)"
//         />
//       </mask>
//       <g mask="url(#mask0_1289_22773)">
//         <mask
//           id="mask1_1289_22773"
//           style={{ maskType: 'alpha' }}
//           maskUnits="userSpaceOnUse"
//           x="11"
//           y="-15"
//           width="335"
//           height="478"
//         >
//           <path
//             d="M11 -4.00098C11 -9.52383 15.4772 -14.001 21 -14.001H336C341.523 -14.001 346 -9.52382 346 -4.00098V452.73C346 458.253 341.523 462.73 336 462.73H21C15.4771 462.73 11 458.253 11 452.73V-4.00098Z"
//             fill="#F0F1F3"
//           />
//           <path
//             d="M21 -13.501H336C341.247 -13.501 345.5 -9.24768 345.5 -4.00098V452.729C345.5 457.976 341.247 462.229 336 462.229H21C15.7533 462.229 11.5 457.976 11.5 452.729V-4.00098C11.5 -9.24768 15.7533 -13.501 21 -13.501Z"
//             stroke="black"
//             strokeOpacity="0.05"
//           />
//         </mask>
//         <g mask="url(#mask1_1289_22773)">
//           <mask
//             id="mask2_1289_22773"
//             style={{ maskType: 'alpha' }}
//             maskUnits="userSpaceOnUse"
//             x="-32"
//             y="-307"
//             width="532"
//             height="812"
//           >
//             <rect
//               x="-31.2383"
//               y="-306.349"
//               width="530.069"
//               height="809.934"
//               rx="19.5"
//               fill="#222222"
//               stroke="url(#paint1_linear_1289_22773)"
//             />
//           </mask>
//           <g mask="url(#mask2_1289_22773)">
//             <g filter="url(#filter1_f_1289_22773)">
//               <path
//                 d="M141.215 613.322C60.8224 631.562 -136.321 258.442 -177.566 53.6864C-218.812 -151.069 -88.5426 -109.925 -8.15047 -128.164C72.2417 -146.404 170.849 4.7972 212.095 209.553C253.341 414.308 221.607 595.082 141.215 613.322Z"
//                 fill="url(#paint2_linear_1289_22773)"
//               />
//             </g>
//             <g filter="url(#filter2_f_1289_22773)">
//               <path
//                 d="M392.645 -28.3969C524.555 -7.02915 680.808 268.384 662.796 393.624C644.784 518.863 459.328 446.504 327.418 425.136C195.508 403.768 103.175 284.919 121.187 159.68C139.199 34.4402 260.735 -49.7646 392.645 -28.3969Z"
//                 fill="url(#paint3_linear_1289_22773)"
//               />
//             </g>
//             <g filter="url(#filter3_f_1289_22773)">
//               <path
//                 d="M331.015 227.462C417.787 241.518 519.617 429.335 507.279 515.125C494.941 600.915 373.107 552.191 286.334 538.135C199.562 524.079 139.221 443.138 151.559 357.348C163.897 271.558 244.242 213.406 331.015 227.462Z"
//                 fill="url(#paint4_linear_1289_22773)"
//               />
//             </g>
//           </g>
//         </g>
//       </g>
//     </g>
//     <defs>
//       <filter
//         id="filter0_d_1289_22773"
//         x="0"
//         y="-0.000976562"
//         width="348"
//         height="381.001"
//         filterUnits="userSpaceOnUse"
//         colorInterpolationFilters="sRGB"
//       >
//         <feFlood floodOpacity="0" result="BackgroundImageFix" />
//         <feColorMatrix
//           in="SourceAlpha"
//           type="matrix"
//           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//           result="hardAlpha"
//         />
//         <feOffset dy="-5" />
//         <feGaussianBlur stdDeviation="15" />
//         <feComposite in2="hardAlpha" operator="out" />
//         <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
//         <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1289_22773" />
//         <feBlend
//           mode="normal"
//           in="SourceGraphic"
//           in2="effect1_dropShadow_1289_22773"
//           result="shape"
//         />
//       </filter>
//       <filter
//         id="filter1_f_1289_22773"
//         x="-365.445"
//         y="-309.656"
//         width="775.613"
//         height="1103.62"
//         filterUnits="userSpaceOnUse"
//         colorInterpolationFilters="sRGB"
//       >
//         <feFlood floodOpacity="0" result="BackgroundImageFix" />
//         <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
//         <feGaussianBlur stdDeviation="90" result="effect1_foregroundBlur_1289_22773" />
//       </filter>
//       <filter
//         id="filter2_f_1289_22773"
//         x="-61.0586"
//         y="-211.711"
//         width="905.281"
//         height="857.063"
//         filterUnits="userSpaceOnUse"
//         colorInterpolationFilters="sRGB"
//       >
//         <feFlood floodOpacity="0" result="BackgroundImageFix" />
//         <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
//         <feGaussianBlur stdDeviation="90" result="effect1_foregroundBlur_1289_22773" />
//       </filter>
//       <filter
//         id="filter3_f_1289_22773"
//         x="29.957"
//         y="105.367"
//         width="598.344"
//         height="579.287"
//         filterUnits="userSpaceOnUse"
//         colorInterpolationFilters="sRGB"
//       >
//         <feFlood floodOpacity="0" result="BackgroundImageFix" />
//         <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
//         <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_1289_22773" />
//       </filter>
//       <linearGradient
//         id="paint0_linear_1289_22773"
//         x1="30"
//         y1="34.998"
//         x2="318.002"
//         y2="403.638"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="white" stopOpacity="0.4" />
//         <stop offset="1" stopColor="#999999" stopOpacity="0.2" />
//       </linearGradient>
//       <linearGradient
//         id="paint1_linear_1289_22773"
//         x1="-31.7383"
//         y1="-306.849"
//         x2="542.779"
//         y2="472.036"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="white" />
//         <stop offset="1" stopColor="white" />
//       </linearGradient>
//       <linearGradient
//         id="paint2_linear_1289_22773"
//         x1="181.403"
//         y1="342.86"
//         x2="-110.699"
//         y2="283.011"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#DCC9F7" />
//         <stop offset="1" stopColor="#94C1D3" />
//       </linearGradient>
//       <linearGradient
//         id="paint3_linear_1289_22773"
//         x1="84.191"
//         y1="-11.3887"
//         x2="639.383"
//         y2="457.821"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#DCC9F7" />
//         <stop offset="1" stopColor="#94C1D3" />
//       </linearGradient>
//       <linearGradient
//         id="paint4_linear_1289_22773"
//         x1="392.558"
//         y1="293.916"
//         x2="427.131"
//         y2="539.856"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#DCC8F8" />
//         <stop offset="1" stopColor="white" />
//       </linearGradient>
//     </defs>
//   </svg>
// );
