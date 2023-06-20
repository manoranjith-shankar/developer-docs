/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
import { useRouter } from 'next/router';

const github = 'https://github.com/dataverse-os';

const EDIT_LINK_WITH_TRANSLATIONS = {
  'en-US': 'Edit this page on GitHub →',
} as const;

import { DocsThemeConfig, useConfig, useTheme } from 'nextra-theme-docs';

const Logo = ({ height, width }: { height: number; width: number }) => {
  const { theme } = useTheme();
  return (
    <div style={{ alignItems: 'center', display: 'flex', gap: '8px' }}>
      <svg
        width={height || 18}
        height={width || 18}
        viewBox="0 0 60 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.00584762 20.072C0.0642717 19.5228 0.556837 19.125 1.10602 19.1834C3.7647 19.4663 7.17306 20.6581 10.5875 23.1355C11.0345 23.4598 11.134 24.0851 10.8096 24.5321C10.4853 24.9791 9.85999 25.0786 9.41297 24.7543C6.25224 22.4609 3.17089 21.4144 0.89445 21.1722C0.345265 21.1138 -0.0525764 20.6212 0.00584762 20.072ZM14.3629 27.9072C14.7885 27.5552 15.4188 27.6149 15.7708 28.0405C21.1513 34.5465 25.5002 44.1562 25.5002 60.6778C25.5002 61.2301 25.0525 61.6778 24.5002 61.6778C23.948 61.6778 23.5002 61.2301 23.5002 60.6778C23.5002 44.5517 19.272 35.4122 14.2296 29.3151C13.8776 28.8895 13.9373 28.2592 14.3629 27.9072Z"
          fill="url(#paint0_linear_1_10150)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.0300941 25.9353C0.164043 25.3995 0.706977 25.0737 1.24277 25.2077C5.09849 26.1716 11.0208 29.7321 15.1752 37.1912C15.4439 37.6737 15.2706 38.2827 14.7881 38.5515C14.3056 38.8202 13.6966 38.6469 13.4279 38.1644C9.52769 31.1616 4.04817 27.9706 0.757701 27.148C0.221906 27.014 -0.103855 26.4711 0.0300941 25.9353ZM15.8161 40.7465C16.3304 40.5453 16.9105 40.7992 17.1117 41.3135C18.8645 45.7939 20.0002 50.3564 20.0002 57.1778C20.0002 57.7301 19.5525 58.1778 19.0002 58.1778C18.448 58.1778 18.0002 57.7301 18.0002 57.1778C18.0002 50.6271 16.9193 46.3112 15.2492 42.0421C15.048 41.5278 15.3018 40.9478 15.8161 40.7465Z"
          fill="url(#paint1_linear_1_10150)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.0240495 33.4609C0.143857 32.9218 0.678034 32.5818 1.21717 32.7016C3.80489 33.2767 6.74978 35.4957 9.02689 39.0089C11.3246 42.554 13.0002 47.4947 13.0002 53.6778C13.0002 54.2301 12.5525 54.6778 12.0002 54.6778C11.448 54.6778 11.0002 54.2301 11.0002 53.6778C11.0002 47.8609 9.42583 43.3016 7.34858 40.0967C5.2507 36.86 2.69559 35.079 0.783306 34.654C0.244173 34.5342 -0.0957579 34 0.0240495 33.4609Z"
          fill="url(#paint2_linear_1_10150)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.00519936 41.5783C0.0601538 41.0288 0.550196 40.6278 1.09974 40.6828C2.7777 40.8506 5.28379 42.2699 6.40949 45.8801C6.57389 46.4074 6.27975 46.9681 5.7525 47.1325C5.22525 47.2969 4.66456 47.0027 4.50016 46.4755C3.59589 43.5754 1.72398 42.7552 0.900733 42.6729C0.351189 42.6179 -0.049755 42.1279 0.00519936 41.5783Z"
          fill="url(#paint3_linear_1_10150)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.6225 1.83787C24.7279 0.633604 27.1146 0 29.5436 0C31.9725 0 34.3592 0.633604 36.4646 1.83787L59.0871 14.8048V48.6813L29.5411 65.6006L0 48.6812V14.8048L22.6225 1.83787ZM23.6155 3.57394C23.6154 3.57402 23.6157 3.57386 23.6155 3.57394L2 15.9636V47.5219L29.5412 63.2959L57.0871 47.5219V15.9636L35.4716 3.57394C35.4714 3.57386 35.4717 3.57402 35.4716 3.57394C33.6692 2.54312 31.6246 2 29.5436 2C27.4625 2 25.4179 2.54312 23.6155 3.57394Z"
          fill="url(#paint4_linear_1_10150)"
        />
        <path
          d="M35.9681 2.7059L58.0871 15.3842V48.1016L29.5411 64.4482C29.5411 22.062 6.54394 15.3843 1 15.3843L23.119 2.7059C25.073 1.58828 27.2885 1 29.5436 1C31.7986 1 34.0141 1.58828 35.9681 2.7059Z"
          fill="url(#paint5_linear_1_10150)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_10150"
            x1="12.7501"
            y1="0.500001"
            x2="12.7501"
            y2="66"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5FC4F1" />
            <stop offset="0.0001" stop-color="#5FC4F1" />
            <stop offset="1" stop-color="#007AFF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_10150"
            x1="12.7501"
            y1="0.500001"
            x2="12.7501"
            y2="66"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5FC4F1" />
            <stop offset="0.0001" stop-color="#5FC4F1" />
            <stop offset="1" stop-color="#007AFF" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_10150"
            x1="12.7501"
            y1="0.500001"
            x2="12.7501"
            y2="66"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5FC4F1" />
            <stop offset="0.0001" stop-color="#5FC4F1" />
            <stop offset="1" stop-color="#007AFF" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1_10150"
            x1="12.7501"
            y1="0.500001"
            x2="12.7501"
            y2="66"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5FC4F1" />
            <stop offset="0.0001" stop-color="#5FC4F1" />
            <stop offset="1" stop-color="#007AFF" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1_10150"
            x1="29.5436"
            y1="0"
            x2="29.5436"
            y2="65.6006"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5FC4F1" />
            <stop offset="1" stop-color="#007AFF" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_1_10150"
            x1="29.5436"
            y1="0"
            x2="29.5436"
            y2="65.6006"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5FC4F1" />
            <stop offset="1" stop-color="#007AFF" />
          </linearGradient>
        </defs>
      </svg>

      <span style={{ fontWeight: 'bold', fontSize: 18 }}>DataverseOS Docs</span>
    </div>
  );
};

const config: DocsThemeConfig = {
  docsRepositoryBase: `${github}/blob/main`,
  chat: {
    link: 'https://discord.gg/BnCek4e6ny',
  },
  banner: {
    key: 'docs-launch',
    // text: (
    //   <div className="flex justify-center items-center gap-2">
    //     Welcome to the new, unified DataverseOS documentation! 👋
    //   </div>
    // ),
  },
  toc: {
    float: true,
  },
  project: {
    link: github,
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  primaryHue: {
    dark: 195,
    light: 212,
  },
  footer: {
    text: `MIT ${new Date().getFullYear()} © Ownership Labs.`,
  },
  logo() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (
      <div className="flex items-center gap-2">
        <Logo width={28} height={28} />
      </div>
    );
  },
  useNextSeoProps() {
    return {
      titleTemplate: `%s - DataverseOS Documentation`,
    };
  },
  head() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { frontMatter } = useConfig();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { theme } = useTheme();
    const title = frontMatter?.title || 'Build on DataverseOS';
    const description =
      frontMatter?.description ||
      'Explore guides and a variety of resources to help you get started adding live and on demand video experiences to your application using the open and decentralized Livepeer Protocol.';
    const image = frontMatter?.type
      ? `https://docs.livepeer.org/api/og?title=${frontMatter?.ogImageText}&category=Developing`
      : frontMatter?.image || '/og.jpg';
    const folder = theme === 'light' ? '/light' : '/dark';

    const composedTitle = `${title} – DataverseOS Documentation`;

    return (
      <>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${folder}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${folder}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${folder}/favicon-16x16.png`}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#00a300" />
        <link rel="manifest" href={`${folder}/site.webmanifest`} />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="title" content={composedTitle} />
        <meta name="description" content={description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@livepeer" />
        <meta name="twitter:image" content={image} />

        <meta property="og:description" content={description} />
        <meta property="og:title" content={composedTitle} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta
          name="apple-mobile-web-app-title"
          content="Livepeer Documentation"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YNF68V1ND1"
        ></script>
        <script>
          {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
 
             gtag('config', 'G-YNF68V1ND1');
           `}
        </script>
      </>
    );
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent: ({ title, type }) =>
      type === 'separator' ? (
        <div className="flex items-center gap-2">
          <Logo height={10} width={10} />
          {title}
        </div>
      ) : (
        <>{title}</>
      ),
  },
  editLink: {
    text() {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { locale } = useRouter();
      return (
        <>
          {
            EDIT_LINK_WITH_TRANSLATIONS[
              (locale as keyof typeof EDIT_LINK_WITH_TRANSLATIONS) ?? 'en-US'
            ]
          }
        </>
      );
    },
  },
  i18n: [{ locale: 'en-US', text: 'English' }],
  gitTimestamp: ({ timestamp }) => (
    <>Last updated on {timestamp.toLocaleDateString()}</>
  ),
};

export default config;
