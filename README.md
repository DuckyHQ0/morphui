# MorphUI

## Version 0.2 Beta (Unfinished!)

A modern, open source React UI kit for DuckyHQ projects.

Figma design file with components is [here](https://www.figma.com/community/file/1322693203140901897/morphui-wip).

### How this project works

This is using Next.js, and Storybook. You're gonna wanna use `npm run storybook` to start the dev server. All the components are inside the components folder. And the stories are separate, in the stories folder.

### Installation for your own projects

This will not be an NPM module. What you have to do is get this source code (clone, or download zip), then copy the Tailwind input file (/app/globals.css), the Tailwind config (tailwind.config.ts), then the entire components folder, all into your own project, replacing the old files. Then just use the components like you normally would, and the Tailwind classes.

### Tailwind config info

The spacing system is literal, so `p-32` equals exactly 32 pixels: `padding: 32px;`.

### Fonts

#### Next.js

Put this code inside your `layout.tsx`:

```tsx
import { Outfit, JetBrains_Mono } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400"],
});
```

And add this className to your main body tag:

```tsx
className={`${jetBrainsMono.variable} ${outfit.variable} font-sans text-text-1`}
```

#### Other frameworks

You could use Google Fonts, or FontSource, but make sure the fonts work with Tailwind CSS, so they can be used with the fontFamily definitions in the config.
