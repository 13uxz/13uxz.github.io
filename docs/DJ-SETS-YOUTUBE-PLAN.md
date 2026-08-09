# DJ Sets - YouTube & Publishing Plan

## Goal
Record 5 x 50-minute DJ sets and publish them online, ensuring all music is compatible with YouTube (not blocked by Content ID).

---

## Phase 1: Test Upload Strategy

Before building full sets, test the entire track library first:

1. **Export tracklist** from Rekordbox laptop (PowerShell):
   ```powershell
   Get-ChildItem "YOUR_MUSIC_FOLDER_PATH" -Recurse -Include *.mp3,*.wav,*.flac,*.aiff,*.m4a |
     ForEach-Object { $_.BaseName } > "$HOME\Desktop\tracklist.txt"
   ```
2. **Send tracklist to Claude** — Claude will cross-reference tracks against YouTube, known label policies, and copyright checker tools to flag likely problem tracks
3. **String the full playlist together** into one long mix/file
4. **Upload to YouTube as unlisted** — let Content ID scan it
5. **Review the flags** — YouTube will tell you exactly which tracks are:
   - **Clear** — no issues
   - **Claimed** — playable but monetised by rights holder (fine for non-commercial use)
   - **Blocked** — can't be played in some/all regions
6. **Remove blocked tracks** from the pool, keep the rest

---

## Phase 2: Build the 5 Sets

Once the safe track pool is confirmed:

1. **Select tracks for 5 x 50-min sets** from cleared/claimed tracks
2. **Record the sets** in Rekordbox
3. **Upload each set to YouTube as unlisted first** — final Content ID check
4. **Publish** once confirmed clean

---

## Phase 3: Publishing Strategy

### Primary: YouTube (embed on 13uxz.com)
- Most dance music tracks will be **claimed but playable** — this is fine
- Embed YouTube videos directly on www.13uxz.com
- No cost, good quality, built-in audience

### For any blocked tracks/sets: Mixcloud
- **Mixcloud has licensing deals** with major labels for DJ mixes
- Free to upload, legal, embeddable on 13uxz.com
- Audio-only (no video)

### Backup: Self-hosted video
- Use **Cloudflare R2** (free bandwidth) to host video files directly
- Embed a video player on 13uxz.com
- No Content ID scanning, but no legal protection either — use as last resort

---

## Platform Summary

| Platform | Cost | Video? | Copyright scanning? | Best for |
|---|---|---|---|---|
| YouTube | Free | Yes | Yes (Content ID) | Primary — most tracks will be claimed but playable |
| Mixcloud | Free | No (audio) | Licensed for DJ mixes | Blocked tracks, legal peace of mind |
| Cloudflare R2 | Free | Yes | None | Self-hosting blocked video sets on 13uxz.com |
| SoundCloud | Free tier | No (audio) | Some scanning | Alternative to Mixcloud |

---

## Key Notes

- **Claimed ≠ Blocked** — A claimed video still plays fine. You just can't monetise it. For DJ sets this is usually acceptable.
- **Copyright applies everywhere** — Not just YouTube. Self-hosting avoids automated scanning but doesn't make it legal. DMCA takedowns can still happen.
- **Mixcloud is the safest** — They pay royalties on behalf of DJs. It's the industry standard for legal mix hosting.
- **Always test upload as unlisted first** — Never publish a set without checking Content ID results first.

---

## Workflow Checklist

- [ ] Export tracklist from Rekordbox laptop
- [ ] Send tracklist.txt to Claude for cross-referencing
- [ ] String playlist together into one test file
- [ ] Upload test file to YouTube (unlisted)
- [ ] Review Content ID flags
- [ ] Remove blocked tracks from pool
- [ ] Build 5 x 50-min sets from safe tracks
- [ ] Record sets
- [ ] Test upload each set (unlisted)
- [ ] Publish on YouTube + embed on 13uxz.com
- [ ] Upload audio to Mixcloud as backup
- [ ] Add Mixcloud embeds to 13uxz.com for any blocked sets
