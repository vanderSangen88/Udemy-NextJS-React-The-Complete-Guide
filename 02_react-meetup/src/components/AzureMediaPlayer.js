import { AzureMP } from "react-azure-mp";

export const AzureMediaPlayerAuto = () => {
  return (
    <video
      id="vid1"
      className="azuremediaplayer amp-default-skin"
      autoplay
      controls
      width="640"
      height="400"
      poster="poster.jpg"
      data-setup='{"nativeControlsForTouch": false}'
    >
      <source
        src="http://amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest"
        type="application/vnd.ms-sstr+xml"
      />
      <p class="amp-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that supports HTML5 video
      </p>
    </video>
  );
};

export const AzureMediaPlayerManual = () => {
  return (
    <AzureMP
      src={[
        {
          src: "http://amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest",
          type: "application/vnd.ms-sstr+xml",
        },
      ]}
      options={{ controls: true, autoplay: true }}
    />
  );
};
