export interface DataSetProps {
  time: number;
  levels: number[];
  songName: string;
  trackId: string;
}
export interface SelectedAlbumProps {
  id: string;
  label: string;
  photo: string;
  singerName: string;
}

export interface IPosterSize {
  value: string;
  unit: string;
}
export interface IResponsePoster {
  posterType: string;
  size: IPosterSize;
  albumName: string;
  singerName: string;
  totalPrice: number;
  unitPrice: number;
  posterImage: string;
  posterQuantity: number;
  _id: string;
}
export interface IResponseCart {
  _id: string;
  totalPoster: IResponsePoster[];
  totalPrice: number;
  shippingCost: number;
}

export interface IStateColors {
  boxColor: string;
  posterColor: string;
  soundWaveColor: string;
  soundWaveNameColor: string;
  songTitleColor: string;
  descriptionColor: string;
}
export interface ICart {
  _id: string;
  totalPoster: IResponsePoster[];
  totalPrice: number;
  shippingCost: number;
}

export interface ArtistObjectProps {
  artists: ArtistInnerObjectProps;
}

export interface ArtistInnerObjectProps {
  items: itemsObjectProps[];
}

export interface itemsObjectProps {
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

///

export interface AlbumsObjectProps {
  albums: AlbumInnerObjectProps;
}
export interface AlbumInnerObjectProps {
  href: string;
  items: albumObjectProps[];
  limit: number;
  next: string;
  offset: number;
  previous: any;
  total: number;
}
export interface albumObjectProps {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: Externalurls;
  href: string;
  id: string;
  images: imagesArrayProps[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}
export interface Externalurls {
  spotify: string;
}
export interface imagesArrayProps {
  height: number;
  url: string;
  width: number;
}

export interface listProps {
  id: string;
  label: string;
  photo: string;
  singerName: string;
}
export interface PromiseProps {
  bars: Bar[];
  beats: Bar[];
  meta: Meta;
  sections: Section[];
  segments: Segment[];
  tatums: Bar[];
  track: Track;
}

export interface AlbumByArtistPromiseProps {
  href: string;
  items: albumObjectProps[];
  limit: number;
  next: string;
  offset: number;
  previous: any;
  total: number;
}
export interface Track {
  analysis_channels: number;
  analysis_sample_rate: number;
  code_version: number;
  codestring: string;
  duration: number;
  echoprint_version: number;
  echoprintstring: string;
  end_of_fade_in: number;
  key: number;
  key_confidence: number;
  loudness: number;
  mode: number;
  mode_confidence: number;
  num_samples: number;
  offset_seconds: number;
  rhythm_version: number;
  rhythmstring: string;
  sample_md5: string;
  start_of_fade_out: number;
  synch_version: number;
  synchstring: string;
  tempo: number;
  tempo_confidence: number;
  time_signature: number;
  time_signature_confidence: number;
  window_seconds: number;
}
export interface Segment {
  loudness: number;
  confidence?: number;
  duration: number;
  loudness_end?: number;
  loudness_max?: number;
  loudness_max_time: number;
  loudness_start: number;
  pitches?: number[];
  start: number;
  timbre: number[];
}
export interface Section {
  confidence: number;
  duration: number;
  key: number;
  key_confidence: number;
  loudness: number;
  mode: number;
  mode_confidence: number;
  start: number;
  tempo: number;
  tempo_confidence: number;
  time_signature: number;
  time_signature_confidence: number;
}
export interface Meta {
  analyzer_version: string;
  platform: string;
  detailed_status: string;
  status_code: number;
  timestamp: number;
}
export interface Bar {
  confidence: number;
  duration: number;
  start: number;
}
export interface albumProps {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  copyrights: Copyright[];
  external_ids: Externalids;
  external_urls: Externalurls;
  genres: any[];
  href: string;
  id: string;
  images: imagesArrayProps[];
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  tracks: Tracks;
  type: string;
  uri: string;
}
export interface Tracks {
  href: string;
  items: Item[];
  limit: number;
  next?: any;
  offset: number;
  previous?: any;
  total: number;
}
export interface Item {
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: Externalurls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  preview_url?: string;
  track_number: number;
  type: string;
  uri: string;
}
export interface Externalids {
  upc: string;
}
export interface Copyright {
  text: string;
  type: string;
}
export interface Artist {
  external_urls: Externalurls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ICheckoutResponce {
  success: boolean;
  checkoutURL: string;
}

export interface IPosterSizePricingProps {
  price: number;
  inch: string;
  centimeter: string;
}

export interface IPosterTypePricingProps {
  slimCanvasPrice: number;
  thickCanvasPrice: number;
  withFramePrice: number;
  inch: string;
  centimeter: string;
}

export interface pricingArrayProps {
  posterSizePricing: IPosterSizePricingProps[];
  posterTypePricing: IPosterTypePricingProps[];
}

export interface IFontSize {
  descriptionSize: string;
  singerNameSize: string;
  albumNameSize: string;
}
