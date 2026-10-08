# Flatten

A small web app about how audiences flatten the people they follow.

You play the audience. Each round you can like up to three posts. Every post you skip loses a layer of its story:

1. full caption
2. short caption
3. hashtags only
4. faded out

When only a few posts are left, the app shows the "brand" your likes created. **Restore** brings the whole feed back.

Built for a creative sprint in DIGIHUM 2120: Digital Creativity (Western University), drawing on Baptiste Barbot's idea of online identity as "collective creation" and Mari Carmen Ramírez's discussion of how Frida Kahlo was flattened into a myth.

## Run it

No build step. Open `index.html` in a browser, or host it with GitHub Pages:

1. Push this folder to a GitHub repository.
2. Go to **Settings > Pages**, choose the `main` branch and the root folder, then save.

## Use your own posts

Edit `data/posts.js`. Each post has:

| Field   | What it is                                                      |
|---------|-----------------------------------------------------------------|
| `image` | path to a photo, e.g. `images/lake.jpg` (leave `""` for a coloured tile) |
| `label` | short word shown on the placeholder tile                        |
| `full`  | the full caption, including the story behind the post           |
| `short` | the trimmed caption shown once the post starts losing likes     |
| `tags`  | hashtags, the only thing left when the post is flattened        |

The rules are constants at the top of `app.js`: `LIKES_PER_ROUND`, `MAX_STAGE` and `BRAND_THRESHOLD`.

## Files

```
index.html      page structure
style.css       layout, flattening stages, light and dark themes
app.js          like limit, round logic, brand screen, restore
data/posts.js   sample posts (replace with your own)
```
