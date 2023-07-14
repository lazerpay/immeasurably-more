import HeroSection from "@/components/herosection";
import { gql, GraphQLClient } from "graphql-request";

export default function Home({ data }) {
    return (
        <div>
            <HeroSection content={data.home.homepageContent[0]} />
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
                    }
                    largeHeroText {
                        id
                        url
                    }
                    smallHeroText {
                        id
                        url
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