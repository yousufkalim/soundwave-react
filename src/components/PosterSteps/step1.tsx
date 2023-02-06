/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState, useEffect, FC } from 'react';
import SearchInput from '../SearchInput/index';
import request from '../../api/request';
import { toast } from 'react-toastify';

// import { AxiosResponse } from 'axios';

interface AlbumsObjectProps {
  albums: AlbumInnerObjectProps;
}
interface AlbumInnerObjectProps {
  href: string;
  items: albumObjectProps[];
  limit: number;
  next: string;
  offset: number;
  previous: any;
  total: number;
}
interface albumObjectProps {
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
interface Externalurls {
  spotify: string;
}
interface imagesArrayProps {
  height: number;
  url: string;
  width: number;
}
interface Externalurls {
  spotify: string;
}
interface listProps {
  label: string;
  id: string;
  singerName: string;
  photo: string;
}
interface PromiseProps {
  bars: Bar[];
  beats: Bar[];
  meta: Meta;
  sections: Section[];
  segments: Segment[];
  tatums: Bar[];
  track: Track;
}
interface Track {
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
interface Segment {
  confidence: number;
  duration: number;
  loudness_end: number;
  loudness_max: number;
  loudness_max_time: number;
  loudness_start: number;
  pitches: number[];
  start: number;
  timbre: number[];
}
interface Section {
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
interface Meta {
  analyzer_version: string;
  platform: string;
  detailed_status: string;
  status_code: number;
  timestamp: number;
}
interface Bar {
  confidence: number;
  duration: number;
  start: number;
}
interface albumProps {
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
interface Tracks {
  href: string;
  items: Item[];
  limit: number;
  next?: any;
  offset: number;
  previous?: any;
  total: number;
}
interface Item {
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
interface Externalids {
  upc: string;
}
interface Copyright {
  text: string;
  type: string;
}
interface Artist {
  external_urls: Externalurls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}
interface dataSetsProps {
  songName: string;
  trackId: string;
  time: number;
  levels: number[];
}
interface Step1Props {
  handleDataSets: (value: dataSetsProps[]) => void;
  selectedAlbum?: SelectedAlbumProps;
  setSelectedAlbum: (value: SelectedAlbumProps) => void;
}
interface SelectedAlbumProps {
  id: string;
  label: string;
  photo: string;
  singerName: string;
}

const step1: FC<Step1Props> = ({ handleDataSets, selectedAlbum, setSelectedAlbum }) => {
  const [selected, setSelected] = useState<string>('');
  const [selectedAlbumId, setSelectedAlbumId] = useState<string>('');
  const [albumOptions, setAlbumOptions] = useState<listProps[]>([]);
  const onQurreyChange = (value: string): void => {
    setSelected(value);
  };
  const handleSpotifyData = (): void => {
    if (selected !== '') {
      request<AlbumsObjectProps>(
        'get',
        `https://api.spotify.com/v1/search/?type=album&q=${selected}&limit=10&album_type=album`,
      )
        .then((res2) => {
          const list: listProps[] = [];
          res2.data.albums.items.map((album) => {
            list.push({
              label: album.name,
              id: album.id,
              singerName: album.artists[0].name,
              photo: album.images[2].url,
            });
          });
          setAlbumOptions(list);
        })
        .catch((err) => {
          console.error('---->', err);
          toast.error(err.response.message);
        });
    }
  };

  const handleGetAlbumData = (): void => {
    if (selectedAlbumId !== '') {
      request<albumProps>('get', `https://api.spotify.com/v1/albums/${selectedAlbumId}`)
        .then((res) => {
          const dataSets: any = [];
          // eslint-disable-next-line @typescript-eslint/promise-function-async
          const promises = res?.data?.tracks?.items?.map((item: Item) => {
            dataSets.push({ songName: item.name, trackId: item.id });
            return request<PromiseProps>(
              'get',
              `https://api.spotify.com/v1/audio-analysis/${item.id}`,
            );
          });
          Promise.all(promises)
            .then((res) => {
              res.forEach((item, index) => {
                const duration = item.data.track.duration;
                const segments = item.data.segments.map((segment: Segment) => {
                  return {
                    start: segment.start / duration,
                    duration: segment.duration / duration,
                    loudness: 1 - Math.min(Math.max(segment.loudness_start, -35), 0) / -35,
                  };
                });
                // const min = Math.min(...segments.map((s) => s.loudness));
                const max = Math.max(...segments.map((s) => s.loudness));
                const loudnessArr = [];
                for (let i = 0.0; i < 1; i += 0.001) {
                  const s = segments.find((segment) => {
                    return i <= segment.start + segment.duration;
                  });
                  if (s) {
                    const loudness = Math.round((s.loudness / max) * 100) / 100;
                    loudnessArr.push(loudness);
                  }
                }
                dataSets[index] = { ...dataSets[index], time: duration, levels: loudnessArr };
              });
              handleDataSets(dataSets);
            })
            .catch((err) => {
              console.error('errr->', err);
            });
        })
        .catch((err) => {
          console.error('---->', err);
          toast.error(err.response.message);
        });
    }
  };

  useEffect(() => {
    handleSpotifyData();
  }, [selected]);

  useEffect(() => {
    handleGetAlbumData();
  }, [selectedAlbumId]);

  const handleSelectedAlbum = (val: SelectedAlbumProps) => {
    setSelectedAlbum(val);
  };

  return (
    <>
      <div>
        {selectedAlbum && selected === selectedAlbum.label ? (
          <div
            className="flex items-center justify-start gap-3 cursor-pointer border-[1px] border-black w-full bg-white py-2 px-2 rounded-xl hover:bg-[#f0efef]"
            onClick={() => setSelected('')}
          >
            <img src={selectedAlbum.photo} className="object-cover rounded-full w-12 h-12 ml-1" />
            <div className="flex items-start justify-center flex-col">
              <span className="font-light text-md">{selectedAlbum.label}</span>
              <span className="font-extralight text-sm">{selectedAlbum.singerName}</span>
            </div>
          </div>
        ) : (
          <SearchInput
            placeholder="Write Album / Artist Name"
            options={albumOptions}
            value={selected}
            onChange={onQurreyChange}
            className=""
            setSelectedAlbumId={setSelectedAlbumId}
            handleSelectedAlbum={handleSelectedAlbum}
          />
        )}
      </div>
    </>
  );
};

export default step1;
