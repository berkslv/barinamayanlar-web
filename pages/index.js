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
        <title>Barınamayanlar Hareketi</title>
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
