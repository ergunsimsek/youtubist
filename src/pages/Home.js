import React from 'react'
import Main from '../components/Main'
import Header from '../components/Header'


const HomeEn = () => {
    return (
        <div className="hero-text">
            <h1>YouTuber Mentoring and Media Company</h1>
            <p>
                With own-developed Algorithms, proudly we are Turkey's first YouTube-based new-generation Media Company.
                We make your videos visible with our forward-visionary team.
            </p>
            <p>
                Business Inquries: <a href="mailto: hello@youtubist.co">hello@youtubist.co</a>
            </p>
        </div>
    )
}

const HomeTr = () => {
    return (
        <div className="hero-text">
            <h1>YouTuber Mentörlük ve Medya Şirketi</h1>
            <p>
                Kendi geliştirdiğimiz Algoritmalar ile Türkiye'nin ilk YouTube tabanlı Yeni-Nesil Medya şirketiyiz.
                İleri-vizyoner ekibimiz ile videolarınızı görünür kılıyoruz.
            </p>
            <p>
                Business Inquries: <a href="mailto: hello@youtubist.co">hello@youtubist.co</a>
            </p>
        </div>
    )
}

class Home extends React.Component {
    render() {
        return (
            <>
                <Header
                    lang={this.props.lang}
                    langTranslatorEn={this.props.langTranslatorEn}
                    langTranslatorTr={this.props.langTranslatorTr}
                />
                <Main>{this.props.lang === 'en' ? <HomeEn /> : <HomeTr />}</Main>
            </>
        )
    }
}

export default Home