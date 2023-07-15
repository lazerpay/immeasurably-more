import HeroSection from "@/components/herosection";
import ListenSection from "@/components/listensection";
import TabSection from "@/components/tabsection";
import TeachingsSection from "@/components/teachingssection";
import DownloadSection from '@/components/downloadsection';
import QuestionSection from '@/components/questionsection';
import { gql, GraphQLClient } from "graphql-request";

export default function Home({ data }) {
    return (
        <div>
            {data.home.homepageContent.map((section, index) => {
                if(section.__typename === "HeroSectionRecord") {
                    return <HeroSection section={section} />
                }
                else if(section.__typename === "TabSectionRecord") {
                    return <TabSection section={section} />
                }
                else if(section.__typename === "ListenSectionRecord") {
                    return <ListenSection section={section} />
                }
                else if(section.__typename === "TeachingsSectionRecord") {
                    return <TeachingsSection section={section} />
                }
                else if(section.__typename === "DownloadSectionRecord") {
                    return <DownloadSection section={section} />
                }
                else if(section.__typename === "QuestionSectionRecord") {
                    return <QuestionSection section={section} />
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
                ...on TabSectionRecord {
                    __typename
                    tabLabel1
                    tabLabel2
                    description
                    grey {
                      hex
                    }
                    borderColor {
                      hex
                    }
                }
                ...on ListenSectionRecord {
                    __typename
                    imageSmall {
                      id
                      url
                      width
                      height
                    }
                    imageLarge {
                      id
                      url
                      width
                      height
                    }
                    description
                    buttonText
                    background {
                      hex
                    }
                }
                ...on TeachingsSectionRecord {
                    __typename
                    title
                    description
                    videoCards {
                      image {
                        id
                        url
                        width
                        height
                      }
                      weekText
                      textImage {
                        id
                        url
                        width
                        height
                      }
                      videoTitle
                      videoTitleColor {
                        hex
                      }
                    }
                }
                ...on DownloadSectionRecord {
                    __typename
                    titleFront
                    titleItalic
                    titleRear
                    description
                    primaryButtonText
                    primaryButtonBackground {
                        hex
                    }
                    downloadRows {
                      title
                      buttonText
                      borderColor {
                        hex
                      }
                    }
                }
                ...on QuestionSectionRecord {
                    __typename
                    title
                    description
                    link
                    background {
                      hex
                    }
                    linkColor {
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