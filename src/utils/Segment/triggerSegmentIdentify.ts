export default function triggerSegmentIdentify(data = {}) {
  if (window.analytics) {
    window.analytics.identify(data);
  }
}
