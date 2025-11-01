import meVideo from "@/assets/me-compressed.mp4";
import CustomSection from "@/components/CustomSection";

const VideoSection = () => {
  return (
    <CustomSection title="INTRODUCTION">
      <video
        width="100%"
        height="auto"
        controls
        className="w-full rounded-2xl"
        preload="metadata"
      >
        <source src={meVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </CustomSection>
  );
};

export default VideoSection;
