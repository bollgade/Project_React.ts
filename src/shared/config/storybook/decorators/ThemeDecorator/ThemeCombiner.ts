import { ThemeDecor, ThemeDecorator } from './ThemeDecorator';

type RString = readonly string[];

type keys<
  names extends RString,
  themes extends RString
> = `${names[number]}` | `${names[number]}${themes[number]}`;

export type storiesMixer<
  names extends RString,
  themes extends RString,
  Template
> = Record<keys<names, themes>, Template>;

interface FillStoriesProps {
  itemsNames: RString;
  Template: any;
}

export function fillStories<stories extends Record<string, any>>(props: FillStoriesProps): stories {
  const {
    itemsNames,
    Template,
  } = props;

  const obj: Record<string, any> = {};
  itemsNames.forEach((itemName: typeof itemsNames[number]) => {
    obj[itemName] = Template.bind({});
  });
  return obj as stories;
}

interface CombineThemesProps {
  stories: Record<string, any>;
  themesNames: RString;
}

export function combineThemes(props: CombineThemesProps) {
  const {
    stories,
    themesNames,
  } = props;

  Object.keys(stories).forEach((key: keyof typeof stories) => {
    themesNames.forEach((theme: typeof themesNames[number]) => {
      const mainElement = stories[key];
      const mainDecorators = stories[key].decorators ?? [];
      const themeKey = theme.toUpperCase() as keyof typeof ThemeDecor;
      const Theme = ThemeDecor[themeKey];
      stories[`${key}${theme}`] = { ...mainElement };
      stories[`${key}${theme}`].decorators = [...mainDecorators, ThemeDecorator(Theme)];
    });
  });
}
