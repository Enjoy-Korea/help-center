import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import HomepageFeatures, { FeatureItem } from '@site/src/components/HomepageFeatures';

const HostRegistrationBenefits: FeatureItem[] = [
    {
        title: "💻 호스트 등록 대행",
        description: <>간편하게 호스트 등록<br />모든 과정을 대신 처리해드립니다.</>,
        img: "/img/host_event/host4.jpg"
    },
    {
        title: "🆙 상위 노출",
        description: <>더 많은 게스트를 만나보세요!<br />숙소를 상위에 노출시켜드립니다.</>,
        img: "/img/host_event/host3.jpg"
    },
    {
        title: "🤝 무료 컨설팅",
        description: <>전문가의 맞춤 컨설팅으로<br />성공적인 호스팅을 지원합니다.</>,
        img: "/img/host_event/host5.jpg"
    },
    {
        title: "🏘️ 숙소 사진 촬영 ",
        description: <>프로페셔널한 사진으로<br />숙소의 매력을 한층 더 높이세요!<br /><span style={{ color: "gray", fontSize: "0.7rem" }}>* 선정 시 제공</span></>,
        img: "/img/host_event/host8.jpg"
    },
]
const CompetitiveAdvantage: FeatureItem[] = [
    {
        title: "💻 NO 호스트 수수료",
        description: <>숙소 운영, 비용 부담 없이 수익을 최대화하세요!</>,
        img: "/img/host_event/host1.jpg"
    },
    {
        title: "🆙 외국인 예약율 90%이상",
        description: <>글로벌 고객에게 최적화된 플랫폼으로<br />외국인 예약율이 높습니다.</>,
        img: "/img/host_event/host2.jpg"
    },
    {
        title: "🤝 중장기 예약 위주",
        description: <>안정적인 수익을 보장하는<br />중장기 (1달 이상, 평균 56박) 예약 중심 운영.</>,
        img: "/img/host_event/host7.jpg"
    },
    {
        title: "🏘️ 외국 게스트 친화적인 서비스 제공",
        description: <>영어 상담 및 문서 발급 지원 등<br />외국인 게스트를 위한<br />최적의 서비스로 편리한 호스팅을 지원합니다.</>,
        img: "/img/host_event/host6.jpg"
    },
]
const HostMilestones: FeatureItem[] = [
    {
        title: "48시간",
        description: <>지점 등록 후 게스트 예약 요청까지<br />걸린 최단 시간</>
    },
    {
        title: "389 Nights",
        description: <>최장 게스트 숙박일 </>
    },
    {
        title: "17 Days",
        description: <>모든 보유 지점의<br />Sold Out까지 걸린 시간</>
    },
]

// Produced with chatgpt
export default function Host(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <div style={{ backgroundColor: "black" }}>
            <nav className={styles.navbar}>
                <img src="/img/logo_dark.svg" alt="Logo" className="logo" />
            </nav>
            <section>
                <div className={styles.centerContainer}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>호스트 등록 이벤트</h1>
                        {/* <h1 className={styles.title}>호스트 등록 이벤트</h1> */}
                        <p className={styles.subtitle}>서울 전역 호스트 9/30까지</p>
                        <div className="container">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSffXoKk7xgAOh3ZxFwMyWCjEZmSIv2AHDqgcm1XuueZiQU6QA/viewform"><button className={styles.button} style={{ margin: "10px", backgroundColor: "#4484F1", color: "#FFF" }}>호스트 신청하러 가기</button></a>
                            <a href="https://stay-enkor.channel.io/"><button className={styles.button} style={{ margin: "10px", backgroundColor: "#FFF" }}>호스트 가입 / 상담</button></a>
                        </div>
                    </div>
                </div>
            </section >
            <section className={styles.rowContainer}>
                <h1>호스트 등록 혜택</h1>
                <HomepageFeatures features={HostRegistrationBenefits} />
            </section>
            <section className={styles.rowContainer}>
                <h1>호스트의 장점</h1>
                <HomepageFeatures features={CompetitiveAdvantage} />
            </section>
            <section className={styles.rowContainer}>
                <h1>호스트들의 기록</h1>
                <HomepageFeatures features={HostMilestones} />
            </section>
            <section className={styles.rowContainer}>
                <h1>🙋 자주 묻는 질문</h1>
                <h3>혹시 호스트가 되면 수수료를 지불하나요?</h3>
                <p>Enkorstay는 호스트로부터 수수료를 받지 않습니다.</p>
                <h3>호스트가 되기 위한 별도의 조건이 있나요?</h3>
                <p>별도의 사업자 등록 및 서류 제출없이 누구나 단기 임대가 가능합니다.</p>
                <h3>Enkorstay는 어떤 서비스 인가요?</h3>
                <p>Enkorstay는 외국인들이 쉽게 예약 가능한 단기임대 주거플랫폼입니다.<br />호스트(임대인)은 간편하게 방 정보를 등록하고, 게스트(임차인)은 매물을 보고 임대 및 예약 문의를 통해 호스트와 직접 소통하게 됩니다.</p>
                <h3>세입자도 호스트가 될 수 있나요?</h3>
                <p>물론이죠! 다만 사전에 실제 소유자에게 전대 동의를 받으셔야 합니다.</p>
                <h3>호스트 등록에 도움을 받을 수 있나요?</h3>
                <p>물론이죠! 요청해주신다면, 담당자가 직접 숙소 등록을 도와드리고 있습니다.</p>
                <h3>예약자 평균 예약 일은 얼마나 되나요?</h3>
                <p>게스트 평균은 56박입니다.</p>
                <h3>예약 관리와 결제는 어떻게 이루어지나요?</h3>
                <p>게스트가 예약 및 결제를 완료하면 호스트에게 예약 요청이 갑니다. 호스트는 지점 운영 상황에 따라 예약을 승인 또는 거절 (보통 24시간 이내 답변) 할 수 있습니다. 예약 승인시 결제 대금이 정상 승인되며 예약 거절시 결제 대금은 환불됩니다.</p>
                <h3>숙소가 잘 등록되었는지 잘 모르겠어요.</h3>
                <p>숙소 등록을 한 후에도 Enkorstay에서 지속적인 관리가 되며, 무료 컨설팅을 통해 더욱 효과적인 호스팅을 진행할 수 있습니다.</p>
            </section>
            <section>
                <div className={styles.centerContainer} style={{ height: '30vh' }}>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSffXoKk7xgAOh3ZxFwMyWCjEZmSIv2AHDqgcm1XuueZiQU6QA/viewform"><button className={styles.button} style={{ margin: "10px", backgroundColor: "#4484F1", color: "#FFF" }}>호스트 신청하러 가기</button></a>
                    <a href="https://stay-enkor.channel.io/"><button className={styles.button} style={{ margin: "10px", backgroundColor: "#FFF" }}>호스트 가입 / 상담</button></a>
                </div>
            </section >
        </div >
    );
}
