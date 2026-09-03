# `lgs1920-countdown`

`lgs1920-countdown` is a standalone Web Component that renders a localized countdown with Web Awesome digit cards. It does not depend on the LGS1920 site layout, registration page, hero variables, or seasonal data. The host application only needs to provide the Web Awesome theme and, optionally, its own custom properties.

## Basic usage

The only required value is an ISO 8601 target date. Include an explicit timezone so the target is unambiguous across browsers and locations.

```html
<lgs1920-countdown
    lang="en"
    target-date="2026-12-31T23:59:59+01:00"
></lgs1920-countdown>
```

The component renders four units in this order:

```text
Days     Hours     Minutes     Seconds
```

`lang="fr"` changes the labels to `Jours`, `Heures`, `Minutes`, and `Secondes`. If `lang` is omitted, the component uses the nearest language declaration and falls back to English.

## Attributes

| Attribute | Values | Default | Behavior |
| --- | --- | --- | --- |
| `target-date` | ISO 8601 date/time | None | Counts down to the target. Missing or invalid values render an error state. |
| `lang` | `en`, `fr` | Inherited language or `en` | Localizes the unit labels and validation messages. |
| `appearance` | `filled`, `outlined`, `filled-outlined` | `filled-outlined` | Selects the Web Awesome card treatment for every digit. |
| `animation` | `flip`, `fade` | `flip` | Selects the transition used when a digit changes. |
| `ratio` | Any positive finite number | `1.618033988749895` | Sets the card `height / width` ratio. The default is the golden ratio. |

### `target-date` validation

The countdown accepts targets up to 999 days from the current time. Days use one to three cards, with a maximum value of `999`. Hours, minutes, and seconds always use two cards and are zero-padded.

- A missing target displays a localized error message.
- An invalid date displays a localized error message.
- A target more than 999 days away displays a localized range error.
- An expired target remains visible at `0` days, `00` hours, `00` minutes, and `00` seconds.

```html
<!-- Accepted: days are within the three-card limit -->
<lgs1920-countdown target-date="2026-12-31T23:59:59+01:00"></lgs1920-countdown>

<!-- Invalid: this is not an ISO 8601 date -->
<lgs1920-countdown target-date="not-a-date"></lgs1920-countdown>
```

### `ratio`

The ratio is calculated as `height / width`. It must be a positive finite number. Invalid values fall back to the golden ratio.

```html
<lgs1920-countdown
    ratio="1.25"
    target-date="2026-12-31T23:59:59+01:00"
></lgs1920-countdown>
```

## Card appearances

The component uses the standard Web Awesome appearance names:

- `filled`: opaque themed fill without a border;
- `outlined`: transparent background with a standard border;
- `filled-outlined`: opaque themed fill with a standard border.

```html
<lgs1920-countdown appearance="filled" target-date="2026-12-31T23:59:59+01:00"></lgs1920-countdown>
<lgs1920-countdown appearance="outlined" target-date="2026-12-31T23:59:59+01:00"></lgs1920-countdown>
<lgs1920-countdown appearance="filled-outlined" target-date="2026-12-31T23:59:59+01:00"></lgs1920-countdown>
```

## Digit animations

`flip` is the default transition for `filled` and `filled-outlined`. It uses the horizontal FlipDown-style rotor: the upper leaf rotates around the horizontal center axis and reveals the next value on its reverse face.

`fade` is available with every appearance. It fades the complete digit in and out, without using a rotor. The full fade lasts 650 ms, the same duration as the flip transition.

`outlined` never uses a rotor. When `animation="flip"` is requested with `appearance="outlined"`, the component automatically resolves the transition to `fade`.

```html
<!-- FlipDown-style transition -->
<lgs1920-countdown
    appearance="filled-outlined"
    animation="flip"
    target-date="2026-12-31T23:59:59+01:00"
></lgs1920-countdown>

<!-- Fade transition with a filled card -->
<lgs1920-countdown
    appearance="filled"
    animation="fade"
    target-date="2026-12-31T23:59:59+01:00"
></lgs1920-countdown>

<!-- The requested flip is automatically replaced by fade -->
<lgs1920-countdown
    appearance="outlined"
    animation="flip"
    target-date="2026-12-31T23:59:59+01:00"
></lgs1920-countdown>
```

## Theme integration

The component inherits Web Awesome color, typography, spacing, border, and radius tokens. It does not read site-specific variables. Its default filled surface is derived from `--wa-color-brand-fill-quiet`, and its default digit color is `--wa-color-brand`.

The following component properties can be overridden by the host application:

| Custom property | Purpose | Default |
| --- | --- | --- |
| `--lgs-countdown-card-surface` | Filled card and rotor background | A mix of `--wa-color-brand-fill-quiet` and `--wa-color-neutral-10` |
| `--lgs-countdown-brand-color` | Digit color | `--wa-color-brand` |
| `--lgs-countdown-legend-color` | Unit label color | `--wa-color-text-normal` |
| `--lgs-countdown-card-radius` | Digit card and leaf radius | `--wa-panel-border-radius` |
| `--lgs-countdown-digit-gap` | Gap between digits in one unit | `--wa-space-3xs` (`2px`) |
| `--lgs-countdown-unit-gap` | Gap between Days, Hours, Minutes, and Seconds | `--wa-space-xs` |
| `--lgs-countdown-card-gap` | Width calculation spacing budget | `--wa-space-s` |

The visible gap between digits in one unit is controlled by `--lgs-countdown-digit-gap` and defaults to Web Awesome's `--wa-space-3xs` token (`2px`). The unit gap is independent from that digit gap. A host application can apply its own spacing, seasonal, or brand values without coupling that data to the component:

```css
.launch-countdown {
    --lgs-countdown-card-surface: color-mix(in oklab, var(--wa-color-brand-fill-quiet) 72%, var(--wa-color-neutral-10) 28%);
    --lgs-countdown-brand-color: var(--wa-color-brand);
    --lgs-countdown-legend-color: var(--wa-color-text-normal);
    --lgs-countdown-card-radius: var(--wa-panel-border-radius);
    --lgs-countdown-digit-gap: var(--wa-space-3xs);
}
```

## Registration-page example

The LGS1920 registration page uses the component as a normal host application would. The page selects the recommended `filled-outlined` appearance and supplies its own localized copy and seasonal surface override. The Web Component itself remains independent from this page:

```html
<p>We're working on something amazing. We'll be launching it in a few days. Stay tuned !</p>
<lgs1920-countdown
    class="launch-countdown"
    lang="en"
    appearance="filled-outlined"
    animation="flip"
    target-date="2026-10-15T15:00:00+02:00"
></lgs1920-countdown>
```

The French page uses the same component contract with `lang="fr"` and the localized message:

```html
<p>Nous travaillons sur un truc sympa. Nous le lancerons dans quelques jours. Restez à l’écoute !</p>
<lgs1920-countdown
    class="launch-countdown"
    lang="fr"
    appearance="filled-outlined"
    animation="flip"
    target-date="2026-10-15T15:00:00+02:00"
></lgs1920-countdown>
```
