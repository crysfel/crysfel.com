import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
// import dogIllustration from '../images/dog-illustration.svg'

const AboutPage = () => (
  <Layout>
    <SEO
      title="About"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />

    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-2/3 md:mr-8">
        <p className="border-l-4 border-grey-darkest font-serif leading-loose pl-4 text-justify">
          The point is... to live one's life in the full complexity of what one
          is, which is something much darker, more contradictory, more of a
          maelstrom of impulses and passions, of cruelty, ecstacy, and madness,
          than is apparent to the civilized being who glides on the surface and
          fits smoothly into the world.
        </p>

        <p className="font-bold mt-4 text-right text-xs uppercase">
          – Thomas Nagel
        </p>
      </div>

      <div className="w-2/3 md:w-1/3">
        {/* <img src={dogIllustration} alt="A dog relaxing" /> */}
      </div>
    </div>
  </Layout>
);

export default AboutPage
