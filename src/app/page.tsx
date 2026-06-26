import Link from 'next/link';
export default function Page() {
    return (
        <>

            <main className="pt-24">
                {/* Hero Section */}
                <section className="relative w-full h-[819px] md:h-[921px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0" data-alt="A breathtaking, wide-angle shot of an exquisitely plated fine dining dish in a minimalist, dimly lit restaurant setting. Soft, warm ambient light highlights the delicate textures of the food, set against a dark charcoal table. The overall aesthetic is quiet luxury, emphasizing sophisticated culinary artistry and elegant atmosphere." style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop')" }}></div>
                    <div className="absolute inset-0 z-0 bg-primary/40 backdrop-blur-[2px]"></div>
                    <div className="relative z-10 text-center px-margin-mobile flex flex-col items-center">
                        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-6 max-w-4xl text-balance">
                            Culinary Excellence, Redefined.
                        </h1>
                        <p className="font-body-lg text-body-lg text-surface-container-low mb-10 max-w-2xl">
                            Experience a symphony of flavors crafted with passion and precision. Welcome to a new era of gastronomy.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-surface text-primary px-8 py-3 rounded font-label-md text-label-md hover:bg-surface-variant transition-colors duration-300 shadow-sm">
                                View Menu
                            </button>
                            <Link href="/book" className="border border-on-primary text-on-primary px-8 py-3 rounded font-label-md text-label-md hover:bg-on-primary/10 transition-colors duration-300">
                                Book a Table
                            </Link>
                        </div>
                    </div>
                </section>
                {/* Chef's Specials */}
                <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-headline-md text-headline-md text-primary mb-4">Chef's Specials</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                            Curated masterpieces highlighting seasonal ingredients and innovative techniques.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                        {/* Dish 1 */}
                        <article className="group cursor-pointer border border-outline-variant/30 rounded-lg overflow-hidden bg-surface-container-lowest transition-transform duration-500 hover:-translate-y-1">
                            <div className="aspect-[4/3] w-full overflow-hidden relative">
                                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A close-up, high-end food photograph of a delicate scallop crudo with micro-greens and a subtle citrus foam, presented on a pristine white ceramic plate. The lighting is soft and directional, creating a bright, elegant light-mode aesthetic that emphasizes freshness and sophisticated minimalism." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy6dWWPZrKY-L-fzQegwKxaHgIpZHPpvJnCNVrcZwkE9vQIGD4Z81QO-Ypz-Zk6o6Nt9Qw3hWzfg0VxEAniS61GgZo54WRbdUuSX46AhgEMVtP_DO2zmedD5OrwMsb9G1kY1vWXUonn_iWS13VcBulVZ51a57RDIsCP0oWxp9WU_AMdQwGQ0wJ-5nKIANwWMz9DVSTtt520f9m2svHRU6ygm9OlvUB4IOgAeP4Mio4LrzjCf1y9uMevV1uPnIpxpiXusKHI29lsOQ" />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-headline-sm text-headline-sm text-primary">Scallop Crudo</h3>
                                    <span className="font-label-md text-label-md text-secondary">$28</span>
                                </div>
                                <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                                    Hokkaido scallops, yuzu kosho, sea fennel, and delicate citrus emulsion.
                                </p>
                                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full font-label-sm text-label-sm">Gluten-Free</span>
                            </div>
                        </article>
                        {/* Dish 2 */}
                        <article className="group cursor-pointer border border-outline-variant/30 rounded-lg overflow-hidden bg-surface-container-lowest transition-transform duration-500 hover:-translate-y-1">
                            <div className="aspect-[4/3] w-full overflow-hidden relative">
                                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A stunning culinary photograph of a perfectly seared duck breast, sliced to reveal a blushing pink center, accompanied by vibrant heritage carrots and a rich dark jus. Set on an elegant matte charcoal plate in a well-lit, sophisticated dining environment, conveying quiet luxury and high-end gastronomy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTjhl8oSqny2hMKMQdX2jRSVwZCWO7uGj6o53z5J03X6lf929nQyodwJMwrrkE-JzdkiOggDktuglUe1_jPbrPHiK4GodhEHVnH-4z1m5FHDZQSfHuU0QGziRlJS8HUMNtJGaUF38pbjmIrjOIj0zcPF0ziXKNobXueTCG_EIvSq4df090kbjjRbb_ohXVAR0dfflf0V0gA8mxTAk9HJI43Uk7Ig5_M5XzgLhZWzUGZQUc1OS_qsapXSbdzRrD3qY5qnTIhrhwlt8" />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-headline-sm text-headline-sm text-primary">Dry-Aged Duck</h3>
                                    <span className="font-label-md text-label-md text-secondary">$45</span>
                                </div>
                                <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                                    Lavender-honey glazed breast, heritage carrots, and spiced duck jus.
                                </p>
                                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full font-label-sm text-label-sm">Signature</span>
                            </div>
                        </article>
                        {/* Dish 3 */}
                        <article className="group cursor-pointer border border-outline-variant/30 rounded-lg overflow-hidden bg-surface-container-lowest transition-transform duration-500 hover:-translate-y-1">
                            <div className="aspect-[4/3] w-full overflow-hidden relative">
                                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A refined, elegant dessert featuring a structural chocolate sphere with delicate gold leaf accents, resting on a bed of dark cherry compote. Photographed in a minimalist, bright setting with soft natural light, highlighting the intricate textures and sophisticated presentation typical of fine dining luxury." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAohcYtgX8Q0cXa6MskfknHV1BsOAPsLI-cOlvtFYRshLr-aILMNAz6nspJ1INrf6K1Yt94xJICS1ijruHmu1nNKoWEAKxuuQFhFLW1wF3ALK3za0-cpcHhtiRJrUVTnS7jS_ThuzdDlJWeWZG86P2xRG5jErGdc8-riVSih1Gw_tjHWLZr-nVOtGFmsUcPuUOLY_WunNqeti9cNqVxOlzzX5ui-lMnYrf67_7OGPlr_Jmgc3yXVmCUqCiuCrcpyGgThxAFg2scYEY" />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-headline-sm text-headline-sm text-primary">Valrhona Sphere</h3>
                                    <span className="font-label-md text-label-md text-secondary">$22</span>
                                </div>
                                <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                                    Dark chocolate mousse, morello cherry core, and toasted hazelnut crunch.
                                </p>
                                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full font-label-sm text-label-sm">Vegetarian</span>
                            </div>
                        </article>
                    </div>
                </section>
            </main>

        </>
    );
}