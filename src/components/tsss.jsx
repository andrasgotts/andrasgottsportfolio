import {useState} from "react";
//import { NavLink } from "react-router";
//https://merakiui.com/components/marketing/portfolio

export default function NavBar() {
    return (
        <div>
            <header className="bg- stick top-0 z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-8">
                <h1>Header</h1>
                <nav className="w-1/3">
                    <div className="flex justify-between">
                    </div>
                </nav>
                
            </header>
            <body className="bg-[#313178]">
                            
<section class="bg-[#4e4e94] dark:bg-gray-900">
    <div class="container px-6 py-12 mx-auto">
        <h1 class="text-2xl font-semibold text-white lg:text-3xl dark:text-white">Portfolio</h1>

        <div class="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div class="lg:mx-12">
                <h1 class="text-xl font-semibold text-gray-800 dark:text-white">Table of Content</h1>

                <div class="mt-4 space-y-4 lg:mt-8">
                    <a href="#" class="block text-blue-500 dark:text-blue-400 hover:underline">Web design</a>
                    <a href="#" class="block text-gray-500 dark:text-gray-300 hover:underline">App design</a>
                    <a href="#" class="block text-gray-500 dark:text-gray-300 hover:underline">Branding</a>
                    <a href="#" class="block text-gray-500 dark:text-gray-300 hover:underline">Animation</a>
                </div>
            </div>

            <div class="flex-1 mt-8 lg:mx-12 lg:mt-0">
                <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
                    <div>
                        <img class="object-cover w-full rounded-lg h-96 "
                            src="../assets/astro.svg"
                            alt=""/>
                        <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Best website
                            collections</h2>
                        <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p>
                    </div>

                    <div>
                        <img class="object-cover w-full rounded-lg h-96 "
                            src="../assets/astro.svg"
                            alt=""/>
                        <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Block of Ui kit
                            collections</h2>
                        <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Ui kit</p>
                    </div>

                    <div>
                        <img class="object-cover w-full rounded-lg h-96 "
                            src="../assets/astro.svg"
                            alt=""/>
                        <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Ton’s of mobile
                            mockup</h2>
                        <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Mockups</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

        
            </body>
        </div>
    )
}