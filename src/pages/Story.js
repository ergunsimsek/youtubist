import React from 'react'
import Header from '../components/Header'
import StoryImg from '../assets/img/story.jpeg'
import Layout from '../components/Layout'

const StoryEn = () => {
    return (
        <div className="hero-left work-content">
            <h1>Our Story</h1>
            <p>
                We are Turkey's first and only, forward-visionary YouTube-based Company. We provide YouTube focused
                services only.
            </p>
            <p>
                We also support Social Media and Advertising Agencies to offer their customers advanced YouTube service.
            </p>
            <p>
                You can reach us by <a href="mailto:hello@youtubist.co">hello@youtubist.co</a> or Instagram DM's.
            </p>
            <p className="hidden-mobile">©{new Date().getFullYear()} YouTubist.Co | YPP. YouTube Partner Program.</p>
        </div>
    )
}

const StoryTr = () => {
    return (
        <div className="hero-left work-content">
            <h1>Bizim hikayemiz</h1>
            <p>
                Türkiye’nin ileri vizyoner, ilk ve tek YouTube tabanlı şirketiyiz. Sadece YouTube odaklı hizmet
                sunmaktayız.
            </p>
            <p>
                Sosyal Medya ve Reklam Ajanslarına da kendi müşterilerine gelişmiş YouTube servisi sunmaları için destek
                vermekteyiz.
            </p>
            <p>
                <a href="mailto:hello@youtubist.co">hello@youtubist.co</a> ya da Instagram DM atabilirsiniz.
            </p>
            <p>©{new Date().getFullYear()} YouTubist.Co | YPP. YouTube Partner Program.</p>
        </div>
    )
}

class Story extends React.Component {
    render() {
        return (
            <>
                <Header
                    lang={this.props.lang}
                    langTranslatorEn={this.props.langTranslatorEn}
                    langTranslatorTr={this.props.langTranslatorTr}
                />
                <Layout>
                    <div className="col-md-6">{this.props.lang === 'en' ? <StoryEn /> : <StoryTr />}</div>
                    <div className="col-md-6">
                        <div className="hero-right work-image">
                            <img src={StoryImg} alt="service" />
                        </div>
                        <p className="show-mobile">
                            ©{new Date().getFullYear()} YouTubist.Co | YPP. YouTube Partner Program.
                        </p>
                    </div>
                </Layout>
            </>
        )
    }
}

export default Story