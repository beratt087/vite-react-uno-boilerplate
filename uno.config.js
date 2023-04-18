import { defineConfig } from "vite"
import {
    presetAttributify,
    presetIcons,
    presetUno,
    presetWind,
    presetWebFonts,
} from "unocss"
import transformerAttributifyJsx from "@unocss/transformer-attributify-jsx"
import transformerVariantGroup from "@unocss/transformer-variant-group"

export default defineConfig({
    presets: [
        presetWind(),
        presetUno(),
        presetWebFonts({
            provider: "google",
            fonts: {
                sans: "Poppins",
                mono: "Fira Code",
            },
        }),
        presetAttributify({
            strict: true,
            prefix: "by-",
            prefixedOnly: true,
            nonValuedAttribute: true,
        }),
        presetIcons(),
    ],
    transformers: [transformerAttributifyJsx(), transformerVariantGroup()],
})
