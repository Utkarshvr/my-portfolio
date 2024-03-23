import MediaType from "@/types/MediaType";
import { Carousel } from "flowbite-react";

export default function MyCarousel({ images }: { images: MediaType[] }) {
  return (
    <Carousel>
      {images.map((img) => (
        <img key={img.id} src={img.attributes.url} alt={img.attributes.name} />
      ))}
    </Carousel>
  );
}
