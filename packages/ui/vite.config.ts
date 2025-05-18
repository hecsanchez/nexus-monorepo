import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      include: ["src/**/*"],
      exclude: ["src/**/*.stories.tsx", "src/**/*.test.tsx"],
      rollupTypes: true,
      insertTypesEntry: true,
      staticImport: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "NexusUI",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "umd"],
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "clsx",
        "tailwind-merge",
        "@radix-ui/react-avatar",
        "@radix-ui/react-checkbox",
        "@radix-ui/react-dialog",
        "@radix-ui/react-dropdown-menu",
        "@radix-ui/react-icons",
        "@radix-ui/react-popover",
        "@radix-ui/react-select",
        "@radix-ui/react-separator",
        "@radix-ui/react-slot",
        "@radix-ui/react-switch",
        "@radix-ui/react-tooltip",
        "@radix-ui/react-compose-refs",
        "class-variance-authority",
        "cmdk",
        "lucide-react",
        "@tanstack/react-table"
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-router-dom": "ReactRouterDOM",
          clsx: "clsx",
          "tailwind-merge": "tailwindMerge",
          "@radix-ui/react-avatar": "RadixAvatar",
          "@radix-ui/react-checkbox": "RadixCheckbox",
          "@radix-ui/react-dialog": "RadixDialog",
          "@radix-ui/react-dropdown-menu": "RadixDropdownMenu",
          "@radix-ui/react-icons": "RadixIcons",
          "@radix-ui/react-popover": "RadixPopover",
          "@radix-ui/react-select": "RadixSelect",
          "@radix-ui/react-separator": "RadixSeparator",
          "@radix-ui/react-slot": "RadixSlot",
          "@radix-ui/react-switch": "RadixSwitch",
          "@radix-ui/react-tooltip": "RadixTooltip",
          "@radix-ui/react-compose-refs": "RadixComposeRefs",
          "class-variance-authority": "classVarianceAuthority",
          "cmdk": "cmdk",
          "lucide-react": "lucideReact",
          "@tanstack/react-table": "TanstackTable"
        },
        assetFileNames: "styles.css"
      },
    },
    sourcemap: true,
    minify: true,
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src")
      }
    ],
    preserveSymlinks: true,
  },
})
