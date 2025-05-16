import { useTime, useTransform, motion } from "framer-motion";

function BorderAnimation({ children }) {
  const time = useTime();

  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, var(--color-primary),var(--color-secondary), var(--color-tertiary))`;
  });
  return (
    <div className="relative h-full">
      <motion.div
        className="absolute -inset-[1px] rounded-xl"
        style={{
          background: rotatingBg,
        }}
      ></motion.div>
      <div className="  relative h-full">{children}</div>
    </div>
  );
}

export default BorderAnimation;
