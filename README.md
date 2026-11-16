# Mycelis + Virelis website

A lightweight, dependency-free static website for GitHub Pages.

## Routes

- `index.html` — product-family homepage and EmailOctopus mailing list
- `mycelis.html` — Mycelis product story
- `virelis.html` — Virelis product story
- `about.html` — development approach
- `contact.html` — contact details
- `privacy.html` — privacy information
- `preorder.html` — legacy no-index entry to the separate password-protected sandbox shop. The visible Shop navigation/footer links now open the protected shop directly; no live checkout is enabled.

## Preview

Open `index.html` directly or serve this directory with a static file server.

## GitHub Pages

Place this directory's contents at the repository root. In **Settings → Pages**, choose **Deploy from a branch**, then select `main` and `/ (root)`.

All internal paths are relative and require no backend, build process, package installation, or environment variables.

The private shop is separately hosted at https://mycelis-virelis-private-store.growmycelis.workers.dev. The public Purchase entry links there; it does not contain the private catalogue or password. Server-side protection runs before every storefront asset. Shop source is deliberately outside this public GitHub Pages repository. The shop includes mushroom choices and microgreen mixes in groups of three; no live ordering or checkout is enabled.

## Current limitations

- The mailing list uses the supplied EmailOctopus inline form. Its fields and confirmation behaviour are managed in EmailOctopus; `privacy.html` describes this connection.
- Product renders and prototype photos use matched 1000 × 1250 (4:5) photographic crops on the homepage and product pages, retaining the supplied machines and their original settings. The Virelis prototype carries a November 2026 corner label. Earlier Virelis placeholder renders are no longer used on either page.
- The homepage keeps the inward-facing green development render for the standoff. The Mycelis hero and Base/Pro comparison use a matching left-facing Pro render, without mirroring screen/cartridge lettering. Product images are labelled as design renders. The October Mycelis and November Virelis prototype photographs have minor edits, mainly to backgrounds. The loading interaction image is entirely generated and labelled as an intended-design concept. Status statements use 17 November 2026: both Base models are in development, both Pro prototypes are nearing completion and neither Pro is production-ready. Sunday market demonstrations are planned, but no event or date is confirmed; visitors can register interest only.

Keep `privacy.html` aligned with any future mailing-list service changes.

## Layout

The active pages share a 1280px maximum width, consistent columns and responsive type sizes. The product-led theme uses a system sans-serif typeface, rounded panels, soft purple/green gradients and glass-like controls. The homepage standoff places product names over matched photos, with a central plus badge, gentle zoom and pointer-following light. Hover motion is disabled for reduced-motion preferences and pointer tracking only runs for fine, hover-capable pointers. Product images share the same frame proportions. Layout is checked on all seven pages at 1920, 1440, 1024, 820, 390 and 320px, including the mobile navigation. The existing EmailOctopus embed is checked without submitting data. Its duplicate introductory copy is visually hidden while the site's signup introduction and provider branding remain visible.

## Content

Section B owner decisions (17 November 2026): Mycelis is the parent brand and mushroom appliance; Virelis is the microgreens appliance. Site/shop wordmarks use Mycelis, while both product names remain visible. Position the products as premium kitchen appliances for people who value aesthetics and distinctive everyday objects. The intended benefit is fewer things to remember or manage, not proven time savings, hands-off growing or better harvests than a kit. Choice is driven by mushrooms versus microgreens. Design and most manufacturing happen in-house in Christchurch, with selected overseas components; do not turn that into a 100% NZ-made or all-local-sourcing claim. Keep the site product-focused and qualify current prototype limitations positively but explicitly. No new material/wood trim changes or durability claims are implied.

Approved descriptions: Mycelis — “A countertop appliance that automates key parts of growing oyster mushrooms at home.” Virelis — “A compact, three-tier countertop appliance designed to automate watering and help grow fresh microgreens indoors.” Current prototype status remains adjacent; the descriptions do not validate every model's planned automation.

The pages explain the side-loading magnetic Mycelis window, planned ready-to-grow and DIY-compatible cartridges, Virelis seed mats, prototype progress and practical questions. Current progress remains separate from intended model specifications: Mycelis has demonstrated automated mushroom growth with airflow refinement outstanding; Virelis has demonstrated growth with some manual control and needs wider spray coverage/better drip control. Render values do not validate every feature. Preliminary prices are not live offers. FAQ answers use native HTML details elements and work without JavaScript.

Section C (17 November 2026): both versions are intended to grow the same produce with minimal intervention. Pro adds convenience, information and control, not a promise of better harvests. Automatic water delivery is intended for all models; Mycelis also controls humidity/fans and measures temperature/humidity (used internally in Base, displayed on Pro). Virelis is sensorless, with no humidity/fan control. Neither actively heats or cools. Base lighting is manually toggled, with no harvest predictions. Pro uses a touchscreen, automatic light cycles and estimates: species plus room temperature for Mycelis, species alone for Virelis. Accuracy remains unvalidated. No app or cloud connection is required for growing; optional Pro Wi-Fi is for date/time, not remote monitoring/control. No AI growing features at launch. Water doses/schedules may differ without implying better Pro results or identical hardware. The seven-row comparisons keep three detailed answers collapsed for readability.

Mycelis Base's intended single start/stop button, short activation countdown and flashing red error indicator are recorded. Hold its button for three seconds to toggle the light; this is not the countdown length. Virelis Base's three-button actions remain unresolved. Power recovery is an untested design intention: Base should return paused; Pro should recover stored information and obtain date/time via optional Wi-Fi or manual input. Do not promise automatic grow resumption, seamless recovery, empty-reservoir handling, calibrated sensors or validated estimate accuracy.

## Planned consumables — updated 16 November 2026

- Virelis is a three-tier countertop microgreens appliance in development. Automatic growing functions are planned for Base and Pro; prototype grows have still required some manual control. Automatic light cycles are planned for Pro and excluded from Base. Pre-seeded mats and compatible homemade mats are planned.
- Proposed Virelis mat dimensions: 125 × 125 mm, subject to final testing. Thickness, compatible materials and seed guidance remain to be confirmed. Do not confuse mat dimensions with appliance dimensions.
- Confirmed launch refill range: 9 mats / NZ$18, 18 mats / NZ$32, 27 mats / NZ$45. Four selectable varieties: Mixed Greens, Micro Pak Choy, Cress moss and Kohlrabi purple, in multiples of three per variety. Prices remain indicative and exclude shipping. The private shop supports sandbox test checkout, not real orders.
- An optional seed-mat subscription is under consideration: deliveries every 4, 6 or 8 weeks, an ongoing approximately 10% subscriber discount versus one-off packs, possible introductory offers, and easy skipping/pausing/cancellation. No billing, enrolment or final terms are implemented.
- Compact bundles in lightweight recyclable cardboard, with internal protection, are the current packaging direction. Packaging dimensions, shipping rates and shelf life are not confirmed.
- Both products are being designed to support compatible DIY consumables. Mycelis cartridge fit, ventilation, drainage and material requirements will be published after final validation. No prototype internal measurement is presented as maximum external cartridge fit, and no universal third-party compatibility or superior-yield claim is made.
- Preliminary Mycelis packs: Single Cartridge NZ$25 (NZ$25 each), Duo Pack NZ$45 (NZ$22.50 each), Triple Pack NZ$60 (NZ$20 each). Whole-dollar totals follow the owner's 17 November 2026 pricing update. Triple is highlighted as best per-cartridge value. Prices exclude shipping, may change as supplier arrangements are finalised and are not live order offers. The planned cartridges arrive colonised and ready to fruit, prepared by specialist mushroom growers. Expose one fruiting face, grow and harvest, then flip the cartridge and expose the other face to try for further growth. Faces are exposed sequentially, not simultaneously; further growth or a second harvest is not guaranteed, and no particular yield is promised. Local collection/delivery options and suitable varieties' storage instructions/shelf life remain to be confirmed; no refrigeration conditions or storage durations are promised.

Keep the planned-offering sections and FAQs in `virelis.html` / `mycelis.html` aligned when these details change. Public primary actions say **Join the Waitlist**. The small provider-button label adjustment in `js/main.js` changes only its initial wording, not form fields, endpoint, validation or confirmation behaviour.

### Interest collection

The existing EmailOctopus form continues to collect mailing-list signups. Four clearly labelled email links let visitors separately express interest in Mycelis, Virelis, DIY compatibility or future mat subscriptions. These open drafts and send nothing automatically; they don't enrol anyone in marketing, take an order or authorise a subscription. Product-specific DIY email links are on the compatibility sections too. Automatic interest tagging inside EmailOctopus would require configuring corresponding fields/tags in the provider; no unsupported fields or fake preference capture have been added.

### Confirm before launch

- Validate the remaining Base/Pro control actions, screen interface, sensor accuracy, optional clock connectivity, offline/manual date-time input and power recovery; appliance dimensions and clearances. No app or cloud connection is required for growing. The screenless/tactile Base versus touchscreen Pro distinction applies to both products.
- Validate the automatic growing systems, Pro growth-duration estimates and Pro light cycles, plus final care/cleaning instructions. Do not add automatic light cycles or predictions to Base copy.
- Virelis mat size/thickness, growing materials, seed range and mix/selection options.
- Validated Mycelis cartridge fit, ventilation, drainage and material guidance.
- Final refill contents and prices, packaging dimensions, storage conditions/shelf life and shipping rates. The owner has confirmed 9-, 18- and 27-mat packs as the intended launch range; this does not make them available to order now.
- Mycelis supplier arrangements, final cartridge pack pricing, local collection/delivery options, and tested storage instructions and shelf life by suitable variety.
- Subscription intervals, standing/introductory discounts and skipping/pausing/cancellation terms.
- Final machine/refill totals, delivery expectations, tax/shipping treatment and order/refund terms before any checkout opens.

## Food and nutrition information

The homepage introduces the food as well as the appliances. Each product page has a food section, visible limitations and expandable research references. Mycelis separates general oyster-mushroom composition data from pink-oyster cultivation research. Virelis gives radish, pea and red-cabbage examples, explicitly not a confirmed seed range. Neither machine's harvest has been nutritionally tested. Do not turn composition measurements or laboratory antioxidant results into claims about immunity, disease prevention, guaranteed nutrient content or nutritional superiority over ordinary kits. A disclaimer is not a substitute for substantiation. Before selling food or cartridges with nutrition or health claims, review the specific wording, serving composition and applicable NZ requirements.

## Preorder preview

`preorder.html` is a legacy entry page linking to the existing password-protected Cloudflare shop at `/store`, not a public catalogue or checkout. Its `noindex` tag is not access control; the separate shop enforces authentication server-side. Both appliances retain indicative NZ$249 Base / NZ$349 Pro prices and development labels. The shop only uses Stripe sandbox: no real orders, reservations, payments or bonus redemptions. Any live launch needs separate approval, validated specifications, fulfilment arrangements and final terms.

## Signup interest

Keep the existing EmailOctopus form and list. Its optional single-choice Signup interest field offers Development updates or Purchase interest, with no default selection. The site explains both choices and that signup does not reserve a machine or guarantee a production-batch place. A read-only browser check confirmed the two choices; no signup or email delivery test was performed. Do not infer purchase intent from a blank preference or reclassify existing subscribers without evidence.
