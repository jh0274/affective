export default defineAppConfig({
  alpine: {
    title: 'Folkie io',
    description: 'JFDI',
    image: {
      src: '/130797-mandolin-banjo-png-download-free.png',
      alt: 'Folkie.io',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/folkie.svg', // path of the logo
        pathDark: '/folkieDark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'alpine' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Made with Nuxt, follow them here' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'nuxtlabs',
      instagram: 'atinuxt',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nuxtlabs'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
