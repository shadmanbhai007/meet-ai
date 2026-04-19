import "server-only";

// // Avoid native ws addons in dev/runtime environments where binary bindings are incompatible.
// process.env.WS_NO_BUFFER_UTIL = "1";
// process.env.WS_NO_UTF_8_VALIDATE = "1";

import { StreamClient } from "@stream-io/node-sdk";

export const streamVideo = new StreamClient(
  process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY!,
  process.env.STREAM_VIDEO_SECRET_KEY!
);


// cross varifie ho gya