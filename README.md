# Mycelis + Virelis website

A lightweight, dependency-free static website for GitHub Pages.

## Routes

- `index.html` — product-family homepage and EmailOctopus mailing list
- `mycelis.html` — Mycelis product story
- `virelis.html` — Virelis product story
- `about.html` — development approach
- `contact.html` — contact details
- `privacy.html` — privacy information
- `preorder.html` — unlinked, no-index entry to the separate password-protected shop preview; not a live checkout

## Preview

Open `index.html` directly or serve this directory with a static file server.

## GitHub Pages

Place this directory's contents at the repository root. In **Settings → Pages**, choose **Deploy from a branch**, then select `main` and `/ (root)`.

All internal paths are relative and require no backend, build process, package installation, or environment variables.

The private shop is separately hosted at https://mycelis-virelis-private-store.growmycelis.workers.dev. The public Purchase entry links there; it does not contain the private catalogue or password. Server-side protection runs before every storefront asset. Shop source is deliberately outside this public GitHub Pages repository. The shop includes mushroom choices and microgreen mixes in groups of three; no live ordering or checkout is enabled.

## Current limitations

- The mailing list uses the supplied EmailOctopus inline form. Its fields and confirmation behaviour are managed in EmailOctopus; `privacy.html` describes this connection.
- Product renders and prototype photos use matched 1000 × 1250 (4:5) photographic crops on the homepage and product pages, retaining the supplied machines and their original settings. The Virelis prototype carries a November 2026 corner label. Earlier Virelis placeholder renders are no longer used on either page.
- The homepage and Mycelis hero use the supplied green development render. Both pages use the new supplied photo of pink oyster mushrooms growing in the black-and-white machine as the current October 2026 prototype. Mycelis is nearly ready for its first in-person showing; a date has not been announced.

Keep `privacy.html` aligned with any future mailing-list service changes.

## Layout

The active pages share a 1280px maximum width, consistent columns and responsive type sizes. The product-led theme uses a system sans-serif typeface, rounded panels, soft purple/green gradients and glass-like controls. The homepage standoff places product names over matched photos, with a central plus badge, gentle zoom and pointer-following light. Hover motion is disabled for reduced-motion preferences and pointer tracking only runs for fine, hover-capable pointers. Product images share the same frame proportions. Layout is checked on all seven pages at 1920, 1440, 1024, 820, 390 and 320px, including the mobile navigation. The existing EmailOctopus embed is checked without submitting data. Its duplicate introductory copy is visually hidden while the site's signup introduction and provider branding remain visible.

## Content

The pages explain the side-loading magnetic Mycelis window, planned ready-to-grow and DIY-compatible cartridges, Virelis automatic growing plans and seed mats, prototype progress, and practical questions. Both products have the same planned control split: Base is automatic but screenless, with tactile buttons and no growth-duration prediction or automatic light cycles. Pro adds a screen, duration estimates and automatic light cycles. The Base/Pro comparisons now include the supplied button-controlled Base design renders beside the screen-equipped Pro design renders. Existing dated prototype photos are preserved. Predictions are estimates, never guaranteed harvest dates; accuracy and remaining specifications still need validation. Copy uses a conversational brand voice. Final specifications, seed/cartridge ranges and release dates are not invented; supplied preliminary prices are identified as plans, not live offers. FAQ answers use native HTML details elements and work without JavaScript.

## Planned consumables — updated 16 November 2026

- Virelis is a compact three-tier countertop microgreens appliance with automatic growing functions in both Base and Pro. Automatic light cycles are a Pro feature, not part of Base. Pre-seeded mats and compatible homemade mats are both planned.
- Proposed Virelis mat dimensions: 125 × 125 mm, subject to final testing. Thickness, compatible materials and seed guidance remain to be confirmed. Do not confuse mat dimensions with appliance dimensions.
- Planned standard pack: 9 mats / NZ$18, providing three full cycles with three mats per cycle across three tiers. Planned larger pack: 18 mats / NZ$32. Potential future bulk option only: 27 mats / NZ$45. These prices are preliminary and no purchase links are enabled.
- An optional seed-mat subscription is under consideration: deliveries every 4, 6 or 8 weeks, an ongoing approximately 10% subscriber discount versus one-off packs, possible introductory offers, and easy skipping/pausing/cancellation. No billing, enrolment or final terms are implemented.
- Compact bundles in lightweight recyclable cardboard, with internal protection, are the current packaging direction. Packaging dimensions, shipping rates and shelf life are not confirmed.
- Both products are being designed to support compatible DIY consumables. Mycelis cartridge fit, ventilation, drainage and material requirements will be published after final validation. No prototype internal measurement is presented as maximum external cartridge fit, and no universal third-party compatibility or superior-yield claim is made.
- Preliminary Mycelis packs: Single Cartridge NZ$24.99 (NZ$24.99 each), Duo Pack NZ$44.99 (NZ$22.50 each, rounded), Triple Pack NZ$59.99 (NZ$20.00 each, rounded). Triple is highlighted as best per-cartridge value. These prices exclude shipping, may change as supplier arrangements are finalised and are not available to order. The planned cartridges arrive colonised and ready to fruit, prepared by specialist mushroom growers. The design supports front and rear fruiting, without a double-yield claim. Local collection/delivery options and suitable varieties' storage instructions/shelf life remain to be confirmed; no refrigeration conditions or storage durations are promised.

Keep the planned-offering sections and FAQs in `virelis.html` / `mycelis.html` aligned when these details change. Public primary actions say **Join the Waitlist**. The small provider-button label adjustment in `js/main.js` changes only its initial wording, not form fields, endpoint, validation or confirmation behaviour.

### Interest collection

The existing EmailOctopus form continues to collect mailing-list signups. Four clearly labelled email links let visitors separately express interest in Mycelis, Virelis, DIY compatibility or future mat subscriptions. These open drafts and send nothing automatically; they don't enrol anyone in marketing, take an order or authorise a subscription. Product-specific DIY email links are on the compatibility sections too. Automatic interest tagging inside EmailOctopus would require configuring corresponding fields/tags in the provider; no unsupported fields or fake preference capture have been added.

### Confirm before launch

- Validate the remaining Base/Pro specifications, screen interface and any app requirements; appliance dimensions and clearances. The screenless/tactile Base versus screen-equipped Pro distinction applies to both products.
- Validate the automatic growing systems, Pro growth-duration estimates and Pro light cycles, plus final care/cleaning instructions. Do not add automatic light cycles or predictions to Base copy.
- Virelis mat size/thickness, growing materials, seed range and mix/selection options.
- Validated Mycelis cartridge fit, ventilation, drainage and material guidance.
- Refill contents and prices, whether the 27-mat bulk option proceeds, packaging dimensions, storage conditions/shelf life and shipping rates.
- Mycelis supplier arrangements, final cartridge pack pricing, local collection/delivery options, and tested storage instructions and shelf life by suitable variety.
- Subscription intervals, standing/introductory discounts and skipping/pausing/cancellation terms.
- Final machine/refill totals, delivery expectations, tax/shipping treatment and order/refund terms before any checkout opens.

## Food and nutrition information

The homepage introduces the food as well as the appliances. Each product page has a food section, visible limitations and expandable research references. Mycelis separates general oyster-mushroom composition data from pink-oyster cultivation research. Virelis gives radish, pea and red-cabbage examples, explicitly not a confirmed seed range. Neither machine's harvest has been nutritionally tested. Do not turn composition measurements or laboratory antioxidant results into claims about immunity, disease prevention, guaranteed nutrient content or nutritional superiority over ordinary kits. A disclaimer is not a substitute for substantiation. Before selling food or cartridges with nutrition or health claims, review the specific wording, serving composition and applicable NZ requirements.

## Preorder preview

`preorder.html` shows Mycelis Base NZ$249 / Pro NZ$349 and Virelis Base NZ$249 / Pro NZ$349. It is absent from site navigation and has a `noindex, nofollow, noarchive` robots meta tag. This is obscurity, not access control: anyone with the URL or repository access can read it.

The four Request links open separate, prefilled email drafts; they do not send automatically, collect payments, create orders, reserve stock, or subscribe anyone to marketing. Cards now state the planned Base/Pro control differences for both products. Remaining inclusions, delivery, tax/shipping treatment and order terms still need confirmation. No payment keys or pretend checkout have been added. To launch paid preorders, configure four hosted checkout links after validating the remaining model specifications, fulfilment expectations and terms; then update the preview labels and Request actions to match the actual purchase flow.
