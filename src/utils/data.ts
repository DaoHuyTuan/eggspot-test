export type ContributorRole =
  | 'MainArtist'
  | 'FeaturedArtist'
  | 'Composer'
  | 'Lyricist'
  | 'MusicPublisher'
  | 'Producer'
  | 'Mixer'
  | 'Remixer'

export type Contributor = {
  contributorId: number
  contributorName?: string | null
  contributorAlias?: string | null
  contributorAvatarUrl?: string | null
  contributorRole: ContributorRole
}

export const mockContributors: Contributor[] = [
  {
    contributorId: 1,
    contributorName: 'John Doe',
    contributorAlias: 'JD',
    contributorAvatarUrl: 'https://via.placeholder.com/150',
    contributorRole: 'MainArtist'
  },
  {
    contributorId: 2,
    contributorName: 'Jane Smith',
    contributorAlias: 'JS',
    contributorAvatarUrl: 'https://via.placeholder.com/150',
    contributorRole: 'MainArtist'
  },
  {
    contributorId: 3,
    contributorName: 'Mike Johnson',
    contributorAlias: 'MJ',
    contributorAvatarUrl: 'https://via.placeholder.com/150',
    contributorRole: 'FeaturedArtist'
  },
  {
    contributorId: 4,
    contributorName: 'Emily Davis',
    contributorAlias: 'ED',
    contributorAvatarUrl: 'https://via.placeholder.com/150',
    contributorRole: 'FeaturedArtist'
  },
  {
    contributorId: 5,
    contributorName: 'Chris Wilson',
    contributorAlias: 'CW',
    contributorAvatarUrl: 'https://via.placeholder.com/150',
    contributorRole: 'Composer'
  },
  {
    contributorId: 6,
    contributorName: 'Sarah Brown',
    contributorAlias: 'SB',
    contributorAvatarUrl: 'https://via.placeholder.com/150',
    contributorRole: 'Composer'
  },
  {
    contributorId: 7,
    contributorName: 'Robert Taylor',
    contributorAlias: 'RT',
    contributorAvatarUrl: 'https://via.placeholder.com/150',
    contributorRole: 'Lyricist'
  },
  {
    contributorId: 8,
    contributorName: 'Laura Martin',
    contributorAlias: 'LM',
    contributorAvatarUrl: 'https://via.placeholder.com/150',
    contributorRole: 'Lyricist'
  },
  {
    contributorId: 9,
    contributorName: 'William Anderson',
    contributorAlias: 'WA',
    contributorAvatarUrl: 'https://via.placeholder.com/150',
    contributorRole: 'MusicPublisher'
  },
  {
    contributorId: 10,
    contributorName: 'Natalie Clark',
    contributorAlias: 'NC',
    contributorAvatarUrl: 'https://via.placeholder.com/150',
    contributorRole: 'MusicPublisher'
  },
  {
    contributorId: 11,
    contributorName: 'Daniel Thomas',
    contributorAlias: 'DT',
    contributorAvatarUrl: 'https://via.placeholder.com/150',
    contributorRole: 'Producer'
  },
  {
    contributorId: 12,
    contributorName: 'Sophia Moore',
    contributorAlias: 'SM',
    contributorAvatarUrl: 'https://via.placeholder.com/150',
    contributorRole: 'Producer'
  },
  {
    contributorId: 13,
    contributorName: 'Anthony Harris',
    contributorAlias: 'AH',
    contributorAvatarUrl: 'https://via.placeholder.com/150',
    contributorRole: 'Mixer'
  },
  {
    contributorId: 14,
    contributorName: 'Olivia Martin',
    contributorAlias: 'OM',
    contributorAvatarUrl: 'https://via.placeholder.com/150',
    contributorRole: 'Mixer'
  },
  {
    contributorId: 15,
    contributorName: 'Henry White',
    contributorAlias: 'HW',
    contributorAvatarUrl: 'https://via.placeholder.com/150',
    contributorRole: 'Remixer'
  },
  {
    contributorId: 16,
    contributorName: 'Amelia Hall',
    contributorAlias: 'AH',
    contributorAvatarUrl: 'https://via.placeholder.com/150',
    contributorRole: 'Remixer'
  }
]

type LowercaseContributorRole = Lowercase<ContributorRole>

type ContributorsByRole = {
  [K in LowercaseContributorRole]: Contributor[]
}

export const groupRoleContributor = (
  contributors: Contributor[]
): ContributorsByRole => {
  return contributors.reduce((acc, contributor) => {
    // Convert the role to lowercase and ensure it's typed correctly
    const role =
      contributor.contributorRole.toLowerCase() as LowercaseContributorRole

    // Initialize the array if it doesn't exist
    if (!acc[role]) {
      acc[role] = []
    }

    // Add the contributor to the appropriate array
    acc[role].push(contributor)

    return acc
  }, {} as ContributorsByRole)
}

export interface Song {
  id: number
  mainartist: string
  featuredartist: string
  composer: string
  lyricist: string
  musicpublisher: string
  producer: string
  mixer: string
  remixer: string
}

export const mockSongs: Song[] = [
  {
    id: 1,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 2,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 3,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 4,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 5,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 6,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 7,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 8,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 9,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 10,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 11,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 12,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 13,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 14,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 15,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 16,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 17,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 18,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 19,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 20,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 21,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 22,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 23,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 24,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 25,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 26,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 27,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 28,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 29,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 30,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 31,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 32,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 33,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 34,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 35,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 36,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 37,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 38,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 39,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 40,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 41,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 42,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 43,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 44,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 45,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 46,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 47,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 48,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 49,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 50,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 51,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 52,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 53,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 54,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 55,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 56,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 57,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 58,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 59,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 60,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 61,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 62,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 63,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 64,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 65,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 66,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 67,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 68,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 69,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 70,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 71,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 72,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 73,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 74,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 75,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 76,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 77,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 78,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 79,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 80,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 81,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 82,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 83,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 84,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 85,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 86,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 87,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 88,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 89,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 90,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 91,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 92,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 93,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 94,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 95,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 96,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 97,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 98,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 99,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 100,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 101,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 102,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 103,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 104,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 105,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 106,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 107,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 108,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 109,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 110,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 111,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 112,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 113,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 114,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 115,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 116,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 117,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 118,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 119,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 120,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 121,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 122,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 123,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 124,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 125,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 126,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 127,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 128,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 129,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 130,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 131,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 132,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 133,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 134,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 135,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 136,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 137,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 138,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 139,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 140,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 141,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 142,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 143,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 144,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 145,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 146,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 147,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 148,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 149,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 150,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 151,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 152,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 153,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 154,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 155,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 156,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 157,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 158,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 159,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 160,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 161,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 162,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 163,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 164,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 165,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 166,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 167,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 168,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 169,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 170,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 171,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 172,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 173,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 174,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 175,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 176,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 177,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 178,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 179,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 180,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 181,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 182,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 183,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 184,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 185,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 186,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 187,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 188,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 189,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 190,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 191,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 192,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 193,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 194,
    mainartist: 'JD',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 195,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 196,
    mainartist: 'JD',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'HW'
  },
  {
    id: 197,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'NC',
    producer: 'DT',
    mixer: 'AH',
    remixer: 'AH'
  },
  {
    id: 198,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'AH'
  },
  {
    id: 199,
    mainartist: 'JS',
    featuredartist: 'MJ',
    composer: 'CW',
    lyricist: 'RT',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'OM',
    remixer: 'HW'
  },
  {
    id: 200,
    mainartist: 'JS',
    featuredartist: 'ED',
    composer: 'SB',
    lyricist: 'LM',
    musicpublisher: 'WA',
    producer: 'SM',
    mixer: 'AH',
    remixer: 'HW'
  }
]
