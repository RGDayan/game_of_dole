import React from "react";
import GetImgByFormat from "../controllers/assets/imgcontroller";
import {NavLink} from "react-router-dom";

export default function Header(){
    let imgLogoSansFont = GetImgByFormat("logo_god", "");
    return (
        <header className={"relative flex flex-col w-full bg-cst-darkgray-800 h-fit text-white shadow shadow-cst-darkgray-700"}>

            <div className={"text-center " +
                     "w-full min-h-8 " +
                     "p-2 bg-darkgray-900"}>
                <NavLink to={"/"} className={"flex justify-center"}>
                    <img src={imgLogoSansFont} alt={"img_logo"} className={"h-16"}/>
                </NavLink>
                <div className={" top-0 right-0 text-xs"}>
                    <p>@ : contact@gameofdole.fr</p>
                    <p>tel : 06 06 06 06 06</p>
                </div>
            </div>
            <div className={"h-full top-3 left-3 absolute"}>
                <button type={"button"}
                        className={" space-y-1.5 p-3 hover:bg-cst-darkgray-700 active:bg-cst-darkgray-900 rounded-md"}>
                    <div className="w-6 h-0.5 bg-gray-200"></div>
                    <div className="w-6 h-0.5 bg-gray-200"></div>
                    <div className="w-6 h-0.5 bg-gray-200"></div>
                </button>
            </div>
        </header>
    )
}