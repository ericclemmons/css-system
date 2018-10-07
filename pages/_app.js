import { MDXProvider } from "@mdx-js/tag"
import App, { Container } from "next/app"
import React from "react"

import { Heading, Text } from "../components"
import "../styles/base.css"

export default class WebUnits extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <MDXProvider
          components={{
            h1: (props) => <Heading as="h1" {...props} />,
            h2: (props) => <Heading as="h2" {...props} />,
            h3: (props) => <Heading as="h3" {...props} />,
            h4: (props) => <Heading as="h4" {...props} />,
            h5: (props) => <Heading as="h5" {...props} />,
            p: (props) => <Text {...props} />,
          }}
        >
          <Component {...pageProps} />
        </MDXProvider>
      </Container>
    )
  }
}
