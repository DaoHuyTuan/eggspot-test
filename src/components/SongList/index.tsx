import { useCallback } from 'react'
import { mockContributors, Song } from '../../utils/data'

interface Props {
  songs: Song[]
}

export const SongList = (props: Props) => {
  const getFullName = useCallback(
    (alias: string, role: string) => {
      const contributor = mockContributors.find(
        c => c.contributorAlias === alias && c.contributorRole === role
      )
      return contributor?.contributorName || alias
    },
    [mockContributors]
  )
  return (
    <div className="w-full overflow-x-auto h-[500px]">
      <table className="w-full min-w-[1200px] border-collapse ">
        <thead>
          <tr className="bg-gray-500 text-left text-white">
            <th className="p-3 text-gray-300 font-medium">ID</th>
            <th className="p-3 text-gray-300 font-medium">Main Artist</th>
            <th className="p-3 text-gray-300 font-medium">Featured Artist</th>
            <th className="p-3 text-gray-300 font-medium">Composer</th>
            <th className="p-3 text-gray-300 font-medium">Lyricist</th>
            <th className="p-3 text-gray-300 font-medium">Publisher</th>
            <th className="p-3 text-gray-300 font-medium">Producer</th>
            <th className="p-3 text-gray-300 font-medium">Mixer</th>
            <th className="p-3 text-gray-300 font-medium">Remixer</th>
          </tr>
        </thead>
        <tbody>
          {props.songs.map(song => (
            <tr
              key={song.id}
              className={`
                border-b border-gray-700 hover:bg-gray-800/50 text-black hover:text-white
                bg-white
              `}>
              <td className="p-3">{song.id}</td>
              <td className="p-3">
                <div>
                  <div>{getFullName(song.mainartist, 'MainArtist')}</div>
                </div>
              </td>
              <td className="p-3">
                <div>
                  <div>
                    {getFullName(song.featuredartist, 'FeaturedArtist')}
                  </div>
                </div>
              </td>
              <td className="p-3">
                <div>
                  <div>{getFullName(song.composer, 'Composer')}</div>
                </div>
              </td>
              <td className="p-3">
                <div>
                  <div>{getFullName(song.lyricist, 'Lyricist')}</div>
                </div>
              </td>
              <td className="p-3">
                <div>
                  <div>
                    {getFullName(song.musicpublisher, 'MusicPublisher')}
                  </div>
                </div>
              </td>
              <td className="p-3">
                <div>
                  <div>{getFullName(song.producer, 'Producer')}</div>
                </div>
              </td>
              <td className="p-3">
                <div>
                  <div>{getFullName(song.mixer, 'Mixer')}</div>
                </div>
              </td>
              <td className="p-3">
                <div>
                  <div className="text-black">
                    {getFullName(song.remixer, 'Remixer')}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
