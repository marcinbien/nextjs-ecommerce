export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Blog post data [See type definition](https://app.contentful.com/spaces/ex0gf91y6eba/content_types/blogPost) */
export type BlogPost = Entry & {
  __typename?: 'BlogPost';
  contentfulMetadata: ContentfulMetadata;
  date?: Maybe<Scalars['DateTime']>;
  linkedFrom?: Maybe<BlogPostLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  text?: Maybe<BlogPostText>;
  title?: Maybe<Scalars['String']>;
};


/** Blog post data [See type definition](https://app.contentful.com/spaces/ex0gf91y6eba/content_types/blogPost) */
export type BlogPostDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Blog post data [See type definition](https://app.contentful.com/spaces/ex0gf91y6eba/content_types/blogPost) */
export type BlogPostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Blog post data [See type definition](https://app.contentful.com/spaces/ex0gf91y6eba/content_types/blogPost) */
export type BlogPostSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Blog post data [See type definition](https://app.contentful.com/spaces/ex0gf91y6eba/content_types/blogPost) */
export type BlogPostTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Blog post data [See type definition](https://app.contentful.com/spaces/ex0gf91y6eba/content_types/blogPost) */
export type BlogPostTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type BlogPostCollection = {
  __typename?: 'BlogPostCollection';
  items: Array<Maybe<BlogPost>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BlogPostFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars['DateTime']>;
  date_exists?: InputMaybe<Scalars['Boolean']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_not?: InputMaybe<Scalars['DateTime']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlogPostLinkingCollections = {
  __typename?: 'BlogPostLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BlogPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum BlogPostOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type BlogPostText = {
  __typename?: 'BlogPostText';
  json: Scalars['JSON'];
  links: BlogPostTextLinks;
};

export type BlogPostTextAssets = {
  __typename?: 'BlogPostTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BlogPostTextEntries = {
  __typename?: 'BlogPostTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BlogPostTextLinks = {
  __typename?: 'BlogPostTextLinks';
  assets: BlogPostTextAssets;
  entries: BlogPostTextEntries;
};

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  blogPost?: Maybe<BlogPost>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  entryCollection?: Maybe<EntryCollection>;
  test?: Maybe<Test>;
  testCollection?: Maybe<TestCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryBlogPostArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<BlogPostOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogPostFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryTestArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTestCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TestOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TestFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** test [See type definition](https://app.contentful.com/spaces/ex0gf91y6eba/content_types/test) */
export type Test = Entry & {
  __typename?: 'Test';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TestLinkingCollections>;
  sys: Sys;
  tttt?: Maybe<Scalars['String']>;
};


/** test [See type definition](https://app.contentful.com/spaces/ex0gf91y6eba/content_types/test) */
export type TestLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** test [See type definition](https://app.contentful.com/spaces/ex0gf91y6eba/content_types/test) */
export type TestTtttArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TestCollection = {
  __typename?: 'TestCollection';
  items: Array<Maybe<Test>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TestFilter = {
  AND?: InputMaybe<Array<InputMaybe<TestFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TestFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  tttt?: InputMaybe<Scalars['String']>;
  tttt_contains?: InputMaybe<Scalars['String']>;
  tttt_exists?: InputMaybe<Scalars['Boolean']>;
  tttt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tttt_not?: InputMaybe<Scalars['String']>;
  tttt_not_contains?: InputMaybe<Scalars['String']>;
  tttt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TestLinkingCollections = {
  __typename?: 'TestLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TestLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TestOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TtttAsc = 'tttt_ASC',
  TtttDesc = 'tttt_DESC'
}

export type GetBlogItemsQueryVariables = Exact<{
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetBlogItemsQuery = { __typename?: 'Query', blogPostCollection?: { __typename?: 'BlogPostCollection', items: Array<{ __typename?: 'BlogPost', title?: string | null, slug?: string | null, date?: any | null } | null> } | null };

export type GetBlogPostsQueryVariables = Exact<{
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetBlogPostsQuery = { __typename?: 'Query', blogPostCollection?: { __typename?: 'BlogPostCollection', items: Array<{ __typename?: 'BlogPost', title?: string | null, slug?: string | null, date?: any | null } | null> } | null };

export type GetBlogPostBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetBlogPostBySlugQuery = { __typename?: 'Query', blogPostCollection?: { __typename?: 'BlogPostCollection', items: Array<{ __typename?: 'BlogPost', title?: string | null, slug?: string | null, date?: any | null } | null> } | null };

"""Represents a binary file in a space. An asset can be any file type."""
type Asset {
  contentType(locale: String): String
  contentfulMetadata: ContentfulMetadata!
  description(locale: String): String
  fileName(locale: String): String
  height(locale: String): Int
  linkedFrom(allowedLocales: [String]): AssetLinkingCollections
  size(locale: String): Int
  sys: Sys!
  title(locale: String): String
  url(locale: String, transform: ImageTransformOptions): String
  width(locale: String): Int
}

type AssetCollection {
  items: [Asset]!
  limit: Int!
  skip: Int!
  total: Int!
}

input AssetFilter {
  AND: [AssetFilter]
  OR: [AssetFilter]
  contentType: String
  contentType_contains: String
  contentType_exists: Boolean
  contentType_in: [String]
  contentType_not: String
  contentType_not_contains: String
  contentType_not_in: [String]
  contentfulMetadata: ContentfulMetadataFilter
  description: String
  description_contains: String
  description_exists: Boolean
  description_in: [String]
  description_not: String
  description_not_contains: String
  description_not_in: [String]
  fileName: String
  fileName_contains: String
  fileName_exists: Boolean
  fileName_in: [String]
  fileName_not: String
  fileName_not_contains: String
  fileName_not_in: [String]
  height: Int
  height_exists: Boolean
  height_gt: Int
  height_gte: Int
  height_in: [Int]
  height_lt: Int
  height_lte: Int
  height_not: Int
  height_not_in: [Int]
  size: Int
  size_exists: Boolean
  size_gt: Int
  size_gte: Int
  size_in: [Int]
  size_lt: Int
  size_lte: Int
  size_not: Int
  size_not_in: [Int]
  sys: SysFilter
  title: String
  title_contains: String
  title_exists: Boolean
  title_in: [String]
  title_not: String
  title_not_contains: String
  title_not_in: [String]
  url: String
  url_contains: String
  url_exists: Boolean
  url_in: [String]
  url_not: String
  url_not_contains: String
  url_not_in: [String]
  width: Int
  width_exists: Boolean
  width_gt: Int
  width_gte: Int
  width_in: [Int]
  width_lt: Int
  width_lte: Int
  width_not: Int
  width_not_in: [Int]
}

type AssetLinkingCollections {
  entryCollection(limit: Int = 100, locale: String, preview: Boolean, skip: Int = 0): EntryCollection
}

enum AssetOrder {
  contentType_ASC
  contentType_DESC
  fileName_ASC
  fileName_DESC
  height_ASC
  height_DESC
  size_ASC
  size_DESC
  sys_firstPublishedAt_ASC
  sys_firstPublishedAt_DESC
  sys_id_ASC
  sys_id_DESC
  sys_publishedAt_ASC
  sys_publishedAt_DESC
  sys_publishedVersion_ASC
  sys_publishedVersion_DESC
  url_ASC
  url_DESC
  width_ASC
  width_DESC
}

"""
Blog post data [See type definition](https://app.contentful.com/spaces/ex0gf91y6eba/content_types/blogPost)
"""
type BlogPost implements Entry {
  contentfulMetadata: ContentfulMetadata!
  date(locale: String): DateTime
  linkedFrom(allowedLocales: [String]): BlogPostLinkingCollections
  slug(locale: String): String
  sys: Sys!
  text(locale: String): BlogPostText
  title(locale: String): String
}

type BlogPostCollection {
  items: [BlogPost]!
  limit: Int!
  skip: Int!
  total: Int!
}

input BlogPostFilter {
  AND: [BlogPostFilter]
  OR: [BlogPostFilter]
  contentfulMetadata: ContentfulMetadataFilter
  date: DateTime
  date_exists: Boolean
  date_gt: DateTime
  date_gte: DateTime
  date_in: [DateTime]
  date_lt: DateTime
  date_lte: DateTime
  date_not: DateTime
  date_not_in: [DateTime]
  slug: String
  slug_contains: String
  slug_exists: Boolean
  slug_in: [String]
  slug_not: String
  slug_not_contains: String
  slug_not_in: [String]
  sys: SysFilter
  text_contains: String
  text_exists: Boolean
  text_not_contains: String
  title: String
  title_contains: String
  title_exists: Boolean
  title_in: [String]
  title_not: String
  title_not_contains: String
  title_not_in: [String]
}

type BlogPostLinkingCollections {
  entryCollection(limit: Int = 100, locale: String, preview: Boolean, skip: Int = 0): EntryCollection
}

enum BlogPostOrder {
  date_ASC
  date_DESC
  slug_ASC
  slug_DESC
  sys_firstPublishedAt_ASC
  sys_firstPublishedAt_DESC
  sys_id_ASC
  sys_id_DESC
  sys_publishedAt_ASC
  sys_publishedAt_DESC
  sys_publishedVersion_ASC
  sys_publishedVersion_DESC
  title_ASC
  title_DESC
}

type BlogPostText {
  json: JSON!
  links: BlogPostTextLinks!
}

type BlogPostTextAssets {
  block: [Asset]!
  hyperlink: [Asset]!
}

type BlogPostTextEntries {
  block: [Entry]!
  hyperlink: [Entry]!
  inline: [Entry]!
}

type BlogPostTextLinks {
  assets: BlogPostTextAssets!
  entries: BlogPostTextEntries!
}

type ContentfulMetadata {
  tags: [ContentfulTag]!
}

input ContentfulMetadataFilter {
  tags: ContentfulMetadataTagsFilter
  tags_exists: Boolean
}

input ContentfulMetadataTagsFilter {
  id_contains_all: [String]
  id_contains_none: [String]
  id_contains_some: [String]
}

"""
Represents a tag entity for finding and organizing content easily.
    Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
"""
type ContentfulTag {
  id: String
  name: String
}

"""
A date-time string at UTC, such as 2007-12-03T10:15:30Z,
    compliant with the 'date-time' format outlined in section 5.6 of
    the RFC 3339 profile of the ISO 8601 standard for representation
    of dates and times using the Gregorian calendar.
"""
scalar DateTime

"""
The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`.
"""
scalar Dimension

interface Entry {
  contentfulMetadata: ContentfulMetadata!
  sys: Sys!
}

type EntryCollection {
  items: [Entry]!
  limit: Int!
  skip: Int!
  total: Int!
}

input EntryFilter {
  AND: [EntryFilter]
  OR: [EntryFilter]
  contentfulMetadata: ContentfulMetadataFilter
  sys: SysFilter
}

enum EntryOrder {
  sys_firstPublishedAt_ASC
  sys_firstPublishedAt_DESC
  sys_id_ASC
  sys_id_DESC
  sys_publishedAt_ASC
  sys_publishedAt_DESC
  sys_publishedVersion_ASC
  sys_publishedVersion_DESC
}

"""The 'HexColor' type represents color in `rgb:ffffff` string format."""
scalar HexColor

enum ImageFormat {
  AVIF

  """JPG image format."""
  JPG

  """
  Progressive JPG format stores multiple passes of an image in progressively higher detail.
          When a progressive image is loading, the viewer will first see a lower quality pixelated version which
          will gradually improve in detail, until the image is fully downloaded. This is to display an image as
          early as possible to make the layout look as designed.
  """
  JPG_PROGRESSIVE

  """PNG image format"""
  PNG

  """
  8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
          The 8-bit PNG format is mostly used for simple images, such as icons or logos.
  """
  PNG8

  """WebP image format."""
  WEBP
}

enum ImageResizeFocus {
  """Focus the resizing on the bottom."""
  BOTTOM

  """Focus the resizing on the bottom left."""
  BOTTOM_LEFT

  """Focus the resizing on the bottom right."""
  BOTTOM_RIGHT

  """Focus the resizing on the center."""
  CENTER

  """Focus the resizing on the largest face."""
  FACE

  """Focus the resizing on the area containing all the faces."""
  FACES

  """Focus the resizing on the left."""
  LEFT

  """Focus the resizing on the right."""
  RIGHT

  """Focus the resizing on the top."""
  TOP

  """Focus the resizing on the top left."""
  TOP_LEFT

  """Focus the resizing on the top right."""
  TOP_RIGHT
}

enum ImageResizeStrategy {
  """
  Crops a part of the original image to fit into the specified dimensions.
  """
  CROP

  """
  Resizes the image to the specified dimensions, cropping the image if needed.
  """
  FILL

  """Resizes the image to fit into the specified dimensions."""
  FIT

  """
  Resizes the image to the specified dimensions, padding the image if needed.
          Uses desired background color as padding color.
  """
  PAD

  """
  Resizes the image to the specified dimensions, changing the original aspect ratio if needed.
  """
  SCALE

  """Creates a thumbnail from the image."""
  THUMB
}

input ImageTransformOptions {
  """
  Desired background color, used with corner radius or `PAD` resize strategy.
          Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
  """
  backgroundColor: HexColor

  """
  Desired corner radius in pixels.
          Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
          Defaults to `0`. Uses desired background color as padding color,
          unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
  """
  cornerRadius: Int

  """Desired image format. Defaults to the original image format."""
  format: ImageFormat

  """Desired height in pixels. Defaults to the original image height."""
  height: Dimension

  """
  Desired quality of the image in percents.
          Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
  """
  quality: Quality

  """Desired resize focus area. Defaults to `CENTER`."""
  resizeFocus: ImageResizeFocus

  """Desired resize strategy. Defaults to `FIT`."""
  resizeStrategy: ImageResizeStrategy

  """Desired width in pixels. Defaults to the original image width."""
  width: Dimension
}

"""
The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
"""
scalar JSON

"""
The 'Quality' type represents quality as whole numeric values between `1` and `100`.
"""
scalar Quality

type Query {
  asset(id: String!, locale: String, preview: Boolean): Asset
  assetCollection(limit: Int = 100, locale: String, order: [AssetOrder], preview: Boolean, skip: Int = 0, where: AssetFilter): AssetCollection
  blogPost(id: String!, locale: String, preview: Boolean): BlogPost
  blogPostCollection(limit: Int = 100, locale: String, order: [BlogPostOrder], preview: Boolean, skip: Int = 0, where: BlogPostFilter): BlogPostCollection
  entryCollection(limit: Int = 100, locale: String, order: [EntryOrder], preview: Boolean, skip: Int = 0, where: EntryFilter): EntryCollection
  test(id: String!, locale: String, preview: Boolean): Test
  testCollection(limit: Int = 100, locale: String, order: [TestOrder], preview: Boolean, skip: Int = 0, where: TestFilter): TestCollection
}

type Sys {
  environmentId: String!
  firstPublishedAt: DateTime
  id: String!
  publishedAt: DateTime
  publishedVersion: Int
  spaceId: String!
}

input SysFilter {
  firstPublishedAt: DateTime
  firstPublishedAt_exists: Boolean
  firstPublishedAt_gt: DateTime
  firstPublishedAt_gte: DateTime
  firstPublishedAt_in: [DateTime]
  firstPublishedAt_lt: DateTime
  firstPublishedAt_lte: DateTime
  firstPublishedAt_not: DateTime
  firstPublishedAt_not_in: [DateTime]
  id: String
  id_contains: String
  id_exists: Boolean
  id_in: [String]
  id_not: String
  id_not_contains: String
  id_not_in: [String]
  publishedAt: DateTime
  publishedAt_exists: Boolean
  publishedAt_gt: DateTime
  publishedAt_gte: DateTime
  publishedAt_in: [DateTime]
  publishedAt_lt: DateTime
  publishedAt_lte: DateTime
  publishedAt_not: DateTime
  publishedAt_not_in: [DateTime]
  publishedVersion: Float
  publishedVersion_exists: Boolean
  publishedVersion_gt: Float
  publishedVersion_gte: Float
  publishedVersion_in: [Float]
  publishedVersion_lt: Float
  publishedVersion_lte: Float
  publishedVersion_not: Float
  publishedVersion_not_in: [Float]
}

"""
test [See type definition](https://app.contentful.com/spaces/ex0gf91y6eba/content_types/test)
"""
type Test implements Entry {
  contentfulMetadata: ContentfulMetadata!
  linkedFrom(allowedLocales: [String]): TestLinkingCollections
  sys: Sys!
  tttt(locale: String): String
}

type TestCollection {
  items: [Test]!
  limit: Int!
  skip: Int!
  total: Int!
}

input TestFilter {
  AND: [TestFilter]
  OR: [TestFilter]
  contentfulMetadata: ContentfulMetadataFilter
  sys: SysFilter
  tttt: String
  tttt_contains: String
  tttt_exists: Boolean
  tttt_in: [String]
  tttt_not: String
  tttt_not_contains: String
  tttt_not_in: [String]
}

type TestLinkingCollections {
  entryCollection(limit: Int = 100, locale: String, preview: Boolean, skip: Int = 0): EntryCollection
}

enum TestOrder {
  sys_firstPublishedAt_ASC
  sys_firstPublishedAt_DESC
  sys_id_ASC
  sys_id_DESC
  sys_publishedAt_ASC
  sys_publishedAt_DESC
  sys_publishedVersion_ASC
  sys_publishedVersion_DESC
  tttt_ASC
  tttt_DESC
}