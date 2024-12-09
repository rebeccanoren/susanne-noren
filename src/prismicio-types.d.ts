// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AboutDocumentDataSlicesSlice = never;

/**
 * Content for About documents
 */
interface AboutDocumentData {
	/**
	 * Slice Zone field in *About*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<AboutDocumentDataSlicesSlice> /**
	 * Meta Title field in *About*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: about.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *About*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: about.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *About*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<AboutDocumentData>,
	'about',
	Lang
>;

type CaseDocumentDataSlicesSlice = QuoteSlice | TextWithImageSlice | ImageSlice | TextSlice;

/**
 * Content for Case documents
 */
interface CaseDocumentData {
	/**
	 * Title field in *Case*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Title of portfolio item
	 * - **API ID Path**: case.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;

	/**
	 * Portfolio Image field in *Case*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: case.portfolio_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	portfolio_image: prismic.ImageField<never>;

	/**
	 * Slice Zone field in *Case*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: case.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<CaseDocumentDataSlicesSlice> /**
	 * Meta Title field in *Case*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: case.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Case*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: case.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Case*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: case.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Case document from Prismic
 *
 * - **API ID**: `case`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CaseDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<CaseDocumentData>,
	'case',
	Lang
>;

type HomeDocumentDataSlicesSlice = HeroSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
	/**
	 * Slice Zone field in *Home*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: home.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
	 * Meta Title field in *Home*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: home.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Home*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: home.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Home*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: home.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<HomeDocumentData>,
	'home',
	Lang
>;

/**
 * Item in *Navigation → Links*
 */
export interface NavigationDocumentDataLinksItem {
	/**
	 * Label field in *Navigation → Links*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: Optional - Label for the link
	 * - **API ID Path**: navigation.links[].label
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	label: prismic.TitleField;

	/**
	 * Link field in *Navigation → Links*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: Link for navigation item
	 * - **API ID Path**: navigation.links[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
	/**
	 * Links field in *Navigation*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: navigation.links[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	links: prismic.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<NavigationDocumentData>,
	'navigation',
	Lang
>;

type PageDocumentDataSlicesSlice =
	| HeroSlice
	| QuoteSlice
	| TextSlice
	| ImageSlice
	| ImageCardsSlice
	| TextWithImageSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
	/**
	 * Title field in *Page*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Parent field in *Page*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.parent
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	parent: prismic.ContentRelationshipField<'page'>;

	/**
	 * Slice Zone field in *Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
	 * Meta Title field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Page*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<PageDocumentData>,
	'page',
	Lang
>;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
	/**
	 * Site Title field in *Settings*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: Title of the site
	 * - **API ID Path**: settings.siteTitle
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	siteTitle: prismic.TitleField;

	/**
	 * Background color field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Tailwind background color
	 * - **API ID Path**: settings.background_color
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	background_color: prismic.KeyTextField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<SettingsDocumentData>,
	'settings',
	Lang
>;

export type AllDocumentTypes =
	| AboutDocument
	| CaseDocument
	| HomeDocument
	| NavigationDocument
	| PageDocument
	| SettingsDocument;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
	/**
	 * Text field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;

	/**
	 * Button Link field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.buttonLink
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	buttonLink: prismic.LinkField;

	/**
	 * Button Text field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.buttonText
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	buttonText: prismic.KeyTextField;

	/**
	 * Background Image field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.backgroundImage
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	backgroundImage: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<HeroSliceDefaultPrimary>,
	never
>;

/**
 * Primary content in *Hero → Transparent Background → Primary*
 */
export interface HeroSliceTransparentBackgroundPrimary {
	/**
	 * Text field in *Hero → Transparent Background → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.transparentBackground.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;

	/**
	 * Button Link field in *Hero → Transparent Background → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.transparentBackground.primary.buttonLink
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	buttonLink: prismic.LinkField;

	/**
	 * Button Text field in *Hero → Transparent Background → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.transparentBackground.primary.buttonText
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	buttonText: prismic.KeyTextField;

	/**
	 * Background Image field in *Hero → Transparent Background → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.transparentBackground.primary.backgroundImage
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	backgroundImage: prismic.ImageField<never>;
}

/**
 * Transparent Background variation for Hero Slice
 *
 * - **API ID**: `transparentBackground`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceTransparentBackground = prismic.SharedSliceVariation<
	'transparentBackground',
	Simplify<HeroSliceTransparentBackgroundPrimary>,
	never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceTransparentBackground;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<'hero', HeroSliceVariation>;

/**
 * Primary content in *Image → Default → Primary*
 */
export interface ImageSliceDefaultPrimary {
	/**
	 * Image field in *Image → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image.default.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Caption field in *Image → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Describe the image
	 * - **API ID Path**: image.default.primary.caption
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	caption: prismic.RichTextField;
}

/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ImageSliceDefaultPrimary>,
	never
>;

/**
 * Primary content in *Image → Banner → Primary*
 */
export interface ImageSliceBannerPrimary {
	/**
	 * Image field in *Image → Banner → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image.banner.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Banner variation for Image Slice
 *
 * - **API ID**: `banner`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceBanner = prismic.SharedSliceVariation<
	'banner',
	Simplify<ImageSliceBannerPrimary>,
	never
>;

/**
 * Slice variation for *Image*
 */
type ImageSliceVariation = ImageSliceDefault | ImageSliceBanner;

/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSlice = prismic.SharedSlice<'image', ImageSliceVariation>;

/**
 * Item in *ImageCards → Default → Primary → Cards*
 */
export interface ImageCardsSliceDefaultPrimaryCardsItem {
	/**
	 * Image field in *ImageCards → Default → Primary → Cards*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_cards.default.primary.cards[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Text field in *ImageCards → Default → Primary → Cards*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_cards.default.primary.cards[].text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;

	/**
	 * Button Link field in *ImageCards → Default → Primary → Cards*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_cards.default.primary.cards[].buttonLink
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	buttonLink: prismic.LinkField;

	/**
	 * Button Text field in *ImageCards → Default → Primary → Cards*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_cards.default.primary.cards[].buttonText
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	buttonText: prismic.KeyTextField;
}

/**
 * Primary content in *ImageCards → Default → Primary*
 */
export interface ImageCardsSliceDefaultPrimary {
	/**
	 * Heading field in *ImageCards → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_cards.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.RichTextField;

	/**
	 * Cards field in *ImageCards → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_cards.default.primary.cards[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	cards: prismic.GroupField<Simplify<ImageCardsSliceDefaultPrimaryCardsItem>>;
}

/**
 * Default variation for ImageCards Slice
 *
 * - **API ID**: `default`
 * - **Description**: ImageCards
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageCardsSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ImageCardsSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *ImageCards*
 */
type ImageCardsSliceVariation = ImageCardsSliceDefault;

/**
 * ImageCards Shared Slice
 *
 * - **API ID**: `image_cards`
 * - **Description**: ImageCards
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageCardsSlice = prismic.SharedSlice<'image_cards', ImageCardsSliceVariation>;

/**
 * Primary content in *Quote → Default → Primary*
 */
export interface QuoteSliceDefaultPrimary {
	/**
	 * Quote field in *Quote → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: quote.default.primary.quote
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	quote: prismic.RichTextField;

	/**
	 * Source field in *Quote → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: quote.default.primary.source
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	source: prismic.KeyTextField;
}

/**
 * Default variation for Quote Slice
 *
 * - **API ID**: `default`
 * - **Description**: Quote
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuoteSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<QuoteSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Quote*
 */
type QuoteSliceVariation = QuoteSliceDefault;

/**
 * Quote Shared Slice
 *
 * - **API ID**: `quote`
 * - **Description**: Quote
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuoteSlice = prismic.SharedSlice<'quote', QuoteSliceVariation>;

/**
 * Primary content in *Text → Default → Primary*
 */
export interface TextSliceDefaultPrimary {
	/**
	 * Text field in *Text → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text.default.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;
}

/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<TextSliceDefaultPrimary>,
	never
>;

/**
 * Primary content in *Text → Two Columns → Primary*
 */
export interface TextSliceTwoColumnsPrimary {
	/**
	 * Text field in *Text → Two Columns → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text.twoColumns.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;
}

/**
 * Two Columns variation for Text Slice
 *
 * - **API ID**: `twoColumns`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceTwoColumns = prismic.SharedSliceVariation<
	'twoColumns',
	Simplify<TextSliceTwoColumnsPrimary>,
	never
>;

/**
 * Slice variation for *Text*
 */
type TextSliceVariation = TextSliceDefault | TextSliceTwoColumns;

/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSlice = prismic.SharedSlice<'text', TextSliceVariation>;

/**
 * Primary content in *TextWithImage → Default → Primary*
 */
export interface TextWithImageSliceDefaultPrimary {
	/**
	 * Text field in *TextWithImage → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.default.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;

	/**
	 * Image field in *TextWithImage → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.default.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Default variation for TextWithImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: TextWithImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<TextWithImageSliceDefaultPrimary>,
	never
>;

/**
 * Primary content in *TextWithImage → With Button → Primary*
 */
export interface TextWithImageSliceWithButtonPrimary {
	/**
	 * Text field in *TextWithImage → With Button → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.withButton.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;

	/**
	 * Button Link field in *TextWithImage → With Button → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.withButton.primary.buttonLink
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	buttonLink: prismic.LinkField;

	/**
	 * Button Text field in *TextWithImage → With Button → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.withButton.primary.buttonText
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	buttonText: prismic.KeyTextField;

	/**
	 * Image field in *TextWithImage → With Button → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.withButton.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * With Button variation for TextWithImage Slice
 *
 * - **API ID**: `withButton`
 * - **Description**: TextWithImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSliceWithButton = prismic.SharedSliceVariation<
	'withButton',
	Simplify<TextWithImageSliceWithButtonPrimary>,
	never
>;

/**
 * Slice variation for *TextWithImage*
 */
type TextWithImageSliceVariation = TextWithImageSliceDefault | TextWithImageSliceWithButton;

/**
 * TextWithImage Shared Slice
 *
 * - **API ID**: `text_with_image`
 * - **Description**: TextWithImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSlice = prismic.SharedSlice<
	'text_with_image',
	TextWithImageSliceVariation
>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	interface CreateWriteClient {
		(
			repositoryNameOrEndpoint: string,
			options: prismic.WriteClientConfig
		): prismic.WriteClient<AllDocumentTypes>;
	}

	interface CreateMigration {
		(): prismic.Migration<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			AboutDocument,
			AboutDocumentData,
			AboutDocumentDataSlicesSlice,
			CaseDocument,
			CaseDocumentData,
			CaseDocumentDataSlicesSlice,
			HomeDocument,
			HomeDocumentData,
			HomeDocumentDataSlicesSlice,
			NavigationDocument,
			NavigationDocumentData,
			NavigationDocumentDataLinksItem,
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			SettingsDocument,
			SettingsDocumentData,
			AllDocumentTypes,
			HeroSlice,
			HeroSliceDefaultPrimary,
			HeroSliceTransparentBackgroundPrimary,
			HeroSliceVariation,
			HeroSliceDefault,
			HeroSliceTransparentBackground,
			ImageSlice,
			ImageSliceDefaultPrimary,
			ImageSliceBannerPrimary,
			ImageSliceVariation,
			ImageSliceDefault,
			ImageSliceBanner,
			ImageCardsSlice,
			ImageCardsSliceDefaultPrimaryCardsItem,
			ImageCardsSliceDefaultPrimary,
			ImageCardsSliceVariation,
			ImageCardsSliceDefault,
			QuoteSlice,
			QuoteSliceDefaultPrimary,
			QuoteSliceVariation,
			QuoteSliceDefault,
			TextSlice,
			TextSliceDefaultPrimary,
			TextSliceTwoColumnsPrimary,
			TextSliceVariation,
			TextSliceDefault,
			TextSliceTwoColumns,
			TextWithImageSlice,
			TextWithImageSliceDefaultPrimary,
			TextWithImageSliceWithButtonPrimary,
			TextWithImageSliceVariation,
			TextWithImageSliceDefault,
			TextWithImageSliceWithButton
		};
	}
}
