import type { NextConfig } from "next";

import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextra(nextConfig);