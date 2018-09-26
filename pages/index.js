import Button from "../components/Button"
import ButtonOutline from "../components/ButtonOutline"
import ButtonText from "../components/ButtonText"
import Card from "../components/Card"
import Container from "../components/Container"
import Footer from "../components/Footer"
import Grid from "../components/Grid"
import Header from "../components/Header"
import Heading from "../components/Heading"
import Hero from "../components/Hero"
import Row from "../components/Row"
import Text from "../components/Text"

export default (props) => {
  const { children } = props

  return (
    <main>
      <Header>Album layout</Header>

      <Hero>
        <Heading>Album layout</Heading>
        <Text>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </Text>

        <Row>
          <Button>Main Call To Action</Button>
          <ButtonOutline>Secondary Action</ButtonOutline>
        </Row>
      </Hero>

      <Container>
        <Heading as="h1">H1 Heading Text</Heading>
        <Heading as="h2">H2 Heading Text</Heading>
        <Heading as="h3">H3 Heading Text</Heading>
        <Heading as="h4">H4 Heading Text</Heading>
        <Heading as="h5">H5 Heading Text</Heading>
        <Heading as="h6">H6 Heading Text</Heading>
        <Text as="p">P Heading Text</Text>
        <Text as="small">Small Heading Text</Text>
      </Container>

      <Container>
        <Grid>
          {[...Array(9)].map((_, i) => (
            <Card key={i}>
              <Heading as="h3">Card #{i + 1}</Heading>

              <Text>
                This is a media card. You can use this section to describe the
                content.
              </Text>

              <ButtonText>View</ButtonText>
              <ButtonText>Edit</ButtonText>
            </Card>
          ))}
        </Grid>
      </Container>

      <Footer>
        <Heading as="h3">Footer</Heading>
        <Text>Something here to give the footer a purpose!</Text>
      </Footer>
    </main>
  )
}
