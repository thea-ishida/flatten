// SAMPLE DATA. Replace with your own photos and the real captions behind them.
// image: a photo URL or a path like "images/lake.jpg" (leave "" for a coloured placeholder tile).
// The sample photos are from Unsplash (unsplash.com), free to use under the Unsplash License.
// full:  the whole caption, the context and story behind the post
// short: what is left once the post starts losing engagement
// tags:  all that survives when the post is fully flattened
window.POSTS = [
  {
    id: 1, image: "https://images.unsplash.com/photo-1565209216345-efdd627e46b2?w=600&h=600&fit=crop&auto=format&q=70", label: "sunset",
    full: "Golden hour on the walk home. It took twelve tries to get this one, and I almost missed the actual sunset looking at my screen.",
    short: "Golden hour on the walk home.",
    tags: ["#sunset", "#goldenhour"]
  },
  {
    id: 2, image: "https://images.unsplash.com/photo-1611924707078-da8777fc99cb?w=600&h=600&fit=crop&auto=format&q=70", label: "desk, 3am",
    full: "3am, three bugs, one working build. Not pretty, but this is what most of my weeks actually look like.",
    short: "3am, one working build.",
    tags: ["#codinglife"]
  },
  {
    id: 3, image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=600&h=600&fit=crop&auto=format&q=70", label: "team",
    full: "Team photo after we lost in five sets. Nobody is smiling properly and it is still my favourite picture of us.",
    short: "Team photo.",
    tags: ["#team", "#gameday"]
  },
  {
    id: 4, image: "https://images.unsplash.com/photo-1652180126561-330d88fd83ea?w=600&h=600&fit=crop&auto=format&q=70", label: "mirror",
    full: "New jacket. Also the first day in weeks I felt like myself again, which the jacket gets too much credit for.",
    short: "New jacket.",
    tags: ["#ootd", "#style"]
  },
  {
    id: 5, image: "https://images.unsplash.com/photo-1758874960025-85d40fde6252?w=600&h=600&fit=crop&auto=format&q=70", label: "kitchen",
    full: "Learning my grandmother's recipe over a video call. Mine still tastes wrong. She says that is the point of practising.",
    short: "Learning a family recipe.",
    tags: ["#homecooking"]
  },
  {
    id: 6, image: "https://images.unsplash.com/photo-1695141482205-08e4e76c2a79?w=600&h=600&fit=crop&auto=format&q=70", label: "brunch",
    full: "Brunch with friends I had not seen since first year. We talked for three hours and forgot to eat half of it.",
    short: "Brunch with friends.",
    tags: ["#brunch", "#weekend"]
  },
  {
    id: 7, image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=600&fit=crop&auto=format&q=70", label: "concert",
    full: "Terrible photo, best night. I put my phone away right after this and that is why it is the only one.",
    short: "Best night.",
    tags: ["#concert", "#livemusic"]
  },
  {
    id: 8, image: "https://images.unsplash.com/photo-1594175268654-e60bea6c037c?w=600&h=600&fit=crop&auto=format&q=70", label: "lake",
    full: "Quiet morning by the lake. Posting it because I want to remember that I needed a day off and actually took one.",
    short: "Quiet morning by the lake.",
    tags: ["#travel", "#nature"]
  },
  {
    id: 9, image: "https://images.unsplash.com/photo-1462642109801-4ac2971a3a51?w=600&h=600&fit=crop&auto=format&q=70", label: "notes",
    full: "Notes from a lecture that changed how I think about identity: maybe we do not find ourselves, we make ourselves.",
    short: "Lecture notes.",
    tags: ["#studygram"]
  }
];
