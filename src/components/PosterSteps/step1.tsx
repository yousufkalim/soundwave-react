import React, { useState, useEffect, FC } from 'react';
import SearchInput from '../SearchInput/index';
import request from '../../api/request';
import { toast } from 'react-toastify';
import {
  DataSetProps,
  SelectedAlbumProps,
  AlbumsObjectProps,
  listProps,
  PromiseProps,
  Segment,
  albumProps,
  Item,
} from '../../types/index';

interface Step1Props {
  selected: string;
  setSelected: (value: string) => void;
  handleDataSets: (value: DataSetProps[]) => void;
  selectedAlbum?: SelectedAlbumProps;
  setSelectedAlbum: (value: SelectedAlbumProps) => void;
  activeStep: number;
  setActiveStep: (value: number) => void;
}

const step1: FC<Step1Props> = ({
  selected,
  setSelected,
  handleDataSets,
  selectedAlbum,
  setSelectedAlbum,
  activeStep,
  setActiveStep,
}) => {
  // const [selected, setSelected] = useState<string>('');
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
          // eslint-disable-next-line array-callback-return
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
              `https://api.spotify.com/v1/audio-analysis/${item?.id}`,
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
                    return i <= +segment.start + +segment.duration;
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
  const handleSelectedAlbum = (val: SelectedAlbumProps): void => {
    setSelectedAlbum(val);
  };

  useEffect(() => {
    handleSpotifyData();
  }, [selected]);

  useEffect(() => {
    handleGetAlbumData();
  }, [selectedAlbumId]);

  useEffect(() => {
    if (selectedAlbum && selected === selectedAlbum.label) {
      setActiveStep(2);
    }
  }, [selectedAlbum, selected]);

  return (
    <>
      <div>
        {selectedAlbum && selected === selectedAlbum.label ? (
          <div
            className="flex items-center justify-start gap-3 cursor-pointer border-[1px] border-black w-full bg-[#F9F9F9] py-2 px-2 rounded-xl hover:bg-[#f0efef]"
            onClick={() => {
              setSelected('');
            }}
          >
            <img src={selectedAlbum.photo} className="object-cover rounded-full w-12 h-12 ml-1" />
            <div className="flex items-start justify-center flex-col">
              <i className="text-md font-semibold">{selectedAlbum.label}</i>
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
