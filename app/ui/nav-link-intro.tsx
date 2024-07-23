import {ReactElement} from "react";
import {NavLinkIntro} from "@/app/lib/definitions";
import Link from "next/link";

const navLinkIntro = [
    {
        title: "Get started!",
        link: "/foodplanning",
        icon: "fa fa-star",
    }
]

export default function NavLinkIntro(): ReactElement {
    return (
        <>
            {navLinkIntro.map((linkIntro: NavLinkIntro, key) => {
                return (
                    <Link
                        href={linkIntro}
                    >


                    </Link>
                )
            })}
        </>
    )
}