import React from "react";
import {NavLink} from "react-router-dom";


export default function PagePrincipale(){
    return (
        <main className="flex flex-col justify-center pt-2 space-y-8">
            <h2 className={"text-center p-3 font-extrabold text-2xl"}>UN COMPLEXE  DE LOISIR POUR VOS ENVIES</h2>

            <iframe className={"w-full min-h-48 font-sans px-4 lg:max-w-1/2 self-center"}
                    src="https://www.youtube.com/embed/d7m625Aun90"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen/>

            <section className="relative w-full min-h-48 px-4 text-white lg:max-w-1/2 self-center">
                <div className="flex flex-col bg-no-repeat bg-cover bg-laser-game p-6 grayscale-[50%] space-y-6 lg:space-y-10 font-semibold">
                    <h2 className={"font-extrabold text-2xl"}>
                        LASER GAME
                    </h2>
                    <p>Des défis et des néons, venez vous dépensez et briser vos amitiés</p>
                    <p>Venez à bout de l'équipe adverse et apparaissez dans le classement</p>
                    <NavLink className="bg-white text-red-700 p-3 border-2 border-red-700 w-fit" to={"/laser-game"}>Plus d'informations</NavLink>
                </div>
            </section>

            <section className="relative w-full min-h-48 px-4 text-white lg:max-w-1/2 self-center">
                <div className="bg-no-repeat bg-cover bg-chase-tag grayscale-[50%]">
                    <div className={"flex flex-col bg-blue-900 bg-opacity-50 p-6 space-y-6 lg:space-y-10 font-semibold"}>
                        <h2 className={"font-extrabold text-2xl"}>
                            CHASE TAG
                        </h2>
                        <p>Entrez dans le QUAD et concourrez contre vos adversaires</p>
                        <p>Touchez votre adversaire en moins de 30 secondes, sinon, vous serez buzzés</p>
                        <NavLink className="bg-white text-red-700 p-3 border-2 border-red-700 w-fit"
                                 to={"/chase-tag"}>Plus d'informations</NavLink>
                    </div>
                </div>
            </section>

            <section className="relative w-full min-h-48 px-4 text-white lg:max-w-1/2 self-center">
                <div className="flex flex-col p-6 bg-no-repeat bg-cover bg-vr font-semibold space-y-6 lg:space-y-10">
                    <h2 className={"font-extrabold text-2xl"}>
                        RÉALITÉ VIRTUELLE
                    </h2>
                    <p>Découvrez la matrice dans un monde en réalité virtuelle</p>
                    <p>Vous êtes les derniers survivants. Repoussez les vagues d'ennemis et échappez-vous</p>
                    <NavLink className="bg-white text-red-700 p-3 border-2 border-red-700 w-fit"
                             to={"/vr"}>Plus d'informations</NavLink>
                </div>
            </section>

            <section className="relative w-full min-h-48 px-4 text-white lg:max-w-1/2 self-center">
                <div className="flex flex-col p-6 bg-no-repeat bg-cover bg-karaoke font-semibold  space-y-6 lg:space-y-10">
                    <h2 className={"font-extrabold text-2xl"}>
                        Voice Mix
                    </h2>
                    <p>Retrouvez-vous en famille, entre amis ou même entre collègues</p>
                    <p>Choisissez votre chanson et démontrez vos talents à vos proches</p>
                    <NavLink className="bg-white text-red-700 p-3 border-2 border-red-700 w-fit"
                             to={"/voice-mix"}>Plus d'informations</NavLink>
                </div>
            </section>
        </main>
    )
}