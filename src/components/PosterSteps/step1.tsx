/* eslint-disable @typescript-eslint/promise-function-async */
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
  ArtistObjectProps,
  // AlbumInnerObjectProps,
  AlbumByArtistPromiseProps,
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
  setActiveStep,
}) => {
  const [selectedAlbumId, setSelectedAlbumId] = useState<string>('');
  const [albumOptions, setAlbumOptions] = useState<listProps[]>([]);
  const [list1, setList1] = useState<listProps[]>([]);
  const [list2, setList2] = useState<listProps[]>([]);

  const onQurreyChange = (value: string): void => {
    setSelected(value);
  };
  const handleSpotifyData = (): void => {
    if (selected !== '') {
      request<AlbumsObjectProps>(
        'get',
        `https://api.spotify.com/v1/search/?type=album&q=${selected}&limit=10&album_type=album`,
      )
        .then((res) => {
          const templist1: listProps[] = [];
          res.data.albums.items.map((album) =>
            templist1.push({
              label: album.name,
              id: album.id,
              singerName: album.artists[0].name,
              photo: album.images[2].url,
            }),
          );
          setList1(templist1);
        })
        .catch((err) => {
          console.error('---->', err);
          toast.error(err.response.message);
        });

      request<ArtistObjectProps>(
        'get',
        `https://api.spotify.com/v1/search/?type=artist&q=${selected}&limit=10`,
      )
        .then((res) => {
          res.data.artists.items.map((artist) => {
            return request<AlbumByArtistPromiseProps>(
              'get',
              `https://api.spotify.com/v1/artists/${artist.id}/albums?album_type=album&limit=10`,
            )
              .then((res) => {
                const templist2: listProps[] = [];

                // eslint-disable-next-line array-callback-return
                res.data.items.map((album) => {
                  templist2.push({
                    label: album.name,
                    id: album.id,
                    singerName: album.artists[0].name,
                    photo: album.images[2].url,
                  });
                });
                setList2(templist2);
              })
              .catch((err) => {
                console.log(err);
              });
          });
        })
        .catch((err) => {
          console.error('---->', err);
          toast.error(err.response.message);
        });
    }
  };
  const handleDuplicateArray = (): void => {
    const combinedArray = [...list1, ...list2];
    const filtered = combinedArray.filter((item, index) => combinedArray.indexOf(item) === index);
    setAlbumOptions(filtered);
  };
  useEffect(() => {
    handleDuplicateArray();
  }, [list1, list2]);

  const handleGetAlbumData = (): void => {
    if (selectedAlbumId !== '') {
      request<albumProps>('get', `https://api.spotify.com/v1/albums/${selectedAlbumId}`)
        .then((res) => {
          console.log(res, 'DASASDASDASDA');
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
      <div className="mb-1">
        {selectedAlbum && selected === selectedAlbum.label ? (
          <div
            className="flex items-center justify-start gap-3 cursor-pointer border-[1px] border-black w-full bg-[#F9F9F9] py-1 2xl:py-2 px-2 rounded-xl hover:bg-[#f0efef]"
            onClick={() => {
              setSelected('');
            }}
          >
            <img
              src={selectedAlbum.photo}
              className="object-cover rounded-full w-12 h-12 2xl:w-13 2xl:h-13 ml-1"
            />
            <div className="flex items-start justify-center flex-col">
              <i className="text-[14px] 2xl:text-[15px] font-semibold">{selectedAlbum.label}</i>
              <span className="font-extralight text-[13px] 2xl:text-[14px]">
                {selectedAlbum.singerName}
              </span>
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
