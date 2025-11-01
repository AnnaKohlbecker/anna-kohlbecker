import meVideo from "@/assets/me.mp4";
import CustomSection from "@/components/CustomSection";

const VideoSection = () => {
  return (
    <CustomSection>
      <video width="100%" height="auto" controls className="w-full rounded-2xl">
        <source src={meVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </CustomSection>
  );
};

export default VideoSection;
