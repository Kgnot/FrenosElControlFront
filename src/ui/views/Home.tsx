import './styles/Home.css'
import {TitleHome} from "../components/HomeComponent/titleHome/TitleHome.tsx";
import {TransactionTable} from "../components/HomeComponent/transactionTable/TransactionTable.tsx";
import {Profile} from "../components/HomeComponent/profile/Profile.tsx";
import {Info} from "../components/HomeComponent/info/Info.tsx";

export default function Home() {


    return (
        <>
            <section className={"HOME_PAGE PAGE"}>
                <div className={"HOME_PAGE_izq"}>
                    <TitleHome className={"HOME_PAGE_izq_sup hijo"}/>
                    <TransactionTable className={"HOME_PAGE_izq_inf hijo"}/>
                </div>
                <div className={"HOME_PAGE_der"}>
                    <Profile className={"HOME_PAGE_der_sup hijo"}/>
                    <Info className={"HOME_PAGE_der_inf hijo"}></Info>
                </div>
            </section>
        </>
    )
}