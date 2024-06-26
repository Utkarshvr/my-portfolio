import MediaType from "@/types/MediaType";
import { Carousel } from "flowbite-react";

export default function MyCarousel({ images }: { images: MediaType[] }) {
  return (
    <Carousel className="h-[340px] sm:h-[440px] md:h-[340px]">
      {images.map((img) => (
        <img
          key={img.id}
          src={img.attributes.url}
          alt={img.attributes.name}
          height={250}
        />
      ))}
    </Carousel>
  );
}
