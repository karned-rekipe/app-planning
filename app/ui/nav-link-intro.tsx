import {ReactElement} from "react";
import {NavLinkIntro} from "@/app/lib/definitions";
import {CalendarDaysIcon, UserIcon} from '@heroicons/react/24/solid';
import Link from "next/link";


const navLinkIntro = [
    {
        title: "Get started!",
        link: "/foodplanning",
        icon: "calendar",
    },
    {
        title: "Login",
        link: "/login",
        icon: "login"
    }
]

const icons = {
    'calendar': <CalendarDaysIcon className="size-6" />,
    'login': <UserIcon className="size-6" />
}

export default function NavLinkIntro(): ReactElement {
    return (
        <>
            {navLinkIntro.map((linkIntro: NavLinkIntro, key) => {
                return (
                    <Link
                        key={`navLinkDoc-+${key}`}
                        href={linkIntro.link}
                        className="fixed left-0 top-0 flex-1 flex-row w-full justify-center  border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-center"
                    >
                        <div className="flex flex-1 items-center justify-center gap-2">
                            { linkIntro.icon in icons ? icons[linkIntro.icon] : "" }
                            { linkIntro.title }
                        </div>

                    </Link>
                )
            })}
        </>
    )
}