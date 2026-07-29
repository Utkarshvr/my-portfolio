import Footer from "@/Screens/Footer/Footer";
import Hero from "@/Screens/Hero/Hero";
import Nav from "@/Screens/Nav/Nav";
// import Tech from "@/Screens/Tech/Tech";
import Projects from "@/Screens/Projects/Projects";
import Exprience from "@/Screens/Exprience/Exprience";

import { firestore } from "@/lib/firebaseAdmin";
import { COLLECTION_NAME_TYPE } from "@/types/COLLECTION_NAME_TYPE";
import PROJECT_TYPE from "@/types/PROJECT_TYPE";
import TOOL_TYPE from "@/types/TOOL_TYPE";
import CONTENT_BLOCK_TYPE from "@/types/CONTENT_BLOCK_TYPE";
import EXPERIENCE_TYPE from "@/types/EXPERIENCE_TYPE";
import Testimonials from "@/Screens/Testimonials/Testimonials";

async function getDocs<T = any>(collection_name: COLLECTION_NAME_TYPE) {
  const snapshot = await firestore.collection(collection_name).get();
  const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as T));
  return docs;
}

export default async function Home() {
  let projects = await getDocs<PROJECT_TYPE>("projects");
  const tools = await getDocs<TOOL_TYPE>("tools");
  const content_blocks = await getDocs<CONTENT_BLOCK_TYPE>("content-blocks");
  const experience = await getDocs<EXPERIENCE_TYPE>("experience");

  projects = projects.sort((a, b) => {
    const pa = Number(a.position);
    const pb = Number(b.position);
    const na = Number.isFinite(pa) ? pa : Number.POSITIVE_INFINITY;
    const nb = Number.isFinite(pb) ? pb : Number.POSITIVE_INFINITY;
    return na - nb;
  });

  const testimonial = content_blocks.find(
    (b) => b.title === "testimonial"
  )?.text;

  return (
    <main className="max-w-7xl m-auto">
      <Nav />
      <Hero contentBlocks={content_blocks} />
      <Exprience experience={experience} />
      {testimonial && <Testimonials testimonial={testimonial} />}
      <Projects projects={projects} tools={tools} />
      {/* <Tech /> */}
      <Footer contentBlocks={content_blocks} />
    </main>
  );
}

export const revalidate = 1; // revalidate at most every hour
