export default function PrivacyPolicyPage() {
  return (
    <div className="px-5 py-10 text-sm leading-relaxed text-gray-800">
      <h1 className="text-xl font-bold text-gray-900">TUK 개인정보 처리방침</h1>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">
        제1조 (개인정보 수집 항목 및 방법)
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>
          <strong>수집 항목</strong>: Google 로그인 정보, 디바이스 정보, 사용자 설정 정보, IP 주소
          등
        </li>
        <li>
          <strong>수집 방법</strong>: 회원가입, 서비스 이용, 푸시 동의, 고객문의 시
        </li>
      </ul>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">
        제2조 (개인정보 수집 및 이용 목적)
      </h2>
      <div className="mt-2 overflow-x-auto">
        <table className="w-full table-auto border border-gray-200 text-left text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 font-medium">목적</th>
              <th className="border px-3 py-2 font-medium">상세 내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">서비스 제공</td>
              <td className="border px-3 py-2">회원 인증, 푸시 발송, 앱 기능 제공</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">서비스 개선</td>
              <td className="border px-3 py-2">오류 분석, 품질 개선, 통계 분석</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">고객 응대</td>
              <td className="border px-3 py-2">문의/신고 대응, 보호 조치</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">법령 준수</td>
              <td className="border px-3 py-2">법적 의무 이행</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">
        제3조 (개인정보 보유 및 이용 기간)
      </h2>
      <p className="mt-2">
        목적 달성 후 즉시 파기하며, 관계 법령에 따라 아래와 같이 보존할 수 있습니다.
      </p>
      <div className="mt-2 overflow-x-auto">
        <table className="w-full table-auto border border-gray-200 text-left text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 font-medium">보관 항목</th>
              <th className="border px-3 py-2 font-medium">보관 사유</th>
              <th className="border px-3 py-2 font-medium">보유 기간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">로그인 정보</td>
              <td className="border px-3 py-2">이용 기록 확인</td>
              <td className="border px-3 py-2">회원 탈퇴 시까지</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">FCM Token</td>
              <td className="border px-3 py-2">푸시 발송</td>
              <td className="border px-3 py-2">탈퇴 또는 수신 거부 시까지</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">접속 로그</td>
              <td className="border px-3 py-2">이용 기록 확인</td>
              <td className="border px-3 py-2">3개월</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">소비자 불만 기록</td>
              <td className="border px-3 py-2">소비자 보호</td>
              <td className="border px-3 py-2">3년</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">
        제4조 (개인정보 제3자 제공 및 위탁)
      </h2>
      <p className="mt-2">원칙적으로 제3자 제공은 하지 않으며, 아래 경우 예외적으로 제공합니다.</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>법령에 따른 경우</li>
        <li>이용자 동의가 있는 경우</li>
      </ul>
      <div className="mt-2 overflow-x-auto">
        <table className="w-full table-auto border border-gray-200 text-left text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2 font-medium">수탁 업체</th>
              <th className="border px-3 py-2 font-medium">위탁 내용</th>
              <th className="border px-3 py-2 font-medium">보유 및 이용 기간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">Firebase</td>
              <td className="border px-3 py-2">푸시 알림 발송</td>
              <td className="border px-3 py-2">탈퇴 또는 거부 시까지</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Google</td>
              <td className="border px-3 py-2">소셜 로그인 인증</td>
              <td className="border px-3 py-2">로그인 시</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">
        제5조 (이용자의 권리와 행사 방법)
      </h2>
      <p className="mt-2">
        이용자는 언제든지 개인정보 열람·수정·동의 철회가 가능하며, 앱 내 &quot;계정 탈퇴&quot; 또는
        이메일로 요청할 수 있습니다.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">제6조 (쿠키의 사용 및 거부)</h2>
      <p className="mt-2">
        회사는 쿠키를 사용하여 이용자 환경을 저장하며, 브라우저 설정을 통해 거부할 수 있습니다.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">
        제7조 (개인정보의 파기 절차 및 방법)
      </h2>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>전자 파일: 복구 불가능한 기술로 삭제</li>
        <li>종이 문서: 분쇄 또는 소각</li>
      </ul>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">
        제8조 (개인정보 보호책임자 및 문의처)
      </h2>
      <p className="mt-2">
        <strong>이름:</strong> 정석준
        <br />
        <strong>이메일:</strong> admin@tuk.kr
      </p>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">
        제9조 (개인정보 처리방침 변경 안내)
      </h2>
      <p className="mt-2">
        법령 및 서비스 변경에 따라 개정될 수 있으며, 공지 후 7일 뒤 효력이 발생합니다.
      </p>

      <p className="mt-8">
        <strong>공고일자:</strong> 2025년 8월 6일
        <br />
        <strong>시행일자:</strong> 2025년 8월 6일
      </p>
    </div>
  );
}
