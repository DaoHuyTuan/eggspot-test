import { useMemo, useState } from 'react'
import { ContributorSearchField } from '../../components/ContributorSearchField'
import {
  Contributor,
  ContributorRole,
  groupRoleContributor,
  mockContributors,
  mockSongs
} from '../../utils/data'
import { Tab } from '../../components/Tab'
import { SongList } from '../../components/SongList'

export const ContributorForm = () => {
  const [activeType, setActiveType] = useState<string>('instrumental')
  const {
    remixer,
    mainartist,
    featuredartist,
    composer,
    lyricist,
    musicpublisher,
    producer,
    mixer
  } = groupRoleContributor(mockContributors)
  const [selectedContributors, setSelectedContributors] = useState<{
    [key in ContributorRole]: Contributor[]
  }>({
    MainArtist: [],
    FeaturedArtist: [],
    Composer: [],
    Lyricist: [],
    MusicPublisher: [],
    Producer: [],
    Mixer: [],
    Remixer: []
  })

  const filteredSongs = useMemo(() => {
    return mockSongs.filter(song => {
      for (const [role, contributors] of Object.entries(selectedContributors)) {
        debugger
        if (
          contributors.length > 0 &&
          !contributors.some(c => song[role.toLowerCase()] == c)
        ) {
          return false
        }
      }
      return true
    })
  }, [selectedContributors, mockSongs])

  console.log('filteredSongs', filteredSongs)
  console.log('selectedContributors', selectedContributors)
  return (
    <div className="min-h-screen bg-[#1a1c1f] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Music Type Section */}
        <div className="mb-8">
          <label className="block text-gray-200 text-sm mb-2">Music type</label>
          <div className="grid grid-cols-3 gap-4 w-[600px]">
            <Tab
              active={activeType == 'instrumental'}
              onChangeTab={setActiveType}
              label="Instrumental"
            />
            <Tab
              active={activeType == 'ballad'}
              onChangeTab={setActiveType}
              label="Ballad"
            />
            <Tab
              active={activeType == 'rock'}
              onChangeTab={setActiveType}
              label="Rock"
            />
          </div>
        </div>

        {/* Contributors Grid */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <ContributorSearchField
              role="MainArtist"
              label="Main artist"
              data={mainartist}
              setSelectedContributors={setSelectedContributors}
            />
            <ContributorSearchField
              role="Composer"
              label="Composer"
              data={composer}
              setSelectedContributors={setSelectedContributors}
            />
            <ContributorSearchField
              role="MusicPublisher"
              data={musicpublisher}
              label="Music publisher"
              setSelectedContributors={setSelectedContributors}
            />
            <ContributorSearchField
              role="Mixer"
              label="Mixer"
              data={mixer}
              setSelectedContributors={setSelectedContributors}
            />
          </div>
          <div>
            <ContributorSearchField
              role="FeaturedArtist"
              label="Featured artist"
              data={featuredartist}
              setSelectedContributors={setSelectedContributors}
            />
            <ContributorSearchField
              role="Lyricist"
              label="Lyricist"
              data={lyricist}
              setSelectedContributors={setSelectedContributors}
            />
            <ContributorSearchField
              role="Producer"
              setSelectedContributors={setSelectedContributors}
              label="Producer"
              data={producer}
            />
            <ContributorSearchField
              role="Remixer"
              label="Remixer"
              data={remixer}
              setSelectedContributors={setSelectedContributors}
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-8">
          <button className="bg-white text-black px-6 py-2 rounded font-medium">
            Save
          </button>
        </div>
      </div>
      <div>
        <SongList songs={filteredSongs} />
      </div>
    </div>
  )
}
