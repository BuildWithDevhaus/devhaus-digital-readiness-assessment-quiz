import waitForElementLoaded from '$utils/waitForElementLoaded';

import firstPageTransitionOut from './sectionAnimations/firstPageTransitionOut';
import secondPageTransitionOut from './sectionAnimations/secondPageTransitionOut';

export default async function onSectionTransitionOut(selector: string, duration: number) {
  const section = await waitForElementLoaded(selector);
  switch (selector) {
    case '#first-page':
      return firstPageTransitionOut(section, duration);
    case '#second-page':
      return secondPageTransitionOut(section, duration);
  }
}
