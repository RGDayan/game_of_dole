import React from "react";
import {NavLink} from "react-router-dom";

export default function Footer(){
    return (
        <footer className={"pt-4"}>
            <section className={"flex flex-col w-full p-4 bg-cst-darkgray-700 text-white"}>
                <h2 className={"font-bold font-sans text-lg text-center"}>Horaires d'ouverture</h2>
                <table className={"self-center lg:max-w-1/2 min-w-64 lg:min-w-96"}>
                    <thead>
                        <tr>
                            <td>Jours</td>
                            <td>Heures</td>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>LUN</td>
                        <td>17H - 00H</td>
                    </tr>
                    <tr>
                        <td>MAR</td>
                        <td>17H - 00H</td>
                    </tr>
                    <tr>
                        <td>MER </td>
                        <td>14H - 00H</td>
                    </tr>
                    <tr>
                        <td>JEU</td>
                        <td>17H - 00H</td>
                    </tr>
                    <tr>
                        <td>VEN</td>
                        <td>14H - 02H</td>
                    </tr>
                    <tr>
                        <td>SAM</td>
                        <td>10H - 02H</td>
                    </tr>
                    <tr>
                        <td>DIM</td>
                        <td>10H - 00H</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <div className="flex flex-col bg-cst-darkgray-900 p-4 text-white space-y-3">
                <h3 className={"text-lg font-semibold font-mono"}>CONTACT </h3>
                <div className={"flex flex-col space-y-1 text-sm"}>
                    <p>@ : contact@gameofdole.fr</p>
                    <p>tel : 06 06 06 06 06</p>
                    <NavLink to={"/contact"} className={"w-fit p-1 border-b border-cst-darkgray-500 hover:bg-cst-darkgray-700"}>Nous contacter</NavLink>
                </div>
            </div>
        </footer>
    )
}