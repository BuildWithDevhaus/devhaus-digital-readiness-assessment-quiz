import waitForElementLoaded from '$utils/waitForElementLoaded';

import firstPageTransitionIn from './sectionAnimations/firstPageTransitionIn';
import secondPageTransitionIn from './sectionAnimations/secondPageTransitionIn';

export default async function onSectionTransitionIn(selector: string, duration: number) {
  const section = await waitForElementLoaded(selector);
  switch (selector) {
    case '#first-page':
      return firstPageTransitionIn(section, duration);
    case '#second-page':
      return secondPageTransitionIn(section, duration);
  }
}
