import React from "react";
import SplitText from "./reactbits/SplitText";
export default function Home() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <SplitText
      text="Hello, GSAP!f"
      className="text-2xl font-semibold text-center"
      delay={100}
      duration={0.6}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center"
      onLetterAnimationComplete={handleAnimationComplete}
    />
  );
}
