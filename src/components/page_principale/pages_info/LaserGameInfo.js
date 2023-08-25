import React from "react";
import GetImgByFormat from "../../../controllers/assets/imgcontroller";

export default function LaserGameInfo(){
    return (
        <main className={"p-4 space-y-8 lg:max-w-1/2 flex flex-col self-center "}>
            <section className="relative w-full text-white">
                <div className="flex flex-col bg-no-repeat bg-cover bg-laser-game text-center p-6 grayscale-[50%] space-y-2 font-semibold">
                    <h2 className={"font-extrabold text-2xl"}>
                        LASER GAME
                    </h2>
                    <p className={"font-semibold text-lg"}>400m² de champ de bataille</p>
                </div>
            </section>

            <div>
                <h2 className="font-bold text-red-600">COMMENT CA MARCHE ?</h2>
                <p className={"text-gray-500 font-semibold"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate tellus mauris, vel aliquet sem molestie a. Praesent pharetra eros sit amet iaculis placerat. Nullam lacus diam, mollis id justo at, convallis gravida lectus. Sed eleifend eros eget urna laoreet congue aliquam id justo.
                </p>
            </div>

            <div className={"bg-red-600 text-white p-4 space-y-2"}>
                <h2 className="font-bold text-center ">LES REGLES</h2>
                <ul className={"list-outside list-disc pl-5"}>
                    <li>Les pistolets sont désactivés pendant 10 secondes après avoir été touché.</li>
                    <li>Marcher dans les escaliers.</li>
                    <li>La chasse est interdite, le chalenge réside dans le changement de proies.</li>
                    <li>Tu touches, tu bouges. T'es touché, tu vas bougé</li>
                </ul>
            </div>

            <div>
                <h2 className="font-bold text-center text-red-700">NOS TARIFS</h2>

                <div className={"flex flex-col text-white"}>
                    <table>
                        <thead>
                        <tr>
                            <td>Entrées</td>
                            <td>Prix</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1 partie</td>
                            <td>8 €</td>
                        </tr>
                        <tr>
                            <td>3 parties</td>
                            <td>19 €</td>
                        </tr>
                        </tbody>
                    </table>
                </div>



            </div>

            <div>
                <div className="flex flex-col bg-no-repeat bg-cover bg-laser-enfant text-center min-h-48 grayscale-[50%] space-y-2 font-semibold"></div>
                <div className={"bg-green-600 text-white space-y-2 p-4 "}>
                    <h2 className="font-bold text-center border-b border-cst-darkgray-200 pb-2">TARIF ENFANT</h2>
                    <p className={"text-center"}>LA PARTIE A 7 €</p>
                </div>
            </div>


            <div className={"flex flex-col flex-center bg-red-600 text-white p-4 space-y-2 font-semibold text-center"}>

                <img src={GetImgByFormat('signalement', "64")} alt="" className={"w-fit self-center"}/>
                <h2 className="font-bold text-center text-2xl border-b pb-2 border-white">LE MARDI - TOUT EST PERMIS</h2>
                <p>PARTIES ILLIMITES DE 19H à 00H</p>
                <p>POUR UN TOTAL DE 25€</p>
            </div>
        </main>
    )
}