class ProjectList {
  data = [
    {
      id: 11,
      title: "대항오 계산기",
      kind: "개인 프로젝트(진행중)",
      summary:
        "모바일 게임 [대항해시대 오리진] 편의 기능<br>next.js 학습 목적 토이프로젝트",
      service:
        "유저들에게 모바일 게임 [대항해시대 오리진]에 대한 데이터와 편의 기능을 제공하는 사이트 입니다.<br>next.js 학습을 위한 토이프로젝트 입니다.",
      stack: [
        { tag: "next", text: "Next.js 14" },
        { tag: "fro", text: "typescript" },
        { tag: "pub", text: "Tailwind CSS" },
        { tag: "pub", text: "CSS" },
      ],
      link: "https://dho-cal.lifebefore.co.kr",
      thumb: { image: "./images/work/work_11/bg_dho.png" },
      contentPage: `
        <div class="wk_content">
            <div class="gh_url">
                Production. <a target="_blank" href="https://dho-cal.lifebefore.co.kr">https://dho-cal.lifebefore.co.kr</a>
                <br>
                Github. <a target="_blank" href="https://github.com/ohsssuk/dho-cal">https://github.com/ohsssuk/dho-cal</a>
            </div>
            
            <div class="point_cont">
                <h2>컴포넌트 구조 설계</h2>
                <div class="des">
                    <strong>디자인 패턴 레퍼런스를 참고하여 역할과 크기에 따른 분류와 재사용성을 염두에 두고 구성하도록 노력</strong>
                    
                    <div class="layout_view">
                        <div class="box" style="border-color:#4b4b4b; width:100%;">
                            <p class="box_description" style="color:#4b4b4b">
                                <strong>Fleet</strong><br>
                                page의 client component 부분에 해당하는 container 역할
                            </p>
                            
                            <div class="box" style="border-color:#c12727; width:100%;">
                                <p class="box_description" style="color:#c12727">
                                    <strong>FleetOutput</strong><br>
                                    입력 받은 정보의 [계산, 계산 결과] 역할. 전체적인 비지니스 로직 포함
                                </p>
                                
                                <div class="box" style="border-color:#155b1d; width:100%;">
                                    <p class="box_description" style="color:#155b1d">
                                        <strong>CommonSection x n</strong><br>
                                        공통 섹션의 디자인 요소
                                    </p>
                                    
                                    <div class="box" style="border-color:#4b0a87; width:50%">
                                        <p class="box_description" style="color:#4b0a87">
                                            <strong>Select(정렬 필터)</strong><br>
                                            기본 컴포넌트 : Select
                                        </p>
                                    </div>
                                    
                                    <div class="box" style="border-color:#c12727; width:100%;">
                                        <p class="box_description" style="color:#c12727">
                                            <strong>ResultTable</strong><br>
                                            결과 단순 표시용 테이블
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="box" style="border-color:#2c53a9; width:100%;">
                                <p class="box_description" style="color:#2c53a9">
                                    <strong>FleetInput</strong><br>
                                    사용자의 [입력] 역할만 담당. 전체적인 비지니스 로직 포함
                                </p>
                                
                                <div class="box" style="border-color:#155b1d; width:100%;">
                                    <p class="box_description" style="color:#155b1d">
                                        <strong>CommonSection x n</strong><br>
                                        공통 섹션의 디자인 요소
                                    </p>
                                    
                                    <div class="box" style="border-color:#4b0a87; width:50%">
                                        <p class="box_description" style="color:#4b0a87">
                                            <strong>Select(정렬 필터)</strong><br>
                                            기본 컴포넌트 : Select
                                        </p>
                                    </div>
                                    
                                    <div class="box" style="border-color:#2c53a9; width:100%;">
                                        <p class="box_description" style="color:#2c53a9">
                                            <strong>ShipItemList</strong><br>
                                            선박&부품 공통 컴포넌트의 List
                                        </p>
                                        
                                    
                                        <div class="box" style="border-color:#2c53a9; width:100%;">
                                            <p class="box_description" style="color:#2c53a9">
                                                <strong>ShipItem x n</strong><br>
                                                선박&부품 공통 컴포넌트
                                            </p>
                                        
                                            <div class="box" style="border-color:#4b0a87; width:50%">
                                                <p class="box_description" style="color:#4b0a87">
                                                    <strong>Checkbox(사용 여부 선택)</strong><br>
                                                    기본 컴포넌트 : Checkbox
                                                </p>
                                            </div>
                                            <div class="box" style="border-color:#4b0a87; width:50%">
                                                <p class="box_description" style="color:#4b0a87">
                                                    <strong>Input(수치 입력)</strong><br>
                                                    기본 컴포넌트 : Input
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div class="box" style="border-color:#4b0a87; width:50%">
                                            <p class="box_description" style="color:#4b0a87">
                                                <strong>Button(Add ShipItem)</strong><br>
                                                기본 컴포넌트 : Button
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                    
                                <div class="box" style="border-color:#2c53a9; width:100%;">
                                    <p class="box_description" style="color:#2c53a9">
                                        <strong>BottomMenuBar</strong><br>
                                        입력 받은 정보 전체를 계산, 저장, 초기화 하는 CTA 영역<br>
                                        FleetInput에서 전달한 함수를 받아서 사용
                                    </p>
                                </div>
                                    
                                <div class="box" style="border:1px dashed #2c53a9; width:100%;">
                                    <p class="box_description" style="color:#2c53a9">
                                        <strong>Popup(입력 데이터 json 저장, 적용 역할)</strong><br>
                                        현재 컨테이너에서 사용할 Popup
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul class="number_list">
                        <li>계산과 사용자 인터렉션에 관련된 <strong>비지니스 로직은 FleetInput, FleetOutput의 컨테이너에서만 관리</strong>하도록 설계<br>- 목적 : MVC 패턴의 Controller 역할</li>
                        <li>기본 컴포넌트는 재사용이 가능하도록 고정적이지 않고 유연한 속성을 갖도록 설계<br>- 목적 : 디자인 시스템으로 재사용성 강화</li>
                        <li>반복되는 디자인 요소의 표시 역할만 하는 디자인 컴포넌트 추가(CommonSection)<br>- 목적 : 디자인 시스템으로 불필요한 반복 제거</li>
                        <li>List와 ListItem은 컨테이너에서 전달한 데이터로 단순히 화면을 render하는 목적만을 위해 사용하도록 설계<br>- 목적 : 역할별로 화면 구성을 위한 컴포넌트를 분리하여 유지/보수 효율 증가</li>
                        <li>사용자 인터렉션이 일어나는 Fleet을 제외한 page의 다른 부분들은 서버 컴포넌트로 사용<br>- 목적 : <strong>검색 엔진 최적화 (SEO)</strong> 데이터 수집</li>
                    </ul>
                </div>
            </div>
            
            <div class="point_cont">
                <h2>데이터 중심의 기능 구현</h2>
                <img src="./images/work/work_11/e2.png" alt="">
                <div class="des">
                    <strong>각 객체가 독립적으로 능력치를 입력 받고 전체 계산 로직에 사용될 수 있어야함</strong>

                    <ul class="number_list">
                        <li>선박, 부품을 입력의 역할만을 위한 하나의 컴포넌트로 구성</li>
                        <li>전체적인 데이터를 관리하는 container 컴포넌트를 사용</li>
                        <li>저장되어야 하는 데이터(능력치)와 동적 변경이 필요한 항목(index, isUse 등)을 분리하여 type 설정</li>
                    </ul>
                </div>
                <div class="shoot">기존 DOM 중심으로 기능을 구현했던 토이프로젝트들과 다르게 데이터 방식이 훨씬 효율적이라고 느낌</div> 
            </div>
            
            <div class="point_cont">
                <h2>공통 컴포넌트 구성</h2>
                <div class="des">
                    <strong>Input, Checkbox, Select, CommonSection 등의 재사용 가능한 공통요소 작업 연습</strong>

                    <ul class="number_list">
                        <li>토스 레퍼런스 참고하여 구상</li>
                        <li>다른 페이지에서 사용하여 재사용성에 대한 구상</li>
                    </ul>
                </div>
            </div>
            
            <div class="point_cont">
                <h2>가능한 함대 구성(선박 7개 조합)과 합산, 평균 능력치 표시</h2>
                <img src="./images/work/work_11/e3.png" alt="">
                <div class="des">
                    <strong>N개의 선박중 최적의 평균 능력치를 가지는 7개의 선박을 가진 함대 조합을 추천하는 기능</strong>

                    <ul class="number_list">
                        <li>하나에 선박에는 장갑, 충각, 닻이 하나씩 장착되고 7개의 선박에 능력치의 평균을 계산</li>
                        <li>선박에 조합 알고리즘으로 모든 함대 경우의 수를 표시</li>
                        <li><strong>정렬 기능</strong></li>
                        <li><strong>리스트 표시 개수 설정 기능</strong></li>
                        <li>게임내에서 중요한 능력치인 내파, 돌파, 쇄빙에 대하여 <strong>최저 평균값</strong>을 만족할 수 있도록 필터링(예정)</li>
                    </ul>
                </div>
            </div>
            
            <div class="point_cont">
                <h2>부품의 수치 특성 표시, 정렬 기능</h2>
                <img src="./images/work/work_11/e4.png" alt="">
                <div class="des">
                    <strong>동일 부품군을 비교하여 최대 효율 표시</strong>

                    <ul class="number_list">
                        <li>부품은 개별 능력치에 맞게 정렬하여 isUse가 true인 순서대로 7개 사용. 순서는 정렬기능으로 사용자가 변경이 가능</li>
                    </ul>
                </div>
            </div>
            
            <div class="point_cont">
                <h2>입력값 저장 기능</h2>
                <img src="./images/work/work_11/e5.png" alt="">
                <div class="des">
                    <strong>입력 값이 많기 때문에 UX 편의성을 위한 저장 기능을 구현</strong>

                    <ul class="number_list">
                        <li>각 유저는 자신의 데이터만 사용하기 때문에 클라이언트 측에 데이터 저장</li>
                        <li>쿠키, 로컬 스토리지 사용시 제한 용량에 의한 저장이슈로 IndexedDB 사용</li>
                        <li>[사용자 요청]디바이스 변경이나 기록 삭제에 대비하여 Json 데이터 사용 가능하도록 추가</li>
                    </ul>
                </div>
            </div>
        </div>
      `,
      workImage: [],
      workTask: [
        "입력과 계산 기능을 가진 실제 서비스를 구현하여 Next.js 학습 목적",
        "동일 컴포넌트를 다른 부분에 최대한 재사용하여 기존 jQuery 토이프로젝트에 비해 코드 간단화 실현 목적",
        "유저들의 실질적인 사용 편의성이 개선 되었는지 확인",
      ],
    },
    {
      id: 13,
      title: "서비스 마이그레이션",
      kind: "개인 프로젝트",
      summary:
        "런칭 운영중인 게이미피케이션 서비스 마이그레이션. next.js 학습 목적",
      service:
        "실제 서비스 개발 단계부터 next.js 마이그레이션을 염두에 두고 작업하여 런칭. SPA 동작 원리로 구현",
      stack: [
        { tag: "next", text: "Next.js 14" },
        { tag: "fro", text: "typescript" },
        { tag: "pub", text: "Tailwind CSS" },
        { tag: "pub", text: "CSS" },
      ],
      link: "http://study-gamification-prod.lifebefore.co.kr",
      thumb: {
        image: "./images/work/work_13/bg-cn-m.png",
        style: "background:#ff5833;",
      },
      contentPage: `
          <div class="wk_content">
              <div class="gh_url">
                  Production. <a target="_blank" href="http://study-gamification-prod.lifebefore.co.kr/">http://study-gamification-prod.lifebefore.co.kr/</a>
                    <br>
                  Github. <a target="_blank" href="https://github.com/ohsssuk/study-gamification">https://github.com/ohsssuk/study-gamification</a>
                    <br>
                  Legacy Production. <a target="_blank" href="https://cookatmarket.com/ko/frequency/coonyang">https://cookatmarket.com/ko/frequency/coonyang</a>
              </div>
              
              <div class="point_cont">
                  <h2>프로젝트 개요</h2>
                  <div class="des">
                      <strong>자사 jQuery 기반의 서비스를 Next.14(React.18), Zustand, TypeScript를 사용하여 마이그레이션.</strong>
                      
                      <ul class="number_list">
                          <li>jQuery 개발에서도 서비스 특성상 SPA 동작이 적합</li>
                          <li>레거시 환경에서도 단계별 state 변경에 따라 view 부분이 렌더링 되도록 구성</li>
                          <li>MVC 패턴 사용</li>
                          <li>구분된 Controller를 Component로 이관</li>
                      </ul>
                  </div>
              </div>
              
              <div class="point_cont">
                  <h2>주요기능</h2>

                  <img src="./images/work/work_13/cn-flow.png" alt="">

                  <div class="des">
                      <ul class="number_list">
                          <li><strong>[스토리]</strong> : 첫 시작시 표시, 대화창을 통해 스토리 진행</li>
                          <li><strong>[닉네임 정하기]</strong> : 첫 시작시 표시, 등록된 닉네임을 로컬에 저장(원래 기능은 DB 저장)</li>
                          <li><strong>[튜토리얼]</strong> : 첫 시작시 표시, Main과 Touch에서 별개의 대화, 효과 필요</li>
                          <li><strong>[터치 미션]</strong> : 클릭 효과, 터치 횟수에 따라 대화창 갱신</li>
                          <li><strong>[메인]</strong> : 현재 미션 수행 횟수에 따라 이미지, 대화창 표시</li>
                          <li><strong>[보상 팝업]</strong> : 일정 횟수 완료시 팝업 형태로 노출, 슬롯 애니메이션</li>
                          <li><strong>[반복]</strong></li>
                      </ul>
                  </div>
              </div>
              
              <div class="point_cont">
                  <h2>구성 & 플로우</h2>
                  <img src="./images/work/work_13/structure.png" alt="">
                  <div class="des">
                      <ul class="number_list">
                          <li>useInfoStore 조회하여 미션 수행 기록이 있는지 확인</li>
                          <li>nowStep 의 상태 변경에 따라 전체적인 비지니스 로직을 실행</li>
                          <li>page 비지니스 로직은 Dialog 스토어 업데이트를 통한 대화창 진행과 콜백 함수로 구성</li>
                      </ul>
                  </div>
              </div>
              
              <div class="point_cont">
                  <h2>컴포넌트</h2>
                  <br>
                  <div class="des">
                      <strong>스타일 관련</strong>
                      <ul class="number_list">
                          <li>Wrap: 관련 컴포넌트를 감싸는 래퍼</li>
                          <li>View: 각 화면별 변동되는 스타일을 적용하기 위해 변동되는 하위 컴포넌트에 항상 포함</li>
                      </ul>
                  </div>
                  <br>
                  <div class="des">
                      <strong>Page 구성 요소</strong>
                      <ul class="number_list">
                          <li>Header: 현재 잼 레벨과 상태를 표시하는 헤더 컴포넌트</li>
                          <li>Dialog: 대화 시나리오를 렌더링하는 컴포넌트<br>-독립적으로 전역 상태에 의해 업데이트 되고 타이핑 효과와 콜백 실행</li>
                          <li>Loading: 진행중 로딩 표시 컴포넌트</li>
                          <li>InitLoading: 초기 1회 로딩 표시 컴포넌트</li>
                          <li>Touch: 터치 미션을 수행하는 컴포넌트<br>-클릭 이벤트는 자체적으로 제어하고 완료, 미완료의 여부만 상위 컴포넌트로 전달</li>
                          <li>RewardPopup: 미션 완료 후 보상을 표시하는 팝업 컴포넌트</li>
                          <li>Conversation: 대화 화면 컴포넌트</li>
                          <li>MakeAka: 닉네임 설정 화면</li>
                          <li>Main: 기본 화면</li>
                      </ul>
                  </div>
              </div>
              
              <div class="point_cont">
                  <h2>전역 상태</h2>
                  <br>
                  <div class="des">
                      <strong>useDialogStore : 대화창 관련 store</strong>
  
                      <ul class="number_list">
                          <li>시나리오(대화록) 변경시 컴포넌트 재생성하여 타이핑 효과 시작.</li>
                          <li>시나리오(대화록), 전체 완료 콜백, set, destory</li>
                      </ul>
                  </div>
                  <br>
                  <div class="des">
                      <strong>useInfoStore: 사용자 정보 store</strong>
  
                      <ul class="number_list">
                          <li>API로 가져온 기록을 저장, 관리(프로토타입에선 API 부분을 localStorage로 대체)</li>
                          <li>참여 여부, 닉네임, 보상 횟수, 누적 미션 완료 횟수 등</li>
                      </ul>
                  </div>
              </div>
              
          </div>
        `,
      workImage: [],
      workTask: [
        "react 동작 원리를 유사하게 구현하기 위해 레거시 개발 단계부터 구상",
        "마이그레이션 경험",
      ],
    },
    {
      id: 12,
      title: "영어 시험 기능",
      kind: "개인 스터디",
      summary: "영어 시험 기능 프로토타입 스터디<br>next.js 학습 목적",
      service:
        "zustand를 사용하여 전역상태 관리 개념과 로컬스토리지<br>학습을 위한 next.js 연습 과제 입니다.<br>사용자의 선택과 상태에 따라<br> 기능 수행을 목표",
      stack: [
        { tag: "next", text: "Next.js 14" },
        { tag: "next", text: "Zustand" },
        { tag: "fro", text: "typescript" },
        { tag: "pub", text: "Tailwind CSS" },
        { tag: "pub", text: "CSS" },
      ],
      link: "https://ohsssuk.github.io/study-en-test",
      thumb: { image: "./images/work/work_12/bg-ent.png" },
      contentPage: `
        <div class="wk_content">
            <div class="gh_url">
                Production. <a target="_blank" href="https://ohsssuk.github.io/study-en-test/">https://ohsssuk.github.io/study-en-test/</a>
                <br>
                Github. <a target="_blank" href="https://github.com/ohsssuk/study-en-test">https://github.com/ohsssuk/study-en-test</a>
            </div>
            
            <div class="point_cont">
                <h2>기능 구현</h2>
                <img src="./images/work/work_12/bg-ent.png" alt="">
                <div class="des">
                    <strong>next.js 학습용 문제풀이 프로토타입 기능 개발</strong>

                    <ul class="number_list">
                        <li>각 문제세트가 2~4개의 문제, 해설, 지문을 포함</li>
                        <li>각 문제는 2~4개의 객관식 선택지, 해설, 지문, 정답을 포함</li>
                        <li>사용자는 세트를 풀이하고 정답 확인시 해설을 볼 수 있음</li>
                        <li>테스트에 해당하는 모든 문제를 풀면 결과창에서 각 세트의 해설로 넘어갈 수 있음</li>
                        <li>모든 과정은 세트 풀이 단위로 로컬스토리지에 저장</li>
                        <li>각 세트별 소요시간을 저장</li>
                    </ul>
                </div>
                <div class="des" style="margin-top:50px;">
                    <strong>기능 수행</strong>

                    <ul class="number_list">
                        <li>테스트 시작</li>
                        <li>문제 세트 풀이(타이머 동작)</li>
                        <li>문세 세트 풀이 완료시 해설 표시(타이머 멈춤)</li>
                        <li>2, 3번을 반복하여 모든 테스트 완료(타이머 멈춤)</li>
                        <li>결과 확인</li>
                        <li>결과 확인 화면에서 각 문제 세트 풀이로 이동 가능</li>
                        <li>풀이 도중 이탈시 풀이중이던 기록 보존</li>
                    </ul>
                </div>
            </div>
            
            <div class="point_cont">
                <h2>구조</h2>
                <div class="des" style="display:flex; flex-direction:column; gap:40px;">
                    <div class="compo">
                        <h3>페이지 (Page)</h3>
                        <strong>App 라우팅 기준</strong>

                        <ul>
                            <li>라우팅</li>
                            <li>메타데이터 정보</li>
                            <li>하나 또는 여러 개의 Container를 조합하여 구성</li>
                        </ul>
                    </div>
                    
                    <div class="compo">
                        <h3>컨테이너 (Container)</h3>
                        <strong>독립적인 기능을 수행하는 페이지 모듈 단위</strong>

                        <ul>
                            <li>SSR, CSR 방식 분류</li>
                            <li>의미상의 기능 단위</li>
                            <li>상태에 따라 화면이 크게 바뀌는 경우 하위 Container로 분리하여 사용</li>
                            <li>재사용성 낮음</li>
                            <li>비즈니스 로직이 위치</li>
                        </ul>
                    </div>
                    
                    <div class="compo">
                        <h3>컴포넌트 (Component)</h3>
                        <ul>
                            <li>재사용성이 높은 UI 단위 요소(버튼, 아이콘, 로딩 등)</li>
                            <li>재사용성이 낮아도 반복되거나 의미상 분리되는 경우에 사용(QuestionList, Question, OptionList)</li>
                        </ul>
                    </div>
                    
                    <div class="compo">
                        <h3>데이터 구성</h3>
                        <ul>
                            <li>표시용 데이터</li>
                            <li class="in-li">
                                <ul>
                                    <li>모든 사용자에게 동일하게 보여지는 정적 데이터(API 가정)</li>
                                    <li>문제세트, 문제, 선택지, 해설 등</li>
                                </ul>
                            </li>
                            <li>사용자별 기록 데이터</li>
                            <li class="in-li">
                                <ul>
                                    <li>문제와 선택한 답</li>
                                    <li>문제세트별 경과시간(해당 기록이 완료 여부도 판단)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="compo">
                        <h3>페이지 표시 상태(enum)</h3>
                        <ul>
                            <li>테스트 시작 전</li>
                            <li>테스트 진행 중</li>
                            <li class="in-li">
                                <ul>
                                    <li>사용자가 세트 완료 기록이 있는 경우: 해설 상태</li>
                                    <li>사용자가 세트 완료 기록이 없는 경우: 문제 풀기 상태</li>
                                </ul>
                            </li>
                            <li>테스트 종료</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
      `,
      workImage: [],
      workTask: ["[객관식 시험]을 테마로 작업하며 next.js 학습"],
    },
    {
      id: 9,
      title: "쿠캣 영상장보기",
      kind: "숏폼 컨텐츠 서비스",
      summary:
        "인스타그램 릴스, 유튜브 숏츠, 틱톡처럼 짧은 길이의 영상 컨텐츠 제공",
      service:
        "이커머스 플랫폼 내의 숏폼 컨텐츠 서비스입니다.<br>S3 영상 변환을 제외한 모든 부분을 혼자 작업했습니다.<br>리소스 효율을 위해 m3u8 영상을 스트리밍 서비스로 제공합니다.<br>리소스 효율과 크롬 사운드 정책 대응을 위해 1player 방식을 사용합니다. 무한 스크롤 방식의 동적 로드를 사용합니다.",
      stack: [
        { tag: "bac", text: "PHP" },
        { tag: "bac", text: "CodeIgniter" },
        { tag: "db", text: "mariaDB" },
        { tag: "db", text: "Redis" },
        { tag: "db", text: "elasticSearch" },
        { tag: "fro", text: "javascript" },
        { tag: "fro", text: "jQuery" },
        { tag: "pub", text: "CSS" },
        { tag: "etc", text: "API" },
      ],
      link: "https://cookatmarket.com/ko/cookattv/list?inflow_type=tabbar",
      thumb: {
        image: "./images/work/work_7/1.png",
        imageStyle: "width: 90%;",
        style: "background:#ff5833;",
      },
      contentPage: `
        <div class="c_tv_content">
            <div class="point_cont">
                <h1>FrontEnd</h1>
                <h2>1Player 방식</h2>
                <img src="./images/work/work_7/2.png" alt="">
                <div class="des">
                    <strong>1개의 비디오. 사용자 인터렉션으로 컨텐츠가 이동할 때는 이미지만 사용. 이미지 슬라이드 완료시 영상과 이미지를 교체하여 재생.</strong>

                    <ul class="number_list">
                        <li>슬라이드 이동시 영상이 이미지로 대체되지만 0초대 이미지를 자동 사용하기 때문에 이질감이 없음.</li>
                        <li>하나의 비디오를 사용하기 때문에 리소스 누수가 없음.</li>
                        <li>하나의 비디오의 사운드 권한(Chrome 사운드 정책 이슈)을 받기 때문에 웹뷰 환경에서 다른 영상을 재생하더라도 사운드를 제공하고 자동재생 할 수 있음.</li>
                    </ul>
                </div>
            </div>
            <div class="point_cont">
                <h2>무한 스크롤 동적 로드</h2>
                <img src="./images/work/work_7/3.png" alt="">
                <div class="des">
                    <strong>현재 노출되는 요소만 로드하고 사용자 인터렉션에 따라 다음 요소를 동적 생성</strong>

                    <ul class="number_list">
                        <li>스와이프 이동 트랜지션 시간동안 다음 요소를 생성하고 비디오를 세팅하여 사용자의 대기시간을 최소화</li>
                        <li>컨텐츠 갯수가 계속해서 많아지는 서비스 특성상 반드시 필요</li>
                        <li>슬라이드 인터렉션 기능 사용을 위해 swiper.js 라이브러리 사용</li>
                    </ul>
                </div>
            </div>
            <div class="point_cont">
                <h2>스트리밍 서비스</h2>
                <div class="des">
                    <strong>m3u8 미디어 파일 사용</strong>

                    <ul class="number_list">
                        <li>고용량 영상 서비스 효율 증대</li>
                        <li>모든 디바이스, 브라우져 대응을 위해 videojs 라이브러리 사용</li>
                        <li>Admin 파일 업로드시 미디어 타입 자동 변환 / 0초대 이미지 자동 생성</li>
                    </ul>
                </div>
            </div>
            <div class="point_cont">
                <h1>BackEnd</h1>
                <h2>유저별 개인화 추천 정렬</h2>
                <img src="./images/work/work_7/4.png" alt="">
                <div class="des">
                    <strong>유저별로 최적화된 별개의 컨텐츠 순서 제공</strong>

                    <ul class="number_list">
                        <li>데이터 조회 효율을 위해 Redis Sorted Sets으로 KEY만 조회</li>
                        <li>사용자가 이미 시청한 영상 제외(ZDIFF로 캐시 관리)</li>
                        <li>실제 데이터 조회는 'User Personalization' KEY 캐시만 조회</li>
                        <li>Admin에서 'ALL' 리스트 동기화 기능 제공</li>
                    </ul>
                </div>
            </div>
            <div class="point_cont">
                <h2>데이터 ES 조회</h2>
                <img src="./images/work/work_7/5.png" alt="">
                <div class="des">
                    <strong>컨텐츠 정보를 가져올 때, mariaDB가 아닌 ElasticSearch에서 필요한 정보를 조회</strong>

                    <ul class="number_list">
                        <li>데이터 조회 효율 증대</li>
                        <li>Admin에서 ES 데이터를 실제 데이터와 동기화 하는 기능 제공</li>
                    </ul>
                </div>
            </div>
            <div class="point_cont">
                <h2>Admin 통계 조회</h2>
                <img src="./images/work/work_7/6.png" alt="">
                <div class="des">
                    <strong>사용자 인터렉션에 대한 로그 기록, 통계 조회</strong>

                    <ul class="number_list">
                        <li>버튼 클릭 기록</li>
                        <li>영상 넘김, 이탈율, 선호도 파악</li>
                        <li>각 영상별 시청 시간 기록</li>
                        <li>기간별, 이용 환경별 조회</li>
                        <li>유입 경로 조회</li>
                    </ul>
                </div>
            </div>
        </div>
      `,
      workTask: [
        "웹뷰 환경에서 여러 영상에 대해 Chrome 사운드 정책 대응",
        "고용량 영상 컨텐츠 리소스 효율 증대",
        "사용자의 액티브 이벤트(사운드 클릭, 다음 영상 넘기기 등) 로그 저장과 Admin 통계 조회",
        "시청자별 시청 영상 제외하고 개인화 영상 제공",
      ],
    },
    {
      id: 3,
      title: "삼국지 계산판",
      kind: "개인 프로젝트",
      summary: "모바일 게임 [삼국지 전략판]<br>데이터 정보, 편의 기능",
      service:
        "유저들에게 모바일 게임 [삼국지 전략판]에 대한 데이터와 편의 기능을 제공하는 사이트 입니다.<br>단순 계산 기능부터 좌표 계산, 유저 데이터 등록/삭제 Admin, 게임과 완전 동일한 모의전투를 시뮬레이션 할 수 있는 기능을 제공합니다.",
      stack: [
        { tag: "bac", text: "PHP" },
        { tag: "db", text: "mySql" },
        { tag: "fro", text: "javascript" },
        { tag: "fro", text: "jQuery" },
        { tag: "pub", text: "CSS" },
      ],
      link: "http://www.lifebefore.co.kr/samgepan/test_simulation.php",
      thumb: {
        image: "./images/main/samgepan_main.png",
        style: "background: radial-gradient(circle, #bf8f73, #624040)",
        imageStyle: "height:70%; width:auto;",
      },
      contentPage: `
        <div class="wk_content">
            <div class="point_cont">
                <h2>필요 자원 대기시간 계산</h2>
                <img src="./images/work/work_3/edit_1.png" alt="">
                <div class="des">
                    <strong>종류,단계별로 다른 필요 자원 데이터를 정리하고 시간당 증가량을 입력하여 최소 대기시간 계산</strong>

                    <ul class="number_list">
                        <li>별개의 증가량을 가지는 자원중 가장 오래 걸리는 자원을 파악하여 최소 대기 시간 계산</li>
                        <li>대기 시간 동안의 나머지 자원 증가량을 파악하여 사용 가능한 잉여 자원 수치 파악</li>
                    </ul>
                </div>
            </div>
            <div class="point_cont">
                <h2>모의 전투 시뮬레이션</h2>
                <img src="./images/work/work_3/edit_2.png" alt="">
                <div class="des">
                    <strong>인게임과 완전히 동일한 로직의 전투 방식과 공식 구현</strong>
                </div>
                <br>
                <img src="./images/work/work_3/edit_3.png" alt="">
                <img src="./images/work/work_3/edit_5.png" alt="">
                <div class="des">
                    <ul class="number_list">
                        <li>
                            조건.<br>
                            - 계산 수치에 영향을 주는 병력, 속성 정보, 피해증감 보너스는 매 턴마다 유동적으로 변동<br>
                            - 전법(스킬)은 각 캐릭터가 최대 3개까지 가지고 있음<br>
                            - 발동 확률은 매턴 난수 값<br>
                            - 각 효과가 타입별로 상이하고 대상이 되는 조건과 대상의 수가 다름<br>
                            - 이 밖에 조건들 인게임과 동일하게 환경 구성<br>
                        </li>
                        <li>로직 대응을 위해 1:N 구조의 데이터 설계</li>
                        <li>유저가 등록가능한 FORM과 화면 설계</li>
                        <li>결과 로직 구현</li>
                        <li><a href="http://www.lifebefore.co.kr/samgepan/test_simulation.php" target="_blank">모의 전투 테스트 페이지</a></li>
                    </ul>
                </div>
            </div>
            <div class="point_cont">
                <h2>좌표 계산 기능</h2>
                <img src="./images/work/work_3/edit_4.png" alt="">
                <img src="./images/work/work_3/4.PNG" alt="">
                <div class="des">
                    <strong>좌표의 분포를 고르게 하기 위해 이미 등록된 좌표의 일정범위는 등록할 수 없는 관리 시스템 개발</strong>

                    <ul class="number_list">
                        <li>관리자가 좌표 데이터를 등록/삭제 가능</li>
                        <li>등록할 좌표를 검색하여 이미 등록된 좌표의 범위내인지 검사 가능</li>
                        <li>좌표 범위 조건 : 등록 좌표로부터 사방 7칸</li>
                    </ul>
                </div>
            </div>
        </div>
      `,
      workImage: [
        "./images/work/work_3/1.PNG",
        "./images/work/work_3/2.PNG",
        "./images/work/work_3/3.PNG",
        "./images/work/work_3/4.PNG",
        "./images/work/work_3/5.PNG",
        "./images/work/work_3/6.PNG",
        "./images/work/work_3/7.PNG",
        "./images/work/work_3/8.PNG",
        "./images/work/work_3/9.PNG",
        "./images/work/work_3/10.PNG",
        "./images/work/work_3/11.PNG",
      ],
      workTask: [
        "사용자 유입 유도",
        "단순 계산의 유저 편의성을 개선",
        "<strong>게임의 전투를 모의전투 시뮬레이션으로 동일하게 구현</strong>",
        "모의 전투 상황별 수치 계산, 동적 변동값, 환경 요소, 지속형 수치, 특수 변수등을 모두 근접하게 구현, 동일 환경이여도 확률 변수로 다른 결과 도출(게임과 동일)",
        "사용자가 복잡한 데이터를 등록할 수 있도록 세분화된 입력 기능",
        "사용자가 데이터 관리 페이지",
        "모바일 유저를 위해 반응형 대응",
      ],
    },
    {
      id: 1,
      title: "라이프비포어",
      kind: "개인 프로젝트",
      summary: "모바일 게임 [라이프애프터]<br>데이터 정보, 편의 기능",
      service:
        "유저들에게 모바일 게임 [라이프애프터]에 대한 데이터와 편의 기능을 제공하는 사이트 입니다.<br>트리형 조합이 복잡하여 계산하기 어려운 부분에 대해 편의성을 제공합니다.<br>유용한 정보를 유저가 등록하고 조회할 수 있습니다.<br>게임 내 시스템을 분석하여 관련 정보를 제공합니다.",
      stack: [
        { tag: "bac", text: "PHP" },
        { tag: "db", text: "mySql" },
        { tag: "fro", text: "javascript" },
        { tag: "fro", text: "jQuery" },
        { tag: "pub", text: "CSS" },
      ],
      contentPage: `
        <div class="wk_content">
            <div class="point_cont">
                <h2>Tree형 조합 구조 계산</h2>
                <img src="./images/work/work_1/edit_3.png" alt="">
                <div class="des">
                    <strong>각 단계별 필요 수량과 가격을 계산하는 기능</strong>

                    <ul class="number_list">
                        <li>이전 Tier의 갯수만큼 다음 Tier에 필요하므로 단계가 복잡해질 수록 수량과 가격 계산이 어려워짐</li>
                        <li>계산 함수를 개발하여 각 case별 결과를 도출(예: case 1은 전부 하위티어 재료를 사용했지만, case 2에서 하위 재료를 A 2Tier로 교체하여 계산할 수 있음)</li>
                        <li>함수 구조 하나로 단계에 관계 없이 모든 종류의 tree 형태에 대응 가능</li>
                    </ul>
                </div>
            </div>
            <div class="point_cont">
                <h2>맵 데이터 분류/저장</h2>
                <img src="./images/work/work_1/edit_1.png" alt="">
                <div class="des">
                    <strong>각 구간별 정보를 정리하여 사용자들이 보기 편하게 정리</strong>
                </div>
            </div>
            <div class="point_cont">
                <h2>사용자 등록 폼</h2>
                <img src="./images/work/work_1/edit_2.png" alt="">
                <div class="des">
                    <strong>사용자가 직접 원하는 정보를 저장할 수 있음</strong>

                    <ul class="number_list">
                        <li>ckEditor를 사용하여 필요한 정보를 사용자가 직접 편집 가능</li>
                        <li>맵을 클릭하여 원하는 위치에 포인트를 생성하여 저장 가능</li>
                    </ul>
                </div>
            </div>
            <div class="point_cont">
                <h2>데이터 목록 관리</h2>
                <img src="./images/work/work_1/edit_4.png" alt="">
                <div class="des">
                    <strong>모든 필요 재료의 단가를 데이터화 하여 관리</strong>

                    <ul class="number_list">
                        <li>목록표를 나의 리스트로 복사하여 편집 가능</li>
                        <li>목록 가격을 아이템 조합 계산기로 가져올 수 있음</li>
                    </ul>
                </div>
            </div>
        </div>
      `,
      link: "http://www.lifebefore.co.kr",
      thumb: {
        image: "./images/main/lifebefore_main.png",
        style: "background:linear-gradient(to top right,#324554,#110e25);",
      },
      workImage: [
        "./images/work/work_1/1.PNG",
        "./images/work/work_1/2.PNG",
        "./images/work/work_1/3.PNG",
        "./images/work/work_1/7.PNG",
        "./images/work/work_1/4.PNG",
        "./images/work/work_1/5.PNG",
        "./images/work/work_1/6.PNG",
      ],
      workTask: [
        "사용자 유입 유도",
        "복잡한 tree구조의 조합식의 가격 정보와 필요 갯수를 최대한 보기 편하게 정리",
        "유저 편의성을 위해 사용자가 제어할 수 있는 선택지를 최대한 제공",
        "보안과 관련 없는 기능이므로 js에서 연산 처리",
        "유저들이 직접 위치 포인트를 저장할 수 있는 기능 제공(ckEditor 사용)",
        "모바일 유저를 위해 반응형 대응",
      ],
    },
    {
      id: 2,
      title: "라오킹 센터",
      kind: "개인 프로젝트",
      summary: "모바일 게임 [라이즈 오브 킹덤즈]<br>데이터 정보, 편의 기능",
      service:
        "유저들에게 모바일 게임 [라이즈 오브 킹덤즈]에 대한 데이터와 편의 기능을 제공하는 사이트 입니다.<br>트리형 구조의 데이터를 유저가 보기 편하게 정리 하여 웹 화면으로 구현했습니다.<br>단순 계산기의 사용자 편의성을 높혔습니다.<br>게임 환경과 완전히 동일한 시스템의 특성 트리를 미리 구성할 수 있습니다.",
      stack: [
        { tag: "bac", text: "PHP" },
        { tag: "db", text: "mySql" },
        { tag: "fro", text: "javascript" },
        { tag: "fro", text: "jQuery" },
        { tag: "pub", text: "CSS" },
      ],
      contentPage: `
        <div class="wk_content">
            <div class="point_cont">
                <h2>Tree형 구조 계산</h2>
                <img src="./images/work/work_2/edit_1.png" alt="">
                <div class="des">
                    <strong>각 단계별 요구 사항, 잠금 해제 조건, 필요 비용을 계산하는 기능</strong>

                    <ul class="number_list">
                        <li>비용의 총량을 계산하기 위해 현재 단계의 필요량이 아닌 요구 사항, 잠금 해제 조건 시에 필요한 자원을 모두 계산</li>
                        <li>단계별, 종류별 데이터 정리하여 화면 설계</li>
                        <li>함수 구조 하나로 단계에 관계 없이 모든 종류의 tree 형태 조건에 대응 가능</li>
                    </ul>
                </div>
            </div>
            <div class="point_cont">
                <h2>단순 계산 편의성 증대</h2>
                <img src="./images/work/work_2/edit_2.png" alt="">
                <div class="des">
                    <strong>인게임 내 단위에 맞추어 유저 사용 편의성 증대 목적</strong>
                </div>
            </div>
            <div class="point_cont">
                <h2>Tree형 구조 계산</h2>
                <img src="./images/work/work_2/edit_3.png" alt="">
                <div class="des">
                    <ul class="number_list">
                        <li>
                            조건.<br>
                            - A가 3/3일 때(선행 조건), B 습득 가능<br>
                            - B가 3/3일 때(선행 조건), C 습득 가능<br>
                            - B가 3/3일 때(선행 조건), F 습득 가능<br>
                            - F가 5/5일 때(선행 조건), G 습득 가능<br>
                            - C가 5/5이면서 G가 3/3이여야(동시 선행 조건), E 습득 가능<br>
                        </li>
                        <li>각 단계별로 다른 필요 포인트와 선행 조건(N개) 검사 필요</li>
                    </ul>
                </div>
            </div>
            <div class="point_cont">
                <img src="./images/work/work_2/edit_4.png" alt="">
                <div class="des">
                    <strong>사용자가 필요한 구성을 인게임과 동일한 조건에서 미리 구성할 수 있는 기능</strong>

                    <ul class="number_list">
                        <li>필요한 선행 조건이 만족된 경우 다음 단계 활성화</li>
                        <li>현재 습득 불가능한 단계 클릭 시, 필요 선행 조건을 표시</li>
                        <li>전체 가용 포인트 갯수 검사</li>
                        <li>리스트 저장/조회 기능</li>
                    </ul>
                </div>
            </div>
        </div>
      `,
      link: "http://www.lifebefore.co.kr/rok/townhall.php",
      thumb: {
        image: "./images/main/rokcenter_main.png",
        style: "background:#e7cf78;",
      },
      workImage: [
        "./images/work/work_2/1.png",
        "./images/work/work_2/2.PNG",
        "./images/work/work_2/3.PNG",
        "./images/work/work_2/4.PNG",
        "./images/work/work_2/5.PNG",
        "./images/work/work_2/6.PNG",
        "./images/work/work_2/7.PNG",
        "./images/work/work_2/8.PNG",
      ],
      workTask: [
        "사용자 유입 유도",
        "복잡한 tree구조의 조합식의 필요 재원을 정리하여 한 눈에 볼 수 있도록 구현",
        "단순 계산의 유저 편의성을 개선",
        "<strong>특성(스킬) 구성 환경을 게임과 완전 동일하게 구현</strong>",
        "특성 구성시 반드시 필요한 선행 특성 없이는 다음 특성을 배울 수 없도록 구현",
        "현재 배울 수 없는 특성 클릭시 필요 선행 특성을 표시하도록 구현",
        "특성 세팅을 사용자가 저장, 조회, 수정, 추천 할 수 있는 기능",
        "모바일 유저를 위해 반응형 대응",
      ],
    },
    {
      id: 10,
      title: "언던 유틸",
      kind: "개인 프로젝트",
      summary: "모바일 게임 [언던]<br>데이터 정보, 편의 기능",
      service:
        "유저들에게 모바일 게임 [언던]에 대한 데이터와 편의 기능을 제공하는 사이트 입니다.<br>트리형 조합이 복잡하여 계산하기 어려운 부분에 대해 편의성을 제공합니다.<br>유용한 정보를 유저가 등록하고 조회할 수 있습니다.<br>게임 내 시스템을 분석하여 관련 정보를 제공합니다.",
      stack: [
        { tag: "bac", text: "PHP" },
        { tag: "db", text: "mySql" },
        { tag: "fro", text: "javascript" },
        { tag: "fro", text: "jQuery" },
        { tag: "pub", text: "CSS" },
      ],
      contentPage: false,
      link: "http://www.lifebefore.co.kr/undawn_util",
      thumb: {
        image: "./images/undawn_bg.png",
        imageStyle: "height:100%; width:100%; object-fit:cover;",
      },
      workImage: [
        "./images/work/work_10/1.png",
        "./images/work/work_10/2.png",
        "./images/work/work_10/3.png",
        "./images/work/work_10/4.png",
      ],
      workTask: [
        "사용자 유입 유도",
        "복잡한 tree구조의 조합식의 가격 정보와 필요 갯수를 최대한 보기 편하게 정리",
        "모바일 유저를 위해 반응형 대응",
      ],
    },
    {
      id: 4,
      title: "알비온넷",
      kind: "개인 프로젝트",
      summary: "온라인 게임 [알비온]<br>데이터 정보, 편의 기능",
      service:
        "유저들에게 온라인 게임 [알비온]에 대한 데이터와 편의 기능을 제공하는 사이트 입니다.<br>단순 계산 기능과 API를 통한 데이터 검색 기능을 제공합니다.",
      stack: [
        { tag: "fro", text: "javascript" },
        { tag: "fro", text: "jQuery" },
        { tag: "pub", text: "CSS" },
        { tag: "etc", text: "API" },
      ],
      link: "http://www.lifebefore.co.kr/albionnet/index.php",
      thumb: {
        image: "./images/work/work_4/1.PNG",
        imageStyle: " width:60%; height:100%; object-fit:cover;",
        style: "background:#774a23;",
      },
      contentPage: `
        <div class="wk_content">
            <div class="point_cont">
                <h2>API를 통한 편의기능 제공</h2>
                <img src="./images/work/work_4/edit_1.png" alt="">
                <div class="des">
                    <strong>종류,단계별로 다른 필요 자원 데이터를 정리하고 시간당 증가량을 입력하여 최소 대기시간 계산</strong>

                    <ul class="number_list">
                        <li>PC유저의 간단한 사용이 용이하도록 반응형 구조</li>
                        <li>API로 검색된 데이터를 웹화면 구현</li>
                        <li>아이템 키워드로 검색 기능</li>
                        <li>조합 아이템의 계산 편의성을 높히기 위한 UX 구현</li>
                        <li>유저를 키워드로 검색하고 조건에 맞게 웹화면으로 출력</li>
                    </ul>
                </div>
            </div>
        </div>
      `,
      workImage: [
        "./images/work/work_4/1.PNG",
        "./images/work/work_4/2.PNG",
        "./images/work/work_4/3.PNG",
        "./images/work/work_4/4.PNG",
        "./images/work/work_4/5.PNG",
      ],
      workTask: [
        "사용자 유입 유도",
        "단순 계산의 유저 편의성을 개선",
        "공개 API를 이용하여 유저, 아이템 시세 검색 기능",
        "모바일 유저를 위해 반응형 대응",
      ],
    },
  ];

  constructor() {}

  main() {
    const $view = $("#project_list_dymamic");

    $view.html(this.data.map((item) => this.mainItemHtml(item)).join(""));
  }

  detail() {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    const id = Number(params.get("id"));

    const item = this.data.find((item) => item.id === id);

    $("#project_detail_dymamic").html(this.detailItemHtml(item));

    $("#detail_swiper_dynamic").html(this.detailSwiperHtml(item.workImage));

    workSwiper.init();
  }

  mainItemHtml(item) {
    return `
          <li class="project_list_${item.id}">
              <a ${item.direct ? `target="_blank"` : ``} href="${
      item.direct ? item.link : `./layout.html?id=${item.id}`
    }" class="thumb"
                  style="${item.thumb.style || ""}">
                  <img 
                      src="${item.thumb.image}" 
                      alt="${item.title}"
                      style="${item.thumb.imageStyle || ""}"
                  >
              </a>
              <div class="info">
                  <div class="kind">${item.kind}</div>
                  <div class="title">${item.title}</div>
                  <div class="description">${item.summary}</div>
                  <div class="stack">
                      ${
                        item.stack && item.stack.length > 0
                          ? item.stack
                              .map(
                                (sticker) =>
                                  `<span class="sticker ${sticker.tag}">${sticker.text}</span>`
                              )
                              .join("")
                          : ""
                      }
                  </div>
                  <div class="bot">
                      <a ${
                        item.direct ? `target="_blank"` : ``
                      } class="bot_btn" href="${
      item.direct ? item.link : `./layout.html?id=${item.id}`
    }">자세히 보기</a>
                  </div>
              </div>
          </li>
      `;
  }

  detailItemHtml(workData) {
    return `
        <section class="work_layout m_t_40">
            <div class="kind_wrap">${workData.kind}</div>
            <div class="title_wrap">
                <h1>${workData.title}</h1>
                <p>${workData.service}</p>
            </div>
            <div class="etc_wrap">
                <a target="_blank" class="site_link" href="${
                  workData.link
                }">사이트 이동</a>
                <div class="stack m_t_0">
                    ${workData.stack
                      .map(
                        (sticker) => `
                        <span class="sticker ${sticker.tag}">${sticker.text}</span>
                    `
                      )
                      .join("")}
                </div>
            </div>
        </section>
        <section class="work_layout">
            <div class="detail_wrap">
                <div class="detail_head">상세내용</div>
                ${
                  workData.workImage && workData.workImage.length > 0
                    ? `
                    <ul class="detail_photo">
                        ${workData.workImage
                          .map(
                            (image) => `
                            <li onclick="workSwiper.open(this);"><img src="${image}" /></li>
                        `
                          )
                          .join("")}
                    </ul>
                    `
                    : ""
                }
                ${workData.contentPage ? workData.contentPage : ""}
            </div>
        </section>
        ${
          workData.workTask.length > 0
            ? `
        <section class="work_layout">
            <div class="detail_wrap">
                <div class="detail_head">TASK</div>
                <ul class="detail_task">
                    ${workData.workTask
                      .map(
                        (task) => `
                        <li>${task}</li>
                    `
                      )
                      .join("")}
                </ul>
            </div>
        </section>
        `
            : ""
        }
        `;
  }

  detailSwiperHtml(workImage) {
    if (!workImage || workImage.length === 0) {
      return ``;
    }

    return `
        ${workImage
          .map(
            (image) => `
                <div class="swiper-slide">
                    <div class="img-wrap">
                        <img class="" src="${image}" />
                    </div>
                </div>
            `
          )
          .join("")}`;
  }
}

const workSwiper = {
  swiper: null,
  init: function () {
    workSwiper.swiper = new Swiper("#work_image_swiper", {
      speed: 400,
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      threshold: 10,
    });
  },
  open: function (el) {
    workSwiper.swiper.slideTo($(el).index(), 0);
    $(".swiper-container-wrap").addClass("on");
  },
  close: function (el) {
    $(".swiper-container-wrap").removeClass("on");
  },
};
