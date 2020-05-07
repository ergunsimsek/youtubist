import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import ServiceImg from '../assets/img/service.jpeg'

const WorkEn = () => {
    return (
        <div className="hero-left work-content">
            <h1>Our Work</h1>
            <p>
                We don't have a magic spell to get you to 10 Million subscribers in 1 day or to get you on YouTube
                trending. But we promise to achieve the goals we set with the software and algorithm we have developed.
            </p>
            <p>Our services:</p>
            <ul>
                <li>- Mentorship and Consulting</li>
                <li>- Channel Management</li>
                <li>- Content production, Integration and Licensing</li>
                <li>- Video Analysis</li>
                <li>- Launch for your production and YouTube channel.</li>
                <li>- Channel Installation or Renovation consisting of 21 separate processes</li>
                <li>- Competitor analysis</li>
            </ul>
        </div>
    )
}

const WorkTr = () => {
    return (
        <div className="hero-left work-content">
            <h1>Projeler</h1>
            <p>
                Sizi 1 günde 10 Milyon aboneye ulaştırmak veya top trenlere girdirmek için sihirli bir büyümüz yok. Ama
                kendi geliştirdiğimiz yazılım ve algoritma ile belirlediğimiz hedeflere ulaşmada söz veriyoruz.
            </p>
            <p>Hizmetlerimiz:</p>
            <ul>
                <li>- Mentörlük ve Danışmanlık</li>
                <li>- Kanal Yönetimi</li>
                <li>- İçerik üretimi, Entegrasyon ve Lisanslama</li>
                <li>- Video Analizi</li>
                <li>- Prodüksiyon ve YouTube kanalınız için lansman.</li>
                <li>- 21 ayrı işlemden oluşan Kanal Kurulumu veya Yenileme</li>
                <li>- Rakip Analizi</li>
            </ul>
        </div>
    )
}

class OurWork extends React.Component{
    render() {
        return (
            <>
                <Header
                    lang={this.props.lang}
                    langTranslatorEn={this.props.langTranslatorEn}
                    langTranslatorTr={this.props.langTranslatorTr}
                />
                <Layout>
                    <div className="col-md-6">{this.props.lang === 'en' ? <WorkEn /> : <WorkTr />}</div>
                    <div className="col-md-6">
                        <div className="hero-right work-image">
                            <img src={ServiceImg} alt="service image" />
                        </div>
                    </div>
                </Layout>
            </>
        )
    }
}
export default OurWork
