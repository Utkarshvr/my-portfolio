import MotionDiv from "./MotionDiv";

export default function AutoReveal({
  children,
  delay,
  duration,
}: {
  children: React.ReactNode;

  delay: number;
  duration?: number;
}) {
  return (
    <MotionDiv
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={"visible"}
      transition={{ delay, ease: "easeInOut", duration: duration || 0.4 }}
    >
      {children}
    </MotionDiv>
  );
}
