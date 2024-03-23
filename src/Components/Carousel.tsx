import MediaType from "@/types/MediaType";
import { Carousel } from "flowbite-react";

export default function MyCarousel({ images }: { images: MediaType[] }) {
  return (
    <Carousel>
      {images.map((img) => (
        <img src={img.attributes.url} alt={img.attributes.name} />
      ))}
    </Carousel>
  );
}
