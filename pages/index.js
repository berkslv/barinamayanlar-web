/**
 * Web site içeriğinin sergilendiği ana ve tek sayfa.
 */
import { getAllContent } from "../lib/api";
import Head from "next/head";
import Header from "../components/Header";
import FullImage from "../components/FullImage";
import Column from "../components/Column";
import Paragraph from "../components/Paragraph";
import Footer from "../components/Footer";

export default function Index({ content }) {
  return (
    <>
      <Head>
        <title>{content?.meta?.title}</title>
        <meta name="description" content={content?.meta?.desc} />

        <meta property="og:title" content={content?.meta?.title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={content?.meta?.desc} />
        <meta property="og:url" content="https://barinamayanlar.vercel.app" />
        <meta property="og:image" content="/favicon/banner.jpeg" />

        <meta name="theme-color" content="#B70B58" />
      </Head>
      <Header content={content} />
      <FullImage content={content} />
      <Column content={content} index={0} />
      <Column content={content} index={1} />
      <Paragraph content={content} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const content = await getAllContent();

  return {
    props: { content },
  };
}
