import './styles/Home.css'
import {TitleHome} from "../components/HomeComponent/titleHome/TitleHome.tsx";
import {TransactionTable} from "../components/HomeComponent/transactionTable/TransactionTable.tsx";
import {Profile} from "../components/HomeComponent/profile/Profile.tsx";
// import {Info} from "../components/HomeComponent/info/Info.tsx";

export default function Home() {
    return (
        <main className="home-page">
            <section className="home-grid">
                <section className="home-header">
                    <TitleHome/>
                </section>

                <section className="home-content">
                    <div className="content-left">
                        <TransactionTable/>
                    </div>
                    <div className="content-right">
                        <div className="profile-info-wrapper">
                            <Profile />
                            {/*<div className="info-overlay">*/}
                            {/*    <Info />*/}
                            {/*</div>*/}
                        </div>

                    </div>
                </section>
            </section>
        </main>
    );
}
