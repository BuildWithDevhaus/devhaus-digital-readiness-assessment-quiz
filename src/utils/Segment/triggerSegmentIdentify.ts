export default function triggerSegmentIdentify(data = {}) {
  if (window.analytics) {
    // if (isDev) console.log(`Segment - Identify`, data);
    window.analytics.identify(data);
  } else {
    //console.log(`Segment [Identify] -- DEV MODE: `, data);
  }
}
