export default function ServicePolicyPage() {
  return (
    <div className="px-5 py-10 text-sm leading-relaxed text-gray-800">
      <h1 className="text-xl font-bold text-gray-900">TUK 서비스 이용약관</h1>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">제1조 (목적)</h2>
      <p className="mt-2">
        본 약관은 TUK이 제공하는 모바일 애플리케이션 서비스의 이용에 관한 제반 사항을 규정하는 것을
        목적으로 합니다.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">제2조 (약관의 효력 및 변경)</h2>
      <ol className="mt-2 list-decimal space-y-1 pl-5">
        <li>
          본 약관은 서비스 화면에 게시하거나 기타의 방법으로 사용자에게 공지함으로써 효력을
          발생합니다.
        </li>
        <li>
          TUK은 필요에 따라 본 약관을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로
          공지합니다.
        </li>
        <li>
          사용자는 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 이용계약을 해지할 수
          있습니다. 변경된 약관의 효력 발생 후에도 서비스를 계속 이용하는 경우, 변경된 약관에 동의한
          것으로 간주됩니다.
        </li>
      </ol>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">제3조 (계정 생성 및 관리)</h2>
      <ol className="mt-2 list-decimal space-y-1 pl-5">
        <li>
          사용자는 소셜 로그인을 통해 계정을 생성하며, 소셜 로그인 시 인증 절차를 통해 계정을
          활성화합니다.
        </li>
        <li>
          계정 생성 시, 다음의 경우에는 계정 승인을 거부할 수 있습니다.
          <ol className="mt-1 list-[lower-alpha] space-y-1 pl-5">
            <li>타인의 소셜 계정 또는 개인정보를 이용한 경우</li>
            <li>동일인이 다수의 계정을 생성하려는 경우</li>
            <li>허위 정보를 입력한 경우</li>
            <li>과거에 운영원칙 또는 법률 위반으로 계정이 삭제되었거나 징계된 경우</li>
            <li>사기 정보 모음 사이트 등에서 거래 사기 이력이 있는 경우</li>
          </ol>
        </li>
        <li>
          계정은 본인만 이용할 수 있으며, 타인에게 양도하거나 공유할 수 없습니다. 소셜 로그인 계정
          정보가 변경된 경우에는 문의 기능을 통해 계정 정보를 업데이트할 수 있습니다.
        </li>
      </ol>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">제4조 (이용자의 의무)</h2>
      <ol className="mt-2 list-decimal space-y-1 pl-5">
        <li>
          사용자는 서비스 이용 시 다음 사항을 준수해야 합니다.
          <ol className="mt-1 list-[lower-alpha] space-y-1 pl-5">
            <li>본 약관 및 관련 법령 준수</li>
            <li>타인의 개인정보 침해 금지</li>
            <li>허위정보 제공 금지</li>
            <li>기타 서비스 이용에 있어 일반적인 도덕과 윤리 준수</li>
          </ol>
        </li>
      </ol>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">제5조 (서비스 이용 제한)</h2>
      <ol className="mt-2 list-decimal space-y-1 pl-5">
        <li>
          TUK은 다음과 같은 행위를 금지합니다.
          <ol className="mt-1 list-[lower-alpha] space-y-1 pl-5">
            <li>서비스의 정상적 제공을 방해하거나 비정상적 방법으로 접근하는 행위</li>
            <li>다른 이용자의 정보를 무단으로 수집, 이용하거나 제공하는 행위</li>
            <li>서비스의 영리나 홍보 목적 이용</li>
            <li>소프트웨어의 복사, 수정, 배포, 판매, 양도, 대여 등</li>
            <li>소스 코드 추출이나 역설계 시도</li>
            <li>관련 법령 및 회사 정책 미준수</li>
          </ol>
        </li>
      </ol>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">제6조 (개인정보 보호)</h2>
      <p className="mt-2">
        TUK은 사용자의 개인정보를 관련 법령과 개인정보 처리방침에 따라 보호하며, 사용자가 동의한
        목적과 범위 내에서만 이용합니다.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">제7조 (게시물의 저작권 및 관리)</h2>
      <ol className="mt-2 list-decimal space-y-1 pl-5">
        <li>
          사용자가 게시한 게시물의 저작권은 해당 게시물의 작성자에게 귀속됩니다. 회사는 게시물을
          검색 결과 및 서비스 관련 프로모션에 노출할 수 있으며, 필요한 범위 내에서 수정, 복제,
          편집할 수 있습니다.
        </li>
        <li>
          게시물이 관련 법령에 위반되는 경우, 권리자는 게시중단 및 삭제를 요청할 수 있으며, 회사는
          이를 따라야 합니다.
        </li>
        <li>게시물의 추가적인 이용은 사용자의 사전 동의를 받아야 합니다.</li>
      </ol>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">제8조 (서비스의 중단)</h2>
      <p className="mt-2">
        서비스는 정기 점검, 유지보수, 기타 사유로 중단될 수 있으며, 사전에 공지합니다. 예측할 수
        없는 이유로 중단된 경우, 상황을 파악하는 즉시 통지합니다.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">제9조 (이용계약 해지)</h2>
      <ol className="mt-2 list-decimal space-y-1 pl-5">
        <li>
          사용자는 언제든지 서비스 내 메뉴를 통해 이용계약 해지 신청을 할 수 있으며, 회사는 법령에
          따라 신속히 처리합니다.
        </li>
        <li>
          이용계약 해지 시, 법령에 따라 사용자 정보를 보유할 수 있으며, 작성한 게시물 등은
          삭제됩니다. 단, 다른 사용자가 스크랩하거나 공유한 게시물은 삭제되지 않을 수 있습니다.
        </li>
      </ol>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">제10조 (책임제한)</h2>
      <ol className="mt-2 list-decimal space-y-1 pl-5">
        <li>
          TUK은 법령상 허용되는 범위 내에서 서비스에 대한 보증을 하지 않으며, 서비스를 있는 그대로
          제공합니다.
        </li>
        <li>
          TUK은 사용자에게 발생한 손해에 대해 법령상 허용되는 한도 내에서 책임을 지며, 간접 손해,
          결과적 손해, 징벌적 손해 등에는 책임을 지지 않습니다.
        </li>
      </ol>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">제11조 (약관 수정)</h2>
      <ol className="mt-2 list-decimal space-y-1 pl-5">
        <li>
          TUK은 법령이나 서비스 변경 사항 반영을 위해 약관을 수정할 수 있으며, 변경된 약관은 서비스
          초기 화면에 게시합니다. 변경된 약관은 게시일로부터 7일 후 효력을 발생합니다.
        </li>
        <li>사용자가 변경된 약관에 동의하지 않을 경우, 서비스 제공이 불가능할 수 있습니다.</li>
      </ol>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">제12조 (사용자의 권리 및 요청)</h2>
      <ol className="mt-2 list-decimal space-y-1 pl-5">
        <li>
          사용자는 언제든지 본인의 개인정보에 접근하고, 정정하며, 삭제를 요청할 권리를 가집니다.
        </li>
        <li>
          사용자는 개인정보 보호 관련 요청을 서비스 내 설정 메뉴의 문의 기능을 통해 할 수 있으며,
          회사는 법령에 따라 신속히 처리합니다.
        </li>
      </ol>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">제13조 (법적 준거 및 분쟁 해결)</h2>
      <ol className="mt-2 list-decimal space-y-1 pl-5">
        <li>
          사용자가 본 약관을 준수하지 않은 경우에, TUK이 즉시 조치를 취하지 않더라도 TUK이 가지고
          있는 권리를 포기하는 것이 아니며, 본 약관 중 일부 조항의 집행이 불가능하게 되더라도 다른
          조항에는 영향을 미치지 않습니다.
        </li>
        <li>본 약관과 서비스와 관련하여 발생하는 분쟁은 대한민국 법령을 따릅니다.</li>
      </ol>

      <h2 className="mt-8 text-lg font-semibold text-gray-900">제14조 (사용자 의견 및 통지)</h2>
      <ol className="mt-2 list-decimal space-y-1 pl-5">
        <li>
          사용자는 서비스 내 문의 기능을 통해 의견을 제시할 수 있으며, 회사는 이를 반영할 수
          있습니다.
        </li>
        <li>통지는 서비스 초기 화면 또는 공지사항을 통해 이루어집니다.</li>
      </ol>

      <p className="mt-8">
        <strong>공고일자:</strong> 2025년 8월 6일
      </p>
      <p>
        <strong>시행일자:</strong> 2025년 8월 6일
      </p>
    </div>
  );
}
