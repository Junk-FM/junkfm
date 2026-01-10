# <span style="color:#F092BE; font-family: Impact, Haettenschweiler, 'Arial Black', sans-serif; font-weight: 200; letter-spacing: 0.02em;">JUNK FM</span> - 2026 SITE UPDATE

<span style="color:#FFFD98; font-family: 'Poppins', sans-serif;">React</span> + <span style="color:#9D8DF1;">TypeScript</span> + <span style="color:#B7DE95;">Vite</span><br />
<span style="color:#81A4CD; font-weight:700;">Mantine v6</span> + Emotion + React Router v7<br />

I am a big dumbass giraffe dumptruck poop wagon, but I can still update this list when we add new toys. Please do the same.
<span style="color:#FFFD98;">✨</span> Also: if you add a library, update this line so Tyler doesn’t think we’ve gone feral.

## <span style="color:#F68E5F;">BUILD STUFF</span> (NETLIFY MAGIC)

Live preview: <span style="color:#81A4CD;">[junkfm.netlify.app](https://junkfm.netlify.app/)</span><br />
Main site _(eventually)_: <span style="color:#B7DE95;">[junkfm.com](https://junkfm.com)</span>

You can work on `main`, but please consider a feature branch (I'll do the same if Tyler or other contributors pop up). _💡 Pushing changes to `main` will trigger a Netlify build and update the preview URL after a few minutes._

## <span style="color:#6CFF5C;">QUICK START</span> (VITE VROOM VROOM)

**RUN IT:** <span style="color:#FFFD98;">(new friends start here)</span>

```bash
npm install
npm run dev
```

If you're in VSCode, you can also use the shortcut:

1. Hold <span style="color:#F092BE;">`CONTROL + OPTION + COMMAND + r + t`</span> _(opens command palette with the_ <span style="color:#81A4CD;">`🚀Dev`</span> _workflow selected)_
2. Press <span style="color:#B7DE95;">`ENTER`</span> _(runs the app)_

**STOP IT:** <span style="color:#F092BE;">(a.k.a. stop the chaos)</span>

1. In VSCode, run <span style="color:#F68E5F;">`CONTROL + OPTION + COMMAND + k`</span> _(kills all pertinent processes)_
2. Or just <span style="color:#FFFD98;">`COMMAND + c`</span> in the terminal like a normal nerd

## <span style="color:#81A4CD;">SCRIPTS</span> (THE USUAL SUSPECTS)

```bash
npm run dev      # local dev server
npm run build    # typecheck + build
npm run preview  # preview production build
npm run lint     # eslint
```

## <span style="color:#B7DE95;">BORING CRAP</span> (BUT PLEASE READ ANYWAY)

### <span style="color:#FFFD98;">PROJECT DEV NOTES</span>

- **PageHelmet:** Wraps meta tags and social preview. Provider lives in `src/main.tsx`, component in `src/Globals/PageHelmet.tsx`. Use `<PageHelmet title="Page" />` in routes for clean titles.
- **Barrel exports:** We use `index.ts` files everywhere. Prefer importing from `@junkfm` instead of deep paths (see `src/index.ts`).
- **Structure:** `src/routes` = pages, `src/components` = reusable chunks, `src/Globals` = theme + global styles + utilities, `src/hooks` = reusable logic, `src/assets` = images.

### <span style="color:#FFFD98;">PROJECT STYLE NOTES</span>

- **Fonts:** Google fonts won’t load here, so it falls back to system fonts. Header above is Impact (if you have that onboard), but please stick to Oswald (see global text styles) in lieu of Impact for the sake of originality in this project. Poppins is main body font. Tilt Neon imported and sorta kinda abandoned.
- **Text styles:** `src/Globals/useGlobalStyles.ts` defines h1–h6 + p sizing/weights. Use those before inventing new ones.
- **Colors:** Avoid hex - use imports from `src/Globals/useGlobalStyles.ts`

### <span style="color:#FFFD98;">TODO / LOUD IDEAS</span>

1. Add site context for global state availability (route-aware goodies).
2. Expand and randomize the silent hero video clips (10 to 20 short, 3-to-5-second clips) so nobody gets the same opener series twice.
3. Make playlist data editable via a simple external source (JSON, Google Sheets, or something equally lazy).
4. MORE EASTER EGGS.
5. Update color scheme globals and eradicate rogue hex usage (imports only).
6. Scroll behavior: keep position on back/forward, snap to top on new page load.

##### I will add more automation later. Steal at will, but leave snacks.
