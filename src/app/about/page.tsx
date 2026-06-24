
export default function Page() {
  return (
    <>

      <main className="pt-[88px]"> {/* Offset for fixed nav */}
        {/* Hero Header */}
        <section className="relative h-[716px] min-h-[500px] w-full flex items-end">
          <div className="absolute inset-0 bg-cover bg-center" data-alt="A stunning, high-resolution wide-angle photograph of an upscale restaurant interior at twilight. The space features modern minimalist architecture with subtle glassmorphism elements, high ceilings, and warm, low-key lighting casting elegant shadows. Tables are impeccably set with fine white linen and sparkling glassware. The color palette is sophisticated, dominated by deep charcoal tones, pristine whites, and warm gold accents from soft ambient lighting, evoking a sense of quiet, exclusive luxury." style={{ backgroundImage: "url('https" }}></div>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 glass-overlay"></div>
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop pb-16 w-full max-w-container-max mx-auto">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">The Lumière Story</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">A dedication to culinary excellence, where modern precision meets timeless hospitality in an atmosphere of quiet luxury.</p>
          </div>
        </section>
        {/* Our Story */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <img className="w-full h-auto aspect-[4/5] object-cover rounded border border-outline-variant/50" data-alt="A beautifully composed, minimalist still-life photograph of fresh, high-end culinary ingredients resting on a dark charcoal stone surface. The image features a single, perfect heirloom tomato, a sprig of delicate micro-herbs, and a subtle drizzle of golden olive oil. The lighting is soft and directional, highlighting the textures and rich colors against the moody, dark background. The overall aesthetic is refined, editorial, and deeply connected to nature and gastronomy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPtgNpeyt88FDJO4tex8_W2uIut28WQp5uoQRQPwvJHZBfLljfgJN02qyaE3w3VraYk196VpzaiVRfvcuuZjGGLphU9tetzmaijIa4bMq2UGB_7LkW7FGWqS0kZsXzt6gZAtl2WmdAShD5sRjub6CUeWgtdEYQEamaiiyMTVeQ6yriJE7lB5bPYITlQ0EP0NAxCsC9r-__YLi6HuEtD-WjtsKpX6luyzNmVk-PF9eHq_M3_jndSrRXGl3tllNNH0YgDh0vVGnmsIU" />
            </div>
            <div className="md:col-span-6 md:col-start-7 order-1 md:order-2 mb-12 md:mb-0">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-4 block">Philosophy</span>
              <h2 className="font-headline-md text-headline-md text-primary mb-6">Crafting memories through thoughtful gastronomy.</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Founded on the belief that a meal is more than sustenance, Lumière was conceived as a sanctuary for the senses. We approach cooking with a reverence for ingredients, stripping away the unnecessary to reveal pure, profound flavors.</p>
              <p className="font-body-md text-body-md text-on-surface-variant">Our space reflects our food: minimalist, intentional, and bathed in a gentle light that encourages diners to pause, connect, and savor the moment in an environment of understated elegance.</p>
            </div>
          </div>
        </section>
        {/* Meet the Chef (Bento Style) */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16">
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-4 block">Leadership</span>
              <h2 className="font-headline-md text-headline-md text-primary">Meet the Chef</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter auto-rows-[300px]">
              {/* Large Photo Card */}
              <div className="md:col-span-2 md:row-span-2 relative rounded overflow-hidden border border-outline-variant/30 group">
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A professional, editorial portrait of an executive chef in a pristine white chef's coat, standing confidently in a modern, gleaming stainless-steel kitchen. The chef has a focused, passionate expression. The lighting is crisp and dramatic, casting subtle shadows that highlight the chef's expertise and dedication. The color palette emphasizes the cool tones of the kitchen contrasted with the warm, human element of the chef, reflecting a high-end corporate yet artisanal culinary environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCasxYxkSItXc9RXV7FrOGDKtP3Rq9AjGhP7gnOZ7DKafbdjJNDPvwng44RiMQDoOjK6gz2444JJb-9s_chPxiyltapd05ol088opdTeq2N1wAUD1sSUME8P0cythzn1KcYmuU6g5AnTjcweM6k7TTvBMKHym8fmO-sHEpMMWt0qP_Cio0w9bOklS5-iUibZIEwdR7l6M1aGABt0y-9m9b9nV44l1kVEKdRkvS8ryGzJgp-F1VqrOY0MlRIjb2le7JOjjto1DY67Ig" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-headline-sm text-headline-sm text-on-primary mb-2">Julian Vance</h3>
                  <p className="font-label-md text-label-md text-secondary-fixed-dim">Executive Chef &amp; Visionary</p>
                </div>
              </div>
              {/* Bio Text Card */}
              <div className="bg-surface p-8 rounded border border-outline-variant/30 flex flex-col justify-center">
                <span className="material-symbols-outlined text-secondary mb-4 text-3xl" data-icon="restaurant_menu">restaurant_menu</span>
                <p className="font-body-md text-body-md text-on-surface-variant italic">"Cooking is a dialogue between the earth and the table. My goal is to speak quietly so the ingredients can be heard."</p>
              </div>
              {/* Details Card */}
              <div className="bg-primary text-on-primary p-8 rounded flex flex-col justify-between">
                <div>
                  <h4 className="font-label-md text-label-md text-secondary-fixed mb-4 uppercase tracking-widest">Background</h4>
                  <ul className="font-body-md text-body-md space-y-2 text-primary-fixed-dim">
                    <li>• Trained in Lyon, France</li>
                    <li>• 15 Years Michelin experience</li>
                    <li>• Advocate for hyper-local sourcing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Values */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="p-8 border border-outline-variant/30 rounded bg-surface hover:bg-surface-container-low transition-colors duration-300 text-center">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6" data-icon="eco">eco</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Sustainability</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">We prioritize ethical farming and zero-waste kitchen practices to ensure our footprint is as light as our touch.</p>
            </div>
            <div className="p-8 border border-outline-variant/30 rounded bg-surface hover:bg-surface-container-low transition-colors duration-300 text-center">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6" data-icon="location_on">location_on</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Local Provenance</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Sourcing exclusively from regional artisans and growers to support the community and guarantee peak freshness.</p>
            </div>
            <div className="p-8 border border-outline-variant/30 rounded bg-surface hover:bg-surface-container-low transition-colors duration-300 text-center">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6" data-icon="diamond">diamond</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Refined Craft</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Applying modern techniques with precision to classic flavor profiles, creating an experience of quiet luxury.</p>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}