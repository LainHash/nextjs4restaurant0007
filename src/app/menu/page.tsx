import Link from 'next/link';

export default function Page() {
    return (
        <>

            {/* Main Content */}
            <main className="flex-grow pt-24 md:pt-32 pb-section-gap">
                {/* Hero Section */}
                <header className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center mb-16 md:mb-24">
                    <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 text-balance">The Culinary Collection</h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto text-balance">
                        A curated selection of seasonal dishes, reflecting our commitment to locally sourced ingredients and modern gastronomic techniques.
                    </p>
                </header>
                {/* Menu Tabs */}
                <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-12">
                    <div className="flex overflow-x-auto no-scrollbar border-b border-outline-variant/30 pb-2 md:justify-center space-x-8 md:space-x-16">
                        <button className="tab-btn active font-headline-sm text-headline-sm text-on-surface-variant pb-2 whitespace-nowrap hover:text-secondary transition-colors" data-target="starters">Starters</button>
                        <button className="tab-btn font-headline-sm text-headline-sm text-on-surface-variant pb-2 whitespace-nowrap hover:text-secondary transition-colors" data-target="mains">Mains</button>
                        <button className="tab-btn font-headline-sm text-headline-sm text-on-surface-variant pb-2 whitespace-nowrap hover:text-secondary transition-colors" data-target="desserts">Desserts</button>
                        <button className="tab-btn font-headline-sm text-headline-sm text-on-surface-variant pb-2 whitespace-nowrap hover:text-secondary transition-colors" data-target="wine">Wine List</button>
                    </div>
                </div>
                {/* Menu Content */}
                <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                    {/* STARTERS */}
                    <div className="tab-content active" id="starters">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
                            {/* Text Column */}
                            <div className="lg:col-span-7 space-y-12">
                                {/* Item 1 */}
                                <article className="group relative pb-8 border-b border-outline-variant/20 last:border-0">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="font-headline-md text-headline-md text-primary">Heirloom Tomato Tartare</h3>
                                        <span className="font-headline-md text-headline-md text-secondary ml-4">$22</span>
                                    </div>
                                    <p className="font-body-md text-body-md text-on-surface-variant mb-4 pr-8">
                                        Compressed summer tomatoes, basil emulsion, aged balsamic pearls, served with house-made seeded crispbread.
                                    </p>
                                    <div className="flex gap-2">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm uppercase tracking-wider">Vegan</span>
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm uppercase tracking-wider">Gluten-Free Opt</span>
                                    </div>
                                </article>
                                {/* Item 2 */}
                                <article className="group relative pb-8 border-b border-outline-variant/20 last:border-0">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="font-headline-md text-headline-md text-primary">Seared Hokkaido Scallops</h3>
                                        <span className="font-headline-md text-headline-md text-secondary ml-4">$28</span>
                                    </div>
                                    <p className="font-body-md text-body-md text-on-surface-variant mb-4 pr-8">
                                        Cauliflower purée, brown butter caper vinaigrette, crispy pancetta dust, micro sorrel.
                                    </p>
                                    <div className="flex gap-2">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm uppercase tracking-wider">Gluten-Free</span>
                                    </div>
                                </article>
                                {/* Item 3 */}
                                <article className="group relative pb-8 border-b border-outline-variant/20 last:border-0">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="font-headline-md text-headline-md text-primary">Wild Mushroom Consommé</h3>
                                        <span className="font-headline-md text-headline-md text-secondary ml-4">$19</span>
                                    </div>
                                    <p className="font-body-md text-body-md text-on-surface-variant mb-4 pr-8">
                                        Clarified earthy broth, confit maitake, truffle shavings, chive oil drops. Poured tableside.
                                    </p>
                                    <div className="flex gap-2">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm uppercase tracking-wider">Vegan</span>
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm uppercase tracking-wider">Gluten-Free</span>
                                    </div>
                                </article>
                            </div>
                            {/* Image Column */}
                            <div className="hidden lg:block lg:col-span-5 lg:pl-12">
                                <div className="sticky top-32">
                                    <div className="aspect-[4/5] rounded overflow-hidden relative">
                                        <img className="w-full h-full object-cover" data-alt="Overhead close-up shot of a gourmet heirloom tomato tartare plated elegantly on a dark matte ceramic dish. The bright reds and yellows of the tomatoes contrast with vibrant green basil emulsion drops. Soft, natural directional lighting mimicking high-end restaurant ambiance, casting delicate shadows. The mood is refined, fresh, and modern, adhering to a quiet luxury aesthetic with deep blacks and rich colors." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlolh2Le8RxxfWVEStuvv4z0ofuej9zkdNQI-zf6AF1z-QUR-2zbmSFYM-dRado3ULVw1Chmq9NA1tu00qreZCnGaSjxRt2JB1sv2jpg4l2EPZ3DP1UvvbahCBtSH6wjZRQN8EIIde_3ucvVw2CJOvjr2pnKiww6iUEoxmJ7RffHlTKKL5chxnZOoVlR5bHfXd9wHDYxeCUlVcdb-ycElLkJjuxaJ8FayRr9miXXOVXSLIuKPNi-mMkge_MBWxhzdHhoLiGzByO58" />
                                        <div className="absolute inset-0 ring-1 ring-inset ring-primary/10 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* MAINS */}
                    <div className="tab-content" id="mains">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
                            {/* Text Column */}
                            <div className="lg:col-span-7 space-y-12">
                                {/* Item 1 */}
                                <article className="group relative pb-8 border-b border-outline-variant/20 last:border-0">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="font-headline-md text-headline-md text-primary">Dry-Aged Duck Breast</h3>
                                        <span className="font-headline-md text-headline-md text-secondary ml-4">$48</span>
                                    </div>
                                    <p className="font-body-md text-body-md text-on-surface-variant mb-4 pr-8">
                                        Pan-roasted to medium-rare, accompanied by glazed heritage carrots, parsnip silk, and a sour cherry jus.
                                    </p>
                                    <div className="flex gap-2">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm uppercase tracking-wider">Gluten-Free</span>
                                    </div>
                                </article>
                                {/* Item 2 */}
                                <article className="group relative pb-8 border-b border-outline-variant/20 last:border-0">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="font-headline-md text-headline-md text-primary">Miso-Glazed Black Cod</h3>
                                        <span className="font-headline-md text-headline-md text-secondary ml-4">$52</span>
                                    </div>
                                    <p className="font-body-md text-body-md text-on-surface-variant mb-4 pr-8">
                                        Sustainably caught cod, white miso marinade, served over dashi-braised daikon radish and wilted bok choy.
                                    </p>
                                    <div className="flex gap-2">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm uppercase tracking-wider">Dairy-Free</span>
                                    </div>
                                </article>
                            </div>
                            {/* Image Column */}
                            <div className="hidden lg:block lg:col-span-5 lg:pl-12">
                                <div className="sticky top-32">
                                    <div className="aspect-[4/5] rounded overflow-hidden relative">
                                        <img className="w-full h-full object-cover" data-alt="A beautifully plated medium-rare duck breast sliced and fanned out on a warm white textured plate. Glazed vibrant orange carrots and dark red sour cherry jus provide color contrast. The lighting is dramatic and moody, highlighting the crispy skin of the duck and creating a high-end editorial culinary atmosphere consistent with a modern minimalist aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuADMvliYpTeFSz2zwhitVagsccD-8mgrRur4VeiKZMGkdenDQ2Y5bFExvRngqSi5U8iF9D0y616UI3CmA-ZCzHtMz-Fu63lkLrAvgnpKT2UtuCI4MYI3bVrW3MjhZ_TBVwmoGa4wxzz6horgh6RnrbNt1F09V0NtOTBLYU0280_b3v2jNTCh4cpevrQTNsA8O8Vb1sBcYxqyBMALQIqLj_TP9rfk6jv9DxRw9eq2kTIatgxIiuYj6R0TRwRo3GtZm2iTLUMa2BWKyo" />
                                        <div className="absolute inset-0 ring-1 ring-inset ring-primary/10 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* DESSERTS */}
                    <div className="tab-content" id="desserts">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
                            {/* Text Column */}
                            <div className="lg:col-span-7 space-y-12">
                                {/* Item 1 */}
                                <article className="group relative pb-8 border-b border-outline-variant/20 last:border-0">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="font-headline-md text-headline-md text-primary">Dark Chocolate Délice</h3>
                                        <span className="font-headline-md text-headline-md text-secondary ml-4">$18</span>
                                    </div>
                                    <p className="font-body-md text-body-md text-on-surface-variant mb-4 pr-8">
                                        70% Valrhona chocolate mousse, hazelnut praline feuilletine base, gold leaf, accompanied by espresso gelato.
                                    </p>
                                </article>
                            </div>
                            {/* Image Column */}
                            <div className="hidden lg:block lg:col-span-5 lg:pl-12">
                                <div className="sticky top-32">
                                    <div className="aspect-[4/5] rounded overflow-hidden relative">
                                        <img className="w-full h-full object-cover" data-alt="An elegant slice of dark chocolate mousse cake with a shiny ganache glaze, resting on a stark white background. A delicate piece of edible gold leaf sits on top. A perfectly round scoop of espresso gelato is placed beside it. The lighting is bright and clean, emphasizing the smooth textures and deep browns, fitting a pristine, luxurious restaurant environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Tci7uxr-GrCcf-ilSRcjJ-ZvIYhK8b0YrUODefcGX3Fic1xHoGBk0w1ERvaj5iY2Rm45qjxcOainIplT4SnCNxjEeE5Uk3boRp3UYvJzK-jC-W2AyG9EaOExixQuGjAt1-eJtXfpghJFakyhYMpNNt-zBSENA0Get2A9IXI7DifX2sQ4O9hAYmLYaNZgXHLbnOHFNPsFWcEeOJjdddZO3pdh_joSg8Id54LIVIzm-KgYE2mgoZYxOdzRgSKQ1SNJI0uW1-XMHTw" />
                                        <div className="absolute inset-0 ring-1 ring-inset ring-primary/10 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* WINE LIST */}
                    <div className="tab-content" id="wine">
                        <div className="max-w-4xl mx-auto space-y-16">
                            <div>
                                <h2 className="font-headline-sm text-headline-sm text-primary mb-8 border-b border-outline-variant/30 pb-4">White</h2>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-end border-b border-outline-variant/10 pb-2">
                                        <div>
                                            <h4 className="font-label-md text-label-md text-primary uppercase tracking-wider">Chablis Grand Cru, Les Clos</h4>
                                            <p className="font-body-md text-body-md text-on-surface-variant italic text-sm">Domaine William Fèvre, Burgundy, France, 2018</p>
                                        </div>
                                        <span className="font-headline-sm text-headline-sm text-secondary">$185</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Book Now Banner */}
                <section className="mt-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="book-now">
                    <div className="bg-surface-container-high rounded p-8 md:p-16 text-center relative overflow-hidden">
                        {/* Subtle background pattern */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary mb-4">Experience Lumière</h2>
                            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                                Reservations are highly recommended. We accept bookings up to 60 days in advance.
                            </p>
                            <Link className="inline-flex bg-primary text-on-primary px-8 py-4 rounded hover:bg-surface-tint transition-all duration-300 ease-out font-label-md text-label-md focus:ring-2 focus:ring-secondary focus:outline-none" href="/">
                                Reserve Your Table
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            {/* Tab Logic Script */}


        </>
    );
}