import { PlayIcon } from "lucide-react";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { Link, ThemeSwitch } from "ui.landing";

function getCurrentYear(): number {
  return new Date().getFullYear();
}

const config: DocsThemeConfig = {
  logo: (
    <>
      <PlayIcon size={20} />
    </>
  ),
  sidebar: {
    toggleButton: true,
  },
  banner: {
    content: "Landing.UI, the ShadCN for landing pages.",
  },
  color: {
    hue: 200,
    lightness: 50,
    saturation: 50,
  },
  docsRepositoryBase:
    "https://github.com/PanagiotisPitsikoulis/landing.monorepo",
  footer: {
    component: (
      <footer className='container mx-auto max-w-7xl pb-12 px-12'>
        <div className='flex flex-col justify-center items-center gap-1'>
          <p className='text-sm text-default-400'>
            © {getCurrentYear()} LandingUI. All Rights Reserved.
          </p>
          <p className='text-sm text-default-400'>
            Created By
            <Link
              color='foreground'
              size='sm'
              showAnchorIcon
              isExternal
              href={"https://www.panagiotispitsikoulis.gr"}
            >
              Pangiotis Pitsikoulis
            </Link>
          </p>
        </div>
      </footer>
    ),
  },
  project: {
    link: "https://github.com/PanagiotisPitsikoulis/landing.monorepo",
  },
};
export default config;
