import HeroSection from "@/components/herosection";
import { gql, GraphQLClient } from "graphql-request";

export default function Home({ data }) {
    return (
        <div>
            {data.home.homepageContent.map((section, index) => {
                if(section.__typename === "HeroSectionRecord") {
                    return <HeroSection section={section} />
                }
            })}
        </div>
    )
}

const query = gql`
    query {
        home {
            id
            title
            slug
            homepageContent {
                ...on HeroSectionRecord {
                    __typename
                    buttonText
                    heroImage {
                        id
                        url
                        width
                        height
                    }
                    heroImageSmall {
                        id
                        url
                        width
                        height
                    }
                    largeHeroText {
                        id
                        url
                        width
                        height
                    }
                    smallHeroText {
                        id
                        url
                        width
                        height
                    }
                    background {
                        hex
                    }
                }
            }
        }
    }
`;

export const getStaticProps = async () => {
    const endpoint = process.env.DATOCMS_ENDPOINT;
    const client = new GraphQLClient(endpoint, {
        headers: {
            "content-type": "application/json",
            authorization: "Bearer " + process.env.DATOCMS_API_KEY,
        }
    });

    const data = await client.request(query);
    return {
        props: {
            data
        }
    }
}