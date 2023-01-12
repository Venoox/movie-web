import { MWEmbedType } from "../helpers/embed";
import { registerEmbedScraper } from "../helpers/register";
import { MWStreamQuality, MWStreamType } from "../helpers/streams";

const timeout = (time: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => resolve(), time);
  });

registerEmbedScraper({
  id: "testembed",
  rank: 23,
  for: MWEmbedType.OPENLOAD,

  async getStream({ progress }) {
    await timeout(1000);
    progress(25);
    await timeout(1000);
    progress(50);
    await timeout(1000);
    progress(75);
    throw new Error("failed to load or something");
    await timeout(1000);
    return {
      streamUrl: "hello-world",
      type: MWStreamType.MP4,
      quality: MWStreamQuality.Q1080P,
    };
  },
});
