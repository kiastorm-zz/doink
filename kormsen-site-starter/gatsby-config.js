module.exports = {
  siteMetadata: {
    title: `Kormsen`,
    description: `God is good`,
    author: `Kia Storm`,
    siteUrl: `https://kormsen-site-starter.netlify.com`, //Change to you site address, required for sitemap.xml and robots.txt file
    pageLinks: [
      {
        name: `Design System`,
        link: `/design-system`,
      },
      {
        name: `Page 2`,
        link: `/page-2`,
      },
    ],
    anchorLinks: [
      {
        name: `Anchor 1`,
        link: `#anchor1`,
      },
      {
        name: `Anchor 2`,
        link: `#anchor2`,
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        url: `kia@kormsen.com`,
        location: `footer`, //Options are "all", "header", "footer"
      },
      {
        name: `Github`,
        url: `https://www.github.com/kiastorm`,
        location: `all`, //Options are "all", "header", "footer"
      },
      {
        name: `Twitter`,
        url: `https://www.twitter.com/kormsen`,
        location: `header`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-kormsen`,
      options: {
        displaySiteLogo: true,
        displaySiteTitle: true,
        headerType: "topnav",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'sights',
        path: `${__dirname}/src/content/sights`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'sounds',
        path: `${__dirname}/src/content/sounds`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'thoughts',
        path: `${__dirname}/src/content/thoughts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `dev`,
        path: `${__dirname}/src/content/wiki/dev`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `design`,
        path: `${__dirname}/src/content/wiki/design`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `life`,
        path: `${__dirname}/src/content/wiki/life`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kormsen-site-starter`,
        short_name: `kormsen`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo-512.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
